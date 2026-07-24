'use client'
import { useRef } from 'react'
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { successStories } from '@/data/data'

const tagColors: Record<string, string> = {
  STUDENT: 'bg-blue-600',
  CREATOR: 'bg-emerald-500',
  COLLEGE: 'bg-purple-600',
  BRAND: 'bg-orange-500',
  EVENT: 'bg-rose-500',
}

const images = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=60',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&q=60',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=60',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&q=60',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=60',
]

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="px-4 lg:px-10 py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative group/nav">

        {/* Header (buttons hata diye yahan se) */}
        <div className="mb-6">
          <h2 className="text-xs font-bold tracking-wider text-blue-950 uppercase">
            SUCCESS STORIES THAT INSPIRE
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

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {successStories.map((story, i) => (
              <div
                key={story.name}
                className="w-[280px] sm:w-[300px] flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
              >
                {/* Media Section (Top) */}
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-900">
                  <img
                    src={images[i]}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  <span className={`absolute top-3 left-3 ${tagColors[story.tag]} text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-wide`}>
                    {story.tag}
                  </span>

                  {story.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={16} fill="white" className="ml-0.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Content Section (Bottom) */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">
                      {story.headline}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                      {story.desc}
                    </p>
                  </div>

                  {/* Footer Section */}
                  <div className="flex items-end justify-between mt-6 pt-3 border-t border-slate-50">
                    <div>
                      <p className={`text-xs font-bold ${tagColors[story.tag].replace('bg-', 'text-')}`}>
                        {story.name}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                        {story.sub}
                      </p>
                    </div>

                    <button className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors flex-shrink-0">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </button>
                  </div>
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