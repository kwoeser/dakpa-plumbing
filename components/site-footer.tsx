import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gray-50 py-12 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Bhoepa Plumbing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Professional plumbing services in Portland, OR. Licensed, bonded, and insured.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>Portland</li>
              <li>Beaverton</li>
              <li>Gresham</li>
              <li>Lake Oswego</li>
              <li>Tigard</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#">
                <Facebook className="size-5" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#">
                <Twitter className="size-5" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#">
                <Instagram className="size-5" />
              </Link>
              <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400" href="#">
                <Linkedin className="size-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">CCB# 123456</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Bhoepa Plumbing. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

