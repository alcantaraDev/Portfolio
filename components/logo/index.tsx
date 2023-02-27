import { GradientText } from "../gradientText"
import { OutlineSimbol } from "./outline"

type logoProps = {
    type?: "defult" | "outline" | "name"
    width?: number
    height?: number
    strokeWidth?: number
}

export function Logo({ type, width, height, strokeWidth }:logoProps) {
    if (type == "name") return (
        <div className="flex flex-row items-center gap-2">
            <img src="simbol.svg" className="w-10 md:w-8"/>
            <span className="text-white text-xl font-bold hidden md:flex flex-row gap-1">
                Isaque 
                <GradientText>Alcantara</GradientText>
            </span>
        </div>
    ) 

    else if (type == "outline") return (
        <OutlineSimbol width={width} height={height} strokeWidth={strokeWidth}/>
    )

    return (
        <img src="/simbol.svg" width={width ?? "auto"} height={height ?? "auto"}/>
    )
}