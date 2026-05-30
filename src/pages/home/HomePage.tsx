import { useState } from "react";
import {
  Briefcase,
  Code,
  Layers,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import Header from "./Header";
import SkillsCloud from "./SkillsCloud";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectsDeck from "./ProjectsDeck";
import { resumeData } from "../../constants/data";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<
    "experience" | "skills" | "projects" | "info"
  >("experience");

  const { education, contact } = resumeData;

  return (
    <div className="w-full max-w-7xl mx-auto px-0 md:px-4 py-0 md:py-10">
      {/* Full-width header panel */}
      <Header />

      {/* Primary layout */}
      <div className="w-full space-y-6">
        {/* Left Column (Main resume text & sections) */}
        <main className="w-full space-y-6" id="resume-content-main">
          {/* Tab selection menu */}
          <nav className="flex flex-nowrap overflow-x-auto bg-[#1a1d21]/55 backdrop-blur-sm border-y md:border border-x-0 md:border-x border-gray-800/80 p-1 rounded-none md:rounded-2xl space-x-1 shrink-0 scrollbar-none mb-4 md:mb-6">
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
                <div
                  className="bg-[#1a1d21] rounded-none md:rounded-3xl p-4 md:p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl"
                  id="education-panel"
                >
                  <h2 className="text-xl md:text-2xl font-sans font-bold text-white flex items-center gap-2 mb-6">
                    <GraduationCap className="w-5 h-5 text-indigo-400" />
                    Academic Background
                  </h2>
                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0f1113] border border-gray-800/80 p-5 rounded-2xl flex flex-col md:flex-row justify-between gap-4"
                      >
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
                <div
                  className="bg-[#1a1d21] rounded-none md:rounded-3xl p-4 md:p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl"
                  id="contact-panel"
                >
                  <h2 className="text-xl font-sans font-bold text-white mb-6">
                    Get In Touch Directly
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#0f1113] border border-gray-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                      <Mail className="w-6 h-6 text-indigo-400 mb-2" />
                      <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                        Email
                      </span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs md:text-sm font-sans text-slate-300 hover:text-indigo-400 break-all transition-colors mt-1"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="bg-[#0f1113] border border-gray-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                      <Phone className="w-6 h-6 text-indigo-400 mb-2" />
                      <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                        Phone
                      </span>
                      <a
                        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                        className="text-xs md:text-sm font-sans text-slate-300 hover:text-indigo-400 break-all transition-colors mt-1"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    <div className="bg-[#0f1113] border border-gray-800 p-4 rounded-2xl text-center flex flex-col items-center justify-center">
                      <MapPin className="w-6 h-6 text-indigo-400 mb-2" />
                      <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                        Location
                      </span>
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
      </div>

      {/* Dynamic Footer credits */}
      <footer className="mt-12 mx-4 md:mx-0 pt-8 border-t border-gray-800 text-center text-xs font-mono text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4 pb-8 md:pb-0">
        <p>
          © {new Date().getFullYear()} Hari Krishna Salver. All professional
          rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/76hari"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-450 hover:text-indigo-400 transition-colors inline-flex items-center gap-1"
          >
            Github <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}
