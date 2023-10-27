import { useEffect } from "react"
import { useCartStore } from "@/store/useCartStore"
import { useClerk } from "@clerk/nextjs"

const OrderSuccess = () => {
    const cartStore = useCartStore()
    const {user} = useClerk()

    useEffect(() => {
        cartStore.setPaymentIntent("")
        cartStore.clearCart()
    }, [])

    return (
        <>
            <button onClick={() => cartStore.setCheckout("cart")}>Back to store</button>
            <div className="w-full h-full flex justify-center items-center flex-col">
                <h1 className="font-bold text-xl">Thanks <span className="uppercase text-red-600">{user?.username}</span> for your order!</h1>
                <p className="font-medium">
                    You can view your order history
                    <a href="/orders">
                        <span onClick={() => cartStore.setCheckout("cart")} className="font-bold text-xl text-red-600"> HERE</span>
                    </a>
                </p>
            </div>
        </>
    )
}

export default OrderSuccess
