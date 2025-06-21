'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiBriefcase, FiClipboard } from 'react-icons/fi'

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#032122] py-24 px-6 md:px-16 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Why Choose Us?
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* === Left Side Cards === */}
        <div className="flex flex-col gap-8 w-full lg:w-[40%]">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black p-6 h-[150px] w-full rounded-xl flex flex-col justify-start gap-4 hover:bg-yellow-300 transition-all shadow-xl hover:scale-[1.03]"
            >
              <div className="w-12 h-12 rounded-full border-4 border-violet-400 flex items-center justify-center text-red-500 text-xl">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Right Side Image === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-[55%] flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-[650px] h-auto">
            <Image
              src="/women.png" 
              alt="Business Woman"
              width={650}
              height={500}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-[-40px] w-[250px] h-[60px] bg-blue-400 rounded-t-full blur-lg opacity-70 z-0" />
        </motion.div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <FiBriefcase />,
    title: 'Career Support',
    description:
      'Beyond training: portfolio reviews, mock interviews & network building.'
  },
  {
    icon: <FiClipboard />,
    title: 'Tailored Programs',
    description:
      'Learn by doing: hands-on courses in web dev, data science & PM.'
  }
]
