import { motion } from "framer-motion";
import { Truck, Package, Warehouse, Clock } from "lucide-react";

const services = [
    {
        icon: <Truck className="w-10 h-10 text-[#FF6B00]" />,
        title: "Road Freight",
        desc: "Reliable and safe long-haul transportation across cities and states.",
    },
    {
        icon: <Warehouse className="w-10 h-10 text-[#FF6B00]" />,
        title: "Warehousing",
        desc: "Secure storage solutions with real-time tracking and management.",
    },
    {
        icon: <Package className="w-10 h-10 text-[#FF6B00]" />,
        title: "Local Delivery",
        desc: "Fast and efficient last-mile delivery within your city limits.",
    },
    {
        icon: <Clock className="w-10 h-10 text-[#FF6B00]" />,
        title: "Express Shipping",
        desc: "Time-critical shipments delivered with speed and accuracy.",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-5xl font-poppins font-bold text-[#0A2540]"
                >
                    Our Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="subheading"
                >
                    Delivering safe, reliable, and efficient transport solutions tailored
                    for your business.
                </motion.p>

                {/* Cards Grid */}
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
        </section>
    );
}
