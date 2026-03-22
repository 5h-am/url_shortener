# URL Shortener — Frontend

A React-based URL shortener frontend that lets users shorten long URLs and get redirected via short links.

**Live App:** [https://url-shortener-tawny-phi.vercel.app](https://url-shortener-tawny-phi.vercel.app)
**Backend Repo:** [url-shortener-backend](https://github.com/5h-am/url_shortener_backend) → [https://url-shortener-backend-b41o.onrender.com](https://url-shortener-backend-b41o.onrender.com)

---

## Tech Stack

- **React** — UI
- **Vite** — Build tool
- **Tailwind CSS** — Styling

---

## Features

- Paste any valid URL and get a shortened version instantly
- Click the shortened URL to be redirected to the original
- Clean, minimal UI with error handling

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-frontend-repo-url>
cd url-shortener-frontend
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://127.0.0.1:5000/
```

For production, point this to your Render backend URL:

```env
VITE_API_URL=https://url-shortener-backend-b41o.onrender.com/
```

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

---

## Deployment

Deployed on **Vercel**. On every push to `main`, Vercel automatically rebuilds and redeploys.

Make sure the `VITE_API_URL` environment variable is set in your Vercel project dashboard under **Settings → Environment Variables**.

---

## Project Structure

```
src/
├── App.jsx        # Main app component and logic
├── App.css        # Component styles
└── index.css      # Global styles + Tailwind
```

---

## Notes

> The backend is hosted on Render's free tier, which spins down after inactivity.
> The first request after a period of inactivity may take 30–60 seconds to respond.