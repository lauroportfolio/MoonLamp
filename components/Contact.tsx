"use client"

import Button from "./Button"
import { sendEmail } from "./SendEmail"

const Contact = () => {
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
                        <form action={async formData => {
                            await sendEmail(formData)
                        }}>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        id="email"
                                        className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-2"
                                        placeholder="Your Email..."
                                    />
                                    <input
                                        type="text"
                                        name="subject"
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