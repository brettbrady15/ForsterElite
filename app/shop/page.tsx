import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image src="/placeholder.svg?height=600&width=1920" alt="Team shop" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Team Shop</h1>
          <p className="mt-4 max-w-2xl text-xl">Official Swift Stride merchandise and gear</p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[240px_1fr]">
            {/* Filters */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-bold">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Apparel
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Training Gear
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      Limited Edition
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="border-t pt-6">
                <h3 className="mb-4 text-lg font-bold">Filter by</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Price Range</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Prices" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="0-25">$0 - $25</SelectItem>
                        <SelectItem value="25-50">$25 - $50</SelectItem>
                        <SelectItem value="50-100">$50 - $100</SelectItem>
                        <SelectItem value="100+">$100+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Size</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <div key={size} className="flex items-center">
                          <input type="checkbox" id={`size-${size}`} className="mr-2" />
                          <label htmlFor={`size-${size}`} className="text-sm">
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Color</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["Black", "White", "Red", "Blue", "Green"].map((color) => (
                        <div key={color} className="flex items-center">
                          <input type="checkbox" id={`color-${color}`} className="mr-2" />
                          <label htmlFor={`color-${color}`} className="text-sm">
                            {color}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">All Products</h2>
                  <p className="text-muted-foreground">Showing 12 of 24 products</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 sm:flex-initial">
                    <Input placeholder="Search products..." />
                  </div>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=500&width=500&text=Product ${i + 1}`}
                        alt={`Product ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold">Team Race Jersey</h3>
                      <p className="text-sm text-muted-foreground">Official competition jersey</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-lg font-bold">$59.99</span>
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <ShoppingCart className="h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our most popular team merchandise</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=500&width=500&text=Featured ${i + 1}`}
                    alt={`Featured Product ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                    Best Seller
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Limited Edition Jacket</h3>
                  <p className="text-sm text-muted-foreground">Commemorative team jacket</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold">$129.99</span>
                    <Button size="sm" className="flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="text-3xl font-bold tracking-tight">Get 10% Off Your First Order</h2>
            <p className="mt-4 text-lg">
              Subscribe to our newsletter and receive exclusive offers and early access to new products.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Your email" className="bg-primary-foreground text-primary" />
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

