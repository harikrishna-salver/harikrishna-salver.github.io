export default function PrivacyPolicy() {
  return (
    <main className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 md:p-10 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl w-full animate-fade-in">
      <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2.5 py-1 rounded-md mb-4">
        Effective May 2026
      </span>
      <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-white mb-6">
        Privacy & Data Security Policy
      </h2>

      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
        When managing your significant dates, tracking milestones, and setting
        focus timers, your data privacy is our absolute priority.{" "}
        <strong>Countdown</strong> is engineered as a privacy-first mobile
        utility.
      </p>

      <div className="space-y-6 text-slate-300">
        <div className="border-t border-gray-800 pt-4">
          <h3 className="text-base font-bold text-white mb-1.5">
            Strictly Local Processing
          </h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            All countdown targets, custom milestone names, set times, and
            background widget configurations are processed and written strictly
            within your device's sandbox. No third-party servers, logging
            agents, or marketing agencies have access to your events.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <h3 className="text-base font-bold text-white mb-1.5">
            Zero Tracking & Ad SDKs
          </h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            We do not integrate crash-analytics trackers or advertising networks
            that collect background metadata or build behavioral profiles around
            your timeline.
          </p>
        </div>
      </div>
    </main>
  );
}
