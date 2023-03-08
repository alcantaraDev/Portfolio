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
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if ( elementRef.current ) {
            const element:{offsetTop:number, clientHeight:number} = elementRef.current
            if (scrollY + screen.height >= element.offsetTop + element.clientHeight/1.2) {
                setStartScrollAnimation(true)
            }
        }
    }, [scrollY])


    if (scrollAnimation) {
        return (
            <div 
            className={ `
            ${startScrollAnimation ? slideIn[direction] : ""}
            opacity-0
            `}
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