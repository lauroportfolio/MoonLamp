"use server"

import { validateString } from "@/utils/validateString"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        }
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'moonlampsuporte@gmail.com',
            subject: subject as string,
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                subject: subject as string,
                senderEmail: senderEmail as string,
            })
        })

    } catch (error: any) {
        console.log(error)
    }
}