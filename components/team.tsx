'use client'

import { motion } from 'framer-motion'
import { RevealGroup, fadeUp } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const team = [
  { initials: 'US', name: 'Ujjwal Sharma', role: 'Event Head' },
  { initials: 'DS', name: 'Dhruv Sadrawala', role: 'Logistics & Design' },
  { initials: 'BJ', name: 'Bansi Jhala', role: 'Operations' },
  { initials: 'KY', name: 'Khushboo Yadav', role: 'Hospitality Head' },
  { initials: 'KR', name: 'Krish Rajpal', role: 'PR & Outreach Head' },
]

export function Team() {
  return (
    <section id="team" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="The Crew"
          title="The organizing team."
          intro="The student management board overseeing deployment and execution."
          align="center"
        />

        <RevealGroup className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors duration-300 hover:border-primary/50"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border font-heading text-2xl font-bold text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                {m.initials}
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                {m.role}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
