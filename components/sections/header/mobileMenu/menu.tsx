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
        ${active ? "flex" : "hidden lg:flex"}
        fixed top-0 left-0 w-screen h-screen bg-black
        flex-col gap-16 items-center justify-center
        lg:relative lg:flex-row lg:w-auto lg:h-auto lg:bg-transparent
        z-10
        `}
        >
            { active ? <CloseButton/> : ""}
            {children}
        </nav>
    )
}