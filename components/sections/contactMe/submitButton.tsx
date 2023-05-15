import { Check, CircleNotch, PaperPlaneTilt, X } from "phosphor-react"
import { useEffect, useState } from "react"
import { requestSatus } from "./contactForm"

export type submitButtonStates = "default" | "waiting" | "ok" | "error"

type SubmitButtonProps = {
    requestSatus: requestSatus 
}

const submitStates = {
    default: Default,
    waiting: Waiting,
    ok: Ok,
    error: Error,
}

export function SubmitButton({requestSatus}:SubmitButtonProps) {
    const [buttonState, setButtonState] = useState<submitButtonStates>("default")
    const Button = submitStates[buttonState]

    useEffect(() => {
        setButtonState(requestSatus ?? "default")
    }, [requestSatus])
    
    return <Button/>
}

function Default() {
    return (
        <button 
        type="submit" 
        className="
        text-white bg-gradient-to-r from-[#8F19D7] to-[#FF5555]
        w-full flex gap-2 items-center justify-center 
        py-2
        "
        >
            <PaperPlaneTilt weight="fill" size={20}/>
            Enviar 
        </button>
    ) 
}

function Waiting() {
    return (
        <span
        className="
        text-white bg-gradient-to-r from-[#8F19D7] to-[#FF5555]
        w-full flex gap-2 items-center justify-center 
        py-2
        "
        >
            enviando
            <CircleNotch size={20} className="animate-spin"/>
        </span>
    )
}

function Ok() {
    return (
        <span
        className="
        text-white bg-green-500
        w-full flex gap-2 items-center justify-center 
        py-2
        "
        >
            Enviado com sucesso
            <Check size={20}/>
        </span>
    )
}

function Error() {
    return (
        <span
        className="
        text-white bg-red-500
        w-full flex gap-2 items-center justify-center 
        py-2
        "
        >
            Probelma ao enviar
            <X size={20}/>
        </span>
    )
}