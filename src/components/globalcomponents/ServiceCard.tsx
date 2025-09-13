import React from 'react';
import {motion } from "framer-motion"

function ServiceCard({services }) {
  return (
    <div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services?.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-poppins font-semibold text-[#0A2540]">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-gray-600 font-roboto">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
    </div>
  )
}

export default ServiceCard