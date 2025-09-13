import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from 'framer-motion'


function Contact() {
  return (
    <div className=" md:mt-8 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6 py-4 lg:px-12 flex flex-col lg:flex-row gap-12">

                {/* Left Section - Contact Info & Form */}
                <div className="flex grid  lg:grid-cols-2 gap-12 ">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="grid-cols-12 lg:grid-col-6 w-full flex flex-col justify-start">
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#0A2540]">
                                Get In Touch
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 font-roboto">
                                Have questions or need a quote? Reach out to us, and we’ll respond quickly.
                            </p>

                            <ul className="mt-6 space-y-4 text-gray-700">
                                <li className="flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-[#FF6B00]" />
                                    <span>123 Transport Nagar,Nagpur, India</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-6 h-6 text-[#FF6B00]" />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-6 h-6 text-[#FF6B00]" />
                                    <span>info@aktransporter.com</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                    initial={{opacity:0, x:40} }
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.5}}
                    viewport={{once : true}}
                    className="flex-1"
                    >
                    <div className=" grid-cols-12 lg:grid-col-6  w-full bg-white shadow-lg rounded-2xl p-8">
                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    placeholder="+91 XXXXX XXXXX"
                                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Write your message..."
                                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:outline-none"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-[#FF6B00] hover:bg-[#e85d00] text-white py-3 rounded-xl font-poppins font-medium shadow-lg transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    </motion.div>
                </div>
            </div>
    </div>
  )
}

export default Contact