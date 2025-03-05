import { Button } from "@/components/ui/button"
import { Award, Clock, Trophy, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Team photo" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Our Team</h1>
          <p className="mt-4 max-w-2xl text-xl">Meet the coaches and staff behind Forester Elite</p>
        </div>
      </section>

      {/* Team Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded in 2015, Forster Elite was born from a vision to create a professional running team that
                nurtures talent, pushes boundaries, and inspires the next generation of athletes.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                What started as a small group of dedicated runners has grown into one of the most respected professional
                teams in the sport, with athletes competing at the highest levels internationally.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <Trophy className="h-8 w-8 text-primary" />
                  <p className="mt-2 text-2xl font-bold">75+</p>
                  <p className="text-sm text-muted-foreground">National Titles</p>
                </div>
                <div className="rounded-lg border p-4">
                  <Award className="h-8 w-8 text-primary" />
                  <p className="mt-2 text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Olympic Medals</p>
                </div>
                <div className="rounded-lg border p-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <p className="mt-2 text-2xl font-bold">18</p>
                  <p className="text-sm text-muted-foreground">World Records</p>
                </div>
                <div className="rounded-lg border p-4">
                  <Users className="h-8 w-8 text-primary" />
                  <p className="mt-2 text-2xl font-bold">24</p>
                  <p className="text-sm text-muted-foreground">Elite Athletes</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=500&width=800" alt="Team training" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission & Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Forster Elite, we're committed to excellence in every aspect of our program. Our mission is to develop
              world-class athletes while fostering a supportive community that values hard work, integrity, and personal
              growth.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="mt-2 text-muted-foreground">
                We pursue excellence in training, competition, and all aspects of athlete development.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <h3 className="text-xl font-bold">Community</h3>
              <p className="mt-2 text-muted-foreground">
                We foster a supportive environment where athletes can thrive personally and professionally.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="mt-2 text-muted-foreground">
                We embrace cutting-edge approaches to training, recovery, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Coaching Staff</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the experts who guide our athletes to peak performance
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Coach ${i}`}
                    alt={`Coach ${i}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Coach Name</h3>
                  <p className="text-sm text-muted-foreground">Head Coach / Distance Specialist</p>
                  <p className="mt-4 text-muted-foreground">
                    Former Olympic athlete with 15+ years of coaching experience at the elite level.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Sponsors & Partners</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're grateful for the support of these amazing organizations
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center justify-center rounded-lg border p-6 text-center">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Sponsor ${i + 1}`}
                  alt={`Sponsor ${i + 1}`}
                  width={160}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-lg font-bold">Sponsor Name</h3>
                <p className="text-sm text-muted-foreground">Official Equipment Partner</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 text-lg">
              Interested in becoming part of Forster Elite? We're always looking for talented athletes who share our
              values and commitment to excellence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="/athletes">Meet Our Athletes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

