import { Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Portland Heights",
    rating: 5,
    text: "Excellent service! They responded quickly to my emergency call and fixed the issue professionally.",
  },
  {
    name: "Mike Thompson",
    location: "Pearl District",
    rating: 5,
    text: "Very professional and knowledgeable. Fair pricing and great communication throughout the process.",
  },
  {
    name: "Emily Davis",
    location: "Beaverton",
    rating: 5,
    text: "The team was punctual, professional, and did an amazing job with our bathroom remodel.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customer Testimonials</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See what our satisfied customers in Portland have to say about our services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="text-left">
              <CardHeader>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

