import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Vision() {
    const navigate = useNavigate()
    return (
        <div> <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all"
            >
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4 font-poppins">
                    Our Vision
                </h2>
                <p className="text-gray-600 text-base font-roboto">
                    To be the leading transporter in the industry, known for
                    innovation, reliability, and customer-first service. We aim to
                    revolutionize logistics by adopting sustainable practices and
                    delivering excellence every step of the way.
                </p>
            </motion.div>

            {/* Mission */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all"
            >
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4 font-poppins">
                    Our Mission
                </h2>
                <p className="text-gray-600 text-base font-roboto">
                    To deliver safe, timely, and efficient transport services that
                    empower businesses and individuals. By leveraging modern fleet
                    technology and a skilled workforce, we strive to exceed customer
                    expectations every day.
                </p>
            </motion.div>
        </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">
                    Want to partner with us?
                </h3>

                <button
                    onClick={()=>navigate('/contact')}
                    className="bg-[#FF6B00] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#e65c00] transition-all">
                    Contact Us
                </button>
            </motion.div>
        </div>
    )
}

export default Vision