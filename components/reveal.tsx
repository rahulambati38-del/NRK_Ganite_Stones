'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'span' | 'li' | 'p' | 'h2' | 'h3'
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </MotionTag>
  )
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: '110%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 1, ease },
  },
}

/**
 * Reveals text line-by-line. Pass an array of strings, each rendered
 * as a masked line that rises into place.
 */
export function LineReveal({
  lines,
  className,
  lineClassName,
  start = 'load',
  delay = 0,
}: {
  lines: string[]
  className?: string
  lineClassName?: string
  start?: 'load' | 'inView'
  delay?: number
}) {
  const animateProps =
    start === 'load'
      ? { animate: 'show' as const }
      : {
          whileInView: 'show' as const,
          viewport: { once: true, margin: '-80px' },
        }

  return (
    <motion.span
      className={className}
      variants={{
        ...containerVariants,
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      {...animateProps}
      aria-hidden="false"
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            variants={lineVariants}
            className={`block ${lineClassName ?? ''}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
