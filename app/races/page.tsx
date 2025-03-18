import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getUpcomingMeets, getPastMeets, getAthletesForMeet, formatMeetDate, athletes } from "@/lib/data/meets"

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

export default function RacesPage() {
  // Get upcoming and past meets using our utility functions
  const upcomingMeets = getUpcomingMeets();
  const pastMeets = getPastMeets().slice(0, 5); // Get only the 5 most recent past meets
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] -mt-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542577268-f027c64c871b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmUlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"
          alt="Race calendar"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white pt-16">
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
                {upcomingMeets.map((meet, i) => {
                  // Get athletes for this meet
                  const meetAthletes = getAthletesForMeet(meet.id);
                  // Get hard-coded image path
                  const imagePath = getMeetImagePath(meet.id);
                  
                  return (
                    <div key={meet.id} className="group overflow-hidden rounded-lg border transition-all hover:shadow-md">
                      <div className="grid md:grid-cols-[1fr_2fr]">
                        <div className="relative h-48 overflow-hidden md:h-auto">
                          <Image
                            src={imagePath}
                            alt={meet.title}
                            fill
                            unoptimized
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{formatMeetDate(meet.date)}</span>
                          </div>
                          <h3 className="mt-2 text-2xl font-bold">{meet.title}</h3>
                          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{meet.location}</span>
                          </div>
                          <div className="mt-4">
                            <h4 className="font-medium">Competing Athletes:</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {meetAthletes.map((athlete) => (
                                <span
                                  key={athlete.id}
                                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                                >
                                  {athlete.name}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-6 flex gap-4">
                            <Button size="sm" asChild>
                              <Link href={`/races/${meet.id}`}>Race Details</Link>
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
                  );
                })}
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
                      {athletes.map(athlete => (
                        <option key={athlete.id} value={athlete.id}>{athlete.name}</option>
                      ))}
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
                  {pastMeets.map((meet) => {
                    const meetAthletes = getAthletesForMeet(meet.id);
                    // Get hard-coded image path for past meets
                    const imagePath = getMeetImagePath(meet.id);
                    
                    return (
                      <li key={meet.id} className="flex border-b pb-4 last:border-0 last:pb-0">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md mr-3">
                          <Image
                            src={imagePath}
                            alt={meet.title}
                            fill
                            unoptimized
                            className="object-cover object-center"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{formatMeetDate(meet.date)}</p>
                          <h4 className="font-medium">{meet.title}</h4>
                          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                            <Trophy className="h-4 w-4 text-primary" />
                            <span>{meetAthletes.length > 0 ? meetAthletes[0].name : 'No athletes'}</span>
                          </div>
                          <Button variant="link" className="mt-1 h-auto p-0 text-sm" asChild>
                            <Link href={`/races/${meet.id}`}>View Results</Link>
                          </Button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Button variant="outline" className="mt-4 w-full" asChild>
                  <Link href="/races/past">View All Past Races</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Race Calendar Download
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
      </section> */}
    </div>
  )
}

