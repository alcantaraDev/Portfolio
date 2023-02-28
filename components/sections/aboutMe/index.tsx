import { SlideIn } from "@/components/animate";
import { GradientText } from "@/components/gradientText";

export function AbaoutMe() {
    return (
        <section 
        className="
        flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[120px]
        w-screen h-screen
        text-[30px] sm:text-[40px]
        "
        >
            <SlideIn direction="leftToRight" scrollAnimation>
                <img className="w-[240px] sm:w-auto" src="/about-me-picture.png" alt="foto de Isaque Alcântara"/>
            </SlideIn>
            <SlideIn direction="leftToRight" scrollAnimation delay={350}>
                <div 
                className="
                text-white w-[240px] sm:w-[325px]
                "
                >
                    <h2 className="font-bold">
                        <GradientText className="text-[1.5em]"> Sou </GradientText>
                        Designer e <br/>
                        Programador
                    </h2>
                    <p className="text-[0.4em]">
                        Meu trabalho é fazer o seu cliente ter a melhor experiência ao acessar o site
                    </p>
                </div>
            </SlideIn>
        </section>
    )
}