import Stripe from "stripe";
import { prisma } from "@/utils/prisma";
import { CartType } from "@/types/CartType";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16"
})

const calculateOrderAmount = (items: CartType[]) => {
    return items.reduce((acc, item) => acc + (item.unit_amount! * item.quantity!), 0)
}

const manageStripePaymentIntent= async (payment_intent_id: string, total: number) => {
    if (payment_intent_id) {
        return await stripe.paymentIntents.update(payment_intent_id, {amount: total})
    }

    return await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        automatic_payment_methods: {enabled: true}
    })
}

const manageOrderInDB = async (paymentIntent: any, userId: any, total: any, items: any) => {
    const existingOrder = await prisma.orders.findUnique({
        where: {paymentIntentID: paymentIntent.id}
    })

    if (existingOrder) {
        return await prisma.orders.update({
            where: {paymentIntentID: paymentIntent.id},
            data: {userId, amount: total, currency: "usd", status: "awaiting payment"}
        })
    }

    const createOrder = await prisma.orders.create ({
        data: {
            userId,
            amount: total,
            currency: "usd",
            status: "awaiting payment",
            paymentIntentID: paymentIntent.id
        }
    })

    for (const item of items) {
        const product = await prisma.product.upsert({
            where: {id : item.id},
            update: {name: item.name, unit_amount: item.unit_amount},
            create: {id: item.id, name: item.name, unit_amount: item.unit_amount}
        })

        await prisma.orderProduct.create({
            data: {
                orderId: createOrder.id,
                productId: product.id,
                quantity: item.quantity
            }
        })
    }

    return createOrder
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {items, payment_intent_id, userId} = req.body

    const total = calculateOrderAmount(items)

    try {
        const paymentIntent = await manageStripePaymentIntent(payment_intent_id, total)

        const order = await manageOrderInDB(paymentIntent, userId, total, items)

        return res.status(200).json({paymentIntent})
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}