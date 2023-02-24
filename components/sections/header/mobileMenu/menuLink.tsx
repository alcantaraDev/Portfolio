import { Link, linkProps } from "@/components/link"
import { useMenuState } from "."

type menuLinkProps = linkProps

export function MenuLink({children, href, target, type, className}:menuLinkProps) {
    const {setActive} = useMenuState()
    
    function handleClick() {
        setActive(false)
    }

    return (
        <div onClick={handleClick}>
            <Link 
            href={href} 
            target={target}
            type={type}
            className={className}
            >
                {children}
            </Link>
        </div>
    )
}