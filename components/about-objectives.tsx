'use client'

import { motion } from 'framer-motion'
import { RevealGroup, fadeUp } from '@/components/reveal'

const objectives = [
  'Encourage creative engineering, architectural design patterns, and an entrepreneurial mindset among student nodes.',
  'Foster a healthy culture of coordinated multi-member collaboration and interdisciplinary problem-solving.',
  'Provide explicit hands-on exposure to practical technical issues, production parameters, and active problem domains.',
  'Simulate professional high-pressure development settings to build readiness for complex industry demands.',
  'Instill foundational values of operational discipline, ethical conduct, and structural accountability.',
]

export function AboutObjectives() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="flex items-center justify-between border-b border-border pb-5">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
          // Event Objectives
        </h3>
        <span className="font-mono text-xs text-muted-foreground">05</span>
      </div>

      <RevealGroup className="mt-2 divide-y divide-border">
        {objectives.map((o, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group flex items-start gap-5 py-5"
          >
            <span className="font-mono text-sm text-primary transition-transform duration-300 group-hover:translate-x-1">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {o}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </div>
  )
}
