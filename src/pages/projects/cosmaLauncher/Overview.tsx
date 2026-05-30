import { Smartphone, Terminal } from "lucide-react";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
      {/* Left Column Detail Panel */}
      <div className="lg:col-span-2 space-y-6">
        {/* Product Hero Banner */}
        <section className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 md:p-8 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative">
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-950/40 border border-indigo-900/40 px-2.5 py-1 rounded-md mb-4">
              Case Study Overview
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-white mb-4 leading-snug">
              "Content-First" Minimalism Meets Dynamic Personalization
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Cosma Launcher is an adversarial response to the modern "attention
              economy" of smartphones. By replacing cluttered, trigger-heavy
              home screens with a clean, grid-based workspace and a transparent
              UI that respects the system wallpaper, it transforms your primary
              device into a focused tool. It emphasizes cognitive clarity
              through unified icon shapes, monochrome color palettes, and
              sub-millisecond tactile responsiveness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#0f1113] border border-gray-800 rounded-2xl">
                <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  Visual Unity & Focus
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Presents a unified aesthetic where every application is
                  reconciled into a consistent geometric shape (Circle, Square,
                  Squircle), eliminating visual noise and reducing subconscious
                  inspection urges.
                </p>
              </div>
              <div className="p-4 bg-[#0f1113] border border-gray-800 rounded-2xl">
                <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Gesture Orchestration
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-performance fling handlers integrated into a
                  Single-Activity architecture provide instant accessibility to
                  the App Drawer and system notification shade with zero-lag
                  transitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Feature Index */}
        <section className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl">
          <h3 className="text-lg md:text-xl font-sans font-bold text-white mb-6">
            Core Product Features
          </h3>

          <div className="space-y-4">
            <div className="flex gap-4 items-start pb-4 border-b border-gray-800 font-sans">
              <span className="font-mono text-xs text-indigo-400 mt-1">
                /01
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  User-Centric Layout Engine
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  A fully configurable grid system (3x3 to 10x6) allowing users
                  to intentionally build their workspace. Includes a
                  horizontal-paging dock for high-frequency tools and adaptive
                  folder previews for deep organization.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start pb-4 border-b border-gray-800 font-sans">
              <span className="font-mono text-xs text-indigo-400 mt-1">
                /02
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Adaptive Transparency Layout
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Utilizes a sophisticated "WindowShowWallpaper" theme
                  integration. Features customizable drawer backgrounds with
                  granular opacity control to minimize blue-light stress while
                  maintaining a deep connection to the user's chosen visual
                  environment.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start font-sans">
              <span className="font-mono text-xs text-indigo-400 mt-1">
                /03
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Offline-First Private Infrastructure
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Zero telemetry and zero external profiling. Your application
                  indexes, custom layouts, and UI preferences are managed
                  locally via Jetpack DataStore and never leave the device’s
                  secure workspace storage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column Specs Block */}
      <div className="space-y-6">
        <section className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl">
          <h3 className="text-base font-sans font-medium text-white mb-4">
            Engineering Specs
          </h3>

          <ul className="space-y-3 font-mono text-xs text-slate-300">
            <li className="flex justify-between py-2 border-b border-gray-800/60">
              <span className="text-slate-500">Framework</span>
              <span className="text-indigo-300">Jetpack Compose (1.7+)</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-800/60">
              <span className="text-slate-500">Native Core</span>
              <span className="text-purple-300">Android SDK (Kotlin 2.0+)</span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-800/60">
              <span className="text-slate-550">Memory Footprint</span>
              <span className="text-emerald-400">
                &lt; 28 MB RAM (AppIconCache)
              </span>
            </li>
            <li className="flex justify-between py-2 border-b border-gray-800/60">
              <span className="text-slate-550">Offline Target</span>
              <span className="text-slate-100">
                100% Local (DataStore / ProtoBuf)
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl">
          <h3 className="text-base font-sans font-medium text-white mb-3">
            Key Design Deliverables
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Custom built for digital minimalists and power users alike,
            prioritizing "lift-to-launch" efficiency while selectively
            minimizing accessibility friction through menu-driven interactions.
          </p>
          <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-4">
            <span className="block text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Project Reach
            </span>
            <p className="text-sm font-sans font-bold text-white mt-1">
              Growing Community
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Designed for a community advocating for robust digital wellness
              and intentional smartphone usage.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
