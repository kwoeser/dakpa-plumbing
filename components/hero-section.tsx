import { Phone, Shield, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScheduleForm } from "@/components/schedule-form"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Portland&apos;s Most Trusted Plumbing Service
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Professional plumbing services for your home or business. Available 24/7 for emergency repairs in
                Portland and surrounding areas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 size-4" />
                Call Now for Service
              </Button>

              {/* HANDLES SCHUDULING */}
              <ScheduleForm />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <Shield className="size-5 text-primary" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="size-5 text-primary" />
                <span className="text-sm">5-Star Rated Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="size-5 text-primary" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-xl border-4 border-primary/10">
              <img
                alt="Professional plumber at work"
                className="object-cover"
                src="/placeholder.svg?height=600&width=600"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                height="600"
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

