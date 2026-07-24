// BrandsStrip.jsx
'use client'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { brands } from '@/data/data'

export default function BrandsStrip() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Custom smooth scroll with easing
  const smoothScrollBy = (element: HTMLDivElement, distance: number, duration = 500) => {
    const start = element.scrollLeft
    const startTime = performance.now()

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = easeInOutQuad(progress)

      element.scrollLeft = start + distance * ease

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      smoothScrollBy(
        scrollRef.current,
        direction === 'left' ? -scrollAmount : scrollAmount,
        600
      )
    }
  }

  return (
    <section className="px-4 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto">
          <h1 className="font-bold tracking-wider text-slate-400 mb-6 text-center sm:text-left ">TRUSTED BY LEADING BRANDS</h1>

        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 active:scale-95 transition shrink-0 mr-3 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-slate-500" />
          </button>  

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex items-center gap-x-16 overflow-x-auto no-scrollbar py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {brands.map((brand) => (
              <img
                key={brand.name}
                src={brand.logo}
                alt={brand.name}
                className="h-14 sm:h-16 lg:h-20 w-auto max-w-[140px] object-contain shrink-0"
                loading="lazy"
              />
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 active:scale-95 transition shrink-0 ml-3 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </div>
    </section>
  )
}