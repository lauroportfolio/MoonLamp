"use client"

import { useState, useEffect } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useCartStore } from "@/store/useCartStore"
import { totalPrice } from "@/utils/totalPrice"

const CheckoutForm = ({ clientSecret }: {clientSecret: string}) => {
    const stripe = useStripe()
    const elements = useElements()
    const cartStore = useCartStore()

    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!stripe) {
            return
        }

        if (!clientSecret) {
            return
        }
    }, [stripe])

    useEffect (() => {
        async function fetchLatestOrderId() {
            try {
                const response = await fetch("/api/get-latest-order-id")

                const data = await response.json()

                setOrderId(data.orderId)
            } catch (error) {
                console.log(error)
            }
        }

        fetchLatestOrderId()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }

        setIsLoading(true)

        stripe.confirmPayment({
            elements,
            redirect: "if_required"
        })
        .then((result) => {
            if (!result.error) {
                cartStore.setCheckout("success")
                fetch ("/api/update-order-status", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        orderId: orderId,
                        status: "payment successful"
                    })
                })
            }

            setIsLoading(false)
        })
    }

    return (
        <form className="text-gray-600" onSubmit={handleSubmit} id="payment-form">
            <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
            <h1 className="py-4 text-sm font-bold">
                Total: {totalPrice(cartStore.cart)}
            </h1>
            
            <button className={`py-2 mt-4 w-full bg-primary rounded-md text-white disabled:opacity-25`} id="submit" disabled={isLoading || !stripe || !elements}>
                <span id="button-text">
                    {isLoading ? 
                        <span>Processing...</span> : 
                        <span>Pay Now</span>}
                </span>
            </button>
        </form>
    )
}

export default CheckoutForm