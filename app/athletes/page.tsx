"use client";

import { Button } from "@/components/ui/button"
import { Award, Medal, Trophy, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "flag-icons/css/flag-icons.min.css"
import { useState, useEffect } from "react"
import { athletes, getImageUrl } from "@/lib/data/meets"

export default function AthletesPage() {

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

      {/* Athletes Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {athletes.map((athlete) => (
              <div key={athlete.id} className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={athlete.photoUrl ? getImageUrl(athlete.photoUrl) : `/placeholder.svg?height=300&width=300&text=${athlete.name.charAt(0)}`}
                    alt={athlete.name}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold">{athlete.name}</h3>
                    {athlete.countryCode && (
                      <span className={`fi fi-${athlete.countryCode} text-xl`}></span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{athlete.events?.join(' / ')}</p>
                  {athlete.location && (
                    <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{athlete.location}</span>
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                    <Link href={`/athletes/${athlete.id}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            ))}
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
