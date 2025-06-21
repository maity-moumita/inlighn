import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Business Analyst Internship Program',
    description: 'Gain practical business analysis skills by working on real-world projects.',
    image: '/bussiness.jpg',
  },
  {
    title: 'Front-End Development Internship',
    description: 'Kickstart your journey into web development by mastering frontend technologies.',
    image: '/frontend.jpg',
  },
  {
    title: 'Ethical Hacking with Kali Linux',
    description: 'Learn advanced cybersecurity skills through Kali Linux hands-on labs.',
    image: '/ethical.jpg',
  },
  {
    title: 'Full Stack Development Internship',
    description: 'Master full stack development from front to back with expert mentorship.',
    image: '/full.jpg',
  },
  {
    title: 'AI & Machine Learning Internship Program',
    description: 'Build a strong foundation in artificial intelligence and machine learning.',
    image: '/AIML.jpg',
  },
  {
    title: 'Data Analyst Internship',
    description: 'Learn how to collect, clean, analyze, and visualize data for impactful decisions.',
    image: '/data.jpg',
  },
  {
    title: 'Offensive Cyber Security Internship',
    description: 'Dive deep into ethical hacking, penetration testing, and threat hunting.',
    image: '/cyber.jpg',
  },
  {
    title: 'Data Science Internship',
    description: 'Master the fundamentals of data science by working on real datasets.',
    image: '/science.jpg',
  },
  {
    title: 'Web Development Internship',
    description: 'Learn to build dynamic, responsive websites using modern tools and frameworks.',
    image: '/web.jpg',
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#032122] via-[#0a2e35] to-[#1b424f] py-20 px-6 text-white">
      <h2 className="mt-20 text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
        Our Programs
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {programs.map((program, i) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{program.description}</p>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-sm hover:scale-105 transition-transform">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
