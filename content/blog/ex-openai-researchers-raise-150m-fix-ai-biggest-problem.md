---
title: "Ex-OpenAI Researchers Raise $150M to Fix AI's Biggest Problem"
description: "Goodfire, founded by former OpenAI and DeepMind researchers, raised $150M to make AI interpretable. Why understanding why models behave the way they do is the next frontier."
slug: "ex-openai-researchers-raise-150m-fix-ai-biggest-problem"
publishedAt: "2026-02-06"
updatedAt: "2026-02-06"
author: "Flowdrop Team"
authorBio: "We build AI workflow automation tools for non-coders. Our mission is to make automation accessible to everyone, so you can focus on work that actually matters."
authorImage: "/assets/logo.png"
category: "AI News"
tags: ["interpretability", "ai-safety", "goodfire", "startup-funding", "openai", "neolabs"]
featured: true
ogImage: "/blog/ex-openai-researchers-raise-150m-fix-ai-biggest-problem/og-image"
faqSchema:
  - question: "What is Goodfire?"
    answer: "Goodfire is a San Francisco-based AI research lab founded by former OpenAI and DeepMind researchers. They raised $150M in a Series B led by B Capital, valuing the company at $1.25 billion. Their mission is to make AI systems understandable and controllable through interpretability at scale."
  - question: "What is interpretability in AI?"
    answer: "Interpretability means understanding why an AI model gives certain answers. Instead of treating models as black boxes, Goodfire's tools let researchers reverse-engineer neural networks to identify the specific internal components that drive behavior—and adjust them without retraining the entire model."
  - question: "Why does AI interpretability matter?"
    answer: "Opacity creates safety, debugging, and trust problems. When a model hallucinates or refuses a safe request, teams can't pinpoint what went wrong. Enterprises and regulators increasingly demand explainability. Interpretability lets you fix behaviors surgically instead of retraining from scratch."
  - question: "What results has Goodfire shown?"
    answer: "In one experiment, Goodfire cut hallucinations in a large language model by nearly 50% by directly adjusting internal mechanisms—no retraining required. They've also helped identify new Alzheimer's biomarkers by reverse-engineering AI trained on biological data, working with Mayo Clinic and the Arc Institute."
  - question: "Who invested in Goodfire?"
    answer: "The $150M Series B was led by B Capital and included Menlo Ventures, Lightspeed Venture Partners, DFJ Growth, Salesforce Ventures, and Eric Schmidt. The company has raised $200+ million total."
---

Most AI models are black boxes.

They write code, make predictions, and answer questions - but even the teams building them can't explain why they give certain answers. This isn't just an academic problem. It makes AI nearly impossible to control, difficult to fix, and risky to deploy at scale.

Goodfire, a San Francisco-based AI research lab founded by former OpenAI and DeepMind researchers, just raised $150 million to solve this. The Series B round, led by B Capital, values the company at $1.25 billion and represents a fundamental bet that the next breakthrough in AI isn't about making models bigger - it's about making them understandable.

---

<section-header text="The Problem: We're Flying Blind"></section-header>

AI systems today operate like sophisticated guessing machines. You can train them, fine-tune them, and prompt them - but you can't truly design them. When a model hallucinates, you can't pinpoint what went wrong internally. When it refuses a safe request, you can't identify which internal mechanism triggered the refusal.

This opacity creates cascading problems:

**Safety is reactive, not proactive.** Teams discover issues after deployment, not during development. By then, the model is in production and users are affected.

**Debugging is guesswork.** Engineers try different training datasets, adjust hyperparameters, and hope the problem goes away. There's no systematic way to diagnose and fix specific behaviors.

**Trust is difficult to establish.** Enterprises hesitate to deploy AI for critical decisions when they can't explain how those decisions are made. Regulators are starting to demand explainability, and most AI labs can't provide it.

Eric Ho, Goodfire's CEO and former OpenAI researcher, frames it as an engineering maturity problem: "Every engineering discipline has been gated by fundamental science - like steam engines before thermodynamics - and AI is at that inflection point now."

---

<section-header text="The Solution: Open the Black Box"></section-header>

Goodfire's approach is called "interpretability at scale," and it works by reverse-engineering neural networks to identify the specific internal components that drive behavior.

Instead of retraining entire models from scratch (expensive, slow, uncertain outcomes), Goodfire's tools let researchers reach inside a model and adjust specific mechanisms. Think of it like having a detailed schematic of an engine instead of just a pedal and steering wheel.

The results are striking:

**Hallucination reduction:** In one experiment, Goodfire cut hallucinations in a large language model by nearly 50% by directly adjusting internal mechanisms - no retraining required.

**Scientific discovery:** By reverse-engineering AI models trained on biological data, Goodfire helped identify a new class of Alzheimer's biomarkers. They're working with partners including Mayo Clinic and the Arc Institute.

**Behavioral control:** Instead of hoping a model learns the right behavior through training data, teams can identify and modify the exact internal features responsible for unwanted outputs.

This isn't just faster - it's a fundamentally different paradigm. You're not guessing what training data might fix the problem. You're directly editing the behavior.

---

<section-header text="Why This Matters Now"></section-header>

The timing of this raise is significant. AI labs have spent years racing to scale models bigger and bigger, assuming that raw compute and more parameters would solve everything. That bet is starting to show cracks.

**GPT-4 level models are commoditizing.** Multiple labs can now train massive models. The differentiator isn't size anymore - it's control, safety, and reliability.

**Enterprises demand explainability.** Healthcare, finance, and legal sectors won't adopt AI systems they can't audit or explain to regulators. Interpretability is becoming a compliance requirement, not a research curiosity.

**Efficiency matters more than scale.** As AI infrastructure costs balloon (Amazon just committed $200 billion to AI and satellite investments), the ability to fix problems surgically instead of retraining entire models becomes economically critical.

Goodfire is part of an emerging category called "neolabs" - AI research companies pursuing breakthroughs in how models learn, not just how big they get. While OpenAI and Google DeepMind chase scale, neolabs are asking: "What if we understood what we're building?"

---

<section-header text="The Competitive Landscape"></section-header>

Goodfire isn't alone in pursuing interpretability, but it's moving faster and raising more capital than competitors:

**Anthropic** has an interpretability team and has published research on "mechanistic interpretability," but it's a side project within a larger company focused on frontier model development.

**OpenAI** disbanded its superalignment team and lost key safety researchers. Interpretability research exists but isn't the company's primary focus.

**Academic labs** at Stanford, MIT, and Harvard publish important research but lack the resources to build production-ready tools at scale.

Goodfire's advantage is focus. The entire company is built around one mission: make AI systems understandable and controllable. With $200+ million raised and a team of former OpenAI and DeepMind researchers, they have the talent and runway to move faster than academic labs and the focus that diversified AI labs lack.

Investors are noticing. The $150 million Series B was led by B Capital and included Menlo Ventures, Lightspeed Venture Partners, DFJ Growth, Salesforce Ventures, and Eric Schmidt (former Google CEO and prolific AI investor).

Yan-David Erlich, former COO of Weights & Biases and General Partner at B Capital, explained the investment thesis: "At Weights & Biases, I watched thousands of ML teams struggle with the same fundamental problem: they could track their experiments and monitor their models, but they couldn't truly understand why their models behaved the way they did. Bridging that gap is the next frontier."

---

<section-header text="What's Next"></section-header>

Goodfire is using the new capital to build what it calls a "model design environment" - a platform that lets developers understand, debug, and intentionally design AI systems rather than guessing how changes might affect behavior.

The company is also continuing fundamental research into interpretability methods. As models get more complex (multimodal systems that process text, images, video, and audio), interpretability becomes exponentially harder. Goodfire is betting it can stay ahead of that curve.

For enterprises, the promise is clear: AI that you can audit, explain, and fix without starting over. For researchers, it's a new scientific domain - reverse-engineering intelligence the way we reverse-engineered chemistry or physics.

For the broader AI industry, Goodfire represents a critical question: Do we want to build AI we don't understand and hope it works out, or do we want to engineer intelligence with the same rigor we apply to bridges, airplanes, and medical devices?

The $1.25 billion valuation suggests investors believe the latter approach is worth betting on.

---

<section-header text="Get Started with Flowdrop"></section-header>

Interested in AI that you can control and understand? Flowdrop helps you build transparent, auditable AI workflows.

[Try Flowdrop](https://app.flowdrop.ai/)

---

## Related Resources

- [AI Agents Replacing Manual Workflows in 2026](/blog/ai-agents-replacing-manual-workflows-2026) — Automate repetitive work
- [BizTrip AI Just Raised $1.5M to Fix Business Travel](/blog/biztrip-ai-just-raised-1-5m-to-fix-business-travel) — Agentic AI for corporate workflows
- [Why Traditional Hiring Is Breaking](/blog/why-traditional-hiring-is-breaking) — How work is changing in 2026

Questions? [Contact us](/contact) or check out our [documentation](/docs/getting-started/introduction).
