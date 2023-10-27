import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end()
    }

    const {userId} = req.body

    if (!userId) {
        return res.status(400).json({error: "User Id is required"})
    }

    try {
        const orders = await prisma.orders.findMany({
            where: {
                userId: userId
            }
        })

        return res.status(200).json(orders)

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}