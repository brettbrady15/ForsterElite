import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RacesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Race calendar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Races & Schedule</h1>
          <p className="mt-4 max-w-2xl text-xl">Follow our athletes at competitions around the world</p>
        </div>
      </section>

      {/* Race Calendar */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[3fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Upcoming Races</h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    date: "June 15, 2023",
                    title: "Diamond League Paris",
                    location: "Paris, France",
                    athletes: ["Athlete 1", "Athlete 2", "Athlete 3"],
                  },
                  {
                    date: "July 2, 2023",
                    title: "National Championships",
                    location: "Eugene, Oregon",
                    athletes: ["Athlete 1", "Athlete 4", "Athlete 5"],
                  },
                  {
                    date: "July 23, 2023",
                    title: "World Athletics Championships",
                    location: "Budapest, Hungary",
                    athletes: ["Athlete 2", "Athlete 3"],
                  },
                  {
                    date: "August 10, 2023",
                    title: "Diamond League Monaco",
                    location: "Monaco",
                    athletes: ["Athlete 1", "Athlete 3"],
                  },
                  {
                    date: "August 24, 2023",
                    title: "Diamond League Zurich",
                    location: "Zurich, Switzerland",
                    athletes: ["Athlete 2", "Athlete 4"],
                  },
                ].map((race, i) => (
                  <div key={i} className="group overflow-hidden rounded-lg border transition-all hover:shadow-md">
                    <div className="grid md:grid-cols-[1fr_2fr]">
                      <div className="relative h-48 overflow-hidden md:h-auto">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=${race.location}`}
                          alt={race.location}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{race.date}</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold">{race.title}</h3>
                        <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{race.location}</span>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-medium">Competing Athletes:</h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {race.athletes.map((athlete, j) => (
                              <span
                                key={j}
                                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                              >
                                {athlete}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                          <Button size="sm" asChild>
                            <Link href={`/races/${i + 1}`}>Race Details</Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="#" target="_blank" rel="noopener noreferrer">
                              Official Website
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Filter Races</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm font-medium">Race Type</label>
                    <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>All Races</option>
                      <option>Diamond League</option>
                      <option>World Championships</option>
                      <option>National Championships</option>
                      <option>Road Races</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Athlete</label>
                    <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>All Athletes</option>
                      <option>Athlete 1</option>
                      <option>Athlete 2</option>
                      <option>Athlete 3</option>
                      <option>Athlete 4</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>All Locations</option>
                      <option>United States</option>
                      <option>Europe</option>
                      <option>Asia</option>
                      <option>Africa</option>
                    </select>
                  </div>
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
              <div className="mt-8 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Past Results</h3>
                <ul className="mt-4 space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="border-b pb-4 last:border-0 last:pb-0">
                      <p className="text-sm text-muted-foreground">April {i + 5}, 2023</p>
                      <h4 className="font-medium">Boston Marathon</h4>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span>Athlete 2 - 1st Place</span>
                      </div>
                      <Button variant="link" className="mt-1 h-auto p-0 text-sm" asChild>
                        <Link href="#">View Results</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-4 w-full" asChild>
                  <Link href="/races/past">View All Past Races</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Race Calendar Download */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Never Miss a Race</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Download our race calendar to stay updated with all our competitions
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#">Download Calendar (iCal)</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Download Calendar (PDF)</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

