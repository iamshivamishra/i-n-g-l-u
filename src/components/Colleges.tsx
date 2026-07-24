import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { COLLEGES_STATS, COLLEGES_TRANSFORMATION_CARDS, COLLEGES_WHY_PARTNER_CARDS } from '@/data/data'

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

function SectionHead({
  kicker,
  heading,
  lead,
}: {
  kicker: string
  heading: string
  lead?: string
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="inline-block text-xs font-semibold tracking-wide text-inglu-blue bg-inglu-blue/10 px-3 py-1.5 rounded-full mb-4">
        {kicker}
      </p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-inglu-ink leading-tight mb-4">
        {heading}
      </h2>
      {lead && <p className="text-slate-600 text-base leading-relaxed">{lead}</p>}
    </div>
  )
}

function CollegesHero() {
  return (
    <section className="px-4 lg:px-10 pt-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-inglu-blue via-blue-600 to-blue-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(255,255,255,0.18),transparent)]" />
        <div className="absolute -top-16 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-20 text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-xs font-semibold tracking-wide text-white px-3 py-1.5 rounded-full mb-6">
            FOR COLLEGES
          </span>

          <h1 className="text-white font-black leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
            Build the campus students remember.
          </h1>

          <p className="mt-5 text-blue-50/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Beyond academics and placements, INGLU turns your campus into a living ecosystem
            of events, societies, creators and leaders at zero cost to the institution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* FIX: YAHAN PAR MAINE INVISIBLE SPACE HATA KAR `<a` LIKH DIYA HAI */}
            <a
              href="#content"
              className="h-12 bg-white text-inglu-blue text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Partner with INGLU <ArrowRight size={16} />
            </a>
            
            <Link href="/ecosystem"
              className="h-12 border border-white/60 text-white text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              See a campus come alive <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-10 border-t border-white/15">
            {COLLEGES_STATS.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TransformationSection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="The campus transformation"
          heading="The same campus. Two completely different futures."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {COLLEGES_TRANSFORMATION_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyPartnerSection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="Why colleges partner"
          heading="It does not add an event. It compounds into a reputation."
          lead="One clear path for youth, campuses, creators and partners."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLEGES_WHY_PARTNER_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Colleges() {
  return (
    <div className="bg-white">
      <CollegesHero />
      <div id="content">
        <TransformationSection />
        <WhyPartnerSection />
      </div>
    </div>
  )
}