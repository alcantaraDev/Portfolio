import { Children, useEffect, useState } from "react"
import { useScroll } from "."

type props = {
    children: JSX.Element | JSX.Element[] | string
    bgColor: string
    offset: number
    className?: string
}

export function BackgorundScroll({children, bgColor, offset, className}:props) {
    const {scrollY} = useScroll()
    const [bgActivate, setBgActivate] = useState(false)

    useEffect(() => {
        if (offset <= scrollY) setBgActivate(true)
        else setBgActivate(false)
    },[scrollY])

    return (
        <div
        className={`w-full h-full ${className} ${bgActivate ? `bg-[#181818] drop-shadow-2xl transition duration-300 ease-out` : ""}`}
        >
            {children}
        </div>
    )
}