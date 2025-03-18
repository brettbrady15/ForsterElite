import { getAthleteById, getMeetsForAthlete, formatMeetDate, getImageUrl } from "@/lib/data/meets"
import { ArrowLeft, Award, Calendar, Clock, Flag, Globe, MapPin, Medal, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import "flag-icons/css/flag-icons.min.css"

// Define types for slug parameter
interface ProfileParams {
  params: {
    slug: string;
  };
}

export default function AthleteProfilePage({ params }: ProfileParams) {
  const athlete = getAthleteById(params.slug)
  
  // If athlete not found, show 404
  if (!athlete) {
    notFound()
  }
  
  // Get meets for this athlete
  const athleteMeets = getMeetsForAthlete(athlete.id)
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] -mt-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col justify-center text-white pt-16">
          <Link href="/athletes" className="flex items-center mb-4 text-sm hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Athletes
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{athlete.name}</h1>
          <div className="flex items-center mt-2 gap-2">
            {athlete.countryCode && (
              <span className={`fi fi-${athlete.countryCode} text-xl`}></span>
            )}
            <p className="text-lg opacity-90">
              {athlete.events?.join(' • ')}
            </p>
          </div>
        </div>
      </section>

      {/* Athlete Info */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Photo */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                  <Image
                    src={athlete.photoUrl ? getImageUrl(athlete.photoUrl) : `/placeholder.svg?height=600&width=400&text=${athlete.name.charAt(0)}`}
                    alt={athlete.name}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Location */}
                {athlete.location && (
                  <div className="flex items-center gap-2 p-4 bg-muted rounded-lg mb-4">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-sm">Training Location</h3>
                      <p className="text-muted-foreground">{athlete.location}</p>
                    </div>
                  </div>
                )}

                {/* Events box */}
                <div className="flex items-center gap-2 p-4 bg-muted rounded-lg mb-4">
                  <Medal className="h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-sm">Specialties</h3>
                    <p className="text-muted-foreground">{athlete.events?.join(', ')}</p>
                  </div>
                </div>

                {/* Social links if available */}
                {athlete.socialLinks && (
                  <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-sm">Connect</h3>
                    <div className="flex gap-3 mt-1">
                      {athlete.socialLinks.instagram && (
                        <a href={`https://instagram.com/${athlete.socialLinks.instagram}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </a>
                      )}
                      {athlete.socialLinks.twitter && (
                        <a href={`https://twitter.com/${athlete.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      )}
                      {athlete.socialLinks.strava && (
                        <a href={`https://www.strava.com/athletes/${athlete.socialLinks.strava}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <path d="M15.4 13.5l-3.1 6.3-3.1-6.3M13.1 7.1l-0.8 1.6h-2.6l3.4-6.9 3.4 6.9h-2.6l-0.8-1.6z"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio */}
              {athlete.bio && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Biography</h2>
                  <div className="prose max-w-none">
                    <p>{athlete.bio}</p>
                  </div>
                </div>
              )}
              
              {/* Personal Bests */}
              {athlete.personalBests && Object.keys(athlete.personalBests).length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Personal Best Times</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(athlete.personalBests).map(([event, time]) => (
                      <div key={event} className="flex items-center p-4 rounded-lg bg-muted">
                        <Clock className="h-10 w-10 mr-4 text-green-600" />
                        <div>
                          <p className="text-sm text-muted-foreground">{event}</p>
                          <p className="text-xl font-mono font-semibold">{time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Upcoming Races */}
              {athleteMeets.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Race Schedule</h2>
                  <div className="space-y-4">
                    {athleteMeets.map(meet => (
                      <div key={meet.id} className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border">
                        <div className="md:w-32 flex-shrink-0 flex flex-col items-center justify-center bg-muted p-3 rounded-md">
                          <Calendar className="h-5 w-5 mb-1" />
                          <span className="text-sm font-medium">{formatMeetDate(meet.date)}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{meet.title}</h3>
                          <p className="text-sm text-muted-foreground">{meet.location}</p>
                          {meet.description && <p className="mt-2">{meet.description}</p>}
                        </div>
                        <div className="md:self-center">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/races/${meet.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Achievements */}
              {athlete.achievements && athlete.achievements.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>
                  <ul className="space-y-2">
                    {athlete.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* More Athletes CTA */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Meet More Forster Elite Athletes</h2>
            <p className="text-muted-foreground mt-2">
              Discover the talented runners who make up our team
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/athletes">View All Athletes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

