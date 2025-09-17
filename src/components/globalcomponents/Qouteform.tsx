import { motion, AnimatePresence } from "framer-motion";

function QuoteForm({ isOpen, onClose }) {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          {/* Modal Card */}
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#0A2540] mb-6 font-poppins text-center">
              Get a Free Quote
            </h2>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#FF6B00] outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#FF6B00] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#FF6B00] outline-none"
              />
              <textarea
                placeholder="Your Requirements"
                rows={4}
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#FF6B00] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white py-3 rounded-xl font-medium hover:bg-[#e65c00] transition-all"
              >
                Submit Quote
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteForm;
