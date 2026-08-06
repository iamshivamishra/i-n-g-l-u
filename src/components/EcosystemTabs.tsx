'use client'
import { useState } from 'react'
import { Briefcase, CalendarDays, Network, BookOpen, Users2, TrendingUp } from 'lucide-react'
import { ecosystemTabs, ecosystemItemsByTab } from '@/data/data'

const itemIcons = [Briefcase, CalendarDays, Network, BookOpen, Users2, TrendingUp]

export default function EcosystemTabs() {
  const [active, setActive] = useState('For Students')
  const activeItems = ecosystemItemsByTab[active] ?? []

  return (
    <section className="px-4 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-2xl p-6 lg:p-10">
        <p className="text-xs font-bold tracking-wider text-slate-400 mb-5 text-center">
          AN ECOSYSTEM FOR EVERYONE
        </p>

        <div className="flex justify-start sm:justify-center items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-7 w-full max-w-4xl mx-auto">
          {ecosystemTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                active === tab
                  ? 'bg-inglu-blue text-white shadow-sm'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {activeItems.map((item, i) => {
            const Icon = itemIcons[i % itemIcons.length]
            return (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-sm transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <Icon size={16} className="text-inglu-blue" />
                </div>
                <p className="text-sm font-bold text-inglu-ink">{item.title}</p>
                <p className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}