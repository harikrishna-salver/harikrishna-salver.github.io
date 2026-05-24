import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Sparkles,
  Code,
  Server,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { resumeData } from "../data";

export default function SkillsCloud() {
  const { skillCategories } = resumeData;
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Flat skills list with category mapping for search
  const allSkillsFlat = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      name: skill,
      category: cat.category,
    })),
  );

  // Filter categories
  const categoriesList = ["All", ...skillCategories.map((c) => c.category)];

  // Filter skills based on search term and category
  const filteredSkills = allSkillsFlat.filter((sk) => {
    const matchesCategory =
      activeCategory === "All" || sk.category === activeCategory;
    const matchesSearch = sk.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get matching category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend & Mobile":
        return <Code className="w-4 h-4 text-indigo-400" />;
      case "Backend & Core":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "AI & Developer Productivity":
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case "Engineering Practices":
        return <ShieldCheck className="w-4 h-4 text-amber-500" />;
      default:
        return <Heart className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div
      className="bg-[#1a1d21] rounded-none md:rounded-3xl p-4 md:p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl"
      id="skills-cloud-section"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-sans font-bold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-400" />
            Technical Expertise
          </h2>
          <p className="text-xs md:text-sm font-sans text-slate-400 mt-1">
            Core capabilities structured across frontend architecture,
            full-stack pipelines, and developer tooling.
          </p>
        </div>

        {/* Input Search Block */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search skills (e.g., React, Go...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 bg-[#0f1113] border border-gray-800 focus:border-indigo-500 focus:outline-hidden text-slate-200 text-xs font-mono rounded-xl pl-9 pr-4 py-2.5 transition-colors"
            id="search-skills"
          />
          <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
        </div>
      </div>

      {/* Category Navigation Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categoriesList.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              activeCategory === cat
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/50"
                : "bg-[#0f1113] hover:bg-slate-900 text-slate-400 border border-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Group / Flex Cloud */}
      <div className="min-h-36">
        <AnimatePresence mode="popLayout">
          {filteredSkills.length > 0 ? (
            <motion.div
              layout
              className="flex flex-wrap gap-2.5"
              id="skills-flex"
            >
              {filteredSkills.map((sk) => (
                <motion.div
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  key={sk.name}
                  className="group relative flex items-center gap-2 px-3.5 py-2 bg-[#0f1113] border border-gray-800 hover:bg-slate-900 hover:border-slate-800 transition-all rounded-xl"
                >
                  {getCategoryIcon(sk.category)}
                  <span className="text-xs md:text-sm font-sans text-slate-300 group-hover:text-white transition-colors">
                    {sk.name}
                  </span>

                  {/* Category mini pill on hover */}
                  <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-[#0f1113] text-slate-400 border border-gray-800 text-[10px] font-mono whitespace-nowrap px-2 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                    {sk.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-slate-500"
            >
              <Search className="w-8 h-8 opacity-40 mb-2" />
              <p className="text-xs font-mono">
                No matching skills found. Try searching for "React" or
                "Actions".
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Structured view per Category */}
      {activeCategory === "All" && searchTerm === "" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-800">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#0f1113]/55 p-4 rounded-2xl border border-gray-800"
            >
              <h3 className="text-xs md:text-sm font-mono text-slate-300 font-bold mb-3 flex items-center gap-2">
                {getCategoryIcon(cat.category)}
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.slice(0, 6).map((sk) => (
                  <span
                    key={sk}
                    className="text-[11px] font-mono px-2 py-1 bg-slate-900 border border-gray-850 text-slate-400 rounded-md"
                  >
                    {sk}
                  </span>
                ))}
                {cat.skills.length > 6 && (
                  <span className="text-[11px] font-mono px-2 py-1 bg-indigo-950/50 border border-indigo-900/50 text-indigo-400 rounded-md">
                    +{cat.skills.length - 6} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
