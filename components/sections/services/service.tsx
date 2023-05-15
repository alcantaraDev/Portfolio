import { GradientText } from "@/components/gradientText"
import { Link } from "@/components/link"
import Image from "next/image"
import { Service } from "."

export type ServiceProps = {
    reverse?: boolean
} & Service

export function Service({title, description, image: {url, alt}, reverse}:ServiceProps) {
    return (
        <article 
        className={`
        py-[180px]
        flex flex-row justify-center items-center gap-20
        ${reverse ? "flex-row-reverse" : ""}
        `}
        >
            <div
            className="
            max-w-[500px]
            text-white font-light
            space-y-5
            "
            >
                <h2 
                className="font-bold text-4xl"
                ><GradientText>{title}</GradientText></h2>
                <p className="text-lg">{description}</p>
                <Link 
                href="#contactMe" 
                type="pageButton"
                className="w-fit"
                >Faça um orçamento</Link>
            </div>
            <Image 
            src={url} 
            alt={alt}
            width={500}
            height={400}
            />
        </article>
    )
}