import Link from "next/link";
import Image from "next/image"
import maskImage from "@/public/hero.svg"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 space-y-6">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Browse books
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Find your next favorite book
          </h1>
        
          <p className="text-lg text-gray-600">
            Tiny Library is a cosy corner of the web where readers 
            discover hand‑picked titles across every genre, from 
            timeless classics to hidden indie gems.
          </p>

          <div className="flex gap-4">
            <Link
              href="/books"
              className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Browse Books
            </Link>
          </div>
        </div>
        <Image 
          src={maskImage} 
          alt="Tiny Library image"
          width={350} 
          height={300} />
      </section>
    </main>
    
  )
}
     