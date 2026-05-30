import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
  label?: string;
  id?: string;
}

export default function BackButton({
  onClick,
  label = "Back to Portfolio",
  id,
}: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1a1d21] hover:bg-slate-900 border border-gray-800 hover:border-gray-700 rounded-xl text-xs font-mono font-medium text-slate-400 hover:text-white transition-all cursor-pointer shadow-md group shrink-0"
      id={id || "btn-back-home"}
    >
      <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
      {label}
    </button>
  );
}
