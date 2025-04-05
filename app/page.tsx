import Link from "next/link"
import { Building2, ClipboardCheck, FileText, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { Testimonial } from "@/components/testimonial"
import { PricingCard } from "@/components/pricing-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">StrataManage</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="features" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features for Strata Management
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Everything you need to efficiently manage your strata properties in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-12">
              <FeatureCard
                icon={<Building2 className="h-10 w-10" />}
                title="Property Management"
                description="Easily manage multiple properties, units, and common areas with detailed records and history."
              />
              <FeatureCard
                icon={<ClipboardCheck className="h-10 w-10" />}
                title="Maintenance Tracking"
                description="Track maintenance requests, schedule repairs, and keep owners informed of progress."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10" />}
                title="Document Repository"
                description="Store and organize important documents, contracts, and bylaws for easy access."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10" />}
                title="Owner Portal"
                description="Give property owners secure access to information, payments, and communication tools."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10" />}
                title="Communication Tools"
                description="Send announcements, notifications, and updates to all residents or specific groups."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10" />}
                title="Financial Management"
                description="Track expenses, collect fees, and generate financial reports with ease."
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trusted by Property Managers
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See what our customers have to say about StrataManage.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-12">
              <Testimonial
                quote="StrataManage has transformed how we handle our strata properties. The maintenance tracking alone has saved us countless hours."
                author="Sarah Johnson"
                role="Property Manager"
                company="Urban Living Properties"
              />
              <Testimonial
                quote="The owner portal has drastically improved our communication with residents. Everything is transparent and accessible."
                author="Michael Chen"
                role="Strata Committee President"
                company="Harbour View Apartments"
              />
              <Testimonial
                quote="Financial management used to be our biggest headache. Now it's all automated and organized in one place."
                author="Emma Rodriguez"
                role="Financial Controller"
                company="Coastal Property Management"
              />
              <Testimonial
                quote="The document repository has been a game-changer for our compliance needs. We can find any document in seconds."
                author="David Thompson"
                role="Compliance Officer"
                company="Metropolitan Strata Services"
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that works best for your strata management needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-12">
              <PricingCard
                title="Starter"
                price="$99"
                period="per month"
                description="Perfect for small strata properties with basic management needs."
                features={[
                  "Up to 20 units",
                  "Maintenance tracking",
                  "Document storage",
                  "Owner portal",
                  "Email support",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Professional"
                price="$199"
                period="per month"
                description="Ideal for medium-sized properties with more complex requirements."
                features={[
                  "Up to 100 units",
                  "Advanced maintenance system",
                  "Financial management",
                  "Communication tools",
                  "Priority support",
                ]}
                buttonText="Get Started"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="$399"
                period="per month"
                description="Comprehensive solution for large or multiple strata properties."
                features={[
                  "Unlimited units",
                  "Multi-property management",
                  "Advanced reporting",
                  "API access",
                  "Dedicated account manager",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Simplify Your Strata Management?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get in touch with our team to learn more about how StrataManage can help you.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/contact">
                  <Button className="w-full" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground">
                  Or call us at <span className="font-medium">1-800-STRATA</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            <span className="text-lg font-semibold">StrataManage</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 StrataManage. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

