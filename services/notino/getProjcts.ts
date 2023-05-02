import { notion, projectFormat } from "./utils"

type projectFilters = {}

export async function getProjects({}:projectFilters) {
    const projects = await notion.databases.query({
        database_id: process.env.PROJECTS_DATABASE_ID
    })

    return projects.results.map(project => projectFormat(project))
}