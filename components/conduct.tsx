'use client'

import { motion } from 'framer-motion'
import { ShieldAlert, Ban, Bike, Lock } from 'lucide-react'
import { RevealGroup, fadeUp } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const policies = [
  {
    icon: ShieldAlert,
    title: 'Strict Zero-Tolerance Mandate',
    desc: 'Immediate disqualification and institutional action against any bullying, body-shaming, verbal/physical abuse, or discrimination of any form.',
  },
  {
    icon: Ban,
    title: 'Prohibited Materials',
    desc: 'Tobacco, nicotine, alcohol-based consumables, sharp hazardous objects, or open flammable devices are strictly forbidden on university premises.',
  },
  {
    icon: Bike,
    title: 'Two-Wheeler Campus Parking',
    desc: 'Only two-wheeler parking is available. Drivers must hold a valid license and wear helmets. Four-wheeler parking is unavailable.',
  },
  {
    icon: Lock,
    title: 'Overnight Campus Lock-in',
    desc: 'Once sprints initialize, no participants may exit campus perimeters during designated execution hours under any circumstances.',
  },
]

export function Conduct() {
  return (
    <section id="conduct" className="relative border-y border-border bg-card/40 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Code of Conduct"
          title="Institutional conduct & campus policies."
        />
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {policies.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group flex items-start gap-5 rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-primary/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-primary transition-colors group-hover:border-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
