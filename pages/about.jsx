import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Section 1: Roadmap and Intro */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-16 px-4 md:px-20"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="/roadmap.png"
            alt="Internship Roadmap"
            className="w-full"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              We Provide Best <span className="text-yellow-500">Industry</span> Services For You.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic and industry needs...
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Vision & Mission */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-900 to-purple-600 text-white py-20 relative"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute right-10 top-10 w-80 h-80 bg-purple-700 rounded-full blur-3xl opacity-30"
        ></motion.div>
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Save Time and Effort with INLIGHN TECH
          </motion.h2>
          <div className="md:flex md:gap-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-teal-300">Our Vision</h4>
              <p className="mb-6">
                To be a leading ed-tech platform that bridges the gap between academic knowledge and industry demands...
              </p>
              <h4 className="text-lg font-semibold text-purple-300">Our Mission</h4>
              <p>
                To empower students and professionals by providing innovation-focused internship experiences and skills.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Stats */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-orange-100 py-10 px-6 flex justify-center"
      >
        <div className="flex flex-wrap justify-center gap-6 bg-orange-400 px-6 py-4 rounded-3xl text-white shadow-xl">
          {["5000+", "9000+", "93%", "30+"].map((num, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold">{num}</h3>
              <p className="text-sm uppercase tracking-wide">
                {[
                  "INTERNS ENROLLED",
                  "PROJECTS COMPLETED",
                  "SATISFACTION RATE",
                  "TOP INSTRUCTORS",
                ][i]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 4: Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 text-center"
      >
        <h3 className="text-sm uppercase text-teal-400 font-bold">
          Why Choose INLIGHN TECH
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          The Best Beneficial Side of INLIGHN TECH
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {["High Quality Resources", "Expert Instructors", "Internship Portal Access"].map((title, i) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg bg-white"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
              <h4 className="font-bold text-lg mb-2">{title}</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid velit voluptates!
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 5: Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-orange-50 to-white py-20 px-6"
      >
        <h3 className="text-center text-3xl font-extrabold mb-12 text-gray-800">
          What Our Interns Say
        </h3>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {["Mrunalini R", "Surendra Kumar"].map((name, i) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/intern.jpeg"
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                  <p className="text-sm text-teal-600">
                    {i === 0 ? "Data Analyst Intern" : "Data Science Intern"}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {i === 0
                  ? "During my Data Analytics Internship at INLIGHN TECH, I learned SQL, Power BI, Tableau, and Data Challenges..."
                  : "I completed my Data Science Internship at INLIGHN TECH, where I gained hands-on experience in Machine Learning, Data Visualization..."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 6: Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <h2 className="text-2xl font-bold text-center mb-10">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["certificate.png", "certificate.png", "certificate.png"].map((img, i) => (
            <motion.img
              key={i}
              src={`/${img}`}
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              alt={`Certificate ${i + 1}`}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
