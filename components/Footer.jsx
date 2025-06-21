"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#032122] text-white py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Blurred Glow Background */}
      <motion.div
        className="absolute top-[-150px] right-[-150px] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px] z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 grid md:grid-cols-4 gap-10 items-start max-w-7xl mx-auto">
        {/* Logo + Intro */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-full" />
          <p className="text-sm text-white/80">
            At <span className="text-orange-400 font-semibold">INLIGHN TECH</span>, we believe that the
            future of education lies in bridging the gap between academic learning and industry needs.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-3">Menu</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Login to Portal</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <IconLink icon={<FaLinkedin />} />
            <IconLink icon={<FaInstagram />} />
            <IconLink icon={<FaYoutube />} />
          </div>

          <div className="text-sm text-white/80 space-y-2 mt-4">
            <p>
              Corporate Office – VO-301, WeWork Prestige Central,<br />
              Ground Floor, 36 Infantry Rd, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001
            </p>
            <p>📞 +91 9368842663</p>
            <p>📧 info@inlighntech.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/70">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-orange-400 font-semibold">INLIGHN TECH</span> | All Rights Reserved | Design By <span className="text-red-400 font-semibold">Gdscreatives</span>
        </p>
      </div>
    </footer>
  );
}

// Reusable Icon with hover animation
function IconLink({ icon }) {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="bg-white text-[#032122] rounded-full p-3 text-lg shadow-lg"
    >
      {icon}
    </motion.a>
  );
}
