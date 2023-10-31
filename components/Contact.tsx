"use client"

import { useState } from "react";
import { sendEmail } from "./SendEmail"

const Contact = () => {
    const initialFormData = {
        email: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("email", formData.email);
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("message", formData.message);

        await sendEmail(formDataToSend);

        // Limpar os campos após o envio bem-sucedido
        setFormData(initialFormData);
    };

    return (
        <section id="contact" className="py-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                        <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                            <div className="mb-6">
                                <h1 className="text-base font-medium mb-2">
                                    Email Address
                                </h1>
                                <a className="text-gray-500 text-sm" href="mailto:contato.nomedaempresa@email.com">
                                    support@moonlamps.com
                                </a>
                            </div>
                            <div className="mb-6">
                                <h1 className="text-base font-medium mb-2">
                                    Telephone
                                </h1>
                                <a className="text-gray-500 text-sm" href="tel:+(33)98404-8940">
                                    (33)98404-8940
                                </a>
                            </div>
                            <div className="mb-6">
                                <h1 className="text-base font-medium mb-2">
                                    Address
                                 </h1>
                                <h2 className="text-gray-500 text-sm">194 Elon Musk parkway drive Raleigh, NC 12302</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} action={async formData => {
                            await sendEmail(formData)
                        }}>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        id="email"
                                        className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                        placeholder="Your Email..."
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        id="subject"
                                        className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                        placeholder="Subject..."
                                    />
                                </div>
                                <textarea
                                    rows={3}
                                    style={{ resize: "none" }}
                                    name="message"
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                    placeholder="Your Message..."
                                />

                                <div className="text-right">
                                    <button type="submit" className="py-2 px-4 rounded-lg uppercase bg-primary text-white">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact