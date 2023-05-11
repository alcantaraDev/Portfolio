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
            <h1 className="text-6xl text-center font-bold w-[478px]">
                Precisa de um Designer?
            </h1>
            <Link href="#" type="pageButton">
                Conheça meu trabalho
            </Link>
        </section>
    )
}