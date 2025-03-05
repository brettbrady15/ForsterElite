import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image src="/placeholder.svg?height=600&width=1920" alt="Gallery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-xl">Capturing moments of determination, triumph, and teamwork</p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="photos" className="w-full">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="photos" className="mt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=500&width=500&text=Photo ${i + 1}`}
                      alt={`Photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-lg font-bold">Race Title</h3>
                      <p className="text-sm">Location, Date</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg">
                  Load More
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="videos" className="mt-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-lg">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=720&width=1280&text=Video ${i + 1}`}
                        alt={`Video ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">Race Highlights: Diamond League Paris</h3>
                      <p className="text-sm text-muted-foreground">June 15, 2023</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg">
                  Load More
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Collections</h2>
            <p className="mt-4 text-lg text-muted-foreground">Explore our curated collections from major events</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "World Championships 2023", count: 42 },
              { title: "Olympic Games Tokyo", count: 78 },
              { title: "Training Camp: Colorado", count: 35 },
              { title: "Diamond League Season", count: 120 },
              { title: "Team Photoshoot 2023", count: 24 },
              { title: "Behind the Scenes", count: 56 },
            ].map((collection, i) => (
              <Link
                key={i}
                href="#"
                className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Collection ${i + 1}`}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{collection.title}</h3>
                    <p className="text-sm">{collection.count} photos</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Follow Us on Instagram</h2>
            <p className="mt-4 text-lg text-muted-foreground">@swiftstrideteam</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Link
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Insta ${i + 1}`}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white">View on Instagram</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                View Instagram Profile
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

