import Link from 'next/link'
import { SITEMAP_LINKS } from '@/data/data'

export default function Sitemap() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="inline-block text-xs font-semibold tracking-wide text-inglu-blue bg-inglu-blue/10 px-3 py-1.5 rounded-full mb-4">
            Explore INGLU
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-inglu-ink leading-tight mb-4">
            Every doorway into the youth ecosystem.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Students, brands, creators, campuses, artists and partners all enter through
            one connected INGLU network.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {SITEMAP_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-full hover:text-inglu-blue hover:border-inglu-blue/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}