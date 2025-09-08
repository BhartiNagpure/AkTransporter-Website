import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#aboutus" },
    { name: "Services", href: "#services" },
    // { name: "Fleet", href: "/fleet" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: " #testimonial" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#0A2540] text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-poppins font-bold text-white">
              AK Transporter
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-base font-montserrat font-medium hover:text-[#FF6B00] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/quote"
              className="bg-[#FF6B00] hover:bg-[#e85d00] text-white px-4 py-2 rounded-lg font-poppins font-semibold shadow-md transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2540] px-4 pt-2 pb-4 space-y-2 shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-base font-montserrat font-medium text-white hover:text-[#FF6B00] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/quote"
            className="block w-full text-center bg-[#FF6B00] hover:bg-[#e85d00] text-white px-4 py-2 rounded-lg font-poppins font-semibold shadow-md transition-all"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
