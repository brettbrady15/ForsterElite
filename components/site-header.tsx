"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled ? "bg-green-900/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} />
          <span className="font-serif text-xl tracking-widest font-bold">FORSTER ELITE</span>
        </Link>
        <nav className="hidden md:flex gap-6 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-white/80">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-white/80">
            About
          </Link>
          <Link href="/athletes" className="text-sm font-medium transition-colors hover:text-white/80">
            Athletes
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-white/80">
            News
          </Link>
          <Link href="/races" className="text-sm font-medium transition-colors hover:text-white/80">
            Races
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-white/80">
            Gallery
          </Link>
          <Link href="/shop" className="text-sm font-medium transition-colors hover:text-white/80">
            Shop
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-white/80">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" asChild className="hidden md:flex bg-green-900/80 hover:bg-green-900">
            <Link href="/contact">Join Us</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="md:hidden bg-black/20 backdrop-blur-sm hover:bg-black/30">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-green-900">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-green-900">
                  About
                </Link>
                <Link href="/athletes" className="text-sm font-medium transition-colors hover:text-green-900">
                  Athletes
                </Link>
                <Link href="/news" className="text-sm font-medium transition-colors hover:text-green-900">
                  News
                </Link>
                <Link href="/races" className="text-sm font-medium transition-colors hover:text-green-900">
                  Races
                </Link>
                <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-green-900">
                  Gallery
                </Link>
                <Link href="/shop" className="text-sm font-medium transition-colors hover:text-green-900">
                  Shop
                </Link>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-green-900">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

