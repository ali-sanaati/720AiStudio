import React from 'react'
import Hero from '@/components/templates/repuprise/Hero'
import Navbar from '@/components/templates/repuprise/Navbar'
import ProblemSection from '@/components/templates/repuprise/ProblemSection'
import OurSolution from '@/components/templates/repuprise/OurSolution'
import PlatformHighlights from '@/components/templates/repuprise/PlatformHighlights'
import ProfessionalServices from '@/components/templates/repuprise/ProfessionalServices'
import MarketAnalysis from '@/components/templates/repuprise/MarketAnalysis'
import ProductRoadmap from '@/components/templates/repuprise/ProductRoadmap'
import PricingStructure from '@/components/templates/repuprise/PricingStructure'
import AboutAndContact from '@/components/templates/repuprise/AboutAndContact'
import Footer from '@/components/templates/repuprise/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "RepUpRise",
    description: "RepUpRise",
    icons: {
      icon: "/images/repuprise-icon.png",
    },
  }

function page() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ProblemSection />
            <OurSolution />
            <PlatformHighlights />
            <ProfessionalServices />
            <MarketAnalysis />
            <ProductRoadmap />
            <PricingStructure />
            <AboutAndContact />
            <Footer />
        </div>
    )
}

export default page