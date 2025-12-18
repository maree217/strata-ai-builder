# Strata Dashboard

The visual interface for AI portfolio management. Track initiatives, monitor costs, ensure compliance.

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/maree217/strata
cd strata/tools/dashboard

# Install dependencies
npm install

# Add your Gemini API key
echo "VITE_GEMINI_API_KEY=your_key_here" > .env.local

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Features

| Page | Purpose |
|------|---------|
| **Overview** | Key metrics and portfolio health |
| **Pipeline** | Kanban view: Idea → Alpha → Beta → Live |
| **Portfolio** | Searchable table of all AI systems |
| **Compliance** | EU AI Act status + Gemini doc generation |
| **FinOps** | Cost tracking and ROI |
| **Reports** | Export and document management |

---

## Deploy

### Option A: Vercel (Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maree217/strata/tree/main/tools/dashboard)

Add `VITE_GEMINI_API_KEY` as an environment variable in Vercel.

### Option B: Firebase

```bash
npm install -g firebase-tools
firebase login
firebase init hosting  # Select: dist, Yes (SPA)
npm run build
firebase deploy
```

Your dashboard will be live at `https://your-project.web.app`.

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| AI | Google Gemini API |

---

## Environment Variables

Create `.env.local`:

```bash
# Required for AI document generation
VITE_GEMINI_API_KEY=your_api_key_here

# Optional: Firebase (for persistence)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

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

### Change Departments

Edit `src/pages/Dashboard.tsx`:

```typescript
const deptData = [
  { name: 'Your Dept 1', systems: 12 },
  { name: 'Your Dept 2', systems: 8 },
  // Add more...
];
```

### Change Branding

- `src/components/Layout.tsx` — Header, navigation, footer
- `tailwind.config.js` — Colors and fonts

---

## Project Structure

```
dashboard/
├── src/
│   ├── components/
│   │   └── Layout.tsx          # Main layout
│   ├── pages/
│   │   ├── Dashboard.tsx       # Overview
│   │   ├── Pipeline.tsx        # Kanban board
│   │   ├── Portfolio.tsx       # Systems table
│   │   ├── Compliance.tsx      # EU AI Act + doc gen
│   │   ├── FinOps.tsx          # Cost tracking
│   │   └── Reports.tsx         # Documents
│   ├── services/
│   │   └── gemini.ts           # Gemini API integration
│   ├── App.tsx                 # Router
│   └── types.ts                # TypeScript types
├── .env.local                  # Environment variables
└── package.json
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Troubleshooting

### Blank page
- Check browser console for errors
- Verify `.env.local` exists with valid API key

### Gemini not working
- Verify API key is correct
- Check you have API access at [AI Studio](https://aistudio.google.com/)
- Check console for specific error messages

### Build fails
- Run `npm install` again
- Clear `node_modules` and reinstall
- Check TypeScript errors

---

## Next Steps

- Add Firestore for data persistence
- Add Firebase Auth for multi-user
- See [Framework](../../framework/) for implementation guidance

---

*Part of [Strata](https://github.com/maree217/strata)*
