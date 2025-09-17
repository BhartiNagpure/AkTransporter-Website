import { Truck, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-[#FFB100]" />,
      title: "Extensive Fleet",
      desc: "Explore a diverse fleet of trucks, meticulously maintained for optimal performance and reliability.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#FFB100]" />,
      title: "Customer Centric Approach",
      desc: "Driven by a commitment to excellence, we tailor our services to meet your unique transportation needs.",
    },
    {
      icon: <Award className="w-10 h-10 text-[#FFB100]" />,
      title: "Industry Expertise",
      desc: "Benefit from years of logistics and transportation experience ensuring efficiency and trust.",
    },
  ];

  return (
    <section className="relative py-20 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          alt="Mountains background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading with Blur Effect */}
        <div className="relative inline-block">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-extrabold text-white/20 tracking-widest relative"
          >
            WHY US
          </motion.h2>

          {/* Blur Overlay (bottom half of text) */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-full h-1/2 backdrop-blur-sm bg-gradient-to-t from-[#0A0A0A]/10 to-transparent"></div>
          </div>

          {/* Excellence text on blurred portion */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-semibold text-white"
          >
            Where Excellence Meets Service
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A]/80 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="/contact"
            className="bg-[#FFB100] text-black px-8 py-4 rounded-xl font-medium shadow-lg hover:bg-[#e5a200] transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
