'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '@/components/section-heading'

type Event = { time: string; title: string; note?: string; key?: boolean }

const day1: Event[] = [
  { time: '09:30 AM', title: 'Reporting & Registrations' },
  { time: '10:30 AM', title: 'Opening Ceremony' },
  { time: '11:30 AM', title: 'Problem Statement Selection', note: 'via Google Form' },
  { time: '12:00 PM', title: 'Lunch' },
  { time: '01:00 PM', title: 'Code Rush Begins', key: true },
  { time: '04:00 PM', title: 'High Tea — Tea / Coffee' },
  { time: '08:30 PM', title: 'Dinner' },
  { time: '10:00 PM', title: 'Music & Jamming', note: 'Relaxation break' },
  { time: '11:00 PM', title: 'Code Rush Continues' },
]

const day2: Event[] = [
  { time: '02:00 AM', title: 'Submission Round 1' },
  { time: '02:30 AM', title: 'Tea / Coffee Available' },
  { time: '08:00 AM', title: 'Breakfast' },
  { time: '01:00 PM', title: 'Final Submission', note: 'GitHub link + PDF via Form', key: true },
  { time: '01:30 PM', title: 'Lunch' },
  { time: '03:30 PM', title: 'Top 5 Teams Announcement' },
  { time: '03:45 PM', title: 'Final Presentations', note: 'in Auditorium' },
  { time: '06:00 PM', title: 'Prize Distribution & Closing', key: true },
  { time: '07:30 PM', title: 'Dispersal' },
]

function Column({
  day,
  date,
  caption,
  events,
}: {
  day: string
  date: string
  caption: string
  events: Event[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
      <div className="mb-8 flex items-baseline justify-between border-b border-border pb-5">
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground">{day}</h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {caption}
          </p>
        </div>
        <span className="font-mono text-sm text-primary">{date}</span>
      </div>

      <div ref={ref} className="relative pl-8">
        {/* base track */}
        <div className="absolute left-[5px] top-1 h-full w-px bg-border" />
        {/* animated fill */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[5px] top-1 h-full w-px origin-top bg-primary"
        />

        <div className="space-y-7">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <span
                className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-background transition-all duration-300 group-hover:scale-125 ${
                  e.key ? 'bg-primary pulse-ring' : 'bg-muted-foreground group-hover:bg-primary'
                }`}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <span
                  className={`w-fit rounded-md border px-2.5 py-1 font-mono text-[11px] font-semibold ${
                    e.key
                      ? 'border-primary/40 bg-primary/10 text-primary'
                      : 'border-border bg-background text-muted-foreground'
                  }`}
                >
                  {e.time}
                </span>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  {e.title}
                  {e.note ? (
                    <span className="ml-2 font-sans text-xs font-normal normal-case tracking-normal text-muted-foreground">
                      ({e.note})
                    </span>
                  ) : null}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Event Timeline & Schedule"
          title="The execution schedule."
          intro="From kickoff to closing — 34 hours of structured chaos, mapped node by node."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Column
            day="Day 01"
            date="22 Aug 2026"
            caption="// Kickoff & Development Sprint"
            events={day1}
          />
          <Column
            day="Day 02"
            date="23 Aug 2026"
            caption="// Evaluation & Awards"
            events={day2}
          />
        </div>
      </div>
    </section>
  )
}
