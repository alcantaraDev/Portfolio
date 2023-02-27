import { List } from "phosphor-react";
import { useMenuState } from ".";

export function MenuButton() {
    const { setActive } = useMenuState()

    function handleClick() {
        setActive(true)
    }

    return (
        <button 
        className="text-white lg:hidden"
        onClick={handleClick}
        >
            <List size={40}/>
        </button>
    )
}