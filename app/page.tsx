import { HeroSection } from "@/components/hero-section"
import { FrictionPhysicsScroll } from "@/components/friction-physics-scroll"
import { ProblemFrame } from "@/components/problem-frame"
import { PointOfView } from "@/components/point-of-view"
import { HowWeWork } from "@/components/how-we-work"
import { StructuredOfferings } from "@/components/structured-offerings"
import { BentoGrid } from "@/components/bento-grid"
import { CredibilitySignals } from "@/components/credibility-signals"
import { Boundaries } from "@/components/boundaries"
import { AboutSection } from "@/components/about-section"
import { ZStackArchive } from "@/components/z-stack-archive"
import { TerminalContact } from "@/components/terminal-contact"
import { ParallaxGrid } from "@/components/parallax-grid"
import { ParticleField } from "@/components/particle-field"
import { CaseStudies } from "@/components/case-studies"
import { TechStackInteractive } from "@/components/tech-stack-interactive"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { LiveMetrics } from "@/components/live-metrics"
import { ProcessTimeline } from "@/components/process-timeline"
import { ProductShowcase } from "@/components/product-showcase"
import { ComparisonTable } from "@/components/comparison-table"
import { AIAssistantWidget } from "@/components/ai-assistant-widget"
import { ScrollProgress } from "@/components/scroll-progress"
import { EnhancedCTASection } from "@/components/enhanced-cta-section"
import { FloatingStats } from "@/components/floating-stats"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navigation />
      <ScrollProgress />
      <ParticleField />
      <ParallaxGrid />
      <HeroSection />
      <FrictionPhysicsScroll />
      <ProblemFrame />
      <PointOfView />
      <FloatingStats />
      <LiveMetrics />
      <ProductShowcase />
      <HowWeWork />
      <ProcessTimeline />
      <StructuredOfferings />
      <TechStackInteractive />
      <BentoGrid />
      <CaseStudies />
      <ComparisonTable />
      <CredibilitySignals />
      <TestimonialsCarousel />
      <Boundaries />
      <AboutSection />
      <ZStackArchive />
      <EnhancedCTASection />
      <TerminalContact />
      <AIAssistantWidget />
    </main>
  )
}
