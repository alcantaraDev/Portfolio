import Image from "next/image";

import { GradientText } from "@/components/gradientText";

import profileImage from "@/public/profile.png"

export function AboutMe() {
    return (
        <section
        className="h-screen flex flex-col md:flex-row justify-center items-center gap-[80px] px-[30px]"
        >
            <div className="text-white w-[clamp(292px,80%,412px)]">
                <span className="text-3xl font-bold">Sou</span>
                <h2 className="text-[clamp(2.5rem,10vw,4rem)] font-bold">
                    <GradientText> Isaque Alcantara </GradientText>
                </h2>
                <p className="text-lg font-light">Meu trabalho é resolver problemas com criatividade e um pouco de programação</p>
            </div>
            <Image
            src={profileImage}
            alt="foto de perfil de Isaque Alcantara"
            />
        </section>
    )
}