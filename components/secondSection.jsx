'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiMonitor, FiUsers, FiAward, FiClock } from 'react-icons/fi'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SecondSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      }
    }),
  }

  return (
    <section ref={ref} className="relative w-full px-6 md:px-20 py-24 bg-[#032122] text-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-teal-500 opacity-20 rounded-full blur-3xl animate-floatGlow z-0" />
      <div className="absolute bottom-[-60px] left-[20%] w-[200px] h-[200px] bg-yellow-400 opacity-10 rounded-full blur-[120px] animate-floatGlow z-0" />
      <div className="absolute bottom-[20%] right-[-80px] w-[250px] h-[250px] bg-indigo-600 opacity-20 rounded-full blur-[100px] animate-floatGlow z-0" />

      {/* Logos */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex justify-center items-center gap-14 mb-16 relative z-10"
      >
        <Image src="/affairs.png" alt="Gov Logo" width={200} height={200} />
        <Image src="/iso.png" alt="ISO Logo" width={200} height={200} />
        <Image src="/startindia.png" alt="Startup India" width={200} height={200} />
      </motion.div>

      {/* Image + Text */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div className="absolute -bottom-8 w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-green-400 to-teal-600 blur-2xl z-0" />
          <Image src="/team.png" alt="Team" width={500} height={400} className="rounded-xl shadow-2xl relative z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
          className="lg:w-1/2 max-w-xl text-center lg:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            We Provide Best Internship For You
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-yellow-400 font-semibold">INLIGHN TECH</span>, we believe the future of education lies in bridging the gap between academics and industry.
            Our internships equip you with real skills in Full Stack Development, Data Science, and Project Management.
          </p>
          <Link
            href="#about"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 transition text-black px-6 py-3 rounded-md font-semibold shadow-lg"
          >
            Know More
          </Link>
        </motion.div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10 relative z-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            custom={idx + 2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="bg-[#052c2c] rounded-xl p-6 flex items-start gap-4 hover:scale-[1.05] transition-transform duration-300 shadow-xl border border-[#0f4c4c]"
          >
            <div className="text-yellow-400 text-3xl mt-1 animate-bounce">
              {feature.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1 text-yellow-400">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    icon: <FiMonitor />,
    title: 'Real-World Projects',
    description: 'Gain hands-on experience with industry projects and build a standout portfolio.'
  },
  {
    icon: <FiUsers />,
    title: 'Expert Mentorship',
    description: 'Guidance from experienced professionals at every step of your journey.'
  },
  {
    icon: <FiAward />,
    title: 'Certified Programs',
    description: 'Earn certifications to validate your newly acquired skills.'
  },
  {
    icon: <FiClock />,
    title: 'Flexible Learning',
    description: 'Learn at your own pace with schedules that fit your lifestyle.'
  }
]
