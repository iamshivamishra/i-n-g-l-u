'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { CONTACT_STATS, CONTACT_REACH_CARDS, CONTACT_FAQ_CARDS, CONTACT_ROLE_OPTIONS } from '@/data/data'
import { submitForm } from '@/actions/forms'
import { toast } from '@/components/Toast'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <strong className="block text-lg sm:text-xl font-extrabold text-white leading-tight">{value}</strong>
      <span className="text-xs sm:text-sm text-blue-50/80 font-medium">{label}</span>
    </div>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">
      <h3 className="text-lg font-bold text-inglu-ink mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </article>
  )
}

function SectionHead({
  kicker,
  heading,
  lead,
}: {
  kicker: string
  heading: string
  lead?: string
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="inline-block text-xs font-semibold tracking-wide text-inglu-blue bg-inglu-blue/10 px-3 py-1.5 rounded-full mb-4">
        {kicker}
      </p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-inglu-ink leading-tight mb-4">
        {heading}
      </h2>
      {lead && <p className="text-slate-600 text-base leading-relaxed">{lead}</p>}
    </div>
  )
}

function ContactHero() {
  return (
    <section className="px-4 lg:px-10 pt-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-inglu-blue via-blue-600 to-blue-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(255,255,255,0.18),transparent)]" />
        <div className="absolute -top-16 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-20 text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-xs font-semibold tracking-wide text-white px-3 py-1.5 rounded-full mb-6">
            CONTACT INGLU
          </span>

          <h1 className="text-white font-black leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
            Let's build something meaningful.
          </h1>

          <p className="mt-5 text-blue-50/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            One message in, the right team out. Tell us who you are and we will point you
            straight into the ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* 1. Send Message Button ka <a fixed */}
            <a
              href="#content"
              className="h-12 bg-white text-inglu-blue text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Send message <Send size={16} />
            </a>
            
            {/* 2. Mailto Button ka <a fixed */}
            <a
              href="mailto:hello@inglu.global"
              className="h-12 border border-white/60 text-white text-sm font-semibold px-6 rounded-[18px] flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              hello@inglu.global
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto pt-10 border-t border-white/15">
            {CONTACT_STATS.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ReachEcosystemSection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="Reach the ecosystem"
          heading="Whether it is student opportunities, creator partnerships, campus collaborations or brand partnerships, the door is open."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_REACH_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          kicker="Quick answers"
          heading="Before you reach out."
          lead="One clear path for youth, campuses, creators and partners."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CONTACT_FAQ_CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  role: string
  message: string
}

function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    role: CONTACT_ROLE_OPTIONS[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)

    const res = await submitForm('contact', { ...formData })

    setSubmitting(false)

    if (res?.error) {
      toast('Something went wrong. Please try again.', 'error', 2500)
      return
    }

    toast('Message sent — we will get back to you soon!', 'success', 2500)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', role: CONTACT_ROLE_OPTIONS[0], message: '' })
  }

  return (
    <section className="px-4 lg:px-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto rounded-3xl bg-inglu-ink px-6 sm:px-10 lg:px-16 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-block text-xs font-semibold tracking-wide text-blue-300 bg-white/10 px-3 py-1.5 rounded-full mb-4">
            Route your request
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            One message in, the right team out.
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Students, creators, brands, campuses, event partners and media all get a clear
            route into the ecosystem.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="name"
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-inglu-blue placeholder:text-slate-400"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="email"
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-inglu-blue placeholder:text-slate-400"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            autoComplete="tel"
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-inglu-blue placeholder:text-slate-400"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-inglu-blue text-slate-600"
          >
            {CONTACT_ROLE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-inglu-blue placeholder:text-slate-400 resize-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full h-12 bg-inglu-blue text-white text-sm font-semibold rounded-[18px] flex items-center justify-center gap-2 hover:bg-inglu-blue-dark transition-colors disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Send message'} <Send size={16} />
          </button>
          {submitted && (
            <p className="text-xs text-green-600 text-center">
              Thanks! Your message has been received — we&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="bg-white">
      <ContactHero />
      <div id="content">
        <ReachEcosystemSection />
        <FaqSection />
        <ContactFormSection />
      </div>
    </div>
  )
}