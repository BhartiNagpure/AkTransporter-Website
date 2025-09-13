import React from 'react'
import ServiceCard from '../components/globalcomponents/ServiceCard';
import { Truck, Package, Warehouse, Clock } from "lucide-react";
import { motion } from 'framer-motion'
import BannerSection from '../components/globalcomponents/BannerSection';

function Servicespage() {
    const title = "Services"
    const services = [
        {
            icon: <Truck className="w-10 h-10 text-[#FF6B00]" />,
            title: "bhjsvdhsf",
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
        {
            icon: <Truck className="w-10 h-10 text-[#FF6B00]" />,
            title: "bhjsvdhsf",
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

    return (
        <div>
            <BannerSection title={title} />
            <div className='max-w-7xl mx-auto px-6 lg:px-12 text-center py-4'>

                <ServiceCard services={services} />
            </div>
        </div>
    )
}

export default Servicespage
