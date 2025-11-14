import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] w-full bg-black overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-0 h-[42rem] w-[42rem] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-0 h-[36rem] w-[36rem] bg-amber-400/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-orange-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            Powered by AI — Real‑time noise removal
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Hear only what matters.
            <span className="block bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">BDSound cuts the noise.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
            Studio‑quality voice clarity for calls, streams, and recordings. Built for creators, teams, and enterprises who demand silence when it counts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 text-black font-semibold shadow-lg shadow-orange-500/20 ring-1 ring-white/10">
              Get Started
            </a>
            <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/10 text-white hover:bg-white/5">
              Try Live Demo
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 text-white/70">
            <div>
              <p className="text-2xl font-semibold text-white">95%</p>
              <p className="text-xs">Average noise reduction</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">12ms</p>
              <p className="text-xs">Ultra‑low latency</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">24/7</p>
              <p className="text-xs">Real‑time processing</p>
            </div>
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[640px] rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
