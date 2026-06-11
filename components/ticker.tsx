'use client'

const items = [
  'NOISE → SIGNAL',
  'NAAC A+ ACCREDITED',
  '20 TEAMS · 4 MEMBERS',
  'RS. 50,000 PRIZE POOL',
  'AI-FIRST SUBMISSIONS',
  '24 HOURS · 1 NIGHT',
  'GLS UNIVERSITY',
]

export function Ticker() {
  const row = [...items, ...items]
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-card py-4 select-none">
      <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8"
      >
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  )
}
