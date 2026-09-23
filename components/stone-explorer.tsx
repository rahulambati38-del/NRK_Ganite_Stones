'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { stoneHotspots } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function StoneExplorer() {
  const [active, setActive] = useState<string | null>(stoneHotspots[0].id)

  return (
    <section className="relative bg-ivory py-24 text-obsidian md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10">
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
              <span className="inline-block h-px w-8 bg-bronze" />
              05 — The Detail
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05]">
              Every stone has its own character.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md leading-relaxed text-obsidian/65">
              Move across the surface to explore the natural qualities that make
              each slab unlike any other.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {stoneHotspots.map((h) => (
              <button
                key={h.id}
                type="button"
                onMouseEnter={() => setActive(h.id)}
                onFocus={() => setActive(h.id)}
                onClick={() => setActive(h.id)}
                className={`border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active === h.id
                    ? 'border-bronze bg-bronze text-ivory'
                    : 'border-obsidian/20 text-obsidian/70 hover:border-bronze'
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <Reveal y={40}>
          <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
            <img
              src="/images/macro-granite.png"
              alt="Macro view of granite showing texture, minerals and finish"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />

            {stoneHotspots.map((h) => {
              const isActive = active === h.id
              return (
                <div
                  key={h.id}
                  className="absolute"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(h.id)}
                    onClick={() => setActive(h.id)}
                    aria-label={h.label}
                    className="relative flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  >
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full ${
                        isActive ? 'animate-ping bg-bronze/50' : 'bg-ivory/40'
                      }`}
                    />
                    <span
                      className={`relative h-2.5 w-2.5 rounded-full border transition-colors ${
                        isActive
                          ? 'border-ivory bg-bronze'
                          : 'border-ivory bg-ivory/80'
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.3 }}
                        className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap bg-obsidian/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ivory"
                      >
                        {h.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
