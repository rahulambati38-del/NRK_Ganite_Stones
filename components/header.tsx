'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business, nav } from '@/lib/content'

const ease = [0.22, 1, 0.36, 1] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? 'bg-obsidian/85 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#home"
            className="font-serif text-lg tracking-[0.25em] text-ivory md:text-xl"
          >
            NRK <span className="text-bronze">STONES</span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-xs uppercase tracking-[0.18em] text-ivory/80 transition-colors hover:text-ivory"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden bg-bronze px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-500 hover:bg-[#96784f] md:inline-block"
            >
              Enquire Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-ivory lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col bg-obsidian lg:hidden"
          >
            <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.04]" />
            <nav
              className="relative mt-24 flex flex-1 flex-col justify-center gap-2 px-8"
              aria-label="Mobile"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease }}
                  className="border-b border-ivory/10 py-4 font-serif text-3xl text-ivory"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + nav.length * 0.07, ease }}
                className="mt-8 bg-bronze px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-ivory"
              >
                Enquire Now
              </motion.a>
              <p className="mt-10 text-xs uppercase tracking-[0.2em] text-warmstone">
                {business.city}, {business.region}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
