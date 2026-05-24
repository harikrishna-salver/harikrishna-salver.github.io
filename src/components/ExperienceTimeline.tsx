import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { resumeData } from "../data";

export default function ExperienceTimeline() {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default first item expanded

  return (
    <div
      className="bg-[#1a1d21] rounded-none md:rounded-3xl px-3 py-4 md:p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl"
      id="experience-section"
    >
      <div className="mb-5 md:mb-6">
        <h2 className="text-xl md:text-2xl font-sans font-bold text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-400" />
          Professional Timeline
        </h2>
        <p className="text-xs md:text-sm font-sans text-slate-400 mt-1">
          9.5 years of industry tenure leading teams, building media players,
          and deploying AI enhancements.
        </p>
      </div>

      <div className="relative border-l border-gray-800 ml-1.5 md:ml-6 pl-4 md:pl-8 space-y-4 md:space-y-6">
        {experience.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          const isLatest = idx === 0;

          return (
            <div key={exp.company + exp.period} className="relative group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[22px] md:-left-10 top-2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-all ${
                  isLatest
                    ? "bg-indigo-500 border-indigo-300 ring-4 ring-indigo-950/80 scale-110"
                    : "bg-[#0f1113] border-gray-700 hover:border-indigo-400"
                }`}
              />

              {/* Collapsed/Expanded Container Card */}
              <div className="bg-[#0f1113] border border-gray-800 hover:border-gray-700 hover:bg-[#0f1113]/80 rounded-2xl p-3.5 md:p-6 transition-all shadow-md">
                <div
                  className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 cursor-pointer"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                >
                  <div className="flex-1">
                    {/* Role Header */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base md:text-lg font-sans font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      {isLatest && (
                        <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md">
                          Latest Role
                        </span>
                      )}
                    </div>

                    {/* Meta info (Company, location, date) */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 md:gap-y-1.5 md:gap-x-4 mt-1.5 text-xs font-mono text-slate-400">
                      <span className="text-slate-200 font-semibold">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Toggle controls */}
                  <button className="self-end md:self-start p-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-indigo-500/25 hover:border-indigo-500/30 transition-colors cursor-pointer">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Bullets text (Expanded block) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3.5 mt-3.5 md:pt-5 md:mt-5 border-t border-gray-800 space-y-3.5 md:space-y-4">
                        {exp.bullets.map((bullet, bIdx) => {
                          const isSpecial =
                            bullet.title.toLowerCase().includes("ai") ||
                            bullet.title.toLowerCase().includes("award") ||
                            bullet.title
                              .toLowerCase()
                              .includes("architecture") ||
                            bullet.title
                              .toLowerCase()
                              .includes("optimisation") ||
                            bullet.title.toLowerCase().includes("stability");

                          const isAward = bullet.title
                            .toLowerCase()
                            .includes("award");

                          return (
                            <div key={bIdx} className="flex gap-2 min-w-0">
                              <span className="mt-1 shrink-0">
                                {isAward ? (
                                  <Award className="w-4 h-4 text-amber-400" />
                                ) : isSpecial ? (
                                  <Sparkles className="w-4 h-4 text-indigo-400 fill-indigo-400/10" />
                                ) : (
                                  <Zap className="w-3.5 h-3.5 text-slate-500" />
                                )}
                              </span>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-xs md:text-sm font-sans font-bold text-slate-100 flex items-center gap-1.5">
                                  {bullet.title}
                                </h4>
                                <p className="text-xs md:text-sm font-sans text-slate-400 leading-relaxed mt-0.5">
                                  {bullet.text}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
