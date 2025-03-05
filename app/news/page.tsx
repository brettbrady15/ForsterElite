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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
              <div className="mt-8 space-y-12">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="group grid gap-6 md:grid-cols-[2fr_3fr]">
                    <div className="relative h-60 overflow-hidden rounded-lg md:h-full">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=News ${i + 1}`}
                        alt={`News ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">May {i + 10}, 2023</p>
                      <h3 className="mt-2 text-2xl font-bold">Team Secures Victory at National Championships</h3>
                      <p className="mt-4 text-muted-foreground">
                        Our athletes delivered outstanding performances at the national championships, securing multiple
                        podium finishes. The team demonstrated exceptional skill and determination throughout the
                        competition.
                      </p>
                      <p className="mt-2 text-muted-foreground">
                        With this victory, our team has qualified for the upcoming international championships, where
                        they will represent our country against the world's best.
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
            <div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Categories</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Race Results
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Team Announcements
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Athlete Profiles
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Training Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Press Releases
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-8 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Recent Posts</h3>
                <ul className="mt-4 space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="relative h-16 w-16 flex-none overflow-hidden rounded-md">
                        <Image
                          src={`/placeholder.svg?height=100&width=100&text=${i + 1}`}
                          alt={`Post ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">New Team Sponsor Announcement</h4>
                        <p className="text-sm text-muted-foreground">May {i + 5}, 2023</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Subscribe</h3>
                <p className="mt-2 text-muted-foreground">Get the latest news delivered directly to your inbox</p>
                <form className="mt-4 space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

