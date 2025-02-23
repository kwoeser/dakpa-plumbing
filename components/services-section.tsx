import {
  Droplet,
  Hammer,
  ThermometerSun,
  Wrench,
  ShowerHead,
  PlugIcon as PipeValve,
  Sprout,
  AlertTriangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency service for urgent plumbing issues",
    icon: AlertTriangle,
  },
  {
    title: "Drain Cleaning",
    description: "Professional drain cleaning and clog removal",
    icon: Droplet,
  },
  {
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance",
    icon: ThermometerSun,
  },
  {
    title: "Pipe Repair",
    description: "Expert pipe repair and replacement services",
    icon: PipeValve,
  },
  {
    title: "Fixture Installation",
    description: "Installation of sinks, toilets, and faucets",
    icon: Wrench,
  },
  {
    title: "Bathroom Remodeling",
    description: "Complete bathroom plumbing renovations",
    icon: ShowerHead,
  },
  {
    title: "General Repairs",
    description: "All types of plumbing repairs and maintenance",
    icon: Hammer,
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Water-saving fixtures and green plumbing options",
    icon: Sprout,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Professional plumbing services for residential and commercial properties in Portland and surrounding
              areas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="transition-all hover:shadow-lg">
              <CardHeader>
                <service.icon className="size-8 text-primary" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

