import { notion, projectFormat } from "./utils"

type projectFilters = {
    id?: string
}

export async function getProjects({id}:projectFilters) {
    let projects
    
    if (id) {
        projects = await notion.databases.query({
            database_id: process.env.PROJECTS_DATABASE_ID,
            filter: {
                property: "id",
                rich_text: {
                    equals: id
                }
            }
        })
    } else {
        projects = await notion.databases.query({
            database_id: process.env.PROJECTS_DATABASE_ID,
            filter: {
                property: "inHomePage",
                checkbox: { equals: true }
            }
        })
    }

    return projects.results.map(project => projectFormat(project))
}