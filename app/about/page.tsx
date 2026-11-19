import Link from "next/link";
import Image from "next/image"
import heroImage from "@/public/library.png"


export default function About () {
    return (
        <main>
            <section className = "grid grid-cols-2 gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
            <div>
                <Image 
                    src={heroImage} 
                    alt="Tiny Library" 
                    width={500} 
                    height={300}
                    className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-5">
                <span className="uppercase">About Tiny Library</span>
                 <h1 className="text-4xl font-bold md:text-5xl">Small shelf, big impact</h1>
                 <p className="text-md text-gray-600">Tiny Library started as a simple idea: 
                    make it easier for curious readers to actually find books they’ll love, 
                    not just scroll endless lists. Every title here is chosen with care, not algorithms.
                 </p>
                 <div className="flex justify-center">
                    <Link
                        href="/about/contact"
                        className="inline-flex items-center justify-center px-6 py-3
                                text-black transition duration-100 bg-white
                                border-2 border-black hover:bg-black hover:text-white"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            </section>
        </main>

    )
}