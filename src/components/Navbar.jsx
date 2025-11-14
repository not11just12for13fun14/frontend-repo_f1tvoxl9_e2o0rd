import { Menu, Headphones, Waves, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 grid place-items-center ring-1 ring-white/10">
            <Waves className="h-5 w-5 text-black" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold">BDSound</p>
            <p className="text-xs text-white/50 -mt-0.5">AI Noise Reduction</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-white/70 hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 transition">
            <Sparkles className="h-4 w-4 text-orange-400" /> Try Demo
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 text-black font-semibold text-sm shadow-lg shadow-orange-500/20 ring-1 ring-white/10">
            <Headphones className="h-4 w-4" /> Get BDSound
          </a>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
