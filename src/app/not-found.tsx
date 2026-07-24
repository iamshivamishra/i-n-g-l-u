import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-inglu-blue mb-3">404</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-inglu-ink mb-4">
        Page not found
      </h1>
      <p className="text-slate-600 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="h-12 bg-inglu-blue text-white text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        Back to home
      </Link>
    </div>
  )
}
