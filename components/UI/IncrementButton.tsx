import { RiAddFill } from "react-icons/ri"
import { useCartStore } from "@/store/useCartStore"
import { ProductType } from "@/types/ProductType"

interface IncrementPropType {
  product: ProductType
}

const DecrementButton = ({ product }: IncrementPropType) => {
  const cartStore = useCartStore()

  return (
    <button onClick={() => cartStore.addToCart({
      id: product.id,
      unit_amount: product.unit_amount,
      quantity: product.quantity,
      name: product.name,
      image: product.image
    })}>
      <RiAddFill />
    </button>
  )
}

export default DecrementButton
