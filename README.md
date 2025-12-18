# Strata

**A framework for building AI correctly and managing it continuously.**

[![GitHub stars](https://img.shields.io/github/stars/maree217/strata?style=social)](https://github.com/maree217/strata/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maree217/strata/tree/main/tools/dashboard)

---

## Assess Your AI Maturity (60 Seconds)

| Question | Yes | No |
|----------|:---:|:---:|
| Can you list all your AI initiatives right now? | | |
| Do you know the ROI of each? | | |
| Do you review performance monthly? | | |

**3 Yes** — You're in the top 5%. Focus on optimization. [Framework](./framework/)
**1-2 Yes** — You have gaps. Start with visibility. [Assessment](./framework/assessment.md)
**0 Yes** — You're at risk. Start here. [Why 95% Fail](./philosophy/why-95-percent-fail.md)

---

## The Problem

**95% of AI projects fail.**

Not because the technology is bad. Because organizations:
- Start with shiny demos instead of solid foundations
- Treat AI as projects that "end" instead of capabilities to operate
- Have no visibility into what's working across their AI portfolio

---

## The Solution

Strata provides two things:

### 1. Three-Layer Architecture
*How to BUILD AI correctly*

```
Layer 1: Infrastructure  →  Build FIRST   →  30-50% cost savings
Layer 2: Intelligence    →  Build SECOND  →  2-4x ROI
Layer 3: Experience      →  Build LAST    →  5-10x ROI
+ Governance throughout
```

Most projects fail because they start at Layer 3 (the demo). Strata enforces the right sequence.

[Read the full philosophy →](./philosophy/three-layer-architecture.md)

### 2. Portfolio Intelligence
*How to MANAGE AI continuously*

```
Idea → Experiment → Deploy → Monitor → Iterate → Monitor → Iterate...
                              (never ends)
```

AI isn't a project. It's operational infrastructure. Strata helps you track, measure, and improve continuously.

[Read the full philosophy →](./philosophy/portfolio-intelligence.md)

---

## Proven Approach

### Industries Using This Framework
Financial Services | Energy | Healthcare | Government | Manufacturing

### Research Basis
- Gartner AI Maturity Model
- McKinsey Strategic AI Framework
- MIT CISR Enterprise AI Research
- IBM AI Operating Model

### What Strata Adds
- **Business language** instead of technical jargon
- **Clear sequencing** with layer dependencies
- **ROI focus** where each layer funds the next
- **Practical tools** not just theory

---

## What's Included

| Section | Description |
|---------|-------------|
| [Philosophy](./philosophy/) | The "why" — understanding the approach |
| [Framework](./framework/) | The "what" — methodology and guides |
| [Tools](./tools/) | The "how" — dashboard and templates |
| [Workshops](./workshops/) | Learning materials for teams |
| [Governance](./GOVERNANCE.md) | Enterprise compliance guidance |

---

## Quick Start

### Option A: Learn First
1. [Why 95% of AI Projects Fail](./philosophy/why-95-percent-fail.md)
2. [Three-Layer Architecture](./philosophy/three-layer-architecture.md)
3. [Portfolio Intelligence](./philosophy/portfolio-intelligence.md)

### Option B: Use Templates (No Code)
- [AI Idea Canvas](./tools/templates/idea-canvas.md) — Capture opportunities
- [Experiment Log](./tools/templates/experiment-log.md) — Track experiments
- [Prioritisation Matrix](./tools/templates/prioritisation-matrix.md) — Score by value/effort

### Option C: Deploy the Dashboard

**One-click deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maree217/strata/tree/main/tools/dashboard)

**Or run locally:**

```bash
git clone https://github.com/maree217/strata
cd strata/tools/dashboard
npm install
echo "VITE_GEMINI_API_KEY=your_key_here" > .env.local
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

[Full deployment guide →](./tools/dashboard/README.md)

---

## The Framework

### Self-Assessment

| Question | Your Answer |
|----------|-------------|
| How many AI initiatives do you have? | ___ |
| How many are in production? | ___ |
| What's the ROI of each? | ___ |
| Who owns each initiative? | ___ |
| How often do you review performance? | ___ |

If you struggled to answer any of these, you need Strata.

[Take the full assessment →](./framework/assessment.md)

### Implementation Sequence

```
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│ LAYER 1:            │     │ LAYER 2:            │     │ LAYER 3:            │
│ Infrastructure      │ ──▶ │ Intelligence        │ ──▶ │ Experience          │
│                     │     │                     │     │                     │
│ • Cost optimization │     │ • Data pipelines    │     │ • User interfaces   │
│ • Security          │     │ • ML operations     │     │ • Chatbots          │
│ • Monitoring        │     │ • Learning loops    │     │ • Automations       │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
         ↑                           ↑                           ↑
    30-50% savings              2-4x ROI                    5-10x ROI
```

[Full framework guide →](./framework/README.md)

---

## The Dashboard

A visual interface for Portfolio Intelligence:

- **Overview** — Metrics across your AI portfolio
- **Pipeline** — Track initiatives from Idea → Live
- **Compliance** — EU AI Act readiness
- **FinOps** — Cost tracking and ROI

### Features by Implementation Level

| Feature | Static | With Firestore | Enterprise |
|---------|:------:|:--------------:|:----------:|
| Portfolio view | ✅ | ✅ | ✅ |
| Pipeline tracking | ✅ | ✅ | ✅ |
| Gemini doc generation | ✅ | ✅ | ✅ |
| Data persistence | — | ✅ | ✅ |
| Multi-user | — | ✅ | ✅ |
| SSO | — | — | ✅ |
| Audit trails | — | — | ✅ |

[Dashboard documentation →](./tools/dashboard/README.md)

---

## Tech Stack

Built on Google Cloud for simplicity and scale:

| Component | Technology |
|-----------|------------|
| Frontend | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS |
| Hosting | Firebase Hosting / Vercel |
| Database | Firestore (optional) |
| Auth | Firebase Auth (optional) |
| AI | Google Gemini API |

---

## Workshops

Run these with your team:

| Workshop | Duration | Outcome |
|----------|----------|---------|
| [Why AI Fails](./workshops/workshop-1-why-ai-fails.md) | 30 min | Understanding the problem |
| [Self-Assessment](./workshops/workshop-2-assessment.md) | 45 min | Know your current state |
| [Dashboard Setup](./workshops/workshop-3-dashboard.md) | 30 min | Working portfolio tracker |

---

## Show Your Strata Level

Add to your project README:

```markdown
[![Strata Level 1](https://img.shields.io/badge/Strata-Level%201-blue)](https://github.com/maree217/strata)
```
[![Strata Level 1](https://img.shields.io/badge/Strata-Level%201-blue)](https://github.com/maree217/strata)

```markdown
[![Strata Level 2](https://img.shields.io/badge/Strata-Level%202-green)](https://github.com/maree217/strata)
```
[![Strata Level 2](https://img.shields.io/badge/Strata-Level%202-green)](https://github.com/maree217/strata)

```markdown
[![Strata Level 3](https://img.shields.io/badge/Strata-Level%203-gold)](https://github.com/maree217/strata)
```
[![Strata Level 3](https://img.shields.io/badge/Strata-Level%203-gold)](https://github.com/maree217/strata)

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md).

Ways to help:
- **Star** this repo to follow the framework
- **Fork** it to use the dashboard
- Share improvements to documentation
- Add templates or workshop materials

---

## License

MIT License — use freely, contribute back.

---

## About

Created by [Ram Maree](https://linkedin.com/in/rammaree).

Ram helps organisations operationalise AI using the Strata framework.
[Contact for enterprise implementation](https://linkedin.com/in/rammaree).

---

**Star this repo** to follow the framework. **Fork it** to use the dashboard.
