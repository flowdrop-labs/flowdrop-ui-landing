Overview
The AISwitchNode implements an AI-powered router for workflow execution. It analyzes a prompt using a Large Language Model (LLM) and selects the most appropriate downstream node to execute next. It dynamically discovers downstream nodes, presents them to the AI using a letter-based reference (A, B, C, …, up to Z), and optionally allows a “NONE” option so the AI can opt not to execute any downstream node if none are suitable.

Key features
- AI-powered routing: Uses an LLM to determine the best downstream node based on the prompt and context.
- Dynamic downstream discovery: Automatically discovers connected downstream nodes at runtime.
- Letter-based reference: Maps downstream nodes to letters (A, B, C, …) for clear AI reference and constrained decision making.
- Optional no-execution mode: Can permit the AI to choose no execution if appropriate (NONE option).
- Cost tracking: Returns LLM usage cost for each routing decision.
- Fallback behavior: If the AI tool fails, it gracefully falls back to the first available downstream node.
- Enhanced prompt generation: Builds a detailed, contextual prompt that includes downstream node descriptions and configurations to improve AI decisions.
- Validation and safety: Ensures the AI’s selection maps to a valid downstream node index and handles edge cases.

Prerequisites
- Access to an LLM service (and valid API keys/configuration).
- Workflow service capability to discover downstream nodes for a given node.
- Node registry access to fetch static config and node details for downstream nodes.
- Up to 26 downstream nodes supported (A–Z); maximum of one NONE option when enabled.
- Properly connected workflow graph: downstream nodes must be connected to the AISwitchNode.

Node configuration (input and output fields)

Input Fields
- PROMPT
  - Type: text
  - Required: Yes
  - Value type: string
  - Description: Describes how the LLM should choose a branch. The AI will analyze this prompt together with the available downstream nodes to make the routing decision.
  - Example: "Route to the node that handles email processing" or more elaborate instructions describing routing logic.

- ALLOW_NO_EXECUTION
  - Type: dropdown
  - Required: No
  - Value type: string (boolean)
  - Default value: false
  - Description: If enabled, allows the AI to choose not to execute any branches if none are appropriate for the given prompt and context.
  - Options: 'true', 'false'

Output Fields
- BRANCH_INDEXES
  - Key: branchIndexes
  - Title: Branch Indexes
  - Description: Array containing the index(es) of the selected downstream branch to execute
  - Value type: array<number>
  - Special: isBranch = true (indicates this output drives the workflow execution path)

- SELECTED_BRANCH
  - Key: selectedBranch
  - Title: Selected Branch
  - Description: The human-readable name of the branch selected by the AI
  - Value type: string

Technical details

How it works
- Downstream node discovery: The AISwitchNode asks the WorkflowService for the downstream nodes connected to itself (this.nodeId). It builds WorkflowGraphNode instances for each downstream node to access titles, descriptions, and configs.
- Node enumeration: Each downstream node is assigned a letter key (A, B, C, …) using indexToLetter(index). If enabled, a NONE option is added to the enumeration.
- Enum switch tool: An enumSwitchTool is created from the nodeEnum mapping (letter keys to themselves) to constrain the AI’s choices to valid options (A–Z or NONE).
- Enhanced prompt: The node creates a detailed, enhanced prompt that includes:
  - Prompt text (stripped of HTML tags)
  - Detailed descriptions for each downstream node (title, type, description, category, full JSON config)
  - The available options (A, B, C, …, NONE if enabled)
- AI decision: The node asks the LLM to select a branch via a prompt that includes the enhanced prompt and the enumSwitchTool. The LLM’s response is interpreted to identify the selected letter option.
- Selection handling:
  - If NONE is chosen (and allowed), no execution is performed (branchIndexes remains empty and selectedBranch stays as 'NONE').
  - If a valid letter is chosen, the corresponding downstream node index is calculated (letterToIndex) and used to set the branchIndexes and selectedBranch (node title).
- Cost tracking: The API usage cost from the LLM call is captured and returned with the results.
- Fallback: If the LLM call fails, the node defaults to the first downstream node (index 0).
- Validation: The selected letter is validated to ensure it maps to a valid downstream node index (0 <= index < downstream node count). If invalid, an error is thrown.

Key helper methods
- indexToLetter(index): Converts an index (0–25) to a letter (A–Z). Throws if out of range.
- letterToIndex(letter): Converts a letter (A–Z) to an index (0–25). Throws if not a valid letter.
- createBranchDescription(graphNode, nodeKey): Produces a descriptive block for a downstream node, including its title, type, category, and JSON config.
- createEnhancedPrompt(prompt, graphNodes, nodeEnum, allowNoExecution): Builds the prompt presented to the AI, including node descriptions and available options.
- getDynamicDocumentation(): Generates a dynamic description of the node in light of the current downstream nodes, listing available options with their labels and descriptions.

Examples & use cases

Content Type Routing
- Prompt: Analyze the content type and route to the appropriate processor (e.g., email processor for emails, document analyzer for documents, image processor for images).
- downstream nodes: A) Email Processor, B) Document Analyzer, C) Image Processor
- Example prompt to AI (conceptual): “Analyze the input content and route to the most appropriate downstream node from A, B, C. Consider that Email Processor handles emails, Document Analyzer handles documents, and Image Processor handles images.”
- Expected outcome: AI selects A, B, or C (or NONE if allowed and applicable). The engine routes to the chosen node, or continues without execution if NONE is selected.

Priority-Based Routing
- Prompt: Route urgent requests to the high-priority queue, standard requests to the normal queue, and low-priority items to the batch processor.
- downstream nodes: A) High Priority Queue, B) Normal Queue, C) Batch Processor
- Expected behavior: AI chooses the most appropriate queue based on prompt semantics; workflow executes accordingly.

Conditional Execution with No-Execution
- Prompt: Only process items that require immediate attention. Skip processing if the item is already handled or doesn’t need action.
- allowNoExecution: true
- Expected behavior: AI may respond with NONE if no suitable downstream node should run.

Workflow examples

Intelligent Content Processing Pipeline
- Structure: Input → AI Router → Email Processor / Document Analyzer / Image Processor → Results
- AI Router config example prompt (conceptual JSON): 
  {
    "prompt": "Analyze the input content and route to the appropriate processor. Emails go to email processor, documents to document analyzer, and images to image processor."
  }
- Downstream nodes:
  - A: Email Processor — handles email content and metadata
  - B: Document Analyzer — processes text documents and PDFs
  - C: Image Processor — analyzes and processes images

Customer Support Ticket Routing
- Use case: Automatically route support tickets to the right teams based on issue type and urgency.
- AI Router prompt example:
  {
    "prompt": "Route this support ticket to the appropriate team. Technical issues go to engineering, billing questions to finance, general inquiries to customer service, and urgent issues to the priority queue."
  }
- Implementation notes: The router analyzes the ticket and routes accordingly, with edge-case handling and fair distribution.

Best practices

Do's
- Write clear, specific prompts that describe routing logic and criteria.
- Use descriptive node titles and detailed descriptions for downstream nodes.
- Keep downstream node count to 26 or fewer (A–Z) for reliable mapping.
- Test prompts against multiple input scenarios to validate routing behavior.
- Monitor LLM costs and optimize prompt efficiency.
- Use Allow No Execution when it’s appropriate for your workflow.
- Provide clear context about what each downstream node does to improve AI understanding.

Don'ts
- Avoid overly complex or ambiguous prompts that confuse the AI.
- Don’t exceed 26 downstream nodes.
- Don’t ignore LLM costs in high-volume workflows.
- Avoid prompts requiring subjective judgment or frequent reconfiguration.
- Don’t assume the AI will always be perfect in routing decisions.
- Avoid changing routing logic too frequently without updating the prompt and downstream descriptions.
- Don’t forget to handle edge cases in prompts and downstream descriptions.

Pro tip
- When designing prompts, explain the routing logic as you would to a teammate. Clear, specific instructions with examples tend to yield better AI routing decisions and more predictable workflow behavior.

Troubleshooting

Common Issues
- No Downstream Nodes Found
  - Symptoms: The node errors with “No downstream nodes found”.
  - Solution: Ensure the AISwitchNode is connected to at least one downstream node. Verify workflow connections and node placement.

- LLM Service Errors
  - Symptoms: The AI call fails or the node falls back to default routing.
  - Solution: Check LLM service configuration, API keys, and service availability. The node will fall back to the first downstream node if LLM calls fail.

- Unexpected Routing Decisions
  - Symptoms: AI selects a branch inconsistent with expectations.
  - Solution: Refine the prompt, provide clearer examples, and ensure downstream node descriptions accurately reflect their purposes and capabilities.

- High LLM Costs
  - Symptoms: Higher-than-expected costs from AI Router usage.
  - Solution: Make prompts more concise, implement caching where possible, and consider simpler routing logic for high-volume scenarios.

- Invalid AI Selection
  - Symptoms: AI outputs a letter that does not map to a valid downstream node.
  - Solution: Validate downstream mapping, ensure the enum switch tool constrains choices properly, and verify prompt construction includes the correct options.

Notes
- The dynamic documentation generator getDynamicDocumentation() provides up-to-date guidance based on the currently connected downstream nodes. If downstream connections change, re-generate the docs to reflect the new options.

If you need a quick start guide tailored to a specific workflow (e.g., email processing, document analysis, or image processing), I can provide a ready-to-use AISwitchNode configuration and example prompts for that scenario.