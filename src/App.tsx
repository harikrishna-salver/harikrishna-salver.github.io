import { useState } from "react";
import { Briefcase, Code, Layers, GraduationCap, Sparkles, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import Header from "./components/Header";
import SkillsCloud from "./components/SkillsCloud";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsDeck from "./components/ProjectsDeck";
import AIChatTwin from "./components/AIChatTwin";
import { resumeData } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "projects" | "info">("experience");
  const [mobileView, setMobileView] = useState<"resume" | "chat">("resume");
  
  // Easily toggle true/false to show or hide the AI Chat Twin
  const showAITwin = false;

  const { education, contact } = resumeData;

  return (
    <div className="min-h-screen bg-[#0f1113] text-[#e2e8f0] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Centered responsive viewport limits */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10">
        
        {/* Full-width header panel */}
        <Header />

        {/* Mobile View Toggles (Resume Content vs Chatbot Companion) */}
        {showAITwin && (
          <div className="flex md:hidden bg-[#1a1d21] border border-gray-800 p-1.5 rounded-2xl mb-6 font-mono text-xs">
            <button
              onClick={() => setMobileView("resume")}
              className={`flex-1 py-3 rounded-xl font-bold cursor-pointer transition-all ${
                mobileView === "resume"
                  ? "bg-[#0f1113] text-indigo-400 shadow-md border border-gray-800"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📋 Resume Details
            </button>
            <button
              onClick={() => setMobileView("chat")}
              className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                mobileView === "chat"
                  ? "bg-[#0f1113] text-indigo-400 shadow-md border border-gray-800"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Hari's AI Twin
            </button>
          </div>
        )}

        {/* Primary layout */}
        <div className={showAITwin ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : "w-full space-y-6"}>
          
          {/* Left Column (Main resume text & sections) - Hidden on mobile if viewing chat */}
          <main
            className={showAITwin ? `lg:col-span-7 xl:col-span-8 space-y-6 ${
              mobileView !== "resume" ? "hidden md:block" : ""
            }` : "space-y-6"}
            id="resume-content-main"
          >
            {/* Tab selection menu */}
            <nav className="flex flex-nowrap overflow-x-auto bg-[#1a1d21]/50 backdrop-blur-sm border border-gray-800/80 p-1 rounded-2xl space-x-1 shrink-0 scrollbar-none mb-2">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer text-xs md:text-sm font-sans font-semibold whitespace-nowrap transition-all ${
                  activeTab === "experience"
                    ? "bg-[#0f1113] text-indigo-300 border border-gray-800 shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
                }`}
                id="tab-experience"
              >
                <Briefcase className="w-4 h-4 text-indigo-400" />
                Experience
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer text-xs md:text-sm font-sans font-semibold whitespace-nowrap transition-all ${
                  activeTab === "skills"
                    ? "bg-[#0f1113] text-indigo-300 border border-gray-800 shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
                }`}
                id="tab-skills"
              >
                <Code className="w-4 h-4 text-indigo-400" />
                Expertise Cloud
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer text-xs md:text-sm font-sans font-semibold whitespace-nowrap transition-all ${
                  activeTab === "projects"
                    ? "bg-[#0f1113] text-indigo-300 border border-gray-800 shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
                }`}
                id="tab-projects"
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                Projects
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer text-xs md:text-sm font-sans font-semibold whitespace-nowrap transition-all ${
                  activeTab === "info"
                    ? "bg-[#0f1113] text-indigo-300 border border-gray-800 shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
                }`}
                id="tab-info"
              >
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                Contact & Education
              </button>
            </nav>

            {/* Dynamic tabs render content */}
            <div className="transition-all duration-300" id="active-tab-panel">
              {activeTab === "experience" && <ExperienceTimeline />}
              {activeTab === "skills" && <SkillsCloud />}
              {activeTab === "projects" && <ProjectsDeck />}
              {activeTab === "info" && (
                <div className="space-y-6">
                  {/* Education card */}
                  <div className="bg-[#1a1d21] rounded-3xl p-6 border border-gray-800 shadow-xl" id="education-panel">
                    <h2 className="text-xl md:text-2xl font-sans font-bold text-white flex items-center gap-2 mb-6">
                      <GraduationCap className="w-5 h-5 text-indigo-400" />
                      Academic Background
                    </h2>
                    <div className="space-y-4">
                      {education.map((edu, idx) => (
                        <div key={idx} className="bg-[#0f1113] border border-gray-800/80 p-5 rounded-2xl flex flex-col md:flex-row justify-between gap-4">
                          <div>
                            <h3 className="text-base font-sans font-bold text-slate-200">
                              {edu.degree}
                            </h3>
                            <p className="text-sm font-sans text-slate-400 mt-1">
                              {edu.institution}
                            </p>
                          </div>
                          <span className="self-start md:self-center font-mono text-xs text-indigo-450 bg-indigo-950/40 border border-indigo-950/50 px-3 py-1 rounded-md">
                            Class of {edu.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reach details */}
                  <div className="bg-[#1a1d21] rounded-3xl p-6 border border-gray-800 shadow-xl" id="contact-panel">
                    <h2 className="text-xl font-sans font-bold text-white mb-6">
                      Get In Touch Directly
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#0f1113] border border-gray-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                        <Mail className="w-6 h-6 text-indigo-400 mb-2" />
                        <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest">Email</span>
                        <a href={`mailto:${contact.email}`} className="text-xs md:text-sm font-sans text-slate-300 hover:text-indigo-400 break-all transition-colors mt-1">
                          {contact.email}
                        </a>
                      </div>
                      <div className="bg-[#0f1113] border border-gray-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                        <Phone className="w-6 h-6 text-indigo-400 mb-2" />
                        <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest">Phone</span>
                        <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-xs md:text-sm font-sans text-slate-300 hover:text-indigo-400 break-all transition-colors mt-1">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="bg-[#0f1113] border border-gray-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                        <MapPin className="w-6 h-6 text-indigo-400 mb-2" />
                        <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest">Location</span>
                        <span className="text-xs md:text-sm font-sans text-slate-300 mt-1">
                          {contact.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* Right Column (Permanent Chatbot on desktop) - Hidden on mobile if viewing resume */}
          {showAITwin && (
            <aside
              className={`lg:col-span-5 xl:col-span-4 lg:sticky lg:top-6 ${
                mobileView !== "chat" ? "hidden md:block" : ""
              }`}
              id="chatbot-sidebar"
            >
              <AIChatTwin />
            </aside>
          )}

        </div>

        {/* Dynamic Footer credits */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-xs font-mono text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Hari Krishna Salver. All professional rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/76hari" target="_blank" rel="noreferrer" className="hover:text-slate-450 hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
              Github <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
