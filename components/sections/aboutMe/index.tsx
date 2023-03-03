import { SlideIn } from "@/components/animate";
import { GradientText } from "@/components/gradientText";

export function AbaoutMe() {
    return (
        <section 
        className="
        flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[60px]
        w-screen h-screen
        "
        >
            <SlideIn direction="leftToRight" scrollAnimation>
                <img className="w-[80vw] min-w-[300px] max-w-[350px] px-[30px]" src="/about-me-picture.png" alt="foto de Isaque Alcântara"/>
            </SlideIn>
            <SlideIn direction="leftToRight" scrollAnimation>
                <div 
                className="
                text-white w-[80vw] min-w-[300px] max-w-[350px] px-[30px]
                "
                >
                    <h2 className="text-[clamp(25px,6.8vw,30px)] font-bold mb-5">
                        Sou
                        <GradientText className="text-[1.34em]">Designer e</GradientText>
                        <GradientText className="text-[1.34em]">Programador</GradientText>
                    </h2>
                    <p className="text-[clamp(15px,3vw,18px)]">
                        Meu trabalho é fazer o seu cliente ter a melhor experiência ao acessar o seu site
                    </p>
                </div>
            </SlideIn>
        </section>
    )
}