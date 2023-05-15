import axios from "axios";
import { useState } from "react";
import { InputForm } from "./inputForm";
import { FormProvider, useForm } from "react-hook-form";

import { SubmitButton, submitButtonStates } from "./submitButton";

export type requestSatus = "waiting" | "ok" | "error" | undefined

export function ContactForm() {
    const methods = useForm()
    const {handleSubmit} = methods
    const [requestStatus, setRequestStatus] = useState<requestSatus>()

    const onSubmit = handleSubmit(data => {
        setRequestStatus("waiting")
        axios({
            method: "POST",
            url: "/api/contact/",
            data: data
        }).then(result => {
            if (result.status == 200) {
                setRequestStatus("ok")
            }
        }).catch(error => setRequestStatus("error"))
    })

    return (
        <FormProvider {...methods}>
            <form 
            onSubmit={onSubmit}
            className="space-y-5">
                <InputForm id="name" type="name"/>
                <InputForm id="email" type="email"/>
                <InputForm id="msg" type="massage"/>
                <SubmitButton requestSatus={requestStatus}/>
            </form>
        </FormProvider>
    )
}