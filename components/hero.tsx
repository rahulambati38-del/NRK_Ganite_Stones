'use client'

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'
import { business } from '@/lib/content'
import { LineReveal } from '@/components/reveal'
import { MagneticButton } from '@/components/magnetic-button'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Scroll parallax on the image
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7])

  // Cursor parallax (desktop only)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 60, damping: 20 })
  const py = useSpring(my, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      mx.set(nx * 14)
      my.set(ny * 14)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-obsidian text-ivory"
    >
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <motion.div
          className="absolute inset-[-6%]"
          style={{ x: px, y: py }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          <img
            src="/images/hero-granite.png"
            alt="Dramatic close-up of polished granite with warm architectural lighting"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </motion.div>
      </motion.div>

      {/* Overlays */}
      <motion.div
        className="absolute inset-0 bg-obsidian"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/40" />
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-warmstone"
        >
          <span className="inline-block h-px w-8 bg-bronze" />
          {business.name} · {business.city}
        </motion.p>

        <h1 className="font-serif text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-tight">
          <LineReveal
            lines={['Stone', 'that defines', 'space.']}
            delay={0.6}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.5 }}
          className="mt-8 max-w-md text-pretty text-sm leading-relaxed text-ivory/75 md:text-base"
        >
          Premium granite and natural stone for architecture, interiors and
          timeless spaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.75 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <MagneticButton href="#stones" variant="bronze">
            Explore Our Stones
          </MagneticButton>
          <MagneticButton href="#location" variant="outline">
            Visit Our Showroom
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ivory/60"
      >
        Scroll to explore
        <span className="relative h-12 w-px overflow-hidden bg-ivory/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-bronze"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
