import AboutPage from '@/components/templates/bimetryx/AboutPage'
import ContactPage from '@/components/templates/bimetryx/ContactPage'
import Footer from '@/components/templates/bimetryx/Footer'
import CostPage from '@/components/templates/bimetryx/CostPage'
import CostQTOSection from '@/components/templates/bimetryx/CostQTOSection'
import EducationHub from '@/components/templates/bimetryx/EducationHub'
import HeroSection from '@/components/templates/bimetryx/HeroSection'
import HowItWorks from '@/components/templates/bimetryx/HowItWorks'
import Navbar from '@/components/templates/bimetryx/Navbar'
import ObjectsLibrary from '@/components/templates/bimetryx/ObjectsLibrary'
import Pricing from '@/components/templates/bimetryx/Pricing'
import Roadmap from '@/components/templates/bimetryx/Roadmap'
import RuleCheckPage from '@/components/templates/bimetryx/RuleCheckPage'
import RuleCheckSection from '@/components/templates/bimetryx/RuleCheckSection'
import TargetAudience from '@/components/templates/bimetryx/TargetAudience'
import WhatIsBIMetryX from '@/components/templates/bimetryx/WhatIsBIMetryX'
import WhyBimetryX from '@/components/templates/bimetryx/WhyBimetryX'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BIMetryX",
  description: "BIMetryX",
  icons: {
    icon: "/images/bimetryx-logo.png",
  },
}

function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatIsBIMetryX />
      <RuleCheckSection />
      <CostQTOSection />
      <ObjectsLibrary />
      <EducationHub />
      <HowItWorks />
      <Roadmap />
      <TargetAudience />
      <WhyBimetryX />
      <Pricing />
      <AboutPage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default page