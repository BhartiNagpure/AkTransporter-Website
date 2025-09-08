import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Business Owner",
        feedback:
            "AK Transporter has been our trusted logistics partner. Always on time and reliable. Highly recommend their services!",
        rating: 5,
    },
    {
        name: "Anita Sharma",
        role: "Retailer",
        feedback:
            "Professional team and excellent customer service. Their delivery tracking system keeps us updated at all times.",
        rating: 4,
    },
    {
        name: "Vikram Singh",
        role: "Manufacturer",
        feedback:
            "Safe, secure, and affordable transport. Their fleet is well-maintained, and the staff is very cooperative.",
        rating: 5,
    },
];

 function Testimonials() {
    return (
        <section id="testimonial" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-poppins font-bold text-[#0A2540]"
                >
                    What Our Clients Say
                </motion.h2>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl shadow-lg p-6 text-left transition-all"
                        >
                            {/* Rating */}
                            <div className="flex mb-3">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-[#FF6B00] fill-[#FF6B00]" />
                                ))}
                            </div>

                            {/* Feedback */}
                            <p className="text-gray-600 font-roboto italic">“{t.feedback}”</p>

                            {/* Name & Role */}
                            <div className="mt-4">
                                <h4 className="font-poppins font-semibold text-[#0A2540]">
                                    {t.name}
                                </h4>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials