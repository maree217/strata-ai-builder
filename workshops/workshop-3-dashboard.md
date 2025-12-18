# Workshop 3: Dashboard Setup

**Duration:** 30 minutes
**Audience:** Technical implementers, AI ops
**Outcome:** Working portfolio tracker deployed

---

## Overview

This hands-on workshop guides participants through deploying the Strata Dashboard. By the end, you'll have a working portfolio tracker.

---

## Prerequisites

Before the workshop, participants need:

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Google account (for Gemini API key)
- [ ] Text editor (VS Code recommended)

**Optional for deployment:**
- [ ] Vercel account OR
- [ ] Firebase account

---

## Agenda

| Time | Section | Activity |
|------|---------|----------|
| 0-5 min | Setup Check | Verify prerequisites |
| 5-15 min | Local Setup | Clone, install, run |
| 15-25 min | Customization | Add your data |
| 25-30 min | Deployment | Push to production |

---

## Facilitator Guide

### Section 1: Setup Check (5 min)

**Activity: Verify Prerequisites**

Have everyone run:

```bash
node --version  # Should show v18+
git --version   # Should show git version
```

**Troubleshooting:**
- No Node? → [nodejs.org](https://nodejs.org)
- No Git? → [git-scm.com](https://git-scm.com)

**Get Gemini API Key:**

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Create API Key"
3. Copy and save the key

---

### Section 2: Local Setup (10 min)

**Activity: Clone and Run**

Everyone runs together:

```bash
# Clone the repository
git clone https://github.com/maree217/strata
cd strata/tools/dashboard

# Install dependencies
npm install

# Create environment file
echo "VITE_GEMINI_API_KEY=your_key_here" > .env.local
```

**Edit `.env.local`** to add your actual Gemini API key.

```bash
# Start the development server
npm run dev
```

**Verify:** Open [http://localhost:5173](http://localhost:5173)

**Say:**
> "You should see the Strata Dashboard with sample data. Let's customize it with your real initiatives."

---

### Section 3: Customization (10 min)

**Activity: Add Your Data**

Open `src/pages/Portfolio.tsx` in a text editor.

Find the `systems` array:

```typescript
const systems = [
  {
    id: 'AI-001',
    name: 'Customer Service Chatbot',
    department: 'Support',
    riskLevel: RiskLevel.LIMITED,
    status: SystemStatus.COMPLIANT,
    owner: 'Jane Smith'
  },
  // ...
];
```

**Activity: Replace with Real Initiatives**

Have participants add 2-3 of their actual AI initiatives:

```typescript
const systems = [
  {
    id: 'AI-001',
    name: 'Your Initiative Name',
    department: 'Your Department',
    riskLevel: RiskLevel.LIMITED,  // MINIMAL, LIMITED, HIGH, UNACCEPTABLE
    status: SystemStatus.COMPLIANT, // COMPLIANT, PENDING, NON_COMPLIANT
    owner: 'Actual Owner Name'
  },
  // Add more...
];
```

**Save and refresh** the browser to see changes.

**Optional:** Update department list in `src/pages/Dashboard.tsx`

---

### Section 4: Deployment (5 min)

**Option A: Vercel (Easiest)**

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variable: `VITE_GEMINI_API_KEY`
5. Deploy

**Or use the button:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maree217/strata/tree/main/tools/dashboard)

**Option B: Firebase**

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting
# Select: Create new project
# Public directory: dist
# Single-page app: Yes

# Build
npm run build

# Deploy
firebase deploy
```

**Verify:** Visit your deployed URL

---

## Slides Outline

1. Title: Dashboard Setup Workshop
2. Prerequisites check
3. Getting Gemini API key
4. Clone and install
5. Run locally
6. Explore the dashboard
7. Customization: Portfolio data
8. Customization: Departments
9. Deployment options
10. Vercel deployment
11. Firebase deployment
12. Next steps

---

## Materials Needed

- [ ] Slides (create from outline)
- [ ] Troubleshooting guide (common errors)
- [ ] List of participant initiatives (from Workshop 2)
- [ ] Sample data to copy-paste

---

## Common Issues

**"npm: command not found"**
→ Install Node.js from nodejs.org

**"VITE_GEMINI_API_KEY is not defined"**
→ Create `.env.local` file with API key

**Blank page**
→ Check browser console, verify API key

**Build fails**
→ Run `npm install` again, check TypeScript errors

**Firebase deploy fails**
→ Run `firebase login` first, ensure `dist` folder exists

---

## Handouts

### Quick Reference Card

```markdown
# Strata Dashboard Quick Reference

## Start Locally
cd strata/tools/dashboard
npm install
npm run dev

## Key Files
- .env.local         → API keys
- src/pages/Portfolio.tsx → Initiative data
- src/pages/Dashboard.tsx → Department data

## Deploy to Vercel
1. Push to GitHub
2. Import at vercel.com
3. Add VITE_GEMINI_API_KEY env var

## Deploy to Firebase
npm run build
firebase deploy
```

---

## Follow-Up Actions

After the workshop:

- [ ] Share deployed dashboard URLs
- [ ] Schedule first portfolio review (use the dashboard!)
- [ ] Assign owners to update data monthly
- [ ] Plan persistence upgrade (Firestore) if needed

---

## Next Steps for Participants

1. **This Week:** Add all known AI initiatives to dashboard
2. **Next Week:** Share dashboard with stakeholders
3. **Monthly:** Use dashboard for portfolio review
4. **Ongoing:** Keep data updated

**Advanced:**
- Add Firestore for persistence
- Add Firebase Auth for multi-user
- Customize branding

---

*This workshop gives you the tool. Now use it to manage your AI portfolio.*
