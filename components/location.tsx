'use client'

import { MapPin } from 'lucide-react'
import { business } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

export function Location() {
  return (
    <section id="location" className="relative bg-ivory py-24 text-obsidian md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
              <span className="inline-block h-px w-8 bg-bronze" />
              07 — Visit
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02]">
              Come see the stone.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <p className="font-serif text-xl">{business.name}</p>
              <address className="mt-3 not-italic leading-relaxed text-obsidian/70">
                {business.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4 flex items-center gap-2 text-sm text-obsidian/60">
                <MapPin className="h-4 w-4 text-bronze" aria-hidden="true" />
                {business.plusCode}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.15em] text-bronze">
                {business.hours}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8">
              {business.mapsUrl ? (
                <MagneticButton href={business.mapsUrl} variant="bronze">
                  Get Directions
                </MagneticButton>
              ) : (
                // Placeholder — set business.mapsUrl in lib/content.ts to enable.
                <MagneticButton variant="outline" withArrow={false}>
                  Get Directions (add map URL)
                </MagneticButton>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal y={40}>
          <div className="relative aspect-square overflow-hidden bg-graphite md:aspect-[4/5]">
            <img
              src="/images/location-map.png"
              alt={`Stylized map showing NRK Stones location in ${business.city}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze/60" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-ivory bg-bronze" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
