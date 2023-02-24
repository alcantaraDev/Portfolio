import { useMenuState } from "."
import { CloseButton } from "./closeButton"

type menuProps = {
    children: JSX.Element | JSX.Element[] | string
}

export function Menu({children}:menuProps) {
    const {active} = useMenuState()

    return (
        <nav
        className={`
        text-white font-light
        ${active ? "flex" : "hidden md:flex"}
        fixed top-0 left-0 w-screen h-screen bg-black
        flex-col gap-16 items-center justify-center
        md:relative md:flex-row md:w-auto md:h-auto md:bg-transparent
        `}
        >
            { active ? <CloseButton/> : ""}
            {children}
        </nav>
    )
}