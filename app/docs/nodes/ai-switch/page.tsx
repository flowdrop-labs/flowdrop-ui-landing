Overview
The AISwitchNode (AI Router) is a conditional workflow node that leverages a Large Language Model (LLM) to analyze a given prompt and intelligently route execution to one of its downstream nodes. It returns both the index of the chosen downstream branch and the human-friendly name of the selected node. An optional “NONE” choice allows the AI to opt out of executing any downstream node when none are appropriate.

Key Features
- AI-driven routing: Uses an LLM to determine the most suitable downstream node based on a prompt and the available branches.
- Alphabetized downstream mapping: Downstream nodes are labeled A, B, C, … (up to Z) for easy reference in prompts.
- Optional no-execution path: When enabled, allows the AI to indicate that no downstream node should be executed.
- Dynamic downstream awareness: Automatically discovers downstream nodes connected to this AISwitchNode and builds a descriptive prompt.
- Robust input/output specification: Clearly defined input fields and output fields for seamless integration in workflows.
- Runtime documentation support: Generates dynamic documentation listing available downstream nodes and their descriptions.

Prerequisites
- A workflow environment with:
  - NodeServiceRegistry providing a WorkflowService (to fetch downstream nodes) and an LLM service (to run the prompt).
  - NodeRegistry with static config data for downstream nodes to render descriptive details.
- Up to 26 downstream nodes (A–Z) supported by the internal alphabet mapping.
- striptags library installed (for sanitizing prompts in the enhanced prompt).
- Downstream nodes must expose appropriate titles and descriptions for meaningful routing decisions.
- Ensure downstream nodes are connected to this AISwitchNode; otherwise dynamic documentation and routing will indicate no available branches.

Node configuration (input and output fields)

Input fields
- Prompt
  - Key: prompt
  - Type: Text
  - Description: Describes how the LLM should choose a branch.
  - Required: Yes
  - Value type: String

- Allow No Execution
  - Key: allowNoExecution
  - Type: Dropdown
  - Description: Allow the AI to choose not to execute any branches if none are appropriate.
  - Required: No
  - Value type: Boolean
  - Options: true, false
  - Default: false

Output fields
- Branch Indexes
  - Key: branchIndexes
  - Type: Array of Numbers
  - Description: Array containing the index of the selected downstream branch (e.g., [0] for A).
  - Value type: Array<number>
  - isBranch: true

- Selected Branch
  - Key: selectedBranch
  - Type: String
  - Description: The name/title of the downstream node selected by the AI.
  - Value type: string

Configuration example (conceptual)
- Input:
  - prompt: "Choose the most appropriate next step to respond to a customer asking for order status."
  - allowNoExecution: false
- Output:
  - branchIndexes: [0]
  - selectedBranch: "Check Order Status"

Technical details
- Roadmap and flow
  - The node fetches downstream nodes via WorkflowService.getNextNodes(this.nodeId) and instantiates WorkflowGraphNode wrappers for each.
  - It constructs a mapping of letters (A, B, C, …) to the corresponding downstream nodes.
  - If allowNoExecution is true, a NONE option is added to the mapping.
  - An enhanced prompt is created, including a description of each downstream node and their JSON metadata.
  - An enum-switch tool is created to constrain the LLM’s choice to one of the labeled options.
  - The LLM is invoked to determine the selected node. If the LLM call fails, a fallback selects the first option.
  - If a non-NONE option is selected, the corresponding node index is stored in branchIndexes and the node’s title is set as selectedBranch.

- Important helpers
  - indexToLetter(index): Converts 0 -> 'A', 1 -> 'B', ..., up to 25 -> 'Z'. Throws if index is out of range (0-25).
  - letterToIndex(letter): Converts 'A' -> 0, 'B' -> 1, ..., validates input is A-Z.
  - createEnhancedPrompt(prompt, graphNodes, nodeEnum, allowNoExecution): Builds a descriptive prompt listing downstream nodes with their metadata and instructions for the AI.
  - getDynamicDocumentation(): Produces a human-friendly summary of available downstream nodes (useful for dynamic help or UI tooltips).
  - createBranchDescription(graphNode, nodeKey): Produces a human-readable block describing a downstream node for inclusion in the enhanced prompt.
  - createBranchDescription and index/letter mappings are designed to support up to 26 downstream nodes (A–Z).

- Cost tracking
  - The cost incurred by the LLM call is captured and returned in the result, when available.

- Error handling
  - If no downstream nodes exist, an error is thrown: “No downstream nodes found for AI Switch node.”
  - If the selected node key is invalid, an error is thrown.
  - If the LLM tool execution fails, a warning is logged and a default (first) option is chosen.

- Dynamic documentation
  - getDynamicDocumentation() assembles a readable description listing available downstream nodes and their titles/descriptions. This is useful to auto-generate user-facing docs or help text within a UI.

Examples & use cases
- Customer support routing
  - Downstream nodes: A: “Check Order Status”, B: “Provide Product Recommendations”, C: “Ask for More Information”
  - Prompt: “The customer asks about the current status of their order. Decide the best next step and route accordingly.”
  - AI decision: selects A. Output: branchIndexes = [0], selectedBranch = "Check Order Status"

- Knowledge base routing
  - Downstream nodes: A: “Retrieve Article”, B: “Suggest Related Topics”
  - Prompt: “User asked for a how-to on a feature not covered in the article list. Decide if we should fetch a specific article or broaden the topic.”
  - AI decision: could select B if broader context is better; or A if a precise article match exists.

- No-execution safety check
  - Enable Allow No Execution true and provide a prompt that sometimes indicates none of the options fit.
  - If the AI returns NONE, the node will not route to any downstream node, allowing alternative handling or short-circuit logic.

Workflow examples
- Basic routing workflow
  1) AISwitchNode is connected to downstream nodes A, B, C.
  2) Configure Prompt to outline criteria for selecting a downstream node.
  3) Run workflow with the input prompt.
  4) AISwitchNode outputs branchIndexes and selectedBranch.
  5) The workflow proceeds with the selected downstream node based on branchIndexes[0].

- Dynamic help and maintenance
  - When downstream nodes are updated (added/removed), getDynamicDocumentation() reflects the current list, helping users keep prompts aligned with available options.

Best practices
- Keep downstream node titles descriptive and consistent with their function to improve AI routing accuracy.
- Limit downstream count to 26 (A–Z) to maintain simple, human-readable labels.
- Use a clear, explicit prompt that describes the decision criteria for routing.
- Enable NONE option only if you want a safe fallback when none of the branches are appropriate.
- Test prompts with common edge cases to ensure the AI selects an expected branch.
- Regularly review dynamic documentation to confirm available options match the configured workflow.

Troubleshooting
- No downstream nodes found
  - Cause: The AISwitchNode has no connected downstream nodes.
  - Fix: Connect at least one downstream node to AISwitchNode and re-run.

- Invalid selected node key
  - Cause: The AI returned a label outside A–Z or NONE.
  - Fix: Validate downstream count (0-26) and ensure the prompt/enum mapping correctly reflects available branches.

- AI tool execution failed
  - Symptom: LLM call errors or timeouts; AI routing falls back to the first available option.
  - Fix: Check service availability for the LLM and downstream nodes. Review enhanced prompt construction for correctness.

- Mismatch between prompt and options
  - Symptom: The AI chooses a node that seems inconsistent with the provided prompt.
  - Fix: Improve the enhanced prompt with more explicit guidance and ensure downstream node descriptions are accurate and up-to-date.

- Dynamic documentation not reflecting current nodes
  - Symptom: Documentation shows outdated or missing downstream nodes.
  - Fix: Ensure downstream nodes are connected and that getDynamicDocumentation() is invoked after changes to the workflow. Validate node metadata (titles/descriptions) in NodeRegistry.

Dynamic documentation (optional)
- The AISwitchNode provides getDynamicDocumentation() to produce a current, human-friendly summary of downstream options, including a list like:
  - A: Node Title (Node Type) - Node Description
  - B: Node Title (Node Type) - Node Description
  - ...
- This can be used to generate in-app help, tooltips, or external docs that stay synchronized with the actual workflow configuration.

Notes
- This node is designed to be a drop-in AI-based router within a workflow. It assumes downstream nodes are well-described and that the downstream set is relatively small (preferably under 26 items) to maintain readable alphabetic labels.
- The enhanced prompt includes a sanitized version of the input prompt (striptags) and a structured listing of downstream nodes with their metadata to inform the AI’s decision-making process.