import { AboutMe } from "@/components/sections/abouMe";
import { ContactMe } from "@/components/sections/contactMe";
import { Footer } from "@/components/sections/footer";
import { HeadSection } from "@/components/sections/head";
import { Header } from "@/components/sections/header";
import { HomeSection } from "@/components/sections/home";
import { Services } from "@/components/sections/services";

import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
 
export default function Home() {
  return (
      <div 
      className={poppins.className} 
      onScroll={event => {
        console.log(event)
      }}
      >
        <HeadSection/>
        <Header/>
        <main className="min-h-[calc(100vh-220px)]">
          <HomeSection/>
          <AboutMe/>
          <Services/>
          <ContactMe/>
        </main>
        <Footer/>
      </div>
  )
}
