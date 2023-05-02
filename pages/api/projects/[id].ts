// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProjects } from '@/services/notino/getProjcts'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const projects = await getProjects({})
    res.status(200).json(projects)
}
