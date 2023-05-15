import { GradientText } from "@/components/gradientText";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import { ContactForm } from "./contactForm";

export function ContactMe() {
    return (
        <section className="px-[30px] py-40 flex flex-col gap-20 items-center">
            <h2 className="text-[clamp(26px,8vw,40px)] text-center">
                <GradientText>Vamos criar um projeto juntos!</GradientText>
            </h2>
            <div className="max-w-[500px] w-full grid gap-16">
                <ContactForm/>
                <div className="flex items-center gap-2 w-full text-gray">
                    <div className="w-full h-[2px] bg-gray"/>
                    ou
                    <div className="w-full h-[2px] bg-gray"/>
                </div>
                <Link 
                href="#" 
                target="_blank" 
                className="
                flex justify-center items-center gap-2
                bg-green-500 text-white
                py-2 
                hover:scale-105 duration-150 ease-in
                "
                >
                    <WhatsappLogo size={22} weight="fill"/>
                    Whatsapp
                </Link>
            </div>
        </section>
    )
}