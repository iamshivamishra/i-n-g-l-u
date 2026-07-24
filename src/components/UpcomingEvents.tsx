import { ArrowRight } from 'lucide-react'
import { events } from '@/data/data'

export default function UpcomingEvents() {
  return (
    <section className="px-4 lg:px-10 py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold tracking-wider text-blue-950 uppercase">
            UPCOMING EVENTS
          </h2>
          <a 
            href="#" 
            className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:gap-1.5 transition-all"
          >
            View all events <ArrowRight size={13} strokeWidth={2.5} />
          </a>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event) => {
            // Data mapping standard rakhne ke liye default dummy fallback values agar data me dynamic month na ho
            const displayDay = event.day || "25";
            const displayMonth = event.month || "JUN";
            const progressPercent = event.progress || 40; // Aap progress dynamic rakh sakte ho backend/data se

            return (
              <div
                key={event.title}
                className={`rounded-2xl bg-gradient-to-br ${event.gradient || 'from-slate-900 to-slate-950'} p-5 text-white flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group min-h-[160px]`}
              >
                {/* Visual Glow Layer behind text */}
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_60%)] z-0" />
                
                {/* Top Section: Title & Date Side-by-Side */}
                <div className="flex justify-between items-start gap-3 relative z-10 w-full">
                  <div className="flex-1">
                    <h3 className="font-extrabold text-base tracking-wide leading-tight group-hover:text-blue-200 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-[11px] text-white/70 mt-1 font-medium leading-snug line-clamp-2">
                      {event.sub}
                    </p>
                  </div>

                  {/* Glassmorphism Date Box (Right Side) */}
                  <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-2 min-w-[46px] text-center flex-shrink-0">
                    <span className="text-base font-black leading-none tracking-tight">
                      {displayDay}
                    </span>
                    <span className="text-[9px] font-bold text-white/60 tracking-wider mt-0.5 uppercase">
                      {displayMonth}
                    </span>
                  </div>
                </div>

                {/* Bottom Section: Days Left & Progress Bar */}
                <div className="relative z-10 mt-6 w-full">
                  <p className="text-[10px] text-white/60 font-semibold tracking-wide mb-2">
                    {event.daysLeft || "47 Days Left"}
                  </p>
                  
                  {/* Progress Bar Container */}
                  <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}