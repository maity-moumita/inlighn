'use client'

import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiEye, FiBarChart2 } from 'react-icons/fi'
import Image from 'next/image'

const cards = [
  {
    icon: <FiBarChart2 size={28} />,
    title: 'About INLIGHN TECH',
    description:
      'At INLIGHN TECH, we are driven by a mission to bridge the gap between academic learning and real-world industry needs. Our comprehensive internship programs empower students and young professionals with the tools, mentorship, and experiences required to thrive in a dynamic digital landscape. We offer hands-on training in Full Stack Development, Data Science, and Project Management, guided by experts in the field.',
    image: '/visual.jpg',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Our Mission',
    description:
      'Our mission is to create meaningful learning journeys that extend beyond the classroom. By combining practical exposure, real projects, and mentorship from seasoned professionals, we nurture confidence and expertise in our interns. We aim to foster an environment that values creativity, collaboration, and continuous learning, shaping tomorrow’s tech leaders today.',
    image: '/visual.jpg',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: <FiEye size={28} />,
    title: 'Our Vision',
    description:
      'We envision a future where every learner has access to opportunities that prepare them for the fast-paced tech world. Our vision is to become a trusted platform that delivers career-transforming experiences and unlocks potential. Through innovation, inclusivity, and excellence, we aim to redefine how internship programs impact student success.',
    image: '/visual.jpg',
    color: 'from-sky-400 to-cyan-600',
  },
  {
    icon: <FiTarget size={28} />,
    title: 'Our Commitment',
    description:
      'We are committed to delivering value at every stage of the internship. From personalized learning paths to project-based assessments and globally recognized certifications, our programs are designed to leave a lasting impact. We continually evolve to meet changing industry trends, ensuring our interns stay competitive and confident.',
    image: '/visual.jpg',
    color: 'from-orange-400 to-yellow-500',
  },
]

export default function WhoWeAreSection() {
  return (
    <section className="relative bg-[#062727] py-24 px-4 md:px-12 text-white overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#145858_1px,transparent_1px)] [background-size:30px_30px] opacity-20 z-0" />

      {/* Heading */}
      <div className="relative max-w-7xl mx-auto text-center mb-14 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          WHO WE ARE
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-[300px] h-auto min-h-[420px] bg-[#0a3a3a] rounded-2xl p-6 flex flex-col items-start justify-between shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-[1.04] overflow-hidden"
          >
            {/* Hover image */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
              <Image
                src={card.image}
                alt="visual"
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>

            {/* Icon */}
            <div
              className={`w-12 h-12 z-10 rounded-full bg-gradient-to-tr ${card.color} flex items-center justify-center shadow-md mb-4`}
            >
              {card.icon}
            </div>

            {/* Content */}
            <div className="z-10">
              <h4 className="text-lg font-semibold mb-3">{card.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
