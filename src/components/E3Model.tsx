import { 
  GraduationCap, 
  Sparkles, 
  Music2, 
  CalendarDays, 
  Users, 
  Award, 
  Plane, 
  Gamepad2, 
  ArrowRight 
} from 'lucide-react'
import { e3Model, subBrands } from '@/data/data'

const cardIcons = [GraduationCap, Sparkles, Music2]

// Sub-brands icons mapping
const pillIcons = [
  GraduationCap, // INGLU Education
  Music2,        // Muse Records
  CalendarDays,  // INGLU Events
  Sparkles,      // INGLU Creators
  Users,         // Crew Connect
  Award,         // Coll-Edge Connect
  Plane,         // INGLU Travels
  Gamepad2       // INGLU Esports
]

export default function E3Model() {
  return (
    <section className="px-4 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold tracking-wider text-slate-400 mb-6">OUR E³ MODEL</p>

        {/* E3 Model Grid */}
        <div className="grid sm:grid-cols-3 gap-5">
          {e3Model.map((item, i) => {
            const Icon = cardIcons[i]
            return (
              <div
                key={item.title}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 text-white relative overflow-hidden min-h-[150px] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold tracking-wide">{item.title}</h3>
                </div>
                <p className="text-sm text-white/85 mt-3">{item.desc}</p>
                <button className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <ArrowRight size={15} />
                </button>
              </div>
            )
          })}
        </div>

        {/* 
          All sub-brand cards in a single, unbreakable line.
          - md:flex-wrap ensures they fit nicely on desktop.
          - max-md:overflow-x-auto allows horizontal swiping on mobile.
        */}
        <div className="mt-10 flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none">
          {subBrands.map((brand, i) => {
            const Icon = pillIcons[i] || Sparkles
            // Emojis clean-up
            const cleanBrandName = brand.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '').trim()
            const isActive = cleanBrandName === 'INGLU Events'

            return (
              <div
                key={brand}
                className={`flex flex-col items-center justify-center text-center p-4 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 min-w-[125px] sm:min-w-[135px] flex-shrink-0 ${
                  isActive
                    ? 'border-rose-300 text-rose-600 bg-rose-50/50'
                    : 'border-slate-100 text-slate-700 bg-white'
                }`}
              >
                {/* Upper Large Icon */}
                <div 
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-transform duration-300 ${
                    isActive ? 'bg-rose-100 text-rose-600' : 'bg-slate-50 text-slate-500'
                  }`}
                >
                  <Icon size={22} className="stroke-[1.8]" />
                </div>

                {/* Bottom Text (No word wrapping for names) */}
                <span className="text-[11px] font-bold leading-tight tracking-tight whitespace-nowrap">
                  {cleanBrandName}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}