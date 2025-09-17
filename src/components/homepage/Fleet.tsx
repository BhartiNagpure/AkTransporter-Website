import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Truck, Car, Bus, Bike } from "lucide-react";

function Fleet() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const rentalFleet = [
    {
      name: "Mini Truck",
      description: "Perfect for small businesses, city deliveries, and lightweight cargo.",
      icon: <Truck className="w-10 h-10 text-[#FF6B00]" />,
      rent: "1,200 / day",
      capacity: "2-3 Tons",
    },
    {
      name: "Pickup Van",
      description: "Compact and efficient for retail and last-mile delivery needs.",
      icon: <Car className="w-10 h-10 text-[#FF6B00]" />,
      rent: "900 / day",
      capacity: "1 Ton",
    },
    {
      name: "Cargo Bus",
      description: "Ideal for bulk goods, passenger + cargo transport, and long distances.",
      icon: <Bus className="w-10 h-10 text-[#FF6B00]" />,
      rent: "2,500 / day",
      capacity: "40-50 Seats / Mixed Cargo",
    },
    {
      name: "Two-Wheeler Delivery",
      description: "Fast and affordable for small parcel & food delivery services.",
      icon: <Bike className="w-10 h-10 text-[#FF6B00]" />,
      rent: "400 / day",
      capacity: "Up to 50kg",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-poppins font-bold text-[#0A2540]"
        >
          Our Fleet
        </motion.h2>

        <div className="py-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            className="pb-10"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {rentalFleet.map((vehicle, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-4 text-[#FF6B00]">{vehicle.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-poppins font-semibold text-[#0A2540]">
                    {vehicle.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-gray-600 text-sm font-roboto">
                    {vehicle.description}
                  </p>

                  {/* Rent Price */}
                  <p className="mt-4 text-lg font-semibold text-[#FF6B00]">
                    ₹ {vehicle.rent}
                  </p>

                  {/* Capacity */}
                  <p className="text-sm text-gray-500 mt-1">
                    Capacity: {vehicle.capacity}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => {
                      setSelectedVehicle(vehicle.name);
                      setOpenForm(true);
                    }}
                    className="mt-6 w-full bg-[#0A2540] text-white py-2 px-4 rounded-xl font-poppins hover:bg-[#FF6B00] transition-all"
                  >
                    Rent Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popup Form Modal */}
      {openForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setOpenForm(false)}
            >
              ✕
            </button>

            {/* Form Heading */}
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
              Rent {selectedVehicle}
            </h3>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF6B00] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF6B00] outline-none"
              />
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF6B00] outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white py-2 rounded-lg font-medium hover:bg-[#e65c00] transition"
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Fleet;
