import { SlideIn } from "@/components/animate";
import { Link } from "@/components/link";
import { GithubLogo, InstagramLogo } from "phosphor-react";

type props = {
    type: "instagram" | "github"
}

const types = {
    instagram: {
        icon: <InstagramLogo size={40} weight="fill"/>,
        text: "Acompanhe meus projetos de UX/UI e programação no meu instagram",
        linkTitle: "Instagram",
        linkURL: "https://www.instagram.com/alcantaraui/",
        textColor: "",
        bgColor: "",
    },
    github: {
        icon: <GithubLogo size={40} weight="fill"/>,
        text: "Acompanhe meus projetos de programação e os repositorios dos projeto",
        linkTitle: "Github",
        linkURL: "https://github.com/alcantaraDev",
        textColor: "#000",
        bgColor: "#fff",
    },
}

export function SocialMediaCard({type}:props) {
    const data = types[type]

    return (
        <SlideIn direction="bottomToTop" scrollAnimation>
            <div
            className="
            w-[240px] h-[160px] bg-[#222] rounded-lg px-[20px]
            flex flex-col justify-center items-center
            relative text-center
            "
            >
                <div
                className="
                absolute top-[-30px] left-[90px]
                p-[10px] rounded-[18px] bg-gray
                "
                >
                    {data.icon}
                </div>
                <p className="text-[14px]" >{data.text ?? "..."}</p>
                <Link 
                href={data.linkURL} 
                target="_blacnk" 
                type="button"
                className={`absolute bottom-[-22px]`}
                textColor={data.textColor}
                bgColor={data.bgColor}
                >
                    {data.linkTitle}
                </Link>
            </div>
        </SlideIn>
    )
}