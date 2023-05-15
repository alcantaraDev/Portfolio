import { postContact } from "@/services/notino/postContact"
import { NextApiRequest, NextApiResponse } from "next"

type Data = any

export default function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
    switch (req.method) {
        case "POST":
            POST(req, res)
        default:
            res.status(404)
    }
}

async function POST(req:NextApiRequest, res:NextApiResponse<Data>) {
    const {name, email, msg} = req.body
    if (name && email && msg) {
        const response = await postContact({name, email, msg})
        res.status(200).json(response)
    } else {
        res.status(400).json({code: 400, msg: "invalid body format"})
    }
}