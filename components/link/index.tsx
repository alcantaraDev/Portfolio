import Link from "next/link"
import { ArrowDown, ArrowSquareOut } from "phosphor-react"

export type linkProps = {
    children: string
    href: string
    type?: "default" | "button" | "pageButton"
    target?: "_blacnk"
    className?: string
    textColor?: string
    bgColor?: string
}

function LinkComponent({children, href, type, target, className, bgColor, textColor}:linkProps) {
    if (type != "default" && type) {
        return (
            <Link 
            href={href} 
            target={target}
            className={`
            py-2 px-4 
            text-white font-bold
            bg-gradient-to-r from-[#8F19D7] to-[#FF5555]
            flex flex-row justify-center items-center gap-2
            group hover:-translate-y-1 ease-in duration-150
            ${className}
            `}
            style={{
                background: bgColor ?? "",
                color: textColor
            }}
            >
                {children}
                {type == "button" && <ArrowSquareOut size={18}/>}
                {type == "pageButton" && <ArrowDown className=" group-hover:scale-125 ease-in duration-150" size={18}/>}
            </Link>
        )
    }

    return (
        <Link 
        href={href} 
        target={target} 
        className={`${className} flex flex-row justify-center items-center gap-2 hover:underline`}
        >
            {children}
        </Link>
    )
}

export {LinkComponent as Link}