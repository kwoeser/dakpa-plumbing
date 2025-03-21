import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScheduleForm } from "./schedule-form"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="font-bold text-white flex h-6 items-center justify-center bg-test">
        <p>SERVING PORTLAND, OR & SURROUNDING AREAS.</p>
      </div>


      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-primary">Bhoepa Plumbing</span>
          </Link>
        </div>
        <nav className="justify-center hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          <Link href="#services" className="transition-colors hover:text-foreground/80">
            Services
          </Link>
          <Link href="#about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="#testimonials" className="transition-colors hover:text-foreground/80">
            Testimonials
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* <Button variant="outline" className="hidden md:flex">
            Get a Free Quote
          </Button> */}

          {/* HANDLES SCHUDULING */}
          <ScheduleForm />
          <Button className="hidden items-center space-x-2 md:flex">
            <Phone className="size-4" />
            {/* <span>Call Now</span> */}
            <span>971-386-6156</span>

          </Button>
          <Button className="md:hidden">
            <Phone className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

