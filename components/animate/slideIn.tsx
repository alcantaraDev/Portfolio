import { useEffect, useRef, useState } from "react"
import { useScroll } from "."
import slideIn from "./slideIn.module.css"

type animateProps = {
    children: JSX.Element | JSX.Element[] | string
    direction: "topToBottom" | "bottomToTop" | "leftToRight" | "rightToLeft"
    delay?: number
    scrollAnimation?: boolean
}

export function SlideIn({children, direction, delay, scrollAnimation}:animateProps) {
    const { scrollY } = useScroll()
    const [startScrollAnimation, setStartScrollAnimation] = useState(false)
    const elementRef = useRef()

    useEffect(() => {
        const element = elementRef.current
        if (scrollY + screen.height >= element.offsetTop + element.clientHeight/1.2) {
            setStartScrollAnimation(true)
        }
    }, [scrollY])


    if (scrollAnimation) {
        return (
            <div 
            className={ `
            ${startScrollAnimation ? slideIn[direction] : ""}
            delay-[.4s]
            opacity-0
            `}
            style={{
                animationDelay: (delay ?? 0) + 400 + "ms"
            }}
            ref={elementRef}
            >
                {children}
            </div>
        )
    }
    
    return (
        <div 
        className={`
        ${slideIn[direction]}
        delay-[${delay ?? 0}ms]
        opacity-0
        `}
        ref={elementRef}
        >
            {children}
        </div>
    )
}