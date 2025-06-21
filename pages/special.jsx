import { motion } from "framer-motion";

export default function SpecialChallengePage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-gray-800">

      {/* Section 1: Header */}
      <section className="text-center py-16 px-4 mt-15">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-orange-500 font-semibold mb-2">EPIC OPPORTUNITY 🔥🎯</p>
          <h2 className="text-3xl md:text-4xl font-bold">Interns of the Month Challenge</h2>
          <p className="mt-4 text-sm md:text-base max-w-3xl mx-auto">
            Inlighn Tech is bringing you an EPIC opportunity with the "Interns of the Month Challenge"! 🎓✨
            Every single month, we’re recognizing 10 OUTSTANDING interns who have shown exceptional dedication, innovation, and top-tier performance! 💪
          </p>
        </motion.div>
      </section>

      {/* Section 2: Rewards */}
      <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ["💰", "A Stipend Reward of ₹15,000!"],
            ["🎁", "An Exclusive Inlighn Tech Welcome Kit & Swag Pack!"],
            ["🎖️", "Special Recognition on Our Platform!"],
          ].map(([icon, text], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-gray-700 text-sm font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Project Showcase */}
      <section className="py-16 px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          OUR INTERNS’ PROJECTS
        </motion.h3>
        <div className="flex overflow-x-auto gap-4 px-2 md:px-8 justify-center space-x-5">
          {["project1.png", "project2.png", "project3.png"].map((img, i) => (
            <motion.img
              key={i}
              src={`/${img}`}
              alt={`Project ${i + 1}`}
              className="w-72 h-44 object-cover rounded-lg shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Section 4: How to Participate Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-bold mb-12"
        >
          How to Participate
        </motion.h3>
        <div className="max-w-4xl mx-auto relative border-l-4 border-teal-400 pl-8">
          {[
            ["If you’re in your last month of internship, you’re eligible!"],
            ["Submit your best projects related to your domain!"],
            ["Take a skill assessment test to prove your expertise!"],
            ["Ace the interview round (if shortlisted)!"],
          ].map(([text], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10 relative"
            >
              <div className="w-4 h-4 bg-teal-400 rounded-full absolute -left-6 top-1.5"></div>
              <p className="text-gray-700 text-sm md:text-base">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Rules & Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Rules */}
          <div>
            <h3 className="text-xl font-bold mb-6">Rules & Selection Process</h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-lg shadow-md">Each intern can apply only ONCE in their final month.</li>
              <li className="bg-white p-4 rounded-lg shadow-md">Winners will be announced on the last day of every month. 🎊</li>
              <li className="bg-white p-4 rounded-lg shadow-md">Top 10 interns will be celebrated with amazing rewards & recognition!</li>
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold mb-6">Perks & Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Offer Letter within 30 minutes", "Industry-based projects", "Experience Letter with QR Code", "Exclusive Job Updates via WhatsApp", "Certificate Verification", "Peer & Mentor Support"].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-100 to-pink-100 p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <p className="text-sm font-medium text-gray-800">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
