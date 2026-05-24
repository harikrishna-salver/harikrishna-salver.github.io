import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  FileDown,
} from "lucide-react";
import { resumeData } from "../data";

export default function Header() {
  const { name, title, summary, contact } = resumeData;

  // Handler to print page cleanly (can represent actual resume print layout)
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-none md:rounded-3xl bg-[#1a1d21] p-6 md:p-12 text-white border-y md:border border-x-0 md:border-x border-gray-800 shadow-2xl mb-4 md:mb-8"
      id="profile-header"
    >
      {/* Decorative backdrop glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Dynamic Vector Avatar with pulse animations */}
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#0f1113] border-2 border-slate-800 flex items-center justify-center overflow-hidden">
            <img
              src="/avatar.png"
              alt="Hari Krishna Salver"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Experience tag */}
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-lg border border-indigo-400/50 z-30">
            9.5+ Yrs
          </div>
        </div>

        {/* Text Information block */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                {name}
              </h1>
              <p className="text-lg md:text-xl font-mono text-indigo-400 font-medium mt-1">
                {title}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f1113] hover:bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
                id="btn-print-resume"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                Print Resume
              </button>
            </div>
          </div>

          <p className="text-slate-300 font-sans leading-relaxed text-sm md:text-base max-w-3xl mb-6">
            {summary}
          </p>

          {/* Contact and social connections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-slate-800 text-xs md:text-sm font-mono text-slate-400">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-indigo-400 transition-colors"
              >
                {contact.email}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="hover:text-indigo-400 transition-colors"
              >
                {contact.phone}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{contact.location}</span>
            </div>
            {contact.linkedin && (
              <div className="flex items-center justify-center md:justify-start gap-2 sm:col-span-2 lg:col-span-1">
                <Linkedin className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  linkedin.com/in/harikrishnasalver
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
