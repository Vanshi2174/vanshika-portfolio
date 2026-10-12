# Vanshika Prajapati — Developer Portfolio

A futuristic, high-performance personal portfolio website engineered with React 19, TypeScript, Vite, and Tailwind CSS.

---

## ✨ Features & Architecture

* **Static High-Impact Name Typography**:
  * Displays **Vanshika Prajapati** permanently with zero typing, glitch, or scrambling animations.
  * Styled with deep obsidian background, crisp white first name, and electric blue-to-cyan gradient surname matching the reference aesthetic.
* **Authentic Professional Portrait Presentation**:
  * Fully preserved natural facial identity, glasses, smile, and features.
  * Replaces the 3D rotating universe with an elegant futuristic portrait container with subtle blue-violet ambient rim backlighting.
  * Absolutely zero orbital rings or distracting universe effects.
* **Futuristic Cyberpunk Boot Terminal**:
  * Initializes the portfolio with a terminal boot sequence and progress tracker (skippable via `ESC` or button).
* **Interactive Skills ("Technical Repertoire")**:
  * Filterable categories: *All Technologies*, *Programming*, *Frontend*, *Computer Science*, *Tools*, and *Learning*.
  * Clean glassmorphic cards with status badges (*Core Stack*, *In Progress*, *Exploring*).
  * Layered Integrated Skill Architecture diagram.
* **Featured Projects Showcase**:
  * **Open Talk**: AI-Powered Communication Practice Platform.
  * **Jal Rakshak**: Rural Water Monitoring & Pipeline Management Solution.
  * **Crypto Tracker**: Live Cryptocurrency Analytics Application.
  * Includes interactive case study modals with architectural breakdowns.
* **Achievements & Evidence Gallery**:
  * Filterable gallery showcasing **Amazon Scholar**, **SIH Internal Hackathon Top 3**, and **20+ LeetCode Problems Solved**.
* **Illuminated Journey Timeline**:
  * Tracing the evolution from foundational programming logic to full-stack systems and B.Tech CSE (Expected 2028).
* **Resume & Credentials Section**:
  * One-click PDF download with celebratory confetti animation and interactive fullscreen CV preview modal.
* **Client-Side Validated Contact Form & Socials**:
  * Direct one-click copy for primary email.
  * Accessible real-time validation for name, email, subject, and message.

---

## 🚀 Quick Start & Development

### Prerequisites
* Node.js (v20+ or v22+)
* npm (v10+)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready bundle in `dist/`.

---

## 🛠 Centralized Personal Data & Customization

All personal data, projects, skills, achievements, and social links are centralized in a single file:
👉 **[`src/data/portfolioData.ts`](file:///c:/Users/vansh/Downloads/Project/src/data/portfolioData.ts)**

### To Update Your Profile Picture:
Replace the file at:
* `public/profile.png`

### To Connect Your Official Resume PDF:
1. Place your resume PDF in the `public/` directory (e.g. `public/resume.pdf`).
2. Update `resumePath` in [`src/data/portfolioData.ts`](file:///c:/Users/vansh/Downloads/Project/src/data/portfolioData.ts):
   ```ts
   resumePath: "/resume.pdf"
   ```

---

## 🌐 Deployment to Vercel

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of premium portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com) — framework will be automatically detected as **Vite**.
3. Click **Deploy**.
