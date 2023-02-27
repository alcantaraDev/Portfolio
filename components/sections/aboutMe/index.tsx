import { GradientText } from "@/components/gradientText";

export function AbaoutMe() {
    return (
            <section 
            className="
            flex flex-row justify-center items-center gap-[120px]
            w-screen h-screen
            "
            >
            <img src="/about-me-picture.png" alt="foto de Isaque Alcântara"/>
            <div 
            className="
            text-white w-[325px]
            "
            >
                <h2 className="font-bold text-[40px]">
                    <GradientText className="text-[1.5em]"> Sou </GradientText>
                    Designer e <br/>
                    Programador
                </h2>
                <p className="text-lg">
                    Meu trabalho é fazer o seu cliente ter a melhor experiência ao acessar o site do seu negócio
                </p>
            </div>
        </section>
    )
}