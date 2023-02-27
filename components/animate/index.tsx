import { createContext, useContext, useEffect, useState } from "react"
import { SlideIn } from "./slideIn";

export {SlideIn}

type scrollProps = {
    scrollY: number
}

const ScrollContext = createContext<scrollProps>({scrollY:0})

type AnimationContainerProps = {
    children: string | JSX.Element | JSX.Element[]
}

export function AnimationContainer({children}:AnimationContainerProps) {
    const [scrollY, setScrollY] = useState(0)    

    function handleScroll() {
        setScrollY(window.scrollY)        
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    })

    return(
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )
}

export function useScroll() {
    return useContext(ScrollContext)
}
