import { Cpu, Activity, Clock, Shield } from "lucide-react";

export default function Overview() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
      <div className="lg:col-span-2 space-y-6">
        {/* Product Hero Banner */}
        <section className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 md:p-8 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative">
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2.5 py-1 rounded-md mb-4">
              Case Study Overview
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-white mb-4 leading-snug">
              Cherish Every Second with Pure Android Elegance
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Time is our most valuable resource, yet digital calendars and
              toolkits burden us with complex scheduling interfaces and data
              tracking. <strong>Countdown</strong> offers an alternative: an
              elegant, single-purpose application designed to calculate,
              cherish, and display the countdown to crucial lifespace deadlines,
              focus slots, or milestone events with sub-millisecond precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#0f1113] border border-gray-800 rounded-2xl">
                <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Jetpack Compose Native UI
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered with declarative layout principles to render clean
                  typographic clocks, smooth sweep hands, and beautiful Material
                  3 theme colors dynamically.
                </p>
              </div>
              <div className="p-4 bg-[#0f1113] border border-gray-850 rounded-2xl">
                <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  100% Offline & Private
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your milestone parameters (personal dates, birthdays, launch
                  targets) are stored securely on-device, preserving full user
                  database integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Value */}
        <section className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl">
          <h3 className="text-lg md:text-xl font-sans font-bold text-white mb-6">
            Designed for Android Mindful Living
          </h3>

          <div className="space-y-4">
            <div className="flex gap-4 items-start pb-4 border-b border-gray-800">
              <span className="font-mono text-xs text-purple-400 mt-1">
                /01
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Highly Customizable Home Widgets
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Place minimalist widgets of different sizing grids right on
                  the launcher screen for instant date visual updates.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start pb-4 border-b border-gray-800">
              <span className="font-mono text-xs text-purple-400 mt-1">
                /02
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Dynamic Color Material Match
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Extracts active display wallpaper shades dynamically on
                  Android 12+ systems to color widgets and layouts cohesively.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tech specifications side board */}
      <div className="space-y-6">
        <section className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl">
          <h3 className="text-base font-sans font-medium text-white mb-4">
            Technical Stack Overview
          </h3>

          <ul className="space-y-3 font-mono text-xs text-slate-300">
            <li className="flex justify-between py-2 border-b border-gray-800/60">
              <span className="text-slate-500">Core Runtime</span>
              <span className="text-purple-300">Android SDK (Kotlin)</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-800/60">
              <span className="text-slate-500">UI Toolkit</span>
              <span className="text-indigo-300">Jetpack Compose / M3</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-800/60">
              <span className="text-slate-500">Local Persistence</span>
              <span className="text-purple-300">Room SQLite / Proto DS</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
