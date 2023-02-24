import { Link } from "@/components/link";
import { Logo } from "@/components/logo";
import { MobileMenu, Menu, MenuButton, MenuLink } from "./mobileMenu";

export function Header() {
    return (
        <header 
        className="
            w-screen h-[80px]
            flex flex-row justify-between items-center
            px-[30px] lg:px-[100px]
        ">
            <Logo type="name"/>
            <MobileMenu>
                <MenuButton/>
                <Menu>
                    <MenuLink href="#">Home</MenuLink>
                    <MenuLink href="#">Service</MenuLink>
                    <MenuLink href="#">Project</MenuLink>
                    <MenuLink href="#" type="button">Fale Comigo</MenuLink>
                </Menu>
            </MobileMenu>  
        </header>
    )
}