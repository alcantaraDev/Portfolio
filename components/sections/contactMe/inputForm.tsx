import { ChatTeardropDots, EnvelopeSimple, User } from "phosphor-react"
import { useFormContext } from "react-hook-form"

export type InputFormProps = {
    type: "name" | "email" | "massage",
    id: string
}

const InputTypes = {
    name: {
        Icon: User,
        placeholder: "Seu nome",
        pattern: undefined
    },
    email: {
        Icon: EnvelopeSimple,
        placeholder: "E-mail",
        pattern: /^[a-z\d\.]+@+[a-z\d\.]+$/i
    },
    massage: {
        Icon: ChatTeardropDots,
        placeholder: "Sua menssagem",
        pattern: undefined
    },
}

export function InputForm({type, id}:InputFormProps) {
    const {Icon, placeholder, pattern} = InputTypes[type]
    const {register, formState: {errors}} = useFormContext()
    const error = errors[id]?.message
    const registerOpts = {
        required: {value: true, message: `o campo ${placeholder} deve ser preenchido`},
        pattern: { value: pattern??/[a-z]?[0-9]?/, message: `formato de ${placeholder} incorreto`}
    }
    
    if (type == "massage") {
        return (
            <>
                <div 
                className="
                bg-gray text-zinc-400 
                py-[10px] px-[18px] 
                flex gap-2
                "
                >
                    <Icon size={20} className="translate-y-[2px]"/>
                    <textarea
                    {...register(id, registerOpts)}
                    className="w-full bg-transparent"
                    placeholder={placeholder}
                    />
                </div>
                <span className="mt-2 text-red-500">{typeof error == "string" ? error : ""}</span>
            </>
        )
    }

    return (
        <>
            <div 
            className="
            bg-gray text-zinc-400 
            py-[10px] px-[18px] 
            flex gap-2 items-center
            "
            >
                <Icon size={20}/>
                <input
                {...register(id, registerOpts)}
                className="w-full bg-transparent"
                placeholder={placeholder}
                />
            </div>
            <span className="mt-2 text-red-500">{typeof error == "string" ? error : ""}</span>
        </>
    )
}