import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-green-900 text-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} />
          <span className="font-serif text-xl tracking-widest font-bold">FORSTER ELITE</span>
        </Link>
        <nav className="hidden md:flex gap-6">
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
          <Button variant="secondary" size="sm" asChild className="hidden md:flex">
            <Link href="/contact">Join Us</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </Link>
                <Link href="/athletes" className="text-sm font-medium transition-colors hover:text-primary">
                  Athletes
                </Link>
                <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
                  News
                </Link>
                <Link href="/races" className="text-sm font-medium transition-colors hover:text-primary">
                  Races
                </Link>
                <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
                  Gallery
                </Link>
                <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
                  Shop
                </Link>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
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

