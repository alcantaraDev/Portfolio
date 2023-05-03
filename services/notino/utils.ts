import { Client } from "@notionhq/client";
import { PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_SECRET,
})

export function formatID(id:string) {
    return id.replace(/-/ig, "")
}

export type project = {
    title:string
    id:string
    description:string
    inHomePage:boolean
    type:string
    desktopImageUrl:string|null,
    mobileImageUrl:string|null,
    githubUrl:string|null,
    appUrl:string|null,
}

export function projectFormat(project:any):project {
    const properties = project.properties
    return {
        id: formatID(project.id),
        title:properties.title.title[0]?.text.content,
        description:properties.description.rich_text[0]?.plain_text,
        inHomePage:properties.inHomePage.checkbox,
        type:properties.type.select?.name,
        desktopImageUrl:properties.desktopImageUrl.url,
        mobileImageUrl:properties.mobileImageUrl.url,
        githubUrl:properties.githubUrl.url,
        appUrl:properties.appUrl.url,
    }
}