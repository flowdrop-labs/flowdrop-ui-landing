Overview
- The AI Router (AISwitchNode) is a conditional node that uses a Large Language Model (LLM) to analyze a prompt and intelligently route workflow execution to one of multiple downstream nodes. It maps downstream nodes to lettered options (A, B, C, …, up to Z) and can optionally include a NONE option to skip execution when no downstream path is appropriate.

Key features
- AI-powered routing: Leverages LLMs to select the most suitable downstream node based on the provided prompt and available nodes.
- Downstream discovery: Automatically discovers connected downstream nodes and presents them to the AI for decision-making.
- Letter-based reference: Maps downstream nodes to letters (A–Z) for simple AI referencing and prompt construction.
- Optional “no execution” path: Ability to allow the AI to opt out of executing any downstream node.
- Enhanced prompts: Builds an enriched prompt containing downstream node details to improve AI decision accuracy.
- Cost tracking: Returns the cost of LLM calls for usage awareness and optimization.
- Fallback behavior: If the AI call fails, gracefully falls back to routing to the first available downstream node.
- Robust validation: Validates the selected option to ensure it references a valid downstream node.

Prerequisites
- LLM service access: An active and configured LLM provider (e.g., OpenAI, etc.).
- Workflow service access: Ability to query downstream nodes for the current AISwitchNode.
- Node registry access: Access to node static configurations to enrich descriptions.
- Connection requirements: At least one downstream node connected to the AISwitchNode (up to 26 downstream nodes supported, A–Z).
- API keys and credentials: Valid credentials for LLM and any integrated workflow services.
- Adequate LLM credits: Sufficient API credits to perform routing decisions (cost is returned by the node).

Node configuration

Input Fields
- Prompt
  - Key: prompt
  - Type: text
  - Required: Yes
  - Value type: string
  - Description: Describes how the LLM should choose a branch. The prompt is analyzed alongside downstream node information to determine routing.
  - Example: "Route to the node that handles email processing if the input is an email; otherwise route to document analysis."

- Allow No Execution
  - Key: allowNoExecution
  - Type: dropdown
  - Required: No
  - Value type: boolean
  - Options: true, false
  - Default value: false
  - Description: If enabled, allows the AI to choose not to execute any downstream node if none are appropriate.

Output Fields
- Branch Indexes
  - Key: branchIndexes
  - Type: array<number>
  - Description: Array containing the index (A=0, B=1, C=2, …) of the selected downstream node to execute.
  - Notes: Used by the workflow engine to determine the next execution path.

- Selected Branch
  - Key: selectedBranch
  - Type: string
  - Description: Human-readable name of the branch selected by the AI (the downstream node’s title).

Technical details

AI decision process
- Downstream node discovery
  - The AISwitchNode queries the workflow service to fetch all connected downstream nodes for its nodeId.
  - If no downstream nodes are found, the node throws an error indicating that downstream nodes are required for AI routing.

- Enum-based downstream mapping
  - Each downstream node is wrapped in a WorkflowGraphNode instance (with its configuration).
  - A mapping (enum) is built from letters to node identifiers, e.g., A -> A, B -> B, etc., corresponding to downstream node order.
  - If allowNoExecution is enabled, an additional NONE option is added to the enum.

- Enhanced prompt construction
  - The node creates an enhanced prompt that includes:
    - The provided prompt text (stripped of HTML tags)
    - Descriptions of each downstream node, including title, type, description, category, and the full node JSON
    - The available options (A, B, C, …, NONE if enabled)
  - This prompt is designed to give the AI sufficient context to make an informed routing decision.

- LLM integration and decision tooling
  - An Enum Switch Tool is created to constrain the AI’s response to valid options only (A–Z, or NONE if enabled).
  - The LLM is invoked with the enhanced prompt and the enum switch tool. The tool captures the selection as the currently chosen option.
  - If the LLM call fails, the node logs a warning and falls back to the first available downstream node.

- Branch selection and execution
  - If the AI selects NONE, the node records no execution (branchIndexes remains empty, selectedBranch remains 'NONE').
  - If the AI selects a valid letter, the letter is converted to a 0-based index. The corresponding downstream node is identified, and:
    - branchIndexes is set to [selectedIndex]
    - selectedBranch is set to the downstream node’s title
  - Validation ensures the index is within the range of available downstream nodes.

- Cost tracking and fallback
  - The cost of LLM calls is captured and returned as part of the node output.
  - If the AI tool fails, the node defaults to the first downstream node to preserve workflow continuity.

- Dynamic documentation support
  - The node can generate a dynamic README-like description of available downstream nodes, labeling them A, B, C, etc., with a short description and type for easier human readability.

Index and letter utilities
- indexToLetter(index)
  - Converts 0 -> 'A', 1 -> 'B', …, up to 25 -> 'Z'
  - Throws if index is outside the 0–25 range

- letterToIndex(letter)
  - Converts 'A' -> 0, 'B' -> 1, …
  - Validates that the input is a single uppercase letter A–Z

Examples & use cases

Example 1: Content-type routing
- Prompt: "Analyze the input content and route to the appropriate processor. Emails go to email processor, documents to document analyzer, and images to image processor."
- Downstream nodes: A: Email Processor, B: Document Analyzer, C: Image Processor
- Expected AI action: Choose A, B, or C based on content type with an option to choose NONE if allowed.
- Outcome: The AISwitchNode outputs branchIndexes: [index], selectedBranch: "<Node Title>"

Example 2: Priority-based routing
- Prompt: "Route urgent requests to the high-priority queue, standard requests to the normal queue, and low-priority items to the batch processor."
- Downstream nodes: A: High-Priority Queue, B: Normal Queue, C: Batch Processor
- Expected AI action: Determine which queue matches priority and route accordingly.
- Outcome: Outputs corresponding branchIndexes and selectedBranch.

Example 3: No-execution scenario
- Prompt: "Only process items that require immediate attention. Skip processing if the item is already handled or doesn't need action."
- allowNoExecution: true
- Possible AI action: NONE (no execution) if none are appropriate
- Outcome: branchIndexes remains empty, selectedBranch equals 'NONE'

Workflow examples

Intelligent content processing pipeline
- Structure: Input → AI Router → Email Processor / Document Analyzer / Image Processor → Results
- AISwitchNode configuration: Prompt describing routing by content type; downstream nodes include email processor, document analyzer, image processor
- Result: AI routes to the most appropriate processor; downstream workflow proceeds accordingly

Customer support ticket routing
- Structure: Incoming ticket → AI Router → Engineering / Finance / Customer Service / Priority Queue → Resolution path
- AISwitchNode configuration: Prompt describing routing rules by issue type and urgency
- Result: Tickets directed to the correct team, with urgent items moving to high-priority processing

Best practices

Do's
- Write clear, specific prompts describing routing logic and the downstream node capabilities.
- Use descriptive titles and descriptions for downstream nodes to aid AI understanding.
- Keep the number of downstream nodes to 26 or fewer (A–Z mapping) for reliable AI references.
- Include context about what each downstream node does in your prompts.
- Test prompts against multiple input scenarios to validate routing behavior.
- Monitor LLM costs and optimize prompt length and complexity.
- Consider enabling Allow No Execution when some prompts may not require action.
- Provide consistent, up-to-date node descriptions to improve AI accuracy.

Don'ts
- Avoid overly complex or ambiguous prompts that are hard to interpret.
- Don’t exceed 26 downstream options.
- Don’t neglect LLM costs in high-volume workflows.
- Avoid prompts requiring subjective or highly nuanced judgments without clear criteria.
- Don’t rely on AI to make perfect decisions in all cases; provide fallback handling.

Troubleshooting

No downstream nodes found
- Symptoms: AI Router reports no downstream nodes connected
- Solution: Ensure at least one downstream node is connected to the AISwitchNode and verify workflow graph wiring.

LLM service errors
- Symptoms: AI routing fails or falls back to default routing
- Solution: Check LLM service configuration, API keys, and service availability. Note that the node will fall back to the first downstream node if the LLM call fails.

Unexpected routing decisions
- Symptoms: AI selects a path that seems illogical given the prompt
- Solution: Refine your prompt with more explicit routing criteria, add clearer downstream node descriptions, and ensure downstream node types and purposes are accurately described.

High LLM costs
- Symptoms: Elevated costs from frequent AI Router usage
- Solution: Shorten prompts, introduce caching for repeated prompts, or simplify routing logic to reduce call volume.

Dynamic documentation support (optional)
- The AISwitchNode can generate dynamic documentation describing available downstream nodes, including their order labels (A, B, C, …) and a short description of each node. This can help maintain up-to-date human-facing docs as the workflow evolves.

Additional notes
- The AI Router supports up to 26 downstream nodes due to the A–Z lettering scheme.
- The “NONE” option is only available when Allow No Execution is enabled, enabling a no-op routing path when appropriate.
- The enhanced prompt includes detailed per-node descriptions and full node configuration snippets to aid the AI in making informed routing decisions.

Dynamic documentation example snippet (generated by getDynamicDocumentation)
- Downstream nodes are labeled with letters (A, B, C, …) and include a concise description of each node type and role. This helps users quickly understand available routing options without inspecting the full node graph.

If you’d like, I can tailor this documentation to match a specific integration style (more UI-driven, more text-focused, or a hybrid) or expand any section with additional examples and prompt templates.