"use client"

import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs"

import Image from "next/image"
import logo from '@/public/moonlamplogo.png'
import Link from "next/link"
import { NAV_LINKS } from "@/constants"

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const mobileMenuHandler = () => {
        setOpenMobileMenu(!openMobileMenu)
    }

    return (
        <nav className="py-3">
            <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="moonlamp logo"
                />

                <ul className={`md:flex items-center gap-8 md:static absolute text-gray-600 ${openMobileMenu ? "top-12 py-10 w-full bg-background left-0 text-center space-y-10 text-dark font-medium drop-shadow-lg z-20" : "hidden"}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={link.href}
                            key={link.key}
                            className="flex flex-col cursor-pointer"
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
                    <div>
                        <BsCart4 size={20} />
                    </div>
                    <div>
                        <BsFillBagHeartFill size={20} />
                    </div>
                </div>

                <div className="md:hidden ml-4 cursor-pointer" onClick={mobileMenuHandler}>
                    {!openMobileMenu ? <FiMenu size={25} /> : <MdClose size={25} />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar