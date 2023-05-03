// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProjects } from '@/services/notino/getProjcts'
import { project } from '@/services/notino/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = project[]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const projects = await getProjects({})
    res.status(200).json(projects)
}
