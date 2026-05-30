import BackButton from "../../../components/BackButton";
import Overview from "./Overview";
import PrivacyPolicy from "./PrivacyPolicy";

interface CosmaLauncherPageProps {
  subTab: "about" | "privacy-policy";
  onNavigateHome: () => void;
  onNavigateTab: (tab: string) => void;
}

export default function CosmaLauncherPage({
  subTab,
  onNavigateHome,
  onNavigateTab,
}: CosmaLauncherPageProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-0 md:px-4 py-0 md:py-10">
      {/* Top action header bar */}
      <div className="flex items-center gap-4 px-4 py-4 md:px-0 md:py-0 md:mb-6 shrink-0 border-b md:border-b-0 border-gray-800 bg-[#101214] md:bg-transparent">
        <BackButton onClick={onNavigateHome} id="cosma-back" />
        <div className="h-5 w-[1px] bg-gray-800" />
        <span className="text-xs font-mono text-slate-500 hidden sm:inline">
          Projects / Cosma Launcher Project Space
        </span>
      </div>

      {/* Main Feature Brand Banner */}
      <section
        className="relative overflow-hidden rounded-none md:rounded-3xl bg-[#1a1d21] p-6 md:p-10 border-y md:border border-x-0 md:border-x border-gray-800 shadow-2xl mb-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between"
        id="cosma-brand-header"
      >
        <div className="text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-2.5">
            <h1 className="text-2xl md:text-3xl font-sans font-extrabold text-white">
              Cosma Launcher
            </h1>
            <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded tracking-wide">
              v1.4.0 Live
            </span>
          </div>
          <p className="text-xs md:text-sm font-sans text-slate-400 max-w-xl">
            A secure, offline, content-first tactile mobile portal crafted for
            absolute digital workspace wellness.
          </p>
        </div>

        {/* Play Store Link action */}
        <a
          href="https://play.google.com/store/apps/details?id=com.hks.cosma_launcher"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer shrink-0 inline-flex items-center gap-2.5 px-5 py-3 bg-[#0f1113] hover:bg-slate-900 text-white font-mono text-xs font-semibold rounded-2xl border border-gray-800 shadow-xl transition-all"
          id="btn-playstore-link"
        >
          <span>View on Google Play Store</span>
        </a>
      </section>

      {/* Navigation sub-tabs for product views */}
      <nav className="flex flex-nowrap overflow-x-auto bg-[#1a1d21]/50 backdrop-blur-sm border-y md:border border-x-0 md:border-x border-gray-800 p-1 rounded-none md:rounded-2xl space-x-1 shrink-0 scrollbar-none mb-6">
        <button
          onClick={() => onNavigateTab("about")}
          className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold transition-all ${
            subTab === "about"
              ? "bg-[#0f1113] text-indigo-300 border border-gray-800"
              : "text-slate-400 hover:text-white"
          }`}
          id="cosma-subtab-about"
        >
          About & Overview
        </button>
        <button
          onClick={() => onNavigateTab("privacy-policy")}
          className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold transition-all ${
            subTab === "privacy-policy"
              ? "bg-[#0f1113] text-indigo-300 border border-gray-800"
              : "text-slate-400 hover:text-white"
          }`}
          id="cosma-subtab-privacy"
        >
          Privacy Policy
        </button>
      </nav>

      {/* Render selected workspace component block */}
      <div className="px-4 md:px-0">
        {subTab === "about" && <Overview />}
        {subTab === "privacy-policy" && <PrivacyPolicy />}
      </div>
    </div>
  );
}
