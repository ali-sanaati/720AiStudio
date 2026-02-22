import AboutSection from "@/components/templates/720/AboutSection"
import ContactSection from "@/components/templates/720/ContactSection"
import ExpandedPositioning from "@/components/templates/720/ExpandedPositioning"
import Footer from "@/components/templates/720/Footer"
import HeroSection from "@/components/templates/720/HeroSection."
import InsightsSection from "@/components/templates/720/InsightsSection"
import Navbar from "@/components/templates/720/Navbar"
import ProductsIndex from "@/components/templates/720/ProductsIndex"
import ServicesPage from "@/components/templates/720/ServicesPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "720",
  description: "720",
  icons: {
    icon: "/images/720-zero-logo.png",
  },
}

function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExpandedPositioning />
      <ProductsIndex />
      <ServicesPage />
      <AboutSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page