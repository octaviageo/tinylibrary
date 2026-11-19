import "./globals.css";
import Navbar from "./components/Navbar";
import { Manrope, Lato } from "next/font/google";

const manrope = Manrope({ 
  subsets: ["latin"], 
  display: "swap"
 });

const lato = Lato({ 
  subsets: ["latin"], 
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-lato"
 });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${lato.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}