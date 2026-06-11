'use client'

import { motion } from 'framer-motion'
import { Reveal, RevealGroup, fadeUp } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { AboutObjectives } from '@/components/about-objectives'

const stats = [
  { value: 'Rs. 50K', label: 'Total Prize Purse' },
  { value: '20', label: 'Teams · 4 Members Each' },
  { value: 'A+', label: 'NAAC Accreditation' },
  { value: '24h', label: 'Overnight Sprint' },
]

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group bg-card px-6 py-7 transition-colors duration-300 hover:bg-secondary"
    >
      <p className="font-heading text-3xl font-bold text-foreground transition-colors group-hover:text-primary md:text-4xl">
        {value}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              label="The Mission"
              title="Decoding chaos into innovation."
            />
            <Reveal delay={0.05}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                GLS Uncoded 1.0 is a premier student-led technological platform
                organized under the Student Organizing Committee at GLS
                University, Ahmedabad. It acts as a high-energy crucible where
                driven teams converge to design, iterate, and ship meaningful
                technical solutions to real-world challenges inside a fiercely
                competitive window.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Spanning two intensive phases, the platform pushes candidate
                groups to challenge their logic limits, explore industry
                domains, and present functional AI architecture to distinct
                panels of expert evaluators.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-2">
              {stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </RevealGroup>
          </div>

          <AboutObjectives />
        </div>
      </div>
    </section>
  )
}
