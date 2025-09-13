import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#0A2540] text-gray-300 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-poppins font-bold text-white">AK Transporter</h2>
          <p className="mt-4 text-sm font-roboto leading-relaxed">
            Reliable, secure, and affordable logistics & rental fleet services
            across India. Moving your goods with care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#FF6B00] transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#FF6B00] transition">Services</Link></li>
            <li><Link to="/fleet" className="hover:text-[#FF6B00] transition">Fleet</Link></li>
            <li><Link to="/about" className="hover:text-[#FF6B00] transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF6B00] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Logistics & Cargo</li>
            <li>Rental Fleet</li>
            <li>Container Carriers</li>
            <li>Special Cargo</li>
            <li>Last Mile Delivery</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-[#FF6B00]" />
              <span>123 Transport Nagar,Nagpur, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#FF6B00]" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#FF6B00]" />
              <span>info@aktransporter.com</span>
            </li>
          </ul>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Link to="#" className="hover:text-[#FF6B00] transition"><Facebook size={20} /></Link>
            <Link to="#" className="hover:text-[#FF6B00] transition"><Twitter size={20} /></Link>
            <Link to="#" className="hover:text-[#FF6B00] transition"><Instagram size={20} /></Link>
            <Link to="#" className="hover:text-[#FF6B00] transition"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AK Transporter. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;