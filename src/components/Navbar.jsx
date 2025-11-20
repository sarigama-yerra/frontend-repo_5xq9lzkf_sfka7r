import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 grid place-items-center shadow-lg shadow-blue-500/30">
            <span className="text-white font-bold">T</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">TimeGuard</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-200 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-blue-200 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-blue-200 hover:text-white transition">FAQ</a>
          <a href="#early" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Get early access</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden mx-4 rounded-xl bg-slate-800/80 backdrop-blur border border-white/10 p-4 space-y-3">
          <a href="#features" className="block text-blue-200">Features</a>
          <a href="#pricing" className="block text-blue-200">Pricing</a>
          <a href="#faq" className="block text-blue-200">FAQ</a>
          <a href="#early" className="block px-4 py-2 rounded-lg bg-white text-slate-900 font-medium text-center">Get early access</a>
        </div>
      )}
    </header>
  );
}
