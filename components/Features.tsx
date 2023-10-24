import Image from "next/image"
import moonlamp from "@/public/transparentmoonlamp.png"
import { BsBatteryCharging } from "react-icons/bs"
import { BATTERY_ITEMS_LEFT, BATTERY_ITEMS_RIGHT } from "@/constants"

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container grid md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-5">
        <div>
          <ul className="space-y-10">
            {BATTERY_ITEMS_LEFT.map((item, index) => (
              <li key={index}>
                <div className="features_items_left">
                  <h3>{item.title}</h3>
                  <div>{item.icon}</div>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={moonlamp} 
            alt="moonlamp" 
            width={500} 
            height={500} 
          />
        </div>
        <div>
          <ul className="space-y-10 text-right">
            {BATTERY_ITEMS_RIGHT.map((item, index) => (
              <li key={index}>
                <div className="features_items_right">
                  <h3>{item.title}</h3>
                  <div>{item.icon}</div>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features;