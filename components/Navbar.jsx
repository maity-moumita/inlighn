import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiBookOpen,
  FiCheckCircle,
  FiStar,
  FiMail
} from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const menu = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'About Us', path: '/about', icon: <FiInfo /> },
    { name: 'Programs', path: '/programs', icon: <FiBookOpen /> },
    { name: 'Verify Certificate', path: '/verify', icon: <FiCheckCircle /> },
    { name: 'What’s Special', path: '/special', icon: <FiStar /> },
    { name: 'Contact Us', path: '/contact', icon: <FiMail /> }
  ]

  const loginText = 'Login to Portal'

  return (
    <>
      {/* =================== DESKTOP NAVBAR =================== */}
      <header className="hidden md:flex w-full px-8 py-6 items-center justify-between bg-white shadow-md z-50 fixed top-0 left-0">
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full object-contain"
          />
        </Link>

        {/* Menu Items */}
        <nav className="flex gap-12 text-[18px] font-semibold items-center">
          {menu.map((item) => {
            const isHome = item.path === '/'
            const isActive = router.pathname === item.path

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative pb-1 group hover:text-purple-600 ${
                  isActive ? 'text-teal-600' : 'text-black'
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-current transition-transform duration-300 ${
                    isHome && isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            )
          })}

          {/* Login Button with drop-in letter animation */}
          <Link
            href="/login"
            className="ml-6 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 shadow-xl text-white font-bold text-lg relative overflow-hidden flex gap-[2px]"
          >
            {loginText.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-dropChar"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </Link>
        </nav>
      </header>

      {/* =================== MOBILE NAVBAR =================== */}
      <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between px-4 py-4 bg-white shadow z-50">
        {/* Logo Left */}
        <Link href="/" className="block">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full object-contain"
          />
        </Link>

        {/* Hamburger Right */}
        <button
          onClick={() => setOpen(true)}
          className="text-gray-800 bg-gray-200 hover:bg-gray-300 p-2 w-10 h-10 grid place-items-center shadow-sm"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* MOBILE Sidebar + Overlay */}
      {open && (
        <div className="md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar */}
          <aside className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 pt-8 z-50 transition-transform duration-500">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-800"
            >
              <FiX size={24} />
            </button>

            {/* Sidebar Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Logo"
                width={70}
                height={70}
                className="rounded-full object-contain"
              />
            </div>

            {/* Nav Links */}
            <nav className="space-y-4">
              {menu.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-lg hover:bg-purple-100 transition-all ${
                    router.pathname === item.path
                      ? 'bg-purple-200 text-purple-700'
                      : 'text-gray-800'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
