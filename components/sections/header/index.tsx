import { BackgorundScroll } from "@/components/animate/backgroundScroll";
import { Link } from "@/components/link";
import { Logo } from "@/components/logo";
import { MobileMenu, Menu, MenuButton, MenuLink } from "./mobileMenu";

export function Header() {
    return (
        <header 
        className="
            w-screen h-[80px]
            fixed z-10
        ">
            <BackgorundScroll 
            bgColor="#181818" 
            offset={80} 
            className="
            flex flex-row justify-between items-center
            px-[30px] xl:px-[100px]
            "
            >
                <Logo type="name"/>
                <MobileMenu>
                    <MenuButton/>
                    <Menu>
                        <MenuLink href="#home">Home</MenuLink>
                        <MenuLink href="#services">Serviços</MenuLink>
                        <MenuLink href="#">Projetos</MenuLink>
                        <MenuLink href="#contact" type="pageButton">Fale Comigo</MenuLink>
                    </Menu>
                </MobileMenu>  
            </BackgorundScroll>
        </header>
    )
}