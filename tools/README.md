# Tools

**The "how" — practical tools to implement Strata in your organization.**

---

## Overview

Strata provides two types of tools:

1. **Dashboard** — Visual portfolio management
2. **Templates** — No-code starting points

---

## Dashboard

A React-based visual interface for AI portfolio management.

### Features

| Feature | Description |
|---------|-------------|
| **Overview** | Key metrics at a glance |
| **Pipeline** | Kanban view of initiatives by stage |
| **Portfolio** | Searchable table of all AI systems |
| **Compliance** | EU AI Act status and documentation |
| **FinOps** | Cost tracking and ROI |
| **Reports** | Export and document generation |

### Quick Start

```bash
# Clone and run
git clone https://github.com/maree217/strata
cd strata/tools/dashboard
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maree217/strata/tree/main/tools/dashboard)

Or deploy to Firebase:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting  # Select: dist, Yes (SPA)
npm run build
firebase deploy
```

### Documentation

See [dashboard/README.md](./dashboard/README.md) for full documentation.

---

## Templates

No-code templates for immediate use.

### Available Templates

| Template | Purpose | Format |
|----------|---------|--------|
| [AI Idea Canvas](./templates/idea-canvas.md) | Capture AI opportunities | Markdown |
| [Experiment Log](./templates/experiment-log.md) | Track experiments | Markdown |
| [Prioritisation Matrix](./templates/prioritisation-matrix.md) | Score by value/effort | Markdown |

### How to Use

1. **Download** — Click on any template above
2. **Copy** — Use as-is or adapt to your tools
3. **Fill in** — Complete for each AI initiative
4. **Review** — Use in monthly portfolio reviews

### Template Formats

All templates are provided in Markdown for maximum compatibility:
- Copy to Notion, Confluence, or any wiki
- Convert to Google Docs or Word
- Use directly in GitHub/GitLab
- Import to project management tools

---

## Tech Stack

The dashboard is built with:

| Component | Technology |
|-----------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| AI | Google Gemini API |

### Environment Variables

Create `.env.local` in the dashboard directory:

```bash
# Required for AI features
VITE_GEMINI_API_KEY=your_api_key_here

# Optional: Firebase (for persistence)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
```

Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

---

## Implementation Levels

### Level 1: Templates Only (No Code)

Use the templates with your existing tools:
- Time: 5 minutes
- Skills: None required
- Cost: Free

### Level 2: Static Dashboard

Deploy the dashboard with sample data:
- Time: 15 minutes
- Skills: Can run `npm` commands
- Cost: Free (Firebase free tier)

### Level 3: With Persistence

Add Firestore for data persistence:
- Time: 1 hour
- Skills: Basic Firebase knowledge
- Cost: ~$0-25/month

### Level 4: Enterprise

Full deployment with auth and audit:
- Time: Custom
- Skills: DevOps/Cloud
- Cost: Custom

---

## Customization

### Change the Data

Edit `src/pages/Portfolio.tsx`:

```typescript
const systems = [
  {
    id: 'AI-001',
    name: 'Your Initiative Name',
    department: 'Your Department',
    riskLevel: RiskLevel.LIMITED,
    status: SystemStatus.COMPLIANT,
    owner: 'Owner Name'
  },
  // Add more...
];
```

### Change Branding

Edit `src/components/Layout.tsx` for header, navigation, and footer.

Edit `tailwind.config.js` for colors and fonts.

---

## Contributing

Want to add a template or improve the dashboard?

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

Ideas for contributions:
- Industry-specific templates
- Integration guides (Jira, Notion, etc.)
- Dashboard features
- Translations

---

## Support

- **Issues:** [GitHub Issues](https://github.com/maree217/strata/issues)
- **Discussions:** [GitHub Discussions](https://github.com/maree217/strata/discussions)

---

*Tools make philosophy practical. Start with templates, graduate to the dashboard.*
