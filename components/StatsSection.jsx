'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '5000+', label: 'INTERNS ENROLLED' },
  { value: '9000+', label: 'PROJECTS COMPLETED' },
  { value: '93%', label: 'SATISFACTION RATE' },
  { value: '30+', label: 'TOP INSTRUCTORS' },
]

export default function StatsSection() {
  return (
    <div className="relative bg-[#062727] z-0">
      {/* Curved Stats Section */}
      <section className="relative bg-[#054242] py-16 px-6 md:px-20 rounded-t-[80px] overflow-hidden text-white -mt-10 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#095858] rounded-xl px-6 py-8 text-center bg-[#054242] hover:shadow-xl transition hover:scale-105"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.value}</h3>
              <p className="text-sm font-semibold tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
