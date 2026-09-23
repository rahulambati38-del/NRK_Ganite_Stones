'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useRef, type ReactNode } from 'react'

type Variant = 'bronze' | 'outline' | 'ghost'

const base =
  'group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

const variants: Record<Variant, string> = {
  bronze: 'bg-bronze text-ivory hover:bg-[#96784f]',
  outline:
    'border border-current text-current hover:bg-current/5',
  ghost: 'text-current hover:text-bronze',
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'bronze',
  withArrow = true,
  className = '',
  type,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  withArrow?: boolean
  className?: string
  type?: 'button' | 'submit'
}) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  function handleMove(e: React.MouseEvent) {
    // Skip magnetic effect on touch / coarse pointers
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.3)
    y.set(relY * 0.3)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  const sharedProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: sx, y: sy },
    className: `${base} ${variants[variant]} ${className}`,
  }

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type ?? 'button'} onClick={onClick} {...sharedProps}>
      {content}
    </motion.button>
  )
}
