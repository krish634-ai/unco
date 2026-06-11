import { Reveal } from '@/components/reveal'

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  label,
  title,
  intro,
  align = 'left',
}: {
  label: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal
      className={
        align === 'center'
          ? 'mx-auto flex max-w-2xl flex-col items-center text-center'
          : 'flex max-w-2xl flex-col'
      }
    >
      <div className={align === 'center' ? 'flex flex-col items-center' : ''}>
        <SectionLabel>{label}</SectionLabel>
      </div>
      <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.02] tracking-tight text-balance text-foreground md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}
