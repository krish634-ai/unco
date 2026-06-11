'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function RegisterCta() {
  return (
    <section id="register" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 signal-grid opacity-50" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  // Join the Sprint
                </span>
                <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.02] tracking-tight text-balance text-foreground md:text-6xl">
                  Ready to turn noise into signal?
                </h2>
                <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
                  Registration window opens July 11 and closes July 31, 2026.
                  Lock your 4-member team in before the cohort fills.
                </p>
              </div>

              <motion.a
                href="#top"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-8 py-5 font-mono text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_var(--signal)]"
              >
                Register Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-foreground">
            GLS<span className="text-primary">/</span>Uncoded 1.0
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          Paradigm Shift · Noise to Signal
        </p>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          © 2026 Student Organizing Committee, Faculty of Computer Applications
          &amp; IT, GLS University. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
