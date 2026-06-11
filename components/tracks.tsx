'use client'

import { motion } from 'framer-motion'
import {
  Stethoscope,
  GraduationCap,
  CloudLightning,
  Leaf,
  ShieldCheck,
  Building2,
  Sprout,
  Bus,
  Plane,
  Terminal,
  ArrowUpRight,
} from 'lucide-react'
import { RevealGroup, fadeUp } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const tracks = [
  { icon: Stethoscope, name: 'Healthcare', desc: 'AI-powered clinical decision support, patient management workflows, and digital health accessibility.' },
  { icon: GraduationCap, name: 'Education', desc: 'Adaptive learning platforms, performance analytics engines, and institutional management systems.' },
  { icon: CloudLightning, name: 'Disaster Management', desc: 'Real-time disaster intelligence, predictive resource allocation, and evacuation pathway mapping.' },
  { icon: Leaf, name: 'Sustainability', desc: 'Carbon footprint monitoring, automated waste logistics, and renewable energy optimizations.' },
  { icon: ShieldCheck, name: 'Social Well-being & Safety', desc: 'Community safety networks, mental health support systems, and inclusive civic access tools.' },
  { icon: Building2, name: 'Smart Cities', desc: 'Urban traffic optimization, utility grid management, and citizen service digitization.' },
  { icon: Sprout, name: 'Agriculture', desc: 'Precision farming integrations, computer-vision crop disease detection, and market linkage platforms.' },
  { icon: Bus, name: 'Transportation', desc: 'Intelligent traffic control, multimodal mobility networks, and last-mile connectivity tools.' },
  { icon: Plane, name: 'Travel', desc: 'Customized travel planning apps, tourism accessibility maps, and localized travel experiences.' },
]

export function Tracks() {
  return (
    <section id="themes" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Target Tracks"
          title="Ten problem domains. One signal."
          intro="Teams choose from these official tracks aligned with global challenges — or go off-grid with Open Innovation."
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              className="group relative bg-card p-7 transition-colors duration-300 hover:bg-secondary"
            >
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {t.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
            </motion.article>
          ))}

          {/* Open Innovation spans wide */}
          <motion.article
            variants={fadeUp}
            className="group relative flex flex-col justify-between gap-6 bg-card p-7 transition-colors duration-300 hover:bg-secondary sm:col-span-2 lg:col-span-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary bg-primary text-primary-foreground">
                <Terminal className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-primary" />
            </div>
            <div className="max-w-2xl">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Open Innovation / Miscellaneous
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Civic technology, open personal-finance dashboards, localized
                community well-being systems, and any high-impact technical
                solution targeting gaps outside the specified themes.
              </p>
            </div>
          </motion.article>
        </RevealGroup>
      </div>
    </section>
  )
}
