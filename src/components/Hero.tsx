'use client'
import { useRef, useState } from 'react'
import { Play, ThumbsUp, MessageCircle, Share2, Bookmark, Search, MoreVertical, Sparkles, Globe2, Share2 as ShareIcon } from 'lucide-react'

const YOUTUBE_VIDEO_ID = 'UUxRK9Nk4v0'

// Subtle grain texture as a data-uri SVG (no network request, no external asset)
const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

interface Tilt {
  x: number
  y: number
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: px, y: py })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section className="px-4 lg:px-10 pt-6 relative z-20">
     <div
  ref={sectionRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  className="max-w-7xl mx-auto relative isolate overflow-hidden rounded-3xl"
>
        {/* ---- background layer (clipped to rounded corners) ---- */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-inglu-blue via-blue-600 to-blue-500">
          {/* soft radial glow washes */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(255,255,255,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_60%_at_15%_85%,rgba(10,20,80,0.25),transparent)]" />

          {/* blur circles */}
          <div className="absolute -top-16 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-[28%] w-64 h-64 bg-sky-300/25 rounded-full blur-[80px]" />
          <div className="absolute top-8 left-[12%] w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          {/* glow directly behind the phone */}
          <div className="absolute right-[4%] lg:right-[4%] top-1/2 -translate-y-1/2 w-[440px] h-[440px] bg-blue-300/35 rounded-full blur-[110px]" />

          {/* subtle grain */}
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: GRAIN_BG }}
          />
        </div>

        {/* ---- content layer (NOT clipped, so the phone can overlap the stats bar) ---- */}
        <div className="relative z-10 flex items-center min-h-0 lg:min-h-[540px] xl:min-h-[600px] px-6 sm:px-10 lg:px-16 py-8 lg:py-10">
          <div className="grid lg:grid-cols-[55%_45%] gap-y-14 gap-x-4 items-center w-full">
            {/* ---- left copy ---- */}
            <div className="text-white animate-hero-fade-up">
              <span className="inline-block bg-white/15 border border-white/25 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6">
                INDIA'S #1 YOUTH ECOSYSTEM
              </span>

               <h1 className="font-black leading-[0.92] tracking-tight">
  <span className="text-[28px] sm:text-[38px] lg:text-[50px] xl:text-[58px] whitespace-nowrap block">
    INDIA'S
  </span>
  <span className="text-[28px] sm:text-[38px] lg:text-[50px] xl:text-[58px] whitespace-nowrap block">
    FASTEST GROWING
  </span>
  <span className="text-[28px] sm:text-[38px] lg:text-[50px] xl:text-[58px] whitespace-nowrap block">
    GLOBAL YOUTH
  </span>
  <span
  className="italic font-black text-transparent inline-block text-[42px] sm:text-[56px] lg:text-[72px] xl:text-[86px]"
  style={{
    WebkitTextStroke: '2.5px rgba(255,255,255,.35)',
    marginTop: '-4px',
  }}
>
  Community
</span>
</h1>
               
              <p className="mt-5 text-blue-50/90 text-sm sm:text-base max-w-md leading-relaxed">
                Building opportunities, experiences, leadership <br /> and growth for the next generation.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <button className="h-12 bg-[#0000FF] text-white text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:bg-[#0000CC] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
  For Youth <span aria-hidden>→</span>
</button>
                <button className="h-12 border border-white/60 text-white text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              For Brands <span aria-hidden>→</span>
             </button>
             {/* hand-drawn squiggly arrow, matching reference style */}
<svg
  className="hidden lg:block opacity-90 flex-shrink-0"
  width="100"
  height="55"
  viewBox="0 0 100 55"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* arrowhead pointing up-left */}
  <path
    d="M28 8 L8 14 L18 26"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
  {/* curvy tail from arrowhead into a loop */}
  <path
    d="M9 15 C 35 12, 55 22, 62 32 C 68 41, 58 50, 48 46 C 40 43, 42 33, 52 30 C 62 27, 78 32, 90 40"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    fill="none"
  />
</svg>
              </div>
            </div>

            {/* ---- right: phone mockup ---- */}
            <div className="relative flex justify-center lg:justify-end translate-y-[40px] sm:translate-y-[60px] lg:translate-x-[-60px] lg:translate-y-[80px]">


              <FloatingIcon
  className="absolute -top-6 left-[38%] lg:left-[42%]"
  anim="animate-hero-float-a"
  delay="0s"
  ring="ring-purple-100"
  size="w-14 h-14"
  tilt={tilt}
  strength={22}
>
  <Sparkles size={22} className="text-purple-500" />
</FloatingIcon>

<FloatingIcon
  className="absolute top-[38%] -left-6 lg:-left-14"
  anim="animate-hero-float-b"
  delay="0.4s"
  ring="ring-blue-100"
  size="w-12 h-12"
  tilt={tilt}
  strength={14}
>
  <Globe2 size={20} className="text-blue-500" />
</FloatingIcon>

<FloatingIcon
  className="absolute top-[62%] -right-6 lg:-right-10"
  anim="animate-hero-float-a"
  delay="0.8s"
  ring="ring-teal-100"
  size="w-14 h-14"
  tilt={tilt}
  strength={18}
>
  <ShareIcon size={22} className="text-teal-500" />
</FloatingIcon>

<FloatingIcon
  className="absolute bottom-2 -left-4 lg:-left-12"
  anim="animate-hero-float-b"
  delay="1.2s"
  ring="ring-teal-100"
  size="w-13 h-13"
  tilt={tilt}
  strength={16}
>
  <Globe2 size={20} className="text-teal-600" />
</FloatingIcon>





              <div
                className="relative animate-hero-float-phone will-change-transform"
                style={{
                  transform: `translate(${tilt.x * 10}px, ${tilt.y * 10}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* soft large shadow + blue glow, premium product-photography feel */}
                <div className="absolute inset-x-6 -bottom-6 h-16 bg-black/30 blur-2xl rounded-full" />
                <div className="absolute -inset-6 bg-blue-400/25 blur-3xl rounded-[3rem]" />

                <div className="relative">
                  <PhoneMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FloatingIconProps {
  children: React.ReactNode
  className?: string
  anim: string
  delay: string
  ring: string
  size: string
  tilt: Tilt
  strength: number
}

function FloatingIcon({ children, className, anim, delay, ring, size, tilt, strength }: FloatingIconProps) {
  return (
    <div
      className={`hidden sm:flex ${size} rounded-full bg-white shadow-lg items-center justify-center ${anim} ring-4 ${ring} ${className}`}
      style={{
        animationDelay: delay,
        transform: `translate(${tilt.x * strength}px, ${tilt.y * strength}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
    </div>
  )
}

function PhoneMockup() {
  const [playing, setPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`

  return (
    <div
          className="relative w-[290px] sm:w-[340px] lg:w-[375px] xl:w-[400px] rounded-t-[3.2rem] rounded-b-none bg-gradient-to-b from-neutral-100 to-neutral-300 p-[3px]"
  style={{
    boxShadow: '0 60px 100px rgba(10,20,60,0.35)',
  }}
    >
      {/* side buttons for the iPhone look */}
      <div className="absolute -left-[3px] top-[92px] w-[3px] h-8 bg-neutral-400 rounded-l-sm" />
      <div className="absolute -left-[3px] top-[136px] w-[3px] h-14 bg-neutral-400 rounded-l-sm" />
      <div className="absolute -left-[3px] top-[196px] w-[3px] h-14 bg-neutral-400 rounded-l-sm" />
      <div className="absolute -right-[3px] top-[150px] w-[3px] h-20 bg-neutral-400 rounded-r-sm" />

      <div className="rounded-t-[3rem] rounded-b-none bg-black p-2.5">
        <div className="relative rounded-t-[2.6rem] rounded-b-none overflow-hidden bg-black">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[104px] h-[30px] bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 ring-1 ring-neutral-700" />
          </div>

          {/* status bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3.5 pb-1 text-white text-[13px] font-semibold">
            <span>9:41</span>
            <div className="flex gap-1.5 items-center">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <path d="M1 4a7 7 0 0114.4 0M3.4 6.4a4 4 0 019.6 0M6 8.8a1.5 1.5 0 013 0" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
              </svg>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <rect x="1" y="6" width="2.5" height="5" rx="0.5" fill="white" />
                <rect x="5" y="4" width="2.5" height="7" rx="0.5" fill="white" />
                <rect x="9" y="2" width="2.5" height="9" rx="0.5" fill="white" />
                <rect x="13" y="0.5" width="2.5" height="10.5" rx="0.5" fill="white" fillOpacity="0.4" />
              </svg>
              <span className="w-6 h-3 border border-white rounded-[3px] relative flex items-center px-[1.5px]">
                <span className="block w-full h-[6px] bg-white rounded-[1px]" />
              </span>
            </div>
          </div>

          {/* app bar */}
          <div className="relative z-20 flex items-center justify-between px-4 py-2.5 bg-black text-white">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 28 20" className="w-5 h-4" aria-hidden>
                <rect width="28" height="20" rx="5" fill="#FF0000" />
                <path d="M11 6l8 4-8 4V6z" fill="white" />
              </svg>
              <span className="text-[14px] font-semibold">INGLU Global</span>
            </div>
            <div className="flex gap-3 text-white/80">
              <Search size={15} />
              <MoreVertical size={15} />
            </div>
          </div>

          {/* video player */}
          <div className="relative aspect-[16/9] bg-black">
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="INGLU — Empowering Youth, Building Impact."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play video"
              >
                <img
                  src={thumbnailUrl}
                  alt="INGLU video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-[52px] rounded-2xl bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play size={24} className="text-white fill-white ml-0.5" />
                  </div>
                </div>
                {/* bottom progress bar look */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                  <div className="h-full w-0 bg-red-600" />
                </div>
              </button>
            )}
          </div>

          {/* meta */}
          <div className="bg-black text-white px-4 py-3">
            <p className="text-[15px] font-semibold leading-tight">
              INGLU — Empowering Youth, Building Impact.
            </p>
            <p className="text-[12px] text-white/50 mt-1">11K views • 2 days ago</p>

            <div className="flex items-center gap-4 mt-2.5 text-white/70 text-[12px]">
              <span className="flex items-center gap-1.5"><ThumbsUp size={15} /> 221</span>
              <span className="flex items-center gap-1.5"><MessageCircle size={15} /> 12</span>
              <span className="flex items-center gap-1.5"><Share2 size={15} /> Share</span>
              <span className="flex items-center gap-1.5"><Bookmark size={15} /> Save</span>
            </div>

            <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-500" />
                <div>
                  <p className="text-[12px] font-medium">INGLU Global</p>
                  <p className="text-[11px] text-white/40">150K subscribers</p>
                </div>
              </div>
              <span className="bg-red-600 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-md">
                Subscribe
              </span>
            </div>
          </div>

          {/* home indicator (bottom gesture bar) */}
          <div className="relative z-20 flex justify-center py-2 bg-black">
            <div className="w-32 h-1 rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  )
}