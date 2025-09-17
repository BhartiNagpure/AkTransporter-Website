import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function Pricing({ data }) {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-4  lg:px-12 text-center">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-poppins font-bold text-[#0A2540] mb-6"
                >
                    Flexible <span className="text-[#FF6B00]">Pricing Plans</span>
                </motion.h2>
                <p className="text-lg text-gray-600 font-roboto mb-12">
                    Choose a plan that fits your logistics needs. Transparent pricing with no hidden charges.
                </p>


                <div className="grid md:grid-cols-3 gap-8">
                    {data.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative bg-white rounded-2xl shadow-md p-8 flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl ${plan.highlight ? "border-2 border-[#FF6B00]" : ""
                                }`}
                        >
                            {/* Badge for Popular Plan */}
                            {plan.highlight && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                                    Most Popular
                                </span>
                            )}

                            {/* Plan Info */}
                            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">
                                {plan.name}
                            </h3>
                            <p className="text-4xl font-bold text-[#FF6B00]">
                                {plan.price}
                                <span className="text-base text-gray-600 font-normal">
                                    {plan.duration}
                                </span>
                            </p>

                            {/* Features */}
                            <ul className="mt-6 space-y-3 text-gray-700 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#FF6B00]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`mt-8 w-full py-3 px-6 rounded-xl font-medium shadow-md transition-all ${plan.highlight
                                    ? "bg-[#FF6B00] text-white hover:bg-[#e85d00]"
                                    : "bg-[#0A2540] text-white hover:bg-[#142f57]"
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing