'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { galleryItems } from '@/lib/content'
import { Reveal } from '@/components/reveal'

const spanClass: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length,
      ),
    [],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close, next, prev])

  return (
    <section id="gallery" className="relative bg-ivory py-24 text-obsidian md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bronze">
                <span className="inline-block h-px w-8 bg-bronze" />
                06 — Gallery
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.02]">
                A material worth seeing.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 0.08}
              className={spanClass[item.span ?? 'normal']}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full cursor-pointer overflow-hidden bg-graphite"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.src || '/placeholder.svg'}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-500 group-hover:bg-obsidian/45" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-bronze">
                    {item.category}
                  </p>
                  <p className="mt-1 font-serif text-lg text-ivory">
                    {item.title}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-obsidian/95 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory/10 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory/10 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.figure
              key={galleryItems[index].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[82vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[index].src || '/placeholder.svg'}
                alt={galleryItems[index].title}
                className="mx-auto max-h-[74vh] w-auto object-contain"
              />
              <figcaption className="mt-4 flex items-center justify-between text-ivory/80">
                <span className="font-serif text-lg">
                  {galleryItems[index].title}
                </span>
                <span className="text-xs uppercase tracking-[0.2em]">
                  {index + 1} / {galleryItems.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
