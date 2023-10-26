import { useCartStore } from "@/store/useCartStore"
import Image from "next/image"
import formatPrice from "@/utils/formatPrice"
import { totalPrice } from "@/utils/totalPrice"
import { motion } from "framer-motion"

import DecrementButton from "./UI/DecrementButton"
import IncrementButton from "./UI/IncrementButton"
import Checkout from "./Checkout"
import OrderSuccess from "./OrderSuccess"

const Cart = () => {
  const cartStore = useCartStore()
  const total = totalPrice(cartStore.cart)

  return (
    <motion.div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 md:w-2/5 w-3/4 h-screen p-12"
      >
        {cartStore.onCheckout === "checkout" && (
          <button onClick={() => cartStore.setCheckout("cart")} className="text-sm font-bold pb-12">Back to cart</button>
        )}
        {cartStore.onCheckout === "cart" && (
          <>
            <motion.button onClick={() => cartStore.toggleCart()}>
              Back to store
            </motion.button>
            {cartStore.cart.map((product) => (
              <div
                className="sm:flex-col md:flex-row flex py-4 gap-4 items-center border-b-2 border-b-gray-300 justify-between mb-5"
              >
                <Image
                  src={product.image}
                  width={150}
                  height={150}
                  alt="moonlamp"
                />
                <h1 className="font-medium">
                  {product.name}
                </h1>
                
                <div className="flex gap-2 justify-center items-center bg-black/10 px-2 rounded-sm">
                  <DecrementButton product={product} />
                  <h2>{product.quantity}</h2>
                  <IncrementButton product={product} />
                </div>
              </div>
            ))}

            {cartStore.cart.length > 0 ? <span>Total: {formatPrice(total)}</span> : null}
          </>
        )}

        {cartStore.cart.length < 1 && cartStore.onCheckout === "cart" ? (
          <div className="h-full flex items-center justify-center">
            <span className="text-lg uppercase font-bold whitespace-nowrap">Your cart is empty</span>
          </div>
        ) : null}

        {cartStore.cart.length > 0 && cartStore.onCheckout === "cart" ? (
          <button onClick={() => cartStore.setCheckout("checkout")} className="bg-primary py-2 mt-4 w-full rounded-md text-white">
            Checkout
          </button>
        ) : null}
        {cartStore.onCheckout === "checkout" && <Checkout />}
        {cartStore.onCheckout === "success" && <OrderSuccess />}
      </motion.div>
    </motion.div>
  )
}

export default Cart