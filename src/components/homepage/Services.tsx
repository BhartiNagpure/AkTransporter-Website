import { motion } from "framer-motion";
import { Truck, Package, Warehouse, Clock } from "lucide-react";
import ServiceCard from "../globalcomponents/ServiceCard";

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
                <ServiceCard services={services} />
            </div>
        </section>
    );
}
