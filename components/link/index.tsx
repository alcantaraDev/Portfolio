type linkProps = {
    children: JSX.Element | JSX.Element[] | string
    href: string
    type?: "default" | "button"
    target?: "_blacnk"
    className?: string
}

export function Link({children, href, type, target, className}:linkProps) {
    if (type == "button") {
        return (
            <a 
            href={href} 
            target={target}
            className={`
            py-2 px-4 rounded-lg 
            text-white font-bold
            bg-gradient-to-r from-[#8F19D7] to-[#FF5555]
            ${className}
            `}
            >
                {children}
            </a>
        )
    }

    return (
        <a href={href} target={target} className={className}>{children}</a>
    )
}