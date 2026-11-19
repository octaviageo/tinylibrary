import Link from "next/link";
import Image from "next/image"
import logo from "@/public/logo_new.svg"
import logoIcon from "@/public/logo_icon.svg"

export default function Navbar() {
    return (
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              {/* Desktop logo */}
              <Image
                src={logo}
                alt="TinyLibrary Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <Image
                src={logoIcon}
                alt="TinyLibrary Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <li><Link href="/books">Books</Link></li>
              <li><Link href="/about/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
    )
} 