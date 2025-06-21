"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

const testimonials = [
  {
    name: 'Mirunalini R',
    role: 'Data Analyst Intern',
    image: '/mirunalini.jpg',
    text: 'During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world BI projects that helped me understand data-driven decision-making.',
  },
  {
    name: 'Surendra Kumar',
    role: 'Data Science Intern (India)',
    image: '/surendra.jpg',
    text: 'My Data Science internship gave me experience in Machine Learning and Data Visualization. The expert mentorship improved my skills and made me confident in real-world applications.',
  },
  {
    name: 'Priya Sharma',
    role: 'Web Dev Intern',
    image: '/priya.jpg',
    text: 'INLIGHN TECH provided a hands-on full-stack internship. I built apps using React, Node.js, and MongoDB. It truly boosted my development confidence.',
  },
  {
    name: 'Mirunalini R',
    role: 'Data Analyst Intern',
    image: '/mirunalini.jpg',
    text: 'During my Data Analytics internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Cleaning. The program focused on real-world BI projects that helped me understand data-driven decision-making.',
  },
  {
    name: 'Surendra Kumar',
    role: 'Data Science Intern (India)',
    image: '/surendra.jpg',
    text: 'My Data Science internship gave me experience in Machine Learning and Data Visualization. The expert mentorship improved my skills and made me confident in real-world applications.',
  },
  {
    name: 'Priya Sharma',
    role: 'Web Dev Intern',
    image: '/priya.jpg',
    text: 'INLIGHN TECH provided a hands-on full-stack internship. I built apps using React, Node.js, and MongoDB. It truly boosted my development confidence.',
  },
]

export default function TestimonialSlider() {
  return (
    <section className="relative bg-[#031f1f] py-24 px-6 md:px-16 text-white overflow-hidden">
      <div className="absolute top-[-100px] left-[-80px] w-[200px] h-[200px] bg-yellow-500 opacity-10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-500 opacity-10 rounded-full blur-2xl z-0 animate-floatGlow" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">What Our Interns Say</h2>
        <p className="text-cyan-300 text-sm">Voices that shaped our journey 🌟</p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="max-w-4xl mx-auto px-4"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-[#0a3a3a] rounded-3xl p-8 shadow-2xl text-center backdrop-blur-sm border border-[#0f4c4c]"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl absolute left-6 top-6 opacity-70" />
              <FaQuoteRight className="text-yellow-400 text-3xl absolute right-6 bottom-6 opacity-70" />

              <div className="flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="rounded-full border-4 border-yellow-400 mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-semibold text-yellow-400">{item.name}</h4>
                <p className="text-sm text-cyan-300 mb-2">{item.role}</p>
              </div>
              <p className="text-gray-200 mt-4 text-[15px] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}