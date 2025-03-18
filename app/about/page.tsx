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
          <p className="mt-4 max-w-2xl text-xl">Meet the coaches behind Forester Elite</p>
        </div>
      </section>

      {/* Team Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded in 2024, Forster Elite was born from a vision to create an elite running group that
                nurtures talent, pushes boundaries, and inspires the next generation of runners.
              </p>


            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image src="/tree3.jpg" alt="Team Logo" fill className="object-cover" />
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
              Meet the coaches who guide our athletes to peak performance
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-96 w-full md:h-auto md:w-2/5 lg:w-1/2 overflow-hidden">
                  <Image
                    src="/athletes/mondo.png"
                    alt="Mia Forster"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 w-full md:w-3/5 lg:w-1/2">
                  <h3 className="text-2xl font-bold">Mia Forster</h3>
                  <p className="text-md text-green-700 font-medium">Head Coach</p>
                  
                  <div className="mt-4 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Coach Forster brings a proven record of success at the collegiate and post-collegiate levels. Since taking the helm at Eastern Kentucky University, she has guided the team to three Atlantic Sun Conference titles and secured two NCAA Cross Country Championship appearances. Under her leadership, one of her athletes qualified for the NCAA Track and Field Championships in the 10k, underscoring her ability to develop elite-level talent.
                    </p>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-lg mb-2">Career Highlights</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Three-time Atlantic Sun Conference Championship winning coach</li>
                        <li>Led teams to two NCAA Cross Country Championship appearances</li>
                        <li>Coached NCAA Track & Field Championship 10k qualifier</li>
                        <li>Developed multiple All-Conference and Regional athletes</li>
                        <li>Specializes in distance event training and development</li>
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-lg mb-2">Coaching Philosophy</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Coach Forster focuses on individualized training approaches that balance competitive excellence with long-term athlete development. Her methodology emphasizes progressive training loads, injury prevention, and mental performance strategies to help athletes reach their full potential.
                      </p>
                    </div>
                    
                    <div className="border-t pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Contact</h4>
                        <p className="text-muted-foreground">coach.forster@forsterlite.com</p>
                      </div>
                      <Button variant="outline" className="self-start sm:self-auto" asChild>
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Sponsors 
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Sponsors & Partners</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're grateful for the support of these amazing organizations
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
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
      */}

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

