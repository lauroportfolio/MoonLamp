import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import formatPrice from "@/utils/formatPrice"


const page = () => {
    const [orders, setOrders] = useState([])
    const {user} = useUser()

    useEffect (() => {
        if (user && user.id) {
            fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({userId: user.id})
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response is not okay")
                }
                return response.json()
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setOrders(data)
                } else {
                    console.error("Data Received is not an array", data)
                }
            })
            .catch((error) => console.error(error)) 
        }
    }, [user])

    return (
        <div>
            page
        </div>
    )
}

export default page
