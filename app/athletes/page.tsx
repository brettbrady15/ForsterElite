"use client";

import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "flag-icons/css/flag-icons.min.css"
import { useEffect, useRef, useState } from "react"

// Create custom pin icon outside of component
// const createCustomPin = () => L.divIcon({
//   className: "bg-transparent",
//   html: `<svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12zm0 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#15803d"/>
//   </svg>`,
//   iconSize: [24, 36],
//   iconAnchor: [12, 36],
//   popupAnchor: [0, -36]
// });

export default function AthletesPage() {
  const mapRef = useRef<L.Map | null>(null);

  // Fix for Leaflet marker icons in Next.js
  // useEffect(() => {
  //   delete (L.Icon.Default.prototype as any)._getIconUrl;
  //   L.Icon.Default.mergeOptions({
  //     iconRetinaUrl: '',
  //     iconUrl: '',
  //     shadowUrl: ''
  //   });
  // }, []);

  // Map initialization effect
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && !mapRef.current) {
  //     const map = L.map('map').setView([39.8283, -98.5795], 4);
      
  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 19,
  //       attribution: '© OpenStreetMap contributors'
  //     }).addTo(map);

  //     const locations = [
  //       {
  //         name: 'EKU - Richmond, KY',
  //         coords: [37.7358, -84.2946],
  //         athletes: 'Brandon Olden, Niko Dworczi'
  //       },
  //       {
  //         name: 'Pensacola, FL',
  //         coords: [30.4213, -87.2169],
  //         athletes: 'Brett Brady'
  //       },
  //       {
  //         name: 'Colorado Springs, CO',
  //         coords: [38.8339, -104.8214],
  //         athletes: 'Jackson Siddall'
  //       }
  //     ];

  //     // Create the custom pin icon
  //     const customPin = createCustomPin();

  //     // Add markers to the map
  //     locations.forEach(location => {
  //       L.marker(location.coords as L.LatLngExpression, { icon: customPin })
  //         .bindPopup(`
  //           <div class="text-sm">
  //             <h3 class="font-bold">${location.name}</h3>
  //             <p>${location.athletes}</p>
  //           </div>
  //         `)
  //         .addTo(map);
  //     });

  //     // Set bounds to continental US
  //     map.setMaxBounds([
  //       [24.396308, -125.000000], // Southwest coordinates
  //       [49.384358, -66.934570]   // Northeast coordinates
  //     ]);

  //     // Store map instance in ref
  //     mapRef.current = map;

  //     // Cleanup function
  //     return () => {
  //       map.remove();
  //       mapRef.current = null;
  //     };
  //   }
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Same structure as home page */}
      <section className="relative w-full h-[40vh] -mt-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542577268-f027c64c871b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmUlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"
          alt="background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white pt-16">
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
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>EKU - Richmond, KY</span>
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
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Colorado Springs, CO</span>
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
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Pensacola, FL</span>
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
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>EKU - Richmond, KY</span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href="/athletes/niko-dworczi">View Profile</Link>
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
