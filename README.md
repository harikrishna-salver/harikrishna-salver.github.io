# Local Development & Yarn Guide

This guide details how to configure your project to use **Yarn** locally and sync your work between your local environment and Google AI Studio.

---

## 1. Using Yarn Instead of npm

The `package.json` scripts and structure are 100% compatible with Yarn out-of-the-box. To transition your local development environment fully to **Yarn**:

1. **Download and Export** your project from Google AI Studio (under the settings/export menu).
2. Open your project folder in your local terminal.
3. Remove the npm lockfile:
   ```bash
   rm package-lock.json
   ```
4. Install dependencies using Yarn to generate a fresh `yarn.lock` file:
   ```bash
   yarn install
   ```
5. Run Yarn commands for development and building:
   - **Start Development Server:** `yarn dev`
   - **Build Production Assets:** `yarn build`
   - **Start Built Server Locally:** `yarn start`

---

## 2. Syncing Changes with Google AI Studio

Google AI Studio makes it very easy to work locally and sync your progress:

- **Exporting to GitHub:** Link and export your project directly to a GitHub repository using the settings panel in Google AI Studio.
- **Making Local Changes:** Work in your local editor (like VS Code), commit, and push changes to your GitHub branch.
- **Syncing Back to AI Studio:** When you open Google AI Studio, you can import or sync changes back to continue building seamlessly.

---

## 3. Troubleshooting Local Setup Errors

### Node.js Version Engine Warning (e.g. `@google/genai`)

If you encounter a Node engine version mismatch error while running `yarn install` locally:

#### Option A: Tell Yarn to Ignore Engine Checks (Fastest)

If you want to get running immediately without changing your local Node.js version, run:

```bash
yarn install --ignore-engines
```

_Tip: You can make this permanent in your project directory by running `yarn config set ignore-engines true`._

#### Option B: Upgrade Your Local Node.js to LTS (Recommended)

Upgrading your local Node.js is the best long-term solution. On systems using **NVM** (Node Version Manager):

```bash
nvm install 20
nvm use 20
```

Then run a clean `yarn install`.
