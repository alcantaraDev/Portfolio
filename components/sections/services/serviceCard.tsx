import { SlideIn } from "@/components/animate"
import { GradientText } from "@/components/gradientText"
import { Browsers, DeviceMobile, Swatches, User } from "phosphor-react"

type serviceCardProps = {
    type: "identidadeVisual" | "ux" | "sites" | "apps"
}

const services = {
    ux: {
        icon: <User size={40}/>,
        title: "UX",
        text: "Melhoro a experiência que seus clientes tem ao acessar seu site ou aplicativo",
    },
    identidadeVisual: {
        icon: <Swatches size={40}/>,
        title: "Identidade visual",
        text: "Sua marca precisa de um rosto para ser reconhecida por seus clientes onde quer que ela esteja",
    },
    sites: {
        icon: <Browsers size={40}/>,
        title: "Sites",
        text: "Uso os conceitos de UX e microinterações para criando um ambiente virtual amigável para seus clientes",
    },
    apps: {
        icon: <DeviceMobile size={40}/>,
        title: "Apps Android e IOS",
        text: "Precisa de criar um aplicativo e não sabe como começar pode deixar que eu resolvo",
    },
}

export function ServiceCard({type}:serviceCardProps) {
    const data = services[type]

    return (
        <SlideIn direction="bottomToTop" scrollAnimation>
            <div 
            className="
            w-[260px] h-[200px] rounded-lg bg-[#222] relative
            flex flex-col justify-center items-center px-[18px]
            text-center
            ">
                <div 
                className="
                w-[60px] h-[60px] bg-gray rounded-[18px]
                flex justify-center items-center
                absolute top-[-30px] left-[100px]
                "
                >
                    {data.icon}
                </div>
                <h3 className="font-bold text-xl mb-5" ><GradientText>{data.title}</GradientText></h3>
                <p className="font-light text-[14px]">{data.text}</p>
            </div>
        </SlideIn>
    )
}