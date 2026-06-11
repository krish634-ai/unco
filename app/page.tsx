import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Ticker } from '@/components/ticker'
import { About } from '@/components/about'
import { Tracks } from '@/components/tracks'
import { Rules } from '@/components/rules'
import { Timeline } from '@/components/timeline'
import { Conduct } from '@/components/conduct'
import { Community } from '@/components/community'
import { Team } from '@/components/team'
import { RegisterCta, SiteFooter } from '@/components/footer-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Tracks />
        <Rules />
        <Timeline />
        <Conduct />
        <Community />
        <Team />
        <RegisterCta />
      </main>
      <SiteFooter />
    </>
  )
}
