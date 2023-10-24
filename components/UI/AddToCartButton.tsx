"use client"

import { useCartStore } from "@/store/useCartStore"
import { ProductType } from "@/types/ProductType"

const AddToCartButton = ({ name, image, unit_amount, id, quantity }: ProductType) => {
    const cartStore = useCartStore()

    return (
        <>
            <button onClick={() => cartStore.addToCart({name, image, unit_amount, id, quantity})} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-primary">Add to cart</button>
        </>
    )
}

export default AddToCartButton
