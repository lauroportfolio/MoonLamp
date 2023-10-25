"use client"

// REACT ICONS
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"

// REACT & NEXT JS
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs"

// OUTROS
import logo from '@/public/moonlamplogo.png'
import Cart from "./Cart"
import { useCartStore } from "@/store/useCartStore"
import { NAV_LINKS } from "@/constants"

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)

    const cartStore = useCartStore()
    const {isSignedIn, user} = useUser()

    const mobileMenuHandler = () => {
        setOpenMobileMenu(!openMobileMenu)
    }

    useEffect(() => {
        if(openMobileMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto"
        }
    }, [openMobileMenu])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className={`py-4 w-full ${isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"}`}>
            <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
                <Image
                    src={logo}
                    width={150}
                    height={150}
                    alt="moonlamp logo"
                />

                <ul className={`md:flex items-center gap-8 md:static absolute text-gray-600 ${openMobileMenu ? "top-12 mt-3 py-10 w-full bg-secondary left-0 text-center space-y-10 text-white font-medium drop-shadow-lg z-20" : "hidden"}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={link.href}
                            key={link.key}
                            className="flex flex-col cursor-pointer"
                            onClick={() => setOpenMobileMenu(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
                    <div onClick={() => cartStore.toggleCart()} className="cursor-pointer relative">
                        <AiOutlineShoppingCart size={20} />
                        {cartStore.cart.length > 0 && (
                            <span className="bg-primary text-white text-sm font-bold w-4 h-4 rounded-full absolute left-2 bottom-3 flex items-center justify-center">{cartStore.cart.length}</span>
                        )}
                    </div>
                    <div>
                        <AiOutlineHeart size={20} />
                    </div>
                    {!isSignedIn ? (
                        <Link href={"/sign-in"}>
                            <AiOutlineUser size={25} />
                        </Link>
                    ): (
                        <div>
                            <UserButton />
                        </div>
                    )}
                </div>

                <div className="md:hidden ml-4 cursor-pointer" onClick={mobileMenuHandler}>
                    {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
                </div>
            </div>

            {!cartStore.isOpen && <Cart />}
        </nav>
    )
}

export default Navbar