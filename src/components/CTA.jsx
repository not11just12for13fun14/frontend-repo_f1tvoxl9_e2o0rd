export default function CTA(){
  return (
    <section id="cta" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">Ready for distraction‑free audio?</h3>
            <p className="text-white/70 mt-2 max-w-xl">Start with a free trial. Upgrade anytime to unlock advanced studio profiles, multi‑track support, and team features.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/10 text-white hover:bg-white/5">See Pricing</a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 text-black font-semibold shadow-lg shadow-orange-500/20 ring-1 ring-white/10">Start Free</a>
          </div>
        </div>
      </div>
    </section>
  )
}
