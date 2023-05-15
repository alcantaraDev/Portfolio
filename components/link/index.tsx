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
    const buttonStyle = `
    py-2 px-4 
    text-white font-bold
    bg-gradient-to-r from-[#8F19D7] to-[#FF5555]
    flex flex-row justify-center items-center gap-2
    group hover:-translate-y-1 ease-in duration-150
    ${className}
    `

    if (type == "button" && type) {
        return (
            <Link
            
            href={href} 
            target={target}
            className={buttonStyle}
            style={{
                background: bgColor ?? "",
                color: textColor
            }}
            >
                {children}
                <ArrowSquareOut size={18}/>
            </Link>
        )
    } else if (type == "pageButton" && type) {
        return (
            <a
            
            href={href} 
            target={target}
            className={buttonStyle}
            style={{
                background: bgColor ?? "",
                color: textColor
            }}
            >
                {children}
                <ArrowDown className=" group-hover:scale-125 ease-in duration-150" size={18}/>
            </a>
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