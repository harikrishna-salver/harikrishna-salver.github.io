import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, User, RefreshCw } from "lucide-react";
import { ChatMessage } from "../../types/common";

// Rule-based client-side query handler for servers or static hosts like GitHub Pages
const getClientSideResponse = (userQuery: string): string => {
  const query = userQuery.toLowerCase().trim();

  if (
    query.includes("ai") ||
    query.includes("gpt") ||
    query.includes("openai") ||
    query.includes("summariz") ||
    query.includes("reviewer") ||
    query.includes("cursor")
  ) {
    return "At Skillsoft, I integrated OpenAI GPT APIs to deliver automated video and course summarization features (improving clarity by 30%). I also built an automated AI code review system via GitHub Actions that leverages AI code audits, boosting delivery speed and saving valuable PR iteration times! Currently, I am also accelerating daily engineering workflows using Cursor AI by ~25%.";
  }

  if (
    query.includes("react") ||
    query.includes("frontend") ||
    query.includes("architecture") ||
    query.includes("stack") ||
    query.includes("technology") ||
    query.includes("expert") ||
    query.includes("type")
  ) {
    return "I have deep core expertise with React, Redux, and TypeScript (with 9.5+ years of total engineering experience). I've scaled frontend platforms, lead modular component design, and integrated GraphQL clients, Next.js, and Module Federation micro-frontends.";
  }

  if (
    query.includes("ci/cd") ||
    query.includes("jenkins") ||
    query.includes("build") ||
    query.includes("automation") ||
    query.includes("pipeline") ||
    query.includes("speed") ||
    query.includes("action")
  ) {
    return "I am a strong advocate for developer productivity! I redesigned the Skillsoft Jenkins pipelines through caching and concurrent execution, optimizing build speeds by 25% (30m down to 22m). I also migrated workflow checks to GitHub Actions built with execution matrices, slashing unit test suite runtimes in half (15m → 8m).";
  }

  if (
    query.includes("accessibility") ||
    query.includes("wcag") ||
    query.includes("screen reader") ||
    query.includes("aria") ||
    query.includes("player") ||
    query.includes("jaws")
  ) {
    return "Yes! Accessibility is a core engineering practice of mine. I achieved strict WCAG standards on media components at Skillsoft using custom screen-reader support (NVDA, JAWS), detailed keyboard tab mappings, and secure ARIA compliance markers. I also developed the Custom Video percipo-player which slashed playback errors by 40%!";
  }

  if (
    query.includes("contact") ||
    query.includes("hire") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("reach") ||
    query.includes("linkedin")
  ) {
    return "You can get in touch with me directly at harikrishna.salver@gmail.com, or phone me at +91 94940 59837. My LinkedIn is https://www.linkedin.com/in/harikrishnasalver/. I'm based in Hyderabad, India, and I'd love to discuss senior engineer roles!";
  }

  if (
    query.includes("company") ||
    query.includes("experience") ||
    query.includes("work") ||
    query.includes("history") ||
    query.includes("skillsoft") ||
    query.includes("egnify") ||
    query.includes("tazzo")
  ) {
    return "My career history features roles at Skillsoft (Senior Software Engineer II & I, working on scale learning delivery), Egnify Technologies (Senior Product Engineer leading web & React-Native mobile teams), and Tazzobikes (SDE building core analytics dashboards). Check out my full timeline in the Experience section for itemized lists!";
  }

  return "I have over 9.5 years of engineering experience specializing in React architectures, high-performance web systems, CI/CD speedups, and AI developer tooling. What specific details of my track record can I share? Feel free to write me at harikrishna.salver@gmail.com!";
};

export default function AIChatTwin() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      sender: "assistant",
      text: "Hello! I am Hari's professional AI Twin. Ask me anything about my 9.5+ years of engineering tenure, technology stack, or cloud deployments!",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isStaticMode, setIsStaticMode] = useState(false);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Suggested Quick Prompts to guide users
  const quickPrompts = [
    "Highlight your AI experience",
    "How much React expertise do you have?",
    "Tell me about your CI/CD speedup achievements",
    "What is your direct contact info?",
  ];

  // Auto scroll to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    try {
      if (isStaticMode) {
        throw new Error("Static serverless fallback active");
      }

      const allMsgsToSend = [...messages, userMsg];

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMsgsToSend }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status code ${response.status}`);
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-ai",
          sender: "assistant",
          text: data.text || "Sorry, I couldn't compute a response right now.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (err: any) {
      console.warn(
        "API route unavailable. Seamlessly triggering smart client-side copilot fallback.",
        err,
      );
      setIsStaticMode(true);

      // Simulate typing transition for elegant UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      const replyText = getClientSideResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-ai-static",
          sender: "assistant",
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "initial-1",
        sender: "assistant",
        text: "Hi again! Let's start fresh. How can I help you evaluate Hari Krishna Salver today?",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  return (
    <div
      className="bg-[#1a1d21] rounded-3xl p-6 border border-gray-800 shadow-xl flex flex-col h-[520px]"
      id="ai-twin-section"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-4 shrink-0">
        <div>
          <h2 className="text-xl font-sans font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
            Hari's AI Twin
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-0.5">
            <span className="text-[11px] font-mono text-indigo-400">
              Powered by Gemini 3.5 Flash
            </span>
            {isStaticMode && (
              <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-550/20 px-1.5 py-0.5 rounded-md tracking-wider uppercase font-bold animate-pulse">
                Static Copilot Active
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="p-2 hover:bg-[#0f1113] border border-gray-800 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
          title="Reset conversation"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin scrollbar-thumb-gray-850 scrollbar-track-transparent">
        {messages.map((msg) => {
          const isAI = msg.sender === "assistant";
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 max-w-[85%] ${
                isAI ? "self-start" : "self-end ml-auto flex-row-reverse"
              }`}
            >
              {/* Avatar circle */}
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                  isAI
                    ? "bg-[#0f1113] border-indigo-550/30 text-indigo-400 font-bold text-xs"
                    : "bg-[#0f1113] border-gray-800 text-slate-350"
                }`}
              >
                {isAI ? "H" : <User className="w-3.5 h-3.5" />}
              </div>

              {/* Msg Box */}
              <div>
                <div
                  className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed ${
                    isAI
                      ? "bg-[#0f1113] text-slate-200 border border-gray-800 rounded-tl-none whitespace-pre-wrap"
                      : "bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 rounded-tr-none"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Meta time */}
                <span className="block text-[10px] font-mono text-slate-500 mt-1 pl-1 pr-1 text-right">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {/* AI Typing loading indicator */}
        {isTyping && (
          <div className="flex items-start gap-3 max-w-[80%] self-start animate-fade-in">
            <div className="w-7 h-7 rounded-lg bg-[#0f1113] border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold shrink-0">
              H
            </div>
            <div className="bg-[#0f1113] text-slate-450 border border-gray-805 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
              <span className="text-[11px] font-mono ml-1 text-slate-500">
                Gemini is synthesizing a career insight...
              </span>
            </div>
          </div>
        )}

        {/* Anchor point */}
        <div ref={chatBottomRef} />
      </div>

      {/* Suggested Quick Prompts list */}
      {messages.length === 1 && (
        <div className="py-2.5 space-y-1.5 shrink-0 border-t border-gray-800 mt-3 pt-3">
          <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
            Suggested Quick Actions:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="cursor-pointer text-[11px] font-sans text-left bg-[#0f1113] hover:bg-slate-800 text-slate-300 border border-gray-800 hover:border-indigo-550/30 px-3 py-1.5 rounded-xl transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input box form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputText);
        }}
        className="mt-3 flex gap-2 shrink-0 pt-3 border-t border-gray-800"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask Hari's AI Twin (e.g., 'What Jenkins task was parallelized?')"
          disabled={isTyping}
          className="flex-1 bg-[#0f1113] border border-gray-800 hover:border-gray-750 focus:border-indigo-500 focus:outline-hidden text-slate-200 text-xs md:text-sm rounded-xl px-4 py-2.5 transition-colors disabled:opacity-55"
          id="chat-input-text"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="bg-indigo-500/10 hover:bg-indigo-600 hover:text-white border border-indigo-500/35 hover:border-transparent text-indigo-400 disabled:opacity-40 rounded-xl p-2.5 transition-all text-xs cursor-pointer flex items-center justify-center font-bold"
          id="btn-send-message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
