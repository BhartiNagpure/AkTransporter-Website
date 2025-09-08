import { motion } from "framer-motion";
import truck from '../../assets/truckbg.avif'

export default function TwoColumnSection() {
  return (
    <section id="aboutus" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#0A2540]">
            Trusted Transport Partner
          </h2>
          <p className="mt-4 text-lg font-roboto text-gray-600 leading-relaxed">
            At AK Transporter, we ensure your goods are delivered with speed,
            safety, and reliability. From local deliveries to long-haul freight,
            our services are designed to meet every business need.
          </p>
          <div className="mt-6">
            <a
              href="/about"
              className="inline-block bg-[#FF6B00] hover:bg-[#e85d00] text-white px-6 py-3 rounded-xl font-poppins font-medium shadow-lg transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.2 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={truck}
            alt="Transport Truck"
            className="w-full md:w-[500px] rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
