"use client"

import { useState } from "react"
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { QUESTIONS } from "@/constants"

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

    return (
        <div id="faq" className="w-full py-5">
            <div className="container shadow-md rounded-lg p-8 bg-background">
                <h2 className="text-2xl mb-6 font-semibold">
                    Frequently Asked Questions
                </h2>

                {QUESTIONS.map((question) => (
                    <div key={question.id} className="mb-4 last:mb-0">
                        <button
                            className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
                            onClick={() => setActiveQuestion(activeQuestion === question.id ? null : question.id)}
                        >
                            {question.question}
                            {activeQuestion === question.id ? (
                                <FaMinusCircle className="text-lg text-primary" />
                            ): (
                                <FaPlusCircle className="text-lg text-primary" />
                            )}
                        </button>
                        <AnimatePresence>
                            {activeQuestion === question.id && (
                                <motion.div
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: "auto"}}
                                    exit={{opacity: 0, height: 0}}
                                >
                                    <p className="p-2 mt-1 font-bold text-primary">{question.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default FAQ
