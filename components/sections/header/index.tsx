import { Logo } from "@/components/logo";
import { MobileMenu, Menu, MenuButton, MenuLink } from "./mobileMenu";
import { useEffect, useState } from "react";

export function Header() {
    const [bgActive, setBgActive] = useState(false)

    useEffect (() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBgActive(true)
            } else {
                setBgActive(false)
            }
        })
    })

    return (
        <header 
        className={`
            w-screen h-[80px]
            fixed z-10
            flex flex-row justify-between items-center
            px-[30px] xl:px-[100px]
            ease-in
            ${bgActive && "bg-[#181818] shadow-md"}
        `}>
            <Logo type="name"/>
            <MobileMenu>
                <MenuButton/>
                <Menu>
                    <MenuLink href="#home">Home</MenuLink>
                    <MenuLink href="#services">Serviços</MenuLink>
                    <MenuLink href="#">Projetos</MenuLink>
                    <MenuLink href="#contactMe" type="pageButton">Fale Comigo</MenuLink>
                </Menu>
            </MobileMenu>  
        </header>
    )
}