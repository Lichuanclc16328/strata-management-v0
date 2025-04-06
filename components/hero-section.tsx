
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-muted/50">
      <div className="flex justify-center px-4 md:px-6">
        <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Simplify Your Strata Management
          </h1>
          <img
            src="/building.jpg"
            alt="Banner"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            The all-in-one platform for property managers, strata committees, and owners to streamline operations
            and improve communication.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
