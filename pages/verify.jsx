import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Verify() {
  const [internId, setInternId] = useState("")

  const handleVerify = () => {
    // Add actual verification logic here
    alert(`Verifying: ${internId}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-xl p-10 max-w-xl w-full text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Verify Certificate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 text-sm mb-4"
        >
          Enter Intern ID:
        </motion.p>

        <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
          <input
            type="text"
            value={internId}
            onChange={(e) => setInternId(e.target.value)}
            placeholder="e.g., ITID0001"
            className="px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleVerify}
            className="bg-[#032122] text-white px-5 py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Verify
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-700 text-sm font-medium"
        >
          Enter your Intern ID (e.g., <strong>ITID0001</strong>) in the field above to verify your internship certificate. You can find your Intern ID on your offer letter or experience letter.
        </motion.p>
      </motion.div>
    </div>
  )
}
