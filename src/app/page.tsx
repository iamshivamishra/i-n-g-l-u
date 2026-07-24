import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Sitemap from '@/components/Sitemap'
import WhatIsInglu from '@/components/WhatIsInglu'
import Framework from '@/components/Framework'
import E3Model from '@/components/E3Model'
import EcosystemTabs from '@/components/EcosystemTabs'
import BrandsStrip from '@/components/BrandsStrip'
import SuccessStories from '@/components/SuccessStories'
import UpcomingEvents from '@/components/UpcomingEvents'
import WhoAreYou from '@/components/WhoAreYou'
import LiveFeed from '@/components/LiveFeed'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Sitemap />
      <WhatIsInglu />
      <Framework />
      <E3Model />
      <EcosystemTabs />
      <BrandsStrip />
      <SuccessStories />
      <UpcomingEvents />
      <WhoAreYou />
      <LiveFeed />
    </>
  )
}
