import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa'

const faqs = [
  {
    question: "What makes Inlighn Tech different from other learning platforms?",
    answer: "Inlighn Tech provides top-quality learning modules and projects based on the latest industry technologies and trends.",
  },
  {
    question: "How can I register for an internship?",
    answer: "You can register by filling the form on our website. A confirmation email will be sent afterward.",
  },
  {
    question: "Can I interact with internship mentors for guidance?",
    answer: "Yes! You will have access to experienced mentors throughout your internship.",
  },
  {
    question: "What makes Inlighn Tech different from other learning platforms?",
    answer: "Inlighn Tech provides top-quality learning modules and projects based on the latest industry technologies and trends.",
  },
  {
    question: "How can I register for an internship?",
    answer: "You can register by filling the form on our website. A confirmation email will be sent afterward.",
  },
  {
    question: "Can I interact with internship mentors for guidance?",
    answer: "Yes! You will have access to experienced mentors throughout your internship.",
  },
  // Add more FAQs here...
]

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="bg-[#f8fafc] text-gray-800 min-h-screen px-6 py-20 mt-20">
      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {[
          { icon: <FaEnvelope />, label: "Email Address", value: "info@inlighntech.com" },
          { icon: <FaPhoneAlt />, label: "Call Us", value: "+91-9368842663" },
          { icon: <FaMapMarkerAlt />, label: "Visit Our Office", value: "Prestige Central, Shivaji Nagar, Bengaluru" },
          { icon: <FaMapMarkerAlt />, label: "Registered Office", value: "Anupam Nagar, Bareilly, Uttar Pradesh" },
        ].map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i}
            className="bg-white shadow-md rounded-lg p-6 text-center transition"
          >
            <div className="text-2xl text-white w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 mb-4">
              {item.icon}
            </div>
            <h4 className="font-semibold">{item.label}</h4>
            <p className="text-sm text-gray-500 mt-2">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQs Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#032122] text-white rounded-lg"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="flex justify-between w-full p-4 font-medium text-left"
              >
                {faq.question}
                <span>{openIndex === i ? <FaAngleUp /> : <FaAngleDown />}</span>
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="px-4 pb-4 text-sm text-gray-200"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
