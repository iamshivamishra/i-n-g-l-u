'use client'
import { useRef } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { liveFeed } from '@/data/data'

const tagColors: Record<string, string> = {
  Reel: 'bg-rose-600',
  Event: 'bg-slate-800/80 backdrop-blur-sm border border-white/10',
  Opportunity: 'bg-purple-600',
}

export const images = [
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80',
]

export default function LiveFeed() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.6
        : scrollLeft + clientWidth * 0.6

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="px-4 lg:px-10 py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header (buttons yahan se hata diye) */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-wider uppercase">
            <span className="text-slate-400">LIVE </span>
            <span className="text-blue-600">FROM THE COMMUNITY</span>
          </h2>
        </div>

        {/* Wrapper for track + side buttons */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:bg-slate-50 active:scale-95 items-center justify-center transition z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {liveFeed.map((item, i) => (
              <div
                key={item.title}
                className="relative flex-shrink-0 w-[145px] sm:w-[160px] aspect-[4/4.5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer snap-start"
              >
                {/* Background Image */}
                <img
                  src={images[i] || images[0]}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Tag Component */}
                <span
                  className={`absolute top-2.5 left-2.5 ${tagColors[item.tag] || 'bg-slate-600'} text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md tracking-wide`}
                >
                  {item.tag}
                </span>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play size={12} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>

                {/* Text Titles */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="text-white text-xs font-black tracking-wide leading-tight line-clamp-2">
                    {item.title}
                  </p>
                  {item.sub && (
                    <p className="text-[9px] text-white/60 font-medium mt-0.5 uppercase tracking-tight">
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:bg-slate-50 active:scale-95 items-center justify-center transition z-10"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  )
}