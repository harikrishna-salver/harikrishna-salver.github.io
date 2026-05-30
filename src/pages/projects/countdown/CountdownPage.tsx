import BackButton from "../../../components/BackButton";
import Overview from "./Overview";
import PrivacyPolicy from "./PrivacyPolicy";

interface CountdownPageProps {
  subTab: "about" | "privacy-policy";
  onNavigateHome: () => void;
  onNavigateTab: (tab: string) => void;
}

export default function CountdownPage({
  subTab,
  onNavigateHome,
  onNavigateTab,
}: CountdownPageProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-0 md:px-4 py-0 md:py-10">
      {/* Action Header */}
      <div className="flex items-center gap-4 px-4 py-4 md:px-0 md:py-0 md:mb-6 shrink-0 border-b md:border-b-0 border-gray-800 bg-[#101214] md:bg-transparent">
        <BackButton onClick={onNavigateHome} id="countdown-back" />
        <div className="h-5 w-[1px] bg-gray-800" />
        <span className="text-xs font-mono text-slate-500 hidden sm:inline">
          Projects / Countdown Project Space
        </span>
      </div>

      {/* Brand space */}
      <section
        className="relative overflow-hidden rounded-none md:rounded-3xl bg-[#1a1d21] p-6 md:p-10 border-y md:border border-x-0 md:border-x border-gray-800 shadow-2xl mb-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between"
        id="countdown-brand-header"
      >
        <div className="text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-2.5">
            <h1 className="text-2xl md:text-3xl font-sans font-extrabold text-white">
              Countdown
            </h1>
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/30 font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded tracking-wide">
              Android Utility
            </span>
          </div>
          <p className="text-xs md:text-sm font-sans text-slate-400 max-w-xl">
            A beautifully designed, distraction-free countdown timer application
            for Android that helps you cherish and track your most significant
            life milestone dates and focus intervals with elegance.
          </p>
        </div>
      </section>

      {/* Navigation subtabs */}
      <nav className="flex flex-nowrap overflow-x-auto bg-[#1a1d21]/50 backdrop-blur-sm border-y md:border border-x-0 md:border-x border-gray-800 p-1 rounded-none md:rounded-2xl space-x-1 shrink-0 scrollbar-none mb-6">
        <button
          onClick={() => onNavigateTab("about")}
          className={`cursor-pointer px-4 py-2.5 rounded-xl text-xs md:text-sm font-sans font-semibold transition-all ${
            subTab === "about"
              ? "bg-[#0f1113] text-indigo-300 border border-gray-800"
              : "text-slate-400 hover:text-white"
          }`}
          id="countdown-subtab-about"
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
          id="countdown-subtab-privacy"
        >
          Privacy Policy
        </button>
      </nav>

      {/* Main body block */}
      <div className="px-4 md:px-0">
        {subTab === "about" && <Overview />}
        {subTab === "privacy-policy" && <PrivacyPolicy />}
      </div>
    </div>
  );
}
