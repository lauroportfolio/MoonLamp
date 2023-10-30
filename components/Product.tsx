"use client"

import { useState } from "react"
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { motion } from "framer-motion"
import AddToCartButton from "./UI/AddToCartButton"
import { ProductType } from "@/types/ProductType"

import Image from "next/image"
import image1 from "@/public/productimage1.jpeg"
import image2 from "@/public/productimage2.jpeg"
import image3 from "@/public/productimage3.jpeg"
import image4 from "@/public/productimage4.jpeg"
import AddToWishlistButton from "./UI/AddToWishlistButton"

const Product = ({ name, image, unit_amount, id, description, quantity }: ProductType) => {
    const [currentImage, setCurrentImage] = useState(0)
    const productData = {
        name,
        image,
        unit_amount,
        id,
        description,
        quantity
    }

    const productImages = [image1, image2, image3, image4]

    const imageVariants = {
        exit: {
            opacity: 0,
            y: 20, 
            scale: 0.98, 
            transition: {
                duration: 0.4
            }
        },
        enter: {
            opacity: 1,
            y: 0, 
            scale: 1, 
            transition: {
                duration: 0.4
            }
        }
    }

    return(
        <section id="shop" className="py-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                {/* LEFT SIDE */}
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-4">
                        {productImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt="moonlamp"
                                width={100}
                                height={100}
                                onClick={() => setCurrentImage(index)}
                                className="rounded-md cursor-pointer"
                            />
                        ))}
                    </div>
                    
                    <div className="flex items-center">
                        <motion.div
                            initial="exit" 
                            animate="enter"
                            variants={imageVariants}
                            key={currentImage}
                            className="flex items-center"
                        >
                            <Image 
                                src={productImages[currentImage]}
                                alt="main-image"
                                width={480}
                                height={480}
                                className="rounded-md"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-5">
                        Wireless Moonlamp
                    </h2>
                    <div className="flex gap-1 text-yellow-400 justify-center mb-5">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span>(5.0)</span>
                    </div>
                    <div className="mb-5">
                        <span className="text-2xl mr-3 font-bold">$29.99</span>
                        <span className="text-gray-400 line-through">$49.99</span>
                    </div>
                    <p>
                        {description}
                    </p>
                    <div className="flex justify-center items-center gap-5">
                        <AddToCartButton {...productData} />
                        <AddToWishlistButton {...productData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
