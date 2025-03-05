import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "flag-icons/css/flag-icons.min.css"

export default function AthletesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-green-900">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Team athletes"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-green-900/60" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Athletes</h1>
          <p className="mt-4 max-w-2xl text-xl">Meet the elite runners who represent Forester Elite</p>
        </div>
      </section>

      {/* Athletes Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Elite Squad</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our roster of elite runners competing at the highest levels
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Brandon"
                  alt="Brandon Olden"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Brandon Olden</h3>
                  <span className="fi fi-us text-xl"></span>
                </div>
                <p className="text-sm text-muted-foreground">5000m / 10000m / Half Marathon</p>
                <div className="mt-2 flex flex-wrap gap-2">
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/athletes/brandon-olden">View Profile</Link>
                </Button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Jackson"
                  alt="Jackson Siddall"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Jackson Siddall</h3>
                  <span className="fi fi-us text-xl"></span>
                </div>
                <p className="text-sm text-muted-foreground">5000m / 10000m / Half Marathon</p>
                <div className="mt-2 flex flex-wrap gap-2">
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/athletes/jackson-siddall">View Profile</Link>
                </Button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text="
                  alt="Brett Brady"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Brett Brady</h3>
                  <span className="fi fi-us text-xl"></span>
                </div>
                <p className="text-sm text-muted-foreground">5000m / 10000m / Half Marathon</p>
                <div className="mt-2 flex flex-wrap gap-2">
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/athletes/brett-brady">View Profile</Link>
                </Button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Athlete 4"
                  alt="Athlete 4"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">Niko Dworczi</h3>
                  <span className="fi fi-pl text-xl"></span>
                </div>
                <p className="text-sm text-muted-foreground">5000m / 10000m / Half Marathon</p>
                <div className="mt-2 flex flex-wrap gap-2">
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/athletes/4">View Profile</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg border bg-background p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold tracking-tight">Join Forster Elite</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always looking for exceptional talent to join our team. If you're a dedicated athlete with a passion
              for excellence, we want to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn About Our Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
