import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We&apos;re here to help with all your plumbing needs. Contact us for a free quote or emergency service.
              </p>
            </div>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="size-5" />
                <span>(503) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="size-5" />
                <span>contact@bhoepaplumbing.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="size-5" />
                <span>Portland, OR and surrounding areas</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" type="tel" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
            </div>
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

