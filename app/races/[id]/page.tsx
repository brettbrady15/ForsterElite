import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Globe, MapPin, Trophy, Users } from "lucide-react"
import { parseISO } from "date-fns"

import { formatMeetDate, getMeetById, getAthletesForMeet } from "@/lib/data/meets"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Hard-coded image paths for each meet to avoid path resolution issues
const getMeetImagePath = (meetId: string): string => {
  const imagePaths: Record<string, string> = {
    'portland-track-festival': '/meets/portlandTC.jpg',
    'PU-LC': '/meets/princeton.png',
    'MCTC': '/meets/MCTC.png',
    'lee-university-last-chance': '/meets/leeU.png',
    'cow-harbor-10k': '/meets/cowharbor2.jpg',
    'marine-corps-marathon': '/meets/MCM.png',
    'indy-monumnet': '/meets/indymonumental.jpg',
  };
  
  // Return the hard-coded path or a fallback placeholder
  return imagePaths[meetId] || '/placeholder.svg';
}

interface RacePageProps {
  params: {
    id: string
  }
}

export default function RacePage({ params }: RacePageProps) {
  const meet = getMeetById(params.id)
  
  if (!meet) {
    notFound()
  }
  
  const meetAthletes = getAthletesForMeet(meet.id)
  const meetDate = formatMeetDate(meet.date)
  // Get hard-coded image path
  const imagePath = getMeetImagePath(meet.id)
  
  return (
    <main className="flex-1">
      {/* Hero Section with Meet Image */}
      <section className="relative">
        <div className="relative h-[40vh] w-full overflow-hidden">
          <Image
            src={imagePath}
            alt={meet.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 -mt-24 max-w-6xl px-4 mx-auto">
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{meetDate}</span>
              </div>
              <CardTitle className="text-3xl font-bold">{meet.title}</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{meet.location}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">About this Race</h3>
                  <p className="text-muted-foreground">{meet.description || "No description available for this race."}</p>
                </div>

                {meetAthletes.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Team Athletes Competing</h3>
                    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {meetAthletes.map((athlete) => (
                        <Link key={athlete.id} href={`/athletes/${athlete.id}`} className="group">
                          <Card className="h-full transition-transform hover:shadow-md">
                            <div className="flex items-center p-4">
                              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                                <Image
                                  src={athlete.photoUrl || `/placeholder.svg?height=64&width=64&text=${athlete.name.charAt(0)}`}
                                  alt={athlete.name}
                                  fill
                                  unoptimized
                                  className="object-cover"
                                />
                              </div>
                              <div className="ml-4">
                                <h4 className="font-medium group-hover:text-primary">{athlete.name}</h4>
                                <p className="text-sm text-muted-foreground">{athlete.events?.join(", ") || "Multiple Events"}</p>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Meet Results - This would be populated for past meets */}
                {parseISO(meet.date) < new Date() && (
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Race Results</h3>
                    <div className="rounded-lg border">
                      <div className="p-4">
                        <p className="text-center text-muted-foreground">
                          {meetAthletes.length > 0 
                            ? "Results will be posted after the race is complete." 
                            : "No team athletes participated in this race."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4 border-t bg-muted/50 p-6 sm:flex-row sm:items-center">
              {meet.websiteUrl && (
                <Button asChild variant="outline">
                  <Link href={meet.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Official Website
                  </Link>
                </Button>
              )}
              <Button asChild>
                <Link href="/races">
                  Back to All Races
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* More Race Information Section */}
      <section className="py-12">
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold">Other Races</h2>
          <p className="mb-6 text-muted-foreground">Check out other upcoming races and past results from our team.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="outline" className="flex-1">
              <Link href="/races">Upcoming Races</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/races/past">Past Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 