import { ArrowRight } from 'lucide-react'
import { personas } from '@/data/data'

// Map color classes matching the screenshot's soft background tones
const cardStyles = {
  STUDENT: { bg: 'bg-blue-50/60', text: 'text-blue-950', btn: 'bg-blue-600' },
  CREATOR: { bg: 'bg-teal-50/60', text: 'text-teal-950', btn: 'bg-teal-500' },
  ARTIST: { bg: 'bg-purple-50/60', text: 'text-purple-950', btn: 'bg-purple-600' },
  BRAND: { bg: 'bg-orange-50/60', text: 'text-orange-950', btn: 'bg-orange-500' },
  'COLLEGE COMMITTEE': { bg: 'bg-indigo-50/60', text: 'text-indigo-950', btn: 'bg-indigo-600' },
}

// 3D/Character Illustration images (as per the screenshot visual)
const illustrations = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80', // Student illustration/avatar
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80', // Creator avatar
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80', // Artist avatar
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', // Brand target graphic placeholder
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80', // College building illustration
]

export default function WhoAreYou() {
  return (
    <section className="px-4 lg:px-10 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-xs font-bold tracking-wider text-blue-950 mb-6 uppercase">
          WHO ARE YOU?
        </h2>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {personas.map((p, i) => {
            // Match custom styling based on persona tag/title
            const style =
              cardStyles[p.title.toUpperCase() as keyof typeof cardStyles] || {
                bg: 'bg-slate-50',
                text: 'text-slate-900',
                btn: 'bg-slate-800',
              }
            
            return (
              <div
                key={p.title}
                className={`rounded-2xl ${style.bg} p-5 pb-6 min-h-[190px] flex flex-col justify-between relative overflow-hidden group border border-slate-100 hover:shadow-sm transition-shadow duration-300`}
              >
                
                {/* Text Content (Top Left Alignment) */}
                <div className="max-w-[65%] relative z-10">
                  <h3 className={`text-base font-black tracking-wide uppercase ${style.text}`}>
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-2 leading-tight">
                    {p.desc || "Opportunities, Events & Growth"}
                  </p>
                </div>

                {/* Left Bottom Circular Button */}
                <div className="relative z-10 mt-auto">
                  <div className={`w-6 h-6 rounded-full ${style.btn} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <ArrowRight size={12} strokeWidth={3} />
                  </div>
                </div>

                {/* Right Aligned Character Illustration Overlay */}
                <div className="absolute bottom-0 right-0 w-[45%] h-[85%] z-0 overflow-hidden pointer-events-none">
                  <img 
                    src={illustrations[i]} 
                    alt={p.title} 
                    className="w-full h-full object-cover rounded-tl-2xl object-top group-hover:scale-105 transition-transform duration-500 mask-gradient"
                    style={{
                      maskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 60%, rgba(0,0,0,0))',
                      WebkitMaskImage: 'linear-gradient(to top left, rgba(0,0,0,1) 60%, rgba(0,0,0,0))'
                    }}
                  />
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}