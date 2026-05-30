export default function PrivacyPolicy() {
  return (
    <main className="bg-[#1a1d21] rounded-none md:rounded-3xl p-6 md:p-10 border-y md:border border-x-0 md:border-x border-gray-800 shadow-xl w-full animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <span className="self-start inline-block text-[10px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-950/40 border border-indigo-900/40 px-2.5 py-1 rounded-md">
          Last updated: May 22, 2026
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-sans font-extrabold text-white mb-6">
        Privacy Policy
      </h2>

      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
        HK Tech&Dev (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
        operates the Cosma Launcher mobile application (the
        &ldquo;Service&rdquo;). This page informs you of our policies regarding
        the collection, use, and disclosure of personal data when you use our
        Service and choices you have associated with that data.
      </p>

      <div className="space-y-8 font-sans text-slate-300">
        <div className="border-t border-gray-800/80 pt-6">
          <h3 className="text-base md:text-lg font-bold text-white mb-3">
            1. Information Collection and Use
          </h3>
          <p className="text-xs md:text-sm text-slate-350 leading-relaxed mb-4">
            Cosma Launcher is designed as a &ldquo;content-first&rdquo;,
            minimalist home screen. We prioritize user privacy and aim to
            collect as little data as possible.
          </p>

          <h4 className="text-xs font-mono text-indigo-300 uppercase tracking-wider font-semibold mb-2">
            Local Data Processing
          </h4>
          <p className="text-xs md:text-sm text-slate-355 leading-relaxed mb-4">
            Most information processed by Cosma Launcher stays on your device
            and is not transmitted to our servers:
          </p>
          <ul className="list-disc pl-5 text-xs md:text-sm text-slate-350 space-y-3">
            <li>
              <strong className="text-slate-200">
                Installed Applications:
              </strong>{" "}
              We access the list of applications installed on your device to
              display them in the App Drawer and Home Screen. This information
              is used strictly for the functional purpose of launching your
              apps.
            </li>
            <li>
              <strong className="text-slate-200">User Preferences:</strong> Your
              launcher settings (grid size, icon shapes, colors) are stored
              locally using Android Jetpack DataStore.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800/80 pt-6">
          <h3 className="text-base md:text-lg font-bold text-white mb-3">
            2. Permissions
          </h3>
          <p className="text-xs md:text-sm text-slate-350 leading-relaxed mb-4">
            To provide its core functionality, Cosma Launcher requires the
            following permissions:
          </p>
          <ul className="list-disc pl-5 text-xs md:text-sm text-slate-350 space-y-3 font-mono">
            <li>
              <strong className="text-slate-200 font-sans">
                QUERY_ALL_PACKAGES:
              </strong>{" "}
              Necessary to discover and display your installed applications.
            </li>
            <li>
              <strong className="text-slate-200 font-sans">
                REQUEST_DELETE_PACKAGES:
              </strong>{" "}
              Used only when you explicitly choose to uninstall an app from
              within the launcher&apos;s context menu.
            </li>
            <li>
              <strong className="text-slate-200 font-sans">
                SET_WALLPAPER:
              </strong>{" "}
              Allows you to trigger the system wallpaper selection process from
              settings.
            </li>
            <li>
              <strong className="text-slate-200 font-sans">
                EXPAND_STATUS_BAR:
              </strong>{" "}
              Used for the swipe-down gesture to expand your notification shade.
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-800/80 pt-6">
          <h3 className="text-base md:text-lg font-bold text-white mb-2">
            3. Third-Party Services
          </h3>
          <p className="text-xs md:text-sm text-slate-350 leading-relaxed">
            We do not use third-party analytics or advertising SDKs that collect
            personal identifiers or track behavior across other apps.
          </p>
        </div>

        <div className="border-t border-gray-800/80 pt-6">
          <h3 className="text-base md:text-lg font-bold text-white mb-2">
            4. Data Security
          </h3>
          <p className="text-xs md:text-sm text-slate-350 leading-relaxed">
            The security of your data is important to us, but remember that no
            method of transmission over the Internet is 100% secure. Since we
            store your preferences locally, your data is protected by standard
            security measures of the Android OS.
          </p>
        </div>

        <div className="border-t border-gray-800/80 pt-6">
          <h3 className="text-base md:text-lg font-bold text-white mb-2">
            5. Changes to This Privacy Policy
          </h3>
          <p className="text-xs md:text-sm text-slate-350 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &ldquo;Last updated&rdquo; date at the top.
          </p>
        </div>

        <div className="border-t border-gray-800/80 pt-6">
          <h3 className="text-base md:text-lg font-bold text-white mb-3">
            6. Contact Us
          </h3>
          <p className="text-xs md:text-sm text-slate-350 leading-relaxed mb-3">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="list-disc pl-5 text-xs md:text-sm text-slate-350">
            <li>
              By email:{" "}
              <a
                href="mailto:hk.tech.and.dev@gmail.com"
                className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors"
              >
                hk.tech.and.dev@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
