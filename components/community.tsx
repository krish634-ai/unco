'use client'

import { motion } from 'framer-motion'
import { Megaphone, BookOpen, Headset, MessagesSquare, LifeBuoy } from 'lucide-react'
import { RevealGroup, fadeUp } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const channels = [
  { icon: Megaphone, name: 'Announcements', desc: 'Broadcast portal for official milestone pushes, schedule movements, and centralized updates.' },
  { icon: BookOpen, name: 'Rules & Policy', desc: 'Static index reference for ground rules, guidelines, and submission rubrics.' },
  { icon: Headset, name: 'Mentor Support', desc: 'Direct access to technical guides for structural advice and active debugging.' },
  { icon: MessagesSquare, name: 'Doubts & Info', desc: 'Collaborative workspace for general queries, logistics, and team coordination.' },
  { icon: LifeBuoy, name: 'Ask Organizers', desc: 'Escalated pipeline connecting team leaders straight to the committee board.' },
]

export function Community() {
  return (
    <section id="community" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Dispatch Channels"
          title="Official community hub structure."
          intro="Shortlisted cohorts are assigned to these internal support channels upon confirmation."
          align="center"
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {channels.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-foreground">
                {c.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
