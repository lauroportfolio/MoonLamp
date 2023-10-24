import Image from "next/image"
import heroImage from "@/public/moonlamphero.png"
import Button from "./Button"

const Hero = () => {
  return (
    <div className="bg-background py-10">
        <div className="container grid lg:grid-cols-2 grid-cols-1 items-center gap-20">
            <div>
                <h1 className="text-5xl font-bold text-dark ">
                    Illuminate Your World: Discover MoonLamp Magic
                </h1>
                <p className="mt-5 text-secondary">
                    With every purchase of our moonlamp 10% of the sale will go to donation. We love to give back to the community.
                </p>
                
                <div className="flex gap-5 mt-8">
                    <Button
                        type="button"
                        title="More Info"
                        variant="bg-primary py-2 px-5 rounded-xl text-white"
                    />
                    <Button
                        type="submit"
                        title="Buy Now"
                        variant="bg-secondary py-2 px-5 rounded-xl text-white"
                    />
                </div>
            </div>

            <div className="flex lg:justify-end justify-center items-center">
                <Image 
                    src={heroImage}
                    width={600}
                    height={600}
                    alt="hero image"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero
