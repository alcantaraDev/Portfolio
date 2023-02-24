import { Link } from "@/components/link";
import { Logo } from "@/components/logo";

export function Header() {
    return (
        <header 
        className="
            w-screen h-[80px]
            flex flex-row justify-between items-center
            px-[30px] md:px-[100px] 
        ">
            <Logo type="name"/>
            <nav 
            className="
                text-white font-light
                flex flex-row gap-16 items-center
            "
            >
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Project</a>
                <Link href="#" type="button">Fale Comigo</Link>
            </nav>
        </header>
    )
}