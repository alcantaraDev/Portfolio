type outlineProps = {
    strokeWidth?: number
    width?: number
    height?: number
    className?: string
} 

export function OutlineSimbol({width, height, strokeWidth, className}:outlineProps) {
    return (
        <svg strokeWidth={strokeWidth} width={width} height={height} viewBox="0 0 77 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M38.5 13.5L26 1L1 26L26 51L38.5 38.5M38.5 13.5L26 26L38.5 38.5M38.5 13.5L51 26L38.5 38.5M38.5 13.5L51 1L76 26L51 51L38.5 38.5" stroke="url(#paint0_linear_536_616)"/>
            <defs>
                <linearGradient id="paint0_linear_536_616" x1="0.204515" y1="25.8749" x2="74.8294" y2="25.8749" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8F19D7"/>
                    <stop offset="1" stop-color="#FF5555"/>
                </linearGradient>
            </defs>
        </svg>
    )
}