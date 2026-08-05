import { Calendar, Building2, Tag, Users, Globe } from 'lucide-react'
import { stats } from '@/data/data'
import { AnimatedCounter } from './Animatedcounter'

const icons = [Calendar, Building2, Tag, Users, Globe]

export default function StatsBar() {
  return (
    <div>
      <br />
      <br />
    <section className="px-4 lg:px-10 -mt-7 relative z-10">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-slate-100">
        {stats.map((stat, i) => {
          const Icon = icons[i]
          return (
            <div key={stat.label} className="flex flex-col items-center text-center px-4 py-6 gap-1.5">
              <Icon size={20} className="text-inglu-blue mb-1" />
              <AnimatedCounter value={stat.value} />
              <p className="text-[11px] font-bold tracking-wide text-slate-700">{stat.label}</p>
              <p className="text-[11px] text-slate-400">{stat.sub}</p>
            </div>
          )
        })}
      </div>
    </section>
    </div>
  )
}