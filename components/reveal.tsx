'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const easeOut = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** distance to travel on the y-axis */
  y?: number
  once?: boolean
}

/** Single element that fades + rises into view on scroll. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Wraps a group; children using `fadeUp` will stagger in. */
export function RevealGroup({
  children,
  className,
  once = true,
}: {
  children: ReactNode
  className?: string
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
