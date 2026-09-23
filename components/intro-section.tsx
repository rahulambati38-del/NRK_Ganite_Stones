'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Reveal, LineReveal } from '@/components/reveal'

export function IntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ivory py-24 text-obsidian md:py-36"
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10"
      >
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
              <span className="inline-block h-px w-8 bg-bronze" />
              01 — The Material
            </p>
          </Reveal>

          <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02]">
            <LineReveal
              start="inView"
              lines={['Nature,', 'refined by', 'craftsmanship.']}
            />
          </h2>

          <Reveal delay={0.2} className="mt-8 max-w-md">
            <p className="text-pretty leading-relaxed text-obsidian/70">
              At NRK STONES, natural stone becomes a foundation for spaces
              designed to last. We bring together the character of granite with
              a careful approach to selection, finishing and supply.
            </p>
          </Reveal>

          {/* Connecting animated line */}
          <div className="relative mt-12 hidden h-px w-full max-w-xs md:block">
            <motion.span
              className="absolute left-0 top-0 h-px w-full origin-left bg-obsidian/30"
              style={{ scaleX: lineScale }}
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Reveal y={40} className="relative overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.img
                src="/images/intro-slab.png"
                alt="Large vertical polished granite slab with mineral veining"
                style={{ y: imgY }}
                className="absolute inset-[-8%] h-[116%] w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l border-bronze md:block" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
