"use client";
import { motion } from "framer-motion";

export default function TouchForm() {
  return (
     <section className="relative min-h-screen bg-gradient-to-br from-[#032122] via-[#0a2e35] to-[#1b424f] flex items-center justify-center p-6 overflow-hidden">
      {/* Floating Light Glow Background */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-400/30 rounded-full blur-[150px] z-0"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] z-0"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-10 tracking-wide">
          ✨ Let’s Connect
        </h2>

        <form className="grid gap-6 text-white">
          <div className="grid md:grid-cols-2 gap-6">
            <FloatingInput label="Full Name" type="text" />
            <FloatingInput label="Email" type="email" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <FloatingInput label="Domain of Internship" type="text" />
            <FloatingInput label="State" type="text" />
          </div>
          <FloatingTextarea label="Your Message" />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-semibold py-3 rounded-xl shadow-xl w-full md:w-1/3 mx-auto transition duration-300 hover:shadow-2xl"
          >
            🚀 Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

// Floating label input
function FloatingInput({ label, type }) {
  return (
    <div className="relative">
      <input
        type={type}
        required
        placeholder=" "
        className="peer w-full bg-white/20 border border-white/30 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-transparent"
      />
      <label className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-1 peer-focus:text-xs peer-focus:text-yellow-200">
        {label}
      </label>
    </div>
  );
}

// Floating label textarea
function FloatingTextarea({ label }) {
  return (
    <div className="relative">
      <textarea
        rows={4}
        required
        placeholder=" "
        className="peer w-full bg-white/20 border border-white/30 text-white p-4 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-transparent"
      ></textarea>
      <label className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-1 peer-focus:text-xs peer-focus:text-yellow-200">
        {label}
      </label>
    </div>
  );
}
