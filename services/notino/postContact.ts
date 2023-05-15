import { formatContact, notion } from "./utils";

export type postContactProps = {
    name: string, 
    email: string,
    msg:string
}

export async function postContact({name, email, msg}:postContactProps) {
    const response = await notion.pages.create({
        parent: {database_id:process.env.CONTACT_ME_DATABASE},
        properties: {
            name: { title: [{text: {content: name}}] },
            email: {email: email},
            msg: {rich_text: [{text: {content: msg}}]}
        }
    })
    return {
        status: 200,
        msg: formatContact(response)
    }
}