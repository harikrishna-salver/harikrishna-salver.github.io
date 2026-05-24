# GitHub & Yarn Deployment Guide

This guide details how to configure your project to use **Yarn**, build your app for **GitHub Pages**, manage repository privacy, and sync your changes back to Google AI Studio.

---

## 1. Using Yarn Instead of npm

The `package.json` scripts and structure are already 100% compatible with Yarn out-of-the-box. Since the Google AI Studio cloud sandbox manages server-side builds using standard node package management, you do not need to rewrite your setup. 

To transition your local environment fully to **Yarn**:

1. **Download and Export** your project from Google AI Studio (via the export menu in the top right).
2. Open your project folder in your local terminal.
3. Remove the npm lockfile:
   ```bash
   rm package-lock.json
   ```
4. Run Yarn to install dependencies and generate a fresh `yarn.lock` file:
   ```bash
   yarn install
   ```
5. Use Yarn commands for local development:
   * **Start Development Server:** `yarn dev`
   * **Build Production Assets:** `yarn build`
   * **Start Built Server Locally:** `yarn start`

---

## 2. Deploying to GitHub Pages: Static vs. Full-Stack

Your app currently contains a dual structure—a Vite frontend and an optional Express backend (`server.ts`).

### The GitHub Pages Constraint
* **GitHub Pages only hosts static files** (HTML, CSS, JS). It cannot run a Node.js/Express server.
* If you keep the **AI Twin chatbot hidden** (`showAITwin = false`), your app acts as a **purely static single-page application (SPA)**. 
* This means you can deploy the generated static bundle (located in the `dist` folder after building) directly to GitHub Pages!

### How to Deploy Your Static Site to GitHub Pages
To compile your Vite static assets and publish them:

1. **Install the github-pages deployment tool** locally as a dev dependency:
   ```bash
   yarn add -D gh-pages
   ```
2. **Add Deployment Scripts** directly to your `package.json` under `"scripts"`:
   ```json
   "predeploy": "vite build",
   "deploy": "gh-pages -d dist"
   ```
3. **Configure your custom domain or base path (if applicable):**
   * If your GitHub repository is named `my-resume`, your app will be hosted at `https://<your-username>.github.io/my-resume/`.
   * Open `vite.config.ts` and ensure the base path is updated to match your repo name:
     ```typescript
     export default defineConfig({
       base: '/my-resume/', // Use your exact GitHub repository name
       // ... other configurations
     });
     ```
4. Run the publish command to build and push to the `gh-pages` branch:
   ```bash
   yarn deploy
   ```

---

## 3. Does the GitHub Repo Need to Be Public or Private?

* **Public Repositories:** GitHub Pages is **100% free** for all public repositories. Anyone can see your code, but hosting is free and automatic.
* **Private Repositories:** To host a private repository on GitHub Pages, you must have a **paid GitHub Pro** subscription. Otherwise, you cannot enable Pages on a private repository.
* **Alternative for Private Repos:** If you need to keep your repository private for free, we recommend hosting on **Vercel**, **Netlify**, or **Cloudflare Pages**. They all offer free static hosting directly connected to private GitHub repositories.

---

## 4. Syncing Tomorrow's Changes with Google AI Studio

Yes, Google AI Studio makes it very easy to work locally and sync your progress!

* **Exporting to GitHub:** You can link and export your project directly to a GitHub repository using the build interface's settings.
* **Making Local Changes:** If you work locally (e.g., in VS Code using Yarn or committing to git), you can push those changes up to your repository.
* **Syncing Back to AI Studio:** When you want to return to AI Studio, you can import or sync changes back to continue building seamlessly with the assistance of the AI programmer.

---

## 5. Is There a Desktop App for AI Studio?

Google AI Studio Build currently runs **entirely in your web browser** with a highly containerized developer workspace. There is no standalone desktop application. 

However, you can achieve a "desktop app" workflow by:
1. Running VS Code on your desktop for local changes.
2. Managing dependencies using your local terminal running **Yarn**.
3. Syncing changes via a GitHub repository linked to Google AI Studio.
