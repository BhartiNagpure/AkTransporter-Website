import { useState } from "react";
import { motion } from "framer-motion";
import truckimg from '../../assets/truckimg.webp';
import truckbgimg from '../../assets/truckbg.avif';
import carimg from '../../assets/carimg.jpg';
import QuoteForm from "../globalcomponents/Qouteform";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [qouteModel, setQoutemodel] = useState(false)
  const navigate = useNavigate()
  return (
    <>
    <section className="relative bg-[#0A2540] text-white min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={carimg}
          alt="Transport Trucks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold leading-tight">
            Reliable Transport <br /> Solutions for Your Business
          </h1>
          <p className="mt-4 text-lg md:text-xl font-roboto text-gray-200">
            Fast, secure, and affordable logistics tailored to meet your
            shipping needs. We ensure your goods arrive safely, on time, every
            time.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
            onClick={()=> setQoutemodel(true)}
              className="bg-[#FF6B00] hover:bg-[#e85d00] text-white px-6 py-3 rounded-xl font-poppins font-medium shadow-lg transition-all"
            >
              Get a Quote
            </button>
            <button
              onClick={()=>navigate("/services")}
              className="bg-white text-[#0A2540] hover:bg-gray-100 px-6 py-3 rounded-xl font-poppins font-medium shadow-lg transition-all"
            >
              Our Services
            </button>
          </div>
        </motion.div>

        {/* Right Image (Optional Truck/Illustration) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <img
            src={carimg}
            alt="Truck img"
            className="w-[450px] rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
    <QuoteForm isOpen={qouteModel} onClose={()=> setQoutemodel(false)}/>
    </>
  );
}
