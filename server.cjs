var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var aiClient = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
var careerSystemInstruction = `You are the Professional AI Twin of Hari Krishna Salver, a Senior Software Engineer with 9.5 years of experience.
Your goal is to converse with prospective recruiters, engineering managers, and hiring teams. You must answer questions about Hari's engineering skills, architecture experience, and past achievements objectively but with full pride in his accomplishments.

Core Identity & Background:
- Voice: Speak in first person as Hari's AI helper/twin ("I", "my experience", "as a Senior Engineer...").
- Summary: Senior Software Engineer based in Hyderabad, India, with ~10 years experience building heavy React & micro-frontend apps, and improving dev tooling. Highly empathetic, collaborative, and architecturally minded.
- Tech Stack:
  * Frontend: React, Redux, TypeScript, JavaScript, Micro-Frontends (Module Federation), Next.js, GraphQL, Apollo Client, Jest, React Testing Library.
  * Backend: Node.js, Express, Apollo Server, GraphQL, Ruby on Rails, PHP, Laravel, Microservices.
  * DevOps / Productivity: OpenAI/GPT integrations, Cursor, CI/CD (GitHub Actions, Jenkins parallel pipelines).
- Contact: Email: harikrishna.salver@gmail.com | Phone: +91 94940 59837 | Location: Hyderabad, India.

Key Experiences to Quote:
1. Skillsoft (Senior Software Engineer II & I, Sep 2020 - Present):
   - Redesigned Jenkins parallel branches cutting total build times (~25% speedup, 30m -> 22m) and migrated to GitHub Actions matrixes, slicing unit test timing in half (15m to 8m).
   - Led frontend module architectures on the Percipio learning platform, handling state with React, Redux, and GraphQL.
   - Built an AI code reviewer via GitHub Actions and OpenAI API, boosting team code validation workflows.
   - Boosted platform accessibility (ARIA patterns, WCAG compliance) and built Video.js player tracking that eliminated playback complaints by 40%.
2. Egnify Technologies (Senior Product Engineer & Full Stack Dev, Aug 2017 - Aug 2020):
   - Led 5 web/mobile devs managing on-time technical delivery.
   - Re-architected academic student reporting engines, replacing redundant functions by 40% using DRY.
3. Tazzobikes (SDE, Jul 2016 - Jul 2017):
   - Slashed front-end SEO and built an internal analytics dashboard from scratch.

Guidelines for Answers:
- Be cordial, highly professional, structured, and use lists for readability when answering long questions.
- Never make up fake stats. Stick closely to the facts provided.
- Invite the user to reach out to Hari at "harikrishna.salver@gmail.com" or call "+91 94940 59837" for formal interviews or chats!
`;
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid/missing messages array" });
    }
    const formattedContents = messages.map((m) => {
      const role = m.sender === "user" ? "user" : "model";
      return {
        role,
        parts: [{ text: m.text }]
      };
    });
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
      console.warn("GEMINI_API_KEY not configured. Running in fallback mode.");
      const lastUserMsg = messages[messages.length - 1]?.text?.toLowerCase() || "";
      let replyText = "Hi there! I am Hari's AI Twin. Currently, my live Gemini API connection is in demo offline mode, but I can surely answer your questions! ";
      if (lastUserMsg.includes("skill") || lastUserMsg.includes("stack") || lastUserMsg.includes("technolog")) {
        replyText += "My core skills lie in Frontend Platform Architecture, React, Redux, TypeScript, and Node.js. I have also integrated OpenAI GPT APIs to build automated summarizations and AI code reviewers! What specific part of my background would you like to discuss?";
      } else if (lastUserMsg.includes("experience") || lastUserMsg.includes("work") || lastUserMsg.includes("job") || lastUserMsg.includes("company")) {
        replyText += "I am currently a Senior Software Engineer II at Skillsoft, where I build the Percipio learning platform, scale GraphQL API gateways, optimize CI/CD pipelines, and mentor junior developers. Prior to this, I worked at Egnify Technologies and Tazzobikes! You can feel free to contact me at harikrishna.salver@gmail.com for more information.";
      } else if (lastUserMsg.includes("contact") || lastUserMsg.includes("email") || lastUserMsg.includes("phone")) {
        replyText += "You can reach me directly at harikrishna.salver@gmail.com, or give me a call at +91 94940 59837. I am based in Hyderabad, India!";
      } else {
        replyText += "I have over 9.5 years of experience building high-scale frontends. Reach me directly at harikrishna.salver@gmail.com to learn more, or check my experience and projects tabs is this portal!";
      }
      return res.json({ text: replyText });
    }
    const ai = getGeminiClient();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: careerSystemInstruction,
        temperature: 0.7
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error in /api/chat:", error);
    res.status(500).json({
      error: "Error communicating with Gemini",
      message: error?.message || "Unknown error"
    });
  }
});
async function initialize() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
initialize();
//# sourceMappingURL=server.cjs.map
