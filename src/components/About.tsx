import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { GLANCE_STATS, ECOSYSTEM_CARDS, WHY_IT_MATTERS_CARDS, STORY_CARDS } from '@/data/data'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <strong className="block text-2xl sm:text-3xl font-extrabold text-white">{value}</strong>
      <span className="text-xs sm:text-sm text-blue-50/80 font-medium">{label}</span>
    </div>
  )
}

function Card({ icon: Icon, title, body }: { icon?: LucideIcon; title: string; body: string }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">
      {Icon && (
        <div className="w-11 h-11 rounded-xl bg-inglu-blue/10 flex items-center justify-center mb-4">
          <Icon size={20} className="text-inglu-blue" />
        </div>
      )}
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

function AboutHero() {
  return (
    <section className="px-4 lg:px-10 pt-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-inglu-blue via-blue-600 to-blue-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(255,255,255,0.18),transparent)]" />
        <div className="absolute -top-16 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-20 text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-xs font-semibold tracking-wide text-white px-3 py-1.5 rounded-full mb-6">
            ABOUT INGLU GLOBAL
          </span>

          <h1 className="text-white font-black leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
            The next generation needs more than a degree.
          </h1>

          <p className="mt-5 text-blue-50/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            INGLU is a global youth ecosystem connecting students, creators, campuses, brands
            and opportunities through education, enhancement and entertainment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/for-students"
              className="h-12 bg-white text-inglu-blue text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              For Youth <ArrowRight size={16} />
            </Link>
            <Link href="/for-brands"
              className="h-12 border border-white/60 text-white text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              For Brands <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-10 border-t border-white/15">
            {GLANCE_STATS.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EcosystemSection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="One ecosystem. Five ways in."
          heading="Not a marketing agency, a creator platform or an event company. All three, connected."
          lead="One clear path for youth, campuses, creators and brand partners."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOSYSTEM_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyItMattersSection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="Why it matters"
          heading="India's most ambitious generation grew up disconnected from opportunities meant for them."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WHY_IT_MATTERS_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="The story"
          heading="Since 2017, INGLU has grown from campus communities into a national youth ecosystem."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {STORY_CARDS.map((card, i) => (
            <div key={card.title} className="relative pl-6">
              <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-inglu-blue" />
              {i !== STORY_CARDS.length - 1 && (
                <div className="hidden sm:block absolute left-[4px] top-4 w-px h-full bg-slate-200" />
              )}
              <h3 className="text-lg font-bold text-inglu-ink mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <div className="bg-white">
      <AboutHero />
      <EcosystemSection />
      <WhyItMattersSection />
      <StorySection />
    </div>
  )
}