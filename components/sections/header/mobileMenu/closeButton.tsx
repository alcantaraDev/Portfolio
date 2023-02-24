import { X } from "phosphor-react";
import { useMenuState } from ".";

export function CloseButton() {
    const {setActive} = useMenuState()

    function handleClick() {
        setActive(false)
    }

    return (
        <button 
        className="md:hidden absolute top-8 right-8"
        onClick={handleClick}
        >
            <X size={40} />
        </button>
    )
}