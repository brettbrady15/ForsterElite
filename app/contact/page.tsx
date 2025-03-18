import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">  
        <Image src="https://images.unsplash.com/photo-1621269383095-d595ff5e8504?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-xl">Get in touch with Forster Elite</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions about joining our team, sponsorship opportunities, or media inquiries? Fill out the form
                and we'll get back to you as soon as possible.
              </p>
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                You can also reach us using the following contact details.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Training Locations</h3>
                    <p className="mt-1 text-muted-foreground">
                      Richmond, Kentucky
                      <br />
                      Colorado Springs, Colorado
                      <br />
                      Pensacola, Florida
                      <br />
                      More Coming Soon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="mt-1 text-muted-foreground">
                      info@forsterelite.com
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="mt-1 text-muted-foreground">
                      +1 (555) 123-4567
                      <br />
                      Monday - Friday, 9am - 5pm MT
                    </p>
                  </div>
                </div> */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex gap-2">
                    <Link
                      href="https://www.instagram.com/forster.elite/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    {/* <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link> */}
                    {/* <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Youtube className="h-6 w-6" />
                      <span className="sr-only">YouTube</span>
                    </Link> */}
                  </div>
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <p className="mt-1 text-muted-foreground">
                      Follow us on Instagram for updates, behind-the-scenes content, and race highlights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="text-3xl font-bold tracking-tight">Join Our Newsletter</h2>
            <p className="mt-4 text-lg">Stay updated with team news, race results, and exclusive content</p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Your email" className="bg-primary-foreground text-primary" />
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

