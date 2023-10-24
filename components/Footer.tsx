import Image from "next/image"
import logo from "@/public/moonlamplogo.png"
import { FOOTER_LINKS } from "@/constants"
import { AiFillFacebook } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="border-t py-8">
            <div className="w-full">
                <div className="flex">
                    <div className="w-full">
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                src={logo}
                                alt="logo"
                                width={200}
                                height={200}
                                className="mt-2"
                            />
                            <ul className="flex justify-center mt-8 gap-3">
                                {FOOTER_LINKS.map((link, index) => (
                                    <div className="footer_links" key={index}>
                                        {link}
                                    </div>
                                ))}
                            </ul>
                            <p className="mt-8">
                                &copy; 2023 Moonlamp.com By Lauro Flores
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
