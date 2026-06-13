import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define all single page app routes that need to support direct refreshing / bookmarking
const routes = [
  "/projects/cosma-launcher",
  "/projects/cosma-launcher/about",
  "/projects/cosma-launcher/privacy-policy",
  "/projects/countdown",
  "/projects/countdown/about",
  "/projects/countdown/privacy-policy",
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "dist");
const indexHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexHtmlPath)) {
  console.error(`Error: index.html not found in dist dir: ${indexHtmlPath}`);
  console.error(`Please run "vite build" first!`);
  process.exit(1);
}

const indexContent = fs.readFileSync(indexHtmlPath, "utf8");

console.log("\n--- Starting Static Site Generation / Prerendering (HTML Duplication) ---");

for (const route of routes) {
  const cleanRoute = route.replace(/^\/+|\/+$/g, "");
  if (!cleanRoute) continue;

  const targetDir = path.join(distDir, cleanRoute);

  // Recursively create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, "index.html");
  fs.writeFileSync(targetFile, indexContent, "utf8");
  console.log(`✓ Created pre-rendered path: dist/${cleanRoute}/index.html`);
}

console.log("--- All routes successfully prerendered! ---\n");
