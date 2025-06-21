import Image from 'next/image'
import Link from 'next/link'

export default function FirstSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#0f2e2e] to-[#20392b] px-6 md:px-20 py-16 relative overflow-hidden">
      {/* ==== Animated Color Balls ==== */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-purple-600 rounded-full opacity-20 blur-3xl animate-floatGlow z-0"></div>
      <div className="absolute bottom-[-60px] right-[10%] w-[200px] h-[200px] bg-cyan-400 rounded-full opacity-30 blur-2xl animate-floatGlow z-0"></div>
      <div className="absolute top-[20%] right-[-100px] w-[250px] h-[250px] bg-pink-500 rounded-full opacity-10 blur-[140px] animate-floatGlow z-0"></div>

      {/* ==== Left Content ==== */}
      <div className="md:w-1/2 text-white space-y-6 z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeInUp">
          Transform Your Career with <br />
          <span className="text-yellow-400">INLIGHN TECH</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl animate-fadeInUp delay-200">
          Gain real-world experience with our immersive internship programs in Cyber Security, Full Stack Development,
          Data Science, Data Analyst and in various tech domains. Learn today, lead tomorrow.
        </p>

        <Link
          href="#explore"
          className="inline-block bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-teal-500 transition-all animate-fadeInUp delay-300"
        >
          Explore Internships
        </Link>
      </div>

      {/* ==== Right Image ==== */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center z-10 ">
        <Image
          src="/robot.png"
          alt="Futuristic Robot"
          width={500}
          height={500}
          className="w-full max-w-[400px] md:max-w-[500px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  )
}
