import { Shield, Mic, Gauge, Waves, Sparkles } from 'lucide-react'

export default function Features(){
  const features = [
    {
      icon: <Mic className="h-5 w-5" />, 
      title: 'Crystal‑clear voice',
      desc: 'AI separates speech from background noise to keep voices crisp in any environment.'
    },
    {
      icon: <Shield className="h-5 w-5" />, 
      title: 'Enterprise‑grade privacy',
      desc: 'On‑device and encrypted processing options. Your audio stays yours.'
    },
    {
      icon: <Gauge className="h-5 w-5" />, 
      title: 'Ultra‑low latency',
      desc: 'Optimized pipeline delivers sub‑frame delay for live calls and streams.'
    },
    {
      icon: <Waves className="h-5 w-5" />, 
      title: 'Adaptive to any noise',
      desc: 'From keyboards to traffic, our model learns and adapts to complex soundscapes.'
    },
  ]

  return (
    <section id="features" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-orange-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-orange-300" /> Why BDSound
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Silence the chaos. Amplify the message.</h2>
          <p className="mt-3 text-white/70">Purpose‑built AI for removing noise while preserving the natural tone of your voice.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 text-black grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-white/70 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
