import { GradientText } from "../gradientText"

type logoProps = {
    type?: "defult" | "outline" | "name"
    width?: number
    height?: number
}

export function Logo({ type, width, height }:logoProps) {
    if (type == "name") {
        return (
            <div className="flex flex-row items-center gap-2">
                <img src="simbol.svg" width={30}/>
                <span className="text-white text-xl font-bold flex flex-row gap-1">
                    Isaque 
                    <GradientText>Alcantara</GradientText>
                </span>
            </div>
        )
    } 

    return (
        <img src={type == "outline" ? "/outline-simbol.svg" : "/simbol.svg"} width={width ?? "auto"} height={height ?? "auto"}/>
    )
}