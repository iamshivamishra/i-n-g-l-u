import { Play, Sparkles, Users2, TrendingUp } from 'lucide-react'

export default function WhatIsInglu() {
  return (
    <section className="px-4 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-bold tracking-wider text-inglu-blue mb-3">WHAT IS INGLU?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-inglu-ink">
            The Operating System
            <br />
            For <span className="text-inglu-blue">Global Youth</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-md">
            INGLU is India's largest youth ecosystem that creates opportunities, experiences and impact across
            education, entertainment, careers and communities.
          </p>
          <a href="#" className="inline-flex items-center gap-1.5 mt-5 text-inglu-blue font-semibold text-sm hover:gap-2.5 transition-all">
            Know more about us <span aria-hidden>→</span>
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=60"
            alt="Youth community gathering"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play size={22} className="fill-inglu-ink text-inglu-ink ml-0.5" />
            </button>
          </div>

          {/* floating pills */}
          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
            <Sparkles size={12} /> Opportunities
          </span>
          <span className="absolute top-16 right-6 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
            <Users2 size={12} /> Community
          </span>
          <span className="absolute bottom-4 right-4 bg-inglu-blue text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
            <TrendingUp size={12} /> Growth
          </span>
        </div>
      </div>
    </section>
  )
}
