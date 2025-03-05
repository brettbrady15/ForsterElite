import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="News and updates"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">News & Updates</h1>
          <p className="mt-4 max-w-2xl text-xl">Stay up to date with the latest from Swift Stride</p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
          <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=News ${i + 1}`}
                    alt={`News ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">May {i + 10}, 2023</p>
                  <h3 className="mt-2 text-2xl font-bold">Team Secures Victory at National Championships</h3>
                  <p className="mt-4 text-muted-foreground">
                    Our athletes delivered outstanding performances at the national championships, securing multiple
                    podium finishes.
                  </p>
                  <Button variant="link" className="mt-4 p-0" asChild>
                    <Link href={`/news/${i + 1}`} className="flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

