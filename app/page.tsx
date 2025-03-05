import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Note the negative margin-top to pull it up behind the header */}
      <section className="relative w-full h-screen -mt-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542577268-f027c64c871b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmUlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"
          alt="background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white pt-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">FORSTER ELITE</h1>
          <p className="mt-4 max-w-2xl text-xl sm:text-2xl">Pushing the boundaries of human potential</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/about">Meet The Team</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href="/races">Upcoming Races</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Latest News</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Stay updated with our team's achievements and announcements
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=News ${i}`}
                    alt={`News ${i}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">May {i + 10}, 2023</p>
                  <h3 className="mt-2 text-xl font-bold">Team Secures Victory at National Championships</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our athletes delivered outstanding performances at the national championships, securing multiple
                    podium finishes.
                  </p>
                  <Button variant="link" className="mt-4 p-0" asChild>
                    <Link href="/news/1" className="flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Upcoming Races */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Upcoming Races</h2>
            <p className="mt-4 text-xl text-muted-foreground">Follow our athletes at these upcoming competitions</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { date: "March 22, 2025", title: "CISM World Military Games", location: "Lucerne, Switzerland" },
              { date: "April 4, 2025", title: "Pepsi Relays", location: "Gainesville, Florida" },
              { date: "May 30-31, 2025", title: "Music City Track Festival", location: "Nashville, Tennessee" },
            ].map((race, i) => (
              <div key={i} className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <Calendar className="h-10 w-10 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{race.date}</p>
                    <h3 className="text-xl font-bold">{race.title}</h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{race.location}</span>
                </div>
                <Button variant="outline" className="mt-6 w-full" asChild>
                  <Link href="/races">View Details</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/races">Full Race Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Sponsors</h2>
            <p className="mt-4 text-xl text-muted-foreground">Proud partners who support our journey</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Sponsor ${i}`}
                  alt={`Sponsor ${i}`}
                  width={160}
                  height={80}
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join Our Community</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Stay connected with our team, get exclusive updates, and be part of our journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#newsletter">Subscribe to Newsletter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

