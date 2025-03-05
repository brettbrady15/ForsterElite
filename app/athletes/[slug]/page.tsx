import { Button } from "@/components/ui/button"
import { Award, Calendar, Clock, Instagram, MapPin, Medal, Trophy, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AthleteProfilePage({ params }: { params: { slug: string } }) {
  // This would normally fetch data based on the slug
  const athleteData = {
    name: "Sarah Johnson",
    specialty: "5000m / 10000m",
    bio: "Sarah Johnson is an Olympic gold medalist and world record holder in the 5000m. Born and raised in Portland, Oregon, she began running competitively at the age of 12 and quickly rose through the ranks of youth athletics. After a stellar collegiate career at Stanford University, she joined Forester Elite in 2015 and has been a cornerstone of the team ever since.",
    achievements: [
      "Olympic Gold Medalist - 5000m (2020)",
      "World Champion - 10000m (2019)",
      "American Record Holder - 5000m (14:12.56)",
      "4-time National Champion",
      "Diamond League Champion (2018, 2019)",
    ],
    personalBests: {
      "1500m": "3:56.12",
      "3000m": "8:20.45",
      "5000m": "14:12.56",
      "10000m": "29:45.21",
      "Half Marathon": "1:07:32",
    },
    upcomingRaces: [
      { name: "Diamond League Paris", date: "June 15, 2023", location: "Paris, France" },
      { name: "National Championships", date: "July 2, 2023", location: "Eugene, Oregon" },
      { name: "World Championships", date: "July 23, 2023", location: "Budapest, Hungary" },
    ],
    social: {
      instagram: "@sarahjohnson",
      twitter: "@sarahjohnson",
      strava: "sarahjohnson",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920&text=Sarah Johnson"
          alt={athleteData.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-end justify-center text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{athleteData.name}</h1>
            <p className="mt-4 text-xl">{athleteData.specialty}</p>
          </div>
        </div>
      </section>

      {/* Athlete Profile */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Biography</h2>
              <p className="mt-4 text-lg text-muted-foreground">{athleteData.bio}</p>

              <h2 className="mt-12 text-3xl font-bold tracking-tight">Career Highlights</h2>
              <ul className="mt-4 space-y-2">
                {athleteData.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Award className="mt-1 h-5 w-5 flex-none text-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-3xl font-bold tracking-tight">Upcoming Races</h2>
              <div className="mt-4 space-y-4">
                {athleteData.upcomingRaces.map((race, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">{race.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{race.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{race.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="sticky top-20 space-y-8">
                <div className="overflow-hidden rounded-lg border">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/placeholder.svg?height=600&width=450&text=Sarah Johnson"
                      alt={athleteData.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{athleteData.name}</h3>
                    <p className="text-muted-foreground">{athleteData.specialty}</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link
                          href={`https://instagram.com/${athleteData.social.instagram.substring(1)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <Link
                          href={`https://twitter.com/${athleteData.social.twitter.substring(1)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold">Personal Bests</h3>
                  <div className="mt-4 space-y-2">
                    {Object.entries(athleteData.personalBests).map(([event, time], i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="font-medium">{event}</span>
                        <span className="font-mono text-muted-foreground">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-bold">Career Stats</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <p className="mt-2 text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">International Medals</p>
                    </div>
                    <div className="text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                        <Medal className="h-6 w-6 text-primary" />
                      </div>
                      <p className="mt-2 text-2xl font-bold">4</p>
                      <p className="text-sm text-muted-foreground">National Titles</p>
                    </div>
                    <div className="text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <p className="mt-2 text-2xl font-bold">1</p>
                      <p className="text-sm text-muted-foreground">World Records</p>
                    </div>
                    <div className="text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <p className="mt-2 text-2xl font-bold">8</p>
                      <p className="text-sm text-muted-foreground">Years Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Athletes */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight">More Athletes</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Athlete ${i}`}
                    alt={`Athlete ${i}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Athlete Name</h3>
                  <p className="text-sm text-muted-foreground">1500m Specialist</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                    <Link href={`/athletes/${i}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

