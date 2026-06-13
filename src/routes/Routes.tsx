import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CosmaLauncherPage from "../pages/projects/cosmaLauncher/CosmaLauncherPage";
import CountdownPage from "../pages/projects/countdown/CountdownPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function CosmaLauncherWrapper() {
  const navigate = useNavigate();
  const { tab = "about" } = useParams();
  const activeTab = tab === "about" || tab === "privacy-policy" ? tab : "about";

  return (
    <CosmaLauncherPage
      subTab={activeTab}
      onNavigateHome={() => navigate("/")}
      onNavigateTab={(newTab) => navigate(`/projects/cosma-launcher/${newTab}`)}
    />
  );
}

function CountdownWrapper() {
  const navigate = useNavigate();
  const { tab = "about" } = useParams();

  return (
    <CountdownPage
      subTab={tab as any}
      onNavigateHome={() => navigate("/")}
      onNavigateTab={(newTab) => navigate(`/projects/countdown/${newTab}`)}
    />
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/projects/cosma-launcher"
        element={<CosmaLauncherWrapper />}
      />
      <Route
        path="/projects/cosma-launcher/:tab"
        element={<CosmaLauncherWrapper />}
      />
      <Route path="/projects/countdown" element={<CountdownWrapper />} />
      <Route path="/projects/countdown/:tab" element={<CountdownWrapper />} />
      {/* Fallback route */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0f1113] text-[#e2e8f0] selection:bg-indigo-500/30 selection:text-indigo-200">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
