import { GradientText } from "@/components/gradientText"
import { Link } from "@/components/link"
import { WhatsappLogo } from "phosphor-react"

export function ContactSection() {
    return (
        <section className="text-white px-[30px] py-[160px] flex flex-col gap-[60px] justify-center items-center" id="contact">
            <h2 className="text-[25px] sm:text-[30px] text-center"><GradientText>Vamos criar um projeto juntos!</GradientText></h2>
            <Link href="#" type="button" className="flex flex-row justify-center gap-2 w-full max-w-[500px]" bgColor="#1FCA4F"><WhatsappLogo size={20} weight="fill"/>Whatsapp</Link>
        </section>
    )
}