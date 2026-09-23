'use client'

import { applications } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function Applications() {
  return (
    <section
      id="applications"
      className="relative bg-graphite py-24 text-ivory md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
            <span className="inline-block h-px w-8 bg-bronze" />
            03 — Applications
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 max-w-3xl font-serif text-[clamp(2rem,5.5vw,4.25rem)] font-medium leading-[1.0]">
            Built for beautiful spaces.
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {applications.map((app, i) => (
            <Reveal key={app.id} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={app.image || '/placeholder.svg'}
                    alt={`${app.name} stone application`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-obsidian/10 transition-opacity duration-700 group-hover:from-obsidian/95" />
                  <span className="absolute right-5 top-5 font-serif text-5xl text-ivory/0 transition-all duration-700 group-hover:text-ivory/25">
                    0{i + 1}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl">{app.name}</h3>
                  <span className="mt-3 block h-px w-8 bg-bronze transition-all duration-500 group-hover:w-16" />
                  <ul className="mt-4 grid gap-1.5 overflow-hidden text-sm text-ivory/70 transition-all duration-700">
                    {app.uses.map((use) => (
                      <li key={use} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-bronze/80" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
