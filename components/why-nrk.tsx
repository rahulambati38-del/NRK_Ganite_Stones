'use client'

import { valuePoints } from '@/lib/content'
import { Reveal } from '@/components/reveal'

// Minimal custom line illustrations, one per value point.
const icons = [
  // Natural Character — organic contour
  <path
    key="a"
    d="M4 26c6-2 8-10 14-10s7 8 14 6M4 18c5-1 9-8 14-8s8 7 14 5"
    fill="none"
  />,
  // Built to Last — stacked strata
  <path key="b" d="M6 12h30M6 20h30M6 28h30" fill="none" />,
  // Design Versatility — intersecting forms
  <path
    key="c"
    d="M8 32V12h12v12h12v8zM8 12h12v12"
    fill="none"
  />,
  // Timeless Appeal — arc / horizon
  <path key="d" d="M6 30a15 15 0 0 1 30 0M12 30a9 9 0 0 1 18 0" fill="none" />,
]

export function WhyNRK() {
  return (
    <section className="relative bg-limestone/40 py-24 text-obsidian md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
            <span className="inline-block h-px w-8 bg-bronze" />
            04 — Why Stone
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium">
            Why stone matters
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden border border-obsidian/10 bg-obsidian/10 sm:grid-cols-2 lg:grid-cols-4">
          {valuePoints.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 0.08}
              className="group bg-ivory p-8 transition-colors duration-500 hover:bg-whitestone"
            >
              <svg
                viewBox="0 0 40 40"
                className="h-10 w-10 stroke-bronze [stroke-width:1.25]"
                aria-hidden="true"
              >
                {icons[i]}
              </svg>
              <h3 className="mt-8 font-serif text-xl">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-obsidian/65">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
