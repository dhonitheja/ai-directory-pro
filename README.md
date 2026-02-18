# 🚀 AI Directory Pro

A modern, verified directory of the best AI tools, featuring a premium glassmorphism UI and automated tool discovery.

## ✨ Features
- **230+ Verified Tools**: Curated list of top-tier AI applications.
- **Verification Trust System**: 
  - **Shield Banner**: Shows verification sources (G2, Product Hunt, Experts).
  - **Verified Badges**: Green checkmarks on every vetted tool card.
- **AI Smart Recommendations**: Integrated Gemini AI to suggest tools based on natural language queries.
- **Premium UI**: Custom-built design system using modern CSS variables, glassmorphism, and smooth animations.
- **Automated Discovery 🤖**: **Hourly** GitHub Action scans RSS feeds for trending tools and updates the directory automatically.

## 🛠 Tech Stack
- **Frontend**: React, TypeScript, Vite
- **Styling**: Vanilla CSS (Premium Design System), Lucide Icons
- **Deployment**: Vercel (SPA Routing Configured)
- **CI/CD**: GitHub Actions (Automated Tool Ingestion)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file in the root (or `frontend/`):
```env
VITE_API_KEY=your_gemini_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` to see the app.

## 🤖 Automation Pipeline
This project includes a **GitOps-based** automation system to keep the directory fresh.

- **Script**: `scripts/auto-discover.js`
  - Fetches trending tools from top AI RSS feeds (Product Hunt, Toolify, etc.).
  - Auto-categorizes and formats them into `data/tools.ts`.
- **Workflow**: `.github/workflows/auto-update-tools.yml`
  - Runs **every hour**.
  - Automatically commits new tools to the `main` branch, triggering a Vercel deploy.

## 📦 Deployment
Deployed on **Vercel**.
- **Build Command**: `npx vite build`
- **Output Directory**: `dist`
- **Routing**: SPA rewrite rules included in `vercel.json`.


