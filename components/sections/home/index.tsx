import { Link } from "@/components/link";

export function HomeSection() {
    return (
        <section 
        id="home" 
        className="
        text-white bg-[url('/home-bg.png')] bg-center bg-cover
        flex flex-col justify-center items-center gap-10
        h-screen
        "
        >
            <h1 className="text-[clamp(2.25rem,10vw,4rem)] text-center font-bold w-[clamp(300px,100%,478px)] animate-show-down-to-top">
                Precisa de um Designer?
            </h1>
            <Link className="animate-show-down-to-top" href="#" type="pageButton">
                Conheça meu trabalho
            </Link>
        </section>
    )
}