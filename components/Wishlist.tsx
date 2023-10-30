import Image from "next/image"
import { motion } from "framer-motion"
import { useWishlistStore } from "@/store/useWishlistStore"

const Wishlist = () => {
    const wishlistStore = useWishlistStore()
    
    return (
        <motion.div 
            className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50" 
            onClick={() => wishlistStore.toggleWishList()}
        >
            <div>
                <motion.div
                    key="wishlist-menu"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white absolute right-0 top-0 md:w-2/5 w-3/4 h-full p-12"
                >
                    <button onClick={() => wishlistStore.toggleWishList()}>Back to store</button>
                    {wishlistStore.onWishList === "wishlist" && wishlistStore.wishList.length > 0 ? (
                        <>
                            <h1>Hello</h1>
                            <span>
                                You have {wishlistStore.wishList.length} items in your wishlist
                            </span>
                            {wishlistStore.wishList.map((product) => (
                                <div key={product.id}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={100}
                                        height={100}
                                    />
                                    <h1>{product.name}</h1>
                                    <button onClick={() => wishlistStore.removeFromWishlist({...product})}>Remove</button>
                                </div>
                            ))}
                        </>
                    ): (
                        <div className="w-full h-full flex justify-center items-center">
                            <h1 className="font-bold text-xl">Your Wishlist is Empty</h1>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Wishlist
