import { useState } from "react";
import { motion } from "motion/react";
import { Layers, Spotlight } from "lucide-react";
import { resumeData } from "../data";

export default function ProjectsDeck() {
  const { projects } = resumeData;
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Gather unique tags
  const tagsList = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))];

  // Filter projects by tag
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tag === selectedTag);

  return (
    <div
      className="bg-[#1a1d21] rounded-none md:rounded-3xl p-4 md:p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl"
      id="projects-section"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-sans font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            Core Projects & Showcases
          </h2>
          <p className="text-xs md:text-sm font-sans text-slate-400 mt-1">
            In-depth details of systems architected with focus on scale,
            modularity, and AI integrations.
          </p>
        </div>

        {/* Filters pills */}
        <div className="flex flex-wrap gap-1.5 self-start">
          {tagsList.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`cursor-pointer px-3 py-1 rounded-full text-[10px] md:text-xs font-mono font-medium transition-all ${
                selectedTag === tag
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                  : "bg-[#0f1113] hover:bg-slate-800 text-slate-400 border border-gray-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Bento grid style layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects-grid">
        {filteredProjects.map((proj) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            key={proj.id}
            className="group relative flex flex-col justify-between bg-[#0f1113] border border-gray-800 hover:border-gray-700 rounded-2xl p-5 md:p-6 transition-all"
          >
            {/* Background spotlight gloss */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />

            <div>
              {/* Category pill */}
              <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-950/40 border border-indigo-900/45 px-2.5 py-1 rounded-md mb-3">
                {proj.tag}
              </span>

              {/* Title */}
              <h3 className="text-base md:text-lg font-sans font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm font-sans text-slate-300 leading-relaxed mt-2.5">
                {proj.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-800/80">
              {/* Impact Callout block */}
              <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-3 mb-4">
                <span className="block text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Engineering Impact
                </span>
                <p className="text-xs md:text-sm font-sans text-slate-200 mt-1">
                  {proj.impact}
                </p>
              </div>

              {/* Technology pills */}
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono bg-slate-900 text-slate-400 border border-gray-800 px-2.5 py-0.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
