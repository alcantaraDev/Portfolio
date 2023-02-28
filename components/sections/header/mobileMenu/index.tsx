import { createContext, useContext, useState } from "react";
import { Menu } from "./menu";
import { MenuButton } from "./menuButton";
import { MenuLink } from "./menuLink";

type contextProps = {
    active: boolean
    setActive: Function
}

const MobileMenuContext = createContext<contextProps>({active:false, setActive:()=>{}})

type mobileMenuProps = {
    children: JSX.Element | JSX.Element[] | string
}

export function MobileMenu({ children }:mobileMenuProps) {
    const [active, setActive] = useState(false)

    return (
        <MobileMenuContext.Provider value={{active, setActive}}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export function useMenuState() {
    return useContext(MobileMenuContext)
}

export { Menu, MenuButton, MenuLink }