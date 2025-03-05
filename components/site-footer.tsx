import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Forster Elite</h3>
            <p className="text-sm text-muted-foreground">
              Elite Running. Coached by Mia Forster.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Pages</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/athletes" className="hover:underline">
                Athletes
              </Link>
              <Link href="/news" className="hover:underline">
                News
              </Link>
              <Link href="/races" className="hover:underline">
                Races
              </Link>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <Input placeholder="Email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Forster Elite Running Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

