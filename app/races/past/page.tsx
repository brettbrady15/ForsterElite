import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight, Filter, MapPin, Trophy } from "lucide-react"

import { getPastMeets, formatMeetDate, getAthletesForMeet } from "@/lib/data/meets"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PastRacesPage() {
  const pastMeets = getPastMeets()

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary py-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">Past Race Results</h1>
            <p className="mt-2">View results from previous races and competitions</p>
          </div>
        </div>
      </section>

      {/* Past Races Listing */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastMeets.map((meet) => {
              const meetAthletes = getAthletesForMeet(meet.id)
              return (
                <Link key={meet.id} href={`/races/${meet.id}`} className="group">
                  <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={meet.imageUrl || `/placeholder.svg?height=300&width=400&text=${meet.location}`}
                        alt={meet.title}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 text-sm text-primary-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatMeetDate(meet.date)}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="line-clamp-1 text-xl group-hover:text-primary">
                        {meet.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{meet.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      {meetAthletes.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {meetAthletes.slice(0, 3).map((athlete) => (
                            <div
                              key={athlete.id}
                              className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs"
                            >
                              <Trophy className="h-3 w-3 text-primary" />
                              <span>{athlete.name}</span>
                            </div>
                          ))}
                          {meetAthletes.length > 3 && (
                            <div className="rounded-full bg-muted px-2 py-1 text-xs">
                              +{meetAthletes.length - 3} more
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">No team athletes in this race</p>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" variant="ghost" className="w-full justify-between group-hover:bg-muted">
                        View Results
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              )
            })}
          </div>

          {pastMeets.length === 0 && (
            <div className="mt-8 rounded-lg border p-8 text-center">
              <h3 className="text-xl font-medium">No Past Races Found</h3>
              <p className="mt-2 text-muted-foreground">
                There are no past races in our database at the moment.
              </p>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Button asChild>
              <Link href="/races">View Upcoming Races</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 