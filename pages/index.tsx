import { AnimationContainer } from "@/components/animate";
import { BackGround } from "@/components/background";
import { AbaoutMe } from "@/components/sections/aboutMe";
import { ServicesSection } from "@/components/sections/services";
import { Footer } from "@/components/sections/footer";
import { HeadSection } from "@/components/sections/head";
import { Header } from "@/components/sections/header";
import { HomeSection } from "@/components/sections/home";

import { Poppins } from "next/font/google"
import { SocialMediaSection } from "@/components/sections/SocialMedia";
import { ContactSection } from "@/components/sections/contact";

const poppins = Poppins({ subsets: ["latin"], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
 
export default function Home() {
  return (
    <AnimationContainer>
      <div className={poppins.className}>
        <HeadSection/>
        {/* <BackGround/> */}
        <Header/>
        <main className="min-h-[calc(100vh-220px)]">
          <HomeSection/>
          {/* <AbaoutMe/>
          <ServicesSection/>
          <SocialMediaSection/>
          <ContactSection/> */}
        </main>
        <Footer/>
      </div>
    </AnimationContainer>
  )
}
