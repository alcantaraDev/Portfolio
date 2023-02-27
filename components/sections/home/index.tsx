import { GradientText } from "@/components/gradientText";
import { Link } from "@/components/link";

export function HomeSection() {
    return (
        <section
        className="
        w-screen h-[calc(100vh-80px)]
        flex flex-col-reverse lg:flex-row justify-center items-center gap-[20px] lg:gap-[100px]
        "
        >
            <div className="flex flex-col gap-5">
                <h1 
                className="
                text-white font-bold
                text-4xl sm:text-6xl  md:text-5xl 2xl:text-[3vw]
                "
                >
                    <GradientText className=" text-[1.5em]">Olá!</GradientText>
                    Sou Isaque <br/> Alcântara
                </h1>
                <Link 
                className="w-fit" 
                href="#" 
                type="button">
                    Conheça meu trabalho
                </Link>
            </div>
            <img 
            className="
            hidden lg:block
            w-[25vw]
            " 
            src="/home-cover.png"/>
        </section>
    )
}