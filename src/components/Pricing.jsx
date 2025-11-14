export default function Pricing(){
  const plans = [
    {
      name: 'Creator',
      price: '$9',
      period: 'mo',
      features: ['Real‑time noise removal', '1 device', 'Basic profiles', 'Email support'],
      cta: 'Start Free',
      highlight: false,
    },
    {
      name: 'Studio',
      price: '$24',
      period: 'mo',
      features: ['Advanced studio profiles', 'Up to 3 devices', 'High‑resolution export', 'Priority support'],
      cta: 'Upgrade',
      highlight: true,
    },
    {
      name: 'Team',
      price: '$59',
      period: 'mo',
      features: ['All Studio features', '5 seats included', 'Admin controls', 'Single Sign‑On (SSO)'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Scale as you need. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border ${p.highlight ? 'border-orange-500/40 bg-gradient-to-b from-orange-500/10 to-white/[0.04]' : 'border-white/10 bg-white/5'} p-6 flex flex-col`}> 
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                {p.highlight && (
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                <span className="text-white/60 mb-1">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-8 inline-flex items-center justify-center px-4 py-2 rounded-md font-medium ring-1 ring-white/10 ${p.highlight ? 'bg-gradient-to-br from-orange-500 to-amber-600 text-black shadow-lg shadow-orange-500/20' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
