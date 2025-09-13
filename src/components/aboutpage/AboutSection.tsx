
import { motion } from 'framer-motion';
import truckimg from '../../assets/truckimg.webp';
import { ChevronRight, MoveRight } from 'lucide-react';

function AboutSection() {
    return (
        <section className="  bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-4  lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Section - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-start"
                >
                    <img
                        src={truckimg}
                        alt="About AK Transporter"
                        className="w-full md:w-[500px] rounded-2xl shadow-lg object-cover"
                    />
                </motion.div>

                {/* Right Section - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"

                >
                    <h2 className="text-2xl md:text-5xl font-poppins font-bold text-[#0A2540] mb-6">
                     AK Transporter
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6 font-roboto">
                        At AK Transporter, we provide reliable, safe, and cost-effective
                        transportation solutions across India. With a modern fleet and a
                        customer-first approach, we ensure your goods reach their destination
                        on time, every time.
                    </p>

                    <ul className="space-y-4 text-gray-700 font-roboto list-disc"  >
                        <li >
                            10+ years of industry experience
                        </li>
                        <li >
                            Pan-India logistics and transportation network
                        </li>
                        <li >
                            Affordable rental fleet options
                        </li>
                        <li >
                            Trusted by 500+ clients nationwide
                        </li>
                    </ul>

                    <div className="mt-8">
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-poppins font-medium shadow-lg hover:bg-[#e85d00] transition-all"
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection