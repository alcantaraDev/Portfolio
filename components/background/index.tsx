'use client'

import { useEffect, useState } from "react";
import { Logo } from "../logo";

export function BackGround() {
    return (
        <div 
        className="
            w-screen
            absolute top-0 left-0 z-[-2]
            
        "
        >
            <Logo type="outline" strokeWidth={0.1} className="max-w-[633px] min-w-[] w-[] absolute top-[123px] right-[-93px]" />
            <Logo type="outline" strokeWidth={0.2} className="max-w-[426px] min-w-[] w-[] absolute top-[827px] left-[-49px]" />
            <Logo type="outline" strokeWidth={0.2} className="max-w-[450px] min-w-[] w-[] absolute top-[1639px] right-[-163px]" />
            <Logo type="outline" strokeWidth={0.2} className="max-w-[345px] min-w-[] w-[] absolute top-[2501px] left-[-83px]" />
        </div>
    )
}