'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  /** e.g. "1000+", "500+", "1L+", "5+" */
  value: string
  duration?: number // ms
}

// Splits "1000+" -> { number: 1000, suffix: "+" }, "1L+" -> { number: 1, suffix: "L+" }
function parseValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/)
  if (!match) return { number: 0, suffix: value }
  return { number: parseFloat(match[1]), suffix: match[2] }
}

export function AnimatedCounter({ value, duration = 1800 }: AnimatedCounterProps) {
  const { number, suffix } = parseValue(value)
  const isDecimal = !Number.isInteger(number)
  const [count, setCount] = useState(0)
  const spanRef = useRef<HTMLParagraphElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setCount(eased * number)

            if (progress < 1) {
              requestAnimationFrame(tick)
            } else {
              setCount(number)
            }
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [number, duration])

  const display = isDecimal ? count.toFixed(1) : Math.floor(count)

  return (
    <p ref={spanRef} className="text-xl font-extrabold text-inglu-ink">
      {display}
      {suffix}
    </p>
  )
}