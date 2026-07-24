import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  ECOSYSTEM_STATS,
  ECOSYSTEM_ORBIT_ITEMS,
  ECOSYSTEM_E3_CARDS,
  ECOSYSTEM_VERTICAL_CARDS,
} from '@/data/data'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <strong className="block text-lg sm:text-xl font-extrabold text-white leading-tight">{value}</strong>
      <span className="text-xs sm:text-sm text-blue-50/80 font-medium">{label}</span>
    </div>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">
      <h3 className="text-lg font-bold text-inglu-ink mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </article>
  )
}

// Keeping SectionHead fully intact as requested
function SectionHead({
  kicker,
  heading,
  lead,
  light,
}: {
  kicker: string
  heading: string
  lead?: string
  light?: boolean
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p
        className={`inline-block text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4 ${
          light ? 'text-blue-200 bg-white/10' : 'text-inglu-blue bg-inglu-blue/10'
        }`}
      >
        {kicker}
      </p>
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 ${light ? 'text-white' : 'text-inglu-ink'}`}>
        {heading}
      </h2>
      {lead && <p className={`text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>{lead}</p>}
    </div>
  )
}

function EcosystemHero() {
  return (
    <section className="px-4 lg:px-10 pt-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-inglu-blue via-blue-600 to-blue-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(255,255,255,0.18),transparent)]" />
        <div className="absolute -top-16 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-20 text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-xs font-semibold tracking-wide text-white px-3 py-1.5 rounded-full mb-6">
            THE ECOSYSTEM
          </span>

          <h1 className="text-white font-black leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
            14 verticals. One living ecosystem.
          </h1>

          <p className="mt-5 text-blue-50/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fourteen verticals across Education, Enhancement and Entertainment, each
            strengthening the next so campus opportunities, creator economy and student
            community all compound.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* fixed: Added missing opening '<a' tag */}
            <a
              href="#content"
              className="h-12 bg-white text-inglu-blue text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore the map <ArrowRight size={16} />
            </a>
            
            {/* fixed: Added missing opening '<a' tag */}
            <a
              href="#verticals"
              className="h-12 border border-white/60 text-white text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              See every vertical <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-10 border-t border-white/15">
            {ECOSYSTEM_STATS.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
    
  )
}

// Orbit visual: E3 core in the middle, verticals arranged in a circle around it
function OrbitMapSection() {
  const radius = 42 // percentage of container
  const total = ECOSYSTEM_ORBIT_ITEMS.length

  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24 bg-inglu-ink">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="Ecosystem Map"
          heading="Everything connected. Everything compounding."
          lead="A visual system for showing how INGLU verticals feed each other through the E3 core."
          light
        />

        <div className="relative w-full max-w-xl mx-auto aspect-square">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[8%] rounded-full border border-white/5" />

          {ECOSYSTEM_ORBIT_ITEMS.map((item, i) => {
            const angle = (i / total) * 2 * Math.PI - Math.PI / 2
            const x = 50 + radius * Math.cos(angle)
            const y = 50 + radius * Math.sin(angle)
            return (
              <div
                key={item}
                className="absolute -translate-x-1/2 -translate-y-1/2 bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-full whitespace-nowrap backdrop-blur-sm hover:bg-white/20 hover:border-inglu-blue/50 transition-colors"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {item}
              </div>
            )
          })}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-inglu-blue flex items-center justify-center text-white text-2xl font-black shadow-[0_0_60px_rgba(0,0,255,0.5)]">
            E3
          </div>
        </div>
      </div>
    </section>
  )
}

function E3ModelSection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="Built on the E3 model."
          heading="Serve one and it is a feature. Serve all three and it becomes an ecosystem."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ECOSYSTEM_E3_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VerticalsSection() {
  return (
    <section id="verticals" className="px-4 lg:px-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="Every vertical"
          heading="Fifteen products. One purpose."
          lead="One clear path for youth, campuses, creators and partners."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_VERTICAL_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Ecosystem() {
  return (
    <div className="bg-white">
      <EcosystemHero />
      <div id="content">
        <OrbitMapSection />
        <E3ModelSection />
        <VerticalsSection />
      </div>
    </div>
  )
}