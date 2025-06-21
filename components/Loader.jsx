import Image from 'next/image'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-950">
      <div className="relative w-64 h-64 flex items-center justify-center transform-gpu perspective-1000">

        {/* Glowing background blob */}
        <div className="absolute w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl animate-floatGlow" />

        {/* Glass circle */}
        <div className="absolute w-52 h-52 rounded-full bg-white/10 backdrop-blur-[6px] shadow-inner border border-purple-500" />

        {/* Logo (one-time bounce) */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={160}
          height={160}
          className="relative z-10 animate-onceBounce object-contain drop-shadow-xl"
        />
      </div>
    </div>
  )
}
