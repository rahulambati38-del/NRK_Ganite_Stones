'use client'

import { ArrowUpRight } from 'lucide-react'
import { stoneCollection } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function StoneCollection() {
  return (
    <section
      id="stones"
      className="relative bg-ivory py-24 text-obsidian md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
                <span className="inline-block h-px w-8 bg-bronze" />
                02 — The Collection
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02]">
                The Stone Collection
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-obsidian/60">
              Textures, tones and patterns shaped by nature.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stoneCollection.map((stone, i) => (
            <Reveal
              key={stone.id}
              delay={(i % 3) * 0.08}
              className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <StoneCard stone={stone} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoneCard({
  stone,
}: {
  stone: (typeof stoneCollection)[number]
}) {
  return (
    <a
      href="#contact"
      className="group relative block h-full overflow-hidden bg-graphite"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={stone.image || '/placeholder.svg'}
          alt={`${stone.name} stone surface`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent" />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-[0.08]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-ivory">
        <div>
          <h3 className="font-serif text-2xl transition-transform duration-500 group-hover:-translate-y-1">
            {stone.name}
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/70">
            {stone.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-bronze">
            Explore
            <span className="h-px w-6 bg-bronze transition-all duration-500 group-hover:w-10" />
          </span>
        </div>
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-ivory/30 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  )
}
