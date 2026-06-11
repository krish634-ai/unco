'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ArrowDown } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1] as const

const word = {
  hidden: { opacity: 0, y: '110%' },
  show: (i: number) => ({
    opacity: 1,
    y: '0%',
    transition: { duration: 0.9, ease: easeOut, delay: 0.15 + i * 0.08 },
  }),
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-24 pb-16 md:px-10"
    >
      {/* layered backdrop */}
      <div className="pointer-events-none absolute inset-0 signal-grid opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-[var(--ember)]/10 blur-[120px]" />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-ring" />
            24-Hour Overnight Offline Hackathon
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            GLS University · Ahmedabad
          </span>
        </motion.div>

        <h1 className="font-heading text-[15vw] font-bold leading-[0.86] tracking-tight text-foreground sm:text-[13vw] md:text-[11vw] lg:text-[10rem]">
          <span className="block overflow-hidden">
            <motion.span custom={0} variants={word} initial="hidden" animate="show" className="block">
              NOISE
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              custom={1}
              variants={word}
              initial="hidden"
              animate="show"
              className="block text-muted-foreground/40"
            >
              TO
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              custom={2}
              variants={word}
              initial="hidden"
              animate="show"
              className="block text-primary"
            >
              SIGNAL.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            The premier technical innovation arena hosted by the{' '}
            <span className="text-foreground">
              Faculty of Computer Applications &amp; IT
            </span>
            , GLS University. Convert chaotic variables into absolute, working
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row md:justify-end"
          >
            <a
              href="#register"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:gap-3.5 hover:shadow-[0_0_40px_-8px_var(--signal)]"
            >
              Register Now
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <a
              href="#rules"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              View Guidelines
            </a>
          </motion.div>
        </div>

        {/* key dates strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.7 }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
        >
          {[
            { k: 'Registration', v: 'Jul 11 – Jul 31, 2026' },
            { k: 'Live Campus Sprint', v: 'Aug 22 – 23, 2026' },
            { k: 'Prize Purse', v: 'Rs. 50,000 /-' },
          ].map((d) => (
            <div
              key={d.k}
              className="group bg-card px-6 py-5 transition-colors duration-300 hover:bg-secondary"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {d.k}
              </p>
              <p className="mt-1.5 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {d.v}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:flex"
      >
        Scroll
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </motion.a>
    </section>
  )
}
