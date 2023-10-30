import { AiOutlineHeart } from "react-icons/ai"
import { ProductType } from "@/types/ProductType"
import { useWishlistStore } from "@/store/useWishlistStore"

const AddToWishlistButton = ({ name, id, image, unit_amount, quantity }: ProductType) => {
    const wishlistStore = useWishlistStore()

    return (
        <div
            className="flex items-center gap-2 justify-center cursor-pointer"
            onClick={() => wishlistStore.addToWishlist({name, id, image, unit_amount, quantity})}
        >
            <AiOutlineHeart />
            <span>Add To Wishlist</span>
        </div>
  )
}

export default AddToWishlistButton
