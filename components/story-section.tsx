'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { LineReveal, Reveal } from '@/components/reveal'

export function StorySection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-obsidian text-ivory"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.img
          src="/images/story-architecture.png"
          alt="Dramatic modern architecture with prominent natural stone surfaces"
          style={{ scale: imgScale }}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-obsidian/55" />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <h2 className="font-serif text-[clamp(2.5rem,8vw,6.5rem)] font-medium leading-[0.95]">
          <LineReveal start="inView" lines={['From earth', 'to architecture.']} />
        </h2>
        <Reveal delay={0.3} className="mt-8 max-w-md">
          <p className="text-pretty leading-relaxed text-ivory/75">
            Every surface carries the character of the stone it comes from.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
