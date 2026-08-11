'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Linkedin, Instagram, Twitter, Youtube, Send } from 'lucide-react'
import { footerLinks } from '@/data/data'
import { submitForm } from '@/actions/forms'
import { toast } from '@/components/Toast'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribing, setSubscribing] = useState(false)

  async function handleSubscribe() {
    if (!email || subscribing) return
    setSubscribing(true)
    const res = await submitForm('newsletter', { email })
    setSubscribing(false)

    if (res?.error) {
      toast('Could not subscribe. Please try again.', 'error', 2500)
      return
    }

    toast('Subscribed! Watch your inbox.', 'success', 2500)
    setEmail('')
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <span className="text-xl font-extrabold text-inglu-ink">INGLU</span>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed max-w-xs">
              India's fastest growing global youth community building opportunities, experiences and impact.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-inglu-blue hover:border-inglu-blue/40 transition-colors cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>

            {/* STAY IN THE LOOP - now below social icons */}
            <div className="mt-8">
              <p className="text-xs font-bold tracking-wider text-slate-400 mb-1">STAY IN THE LOOP</p>
              <p className="text-xs text-slate-400 mb-3">Weekly drops. No spam.</p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-40 text-xs px-3 py-2.5 rounded-lg border border-slate-200 outline-none focus:border-inglu-blue placeholder:text-slate-400"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={subscribing}
                  className="bg-inglu-blue text-white p-2.5 rounded-lg hover:bg-inglu-blue-dark transition-colors flex-shrink-0 disabled:opacity-60"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-bold tracking-wider text-slate-400 mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      className="text-xs text-slate-500 hover:text-inglu-blue cursor-pointer transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 text-center text-[11px] text-slate-400">
          © 2026 INGLU Global. All rights reserved.
        </div>
      </div>
    </footer>
  )
}