'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, GitBranch, FileText, Medal } from 'lucide-react'
import { Reveal, RevealGroup, fadeUp } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const rules = [
  {
    icon: BrainCircuit,
    title: 'Core AI Functionalization',
    desc: 'Static designs face immediate exclusion. Projects must use functional AI components — ML engines, APIs, Computer Vision, or NLP modules — as core operational logic.',
  },
  {
    icon: GitBranch,
    title: 'Verifiable Distributed Commits',
    desc: 'Repositories must be public. Logs must display contribution footprints from all 4 registered members. Single-user code drops will be flagged.',
  },
  {
    icon: FileText,
    title: 'Slide Threshold · 8–10 Pages',
    desc: 'Summary presentations deployed through the final evaluation channel must follow the PDF template within a strict layout count of 8 to 10 slides.',
  },
]

export function Rules() {
  return (
    <section id="rules" className="relative border-y border-border bg-card/40 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Critical Evaluation Benchmarks"
          title="Mandatory submission rules."
          intro="Non-negotiable thresholds every team must clear before the final gate."
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {rules.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7"
            >
              <span className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-primary transition-colors duration-300 group-hover:border-primary">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </RevealGroup>

        {/* Consolation tier banner */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-primary/40 bg-primary/5 p-7 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <Medal className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">
                  Consolation Tiers · 4th &amp; 5th Position Cohorts
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Formal institutional recognition allocated to high-performing
                  finalist runners-up.
                </p>
              </div>
            </div>
            <span className="rounded-full border border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground">
              Certificate + Branded Mug × 4
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
