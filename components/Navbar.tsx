// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  // Reordered: Home → About → Services → Portfolio → Gallery → Contact
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceLinks = [
    { name: 'All Services', href: '/services' },
    { name: 'Network Solutions', href: '/services/network' },
    { name: 'Virtualization', href: '/services/virtualization' },
    { name: 'Security', href: '/services/security' },
    { name: 'Data Center', href: '/services/datacenter' },
    { name: 'Unified Communications', href: '/services/unified' },
    { name: 'Power Solutions', href: '/services/power' },
    { name: 'Borehole Solutions', href: '/services/borehole' },
    { name: 'Electrical Solutions', href: '/services/electrical' },
    { name: 'Water Filtration', href: '/services/filtration' },
    { name: 'Water Storage', href: '/services/storage' },
    { name: 'Telecom Solutions', href: '/services/telecom' },
  ]

  const isServicePage = serviceLinks.some(link => pathname === link.href) || pathname === '/services'

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <div
        className={`w-full max-w-7xl transition-all duration-300 rounded-2xl border ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-gray-200/80'
            : 'bg-white/80 backdrop-blur-md border-gray-200/50 shadow-sm'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
              <img 
                src="/images/logo/logo.png" 
                alt="Telefix Solutions Logo" 
                className="h-10 w-auto md:h-12 object-contain"
              />
              <span className="font-['Orbitron'] text-base sm:text-lg font-bold text-[#012156] tracking-wider hidden sm:inline">
                TELEFIX<span className="text-[#5ABE71]">_</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {/* Home */}
              <Link
                href="/"
                className={`text-xs font-['Orbitron'] tracking-wider transition-colors relative cursor-pointer ${
                  pathname === '/'
                    ? 'text-[#012156] font-semibold'
                    : 'text-gray-500 hover:text-[#012156]'
                }`}
              >
                Home
                {pathname === '/' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5ABE71] rounded-full"></span>
                )}
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`text-xs font-['Orbitron'] tracking-wider transition-colors relative cursor-pointer ${
                  pathname === '/about'
                    ? 'text-[#012156] font-semibold'
                    : 'text-gray-500 hover:text-[#012156]'
                }`}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5ABE71] rounded-full"></span>
                )}
              </Link>

              {/* Services Dropdown — now right after About */}
              <div className="relative group">
                <Link
                  href="/services"
                  className={`text-xs font-['Orbitron'] tracking-wider transition-colors relative inline-flex items-center gap-1 cursor-pointer ${
                    isServicePage
                      ? 'text-[#012156] font-semibold'
                      : 'text-gray-500 hover:text-[#012156]'
                  }`}
                >
                  Services
                  <i className="fas fa-chevron-down text-[8px] ml-0.5 transition-transform group-hover:rotate-180"></i>
                  {isServicePage && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5ABE71] rounded-full"></span>
                  )}
                </Link>
                <div className="absolute top-full left-0 min-w-[220px] bg-white rounded-xl shadow-xl border border-gray-200/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50 mt-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 text-sm text-gray-600 hover:text-[#012156] hover:bg-gray-50 transition-all cursor-pointer ${
                        pathname === link.href ? 'text-[#012156] font-semibold bg-gray-50' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <Link
                href="/portfolio"
                className={`text-xs font-['Orbitron'] tracking-wider transition-colors relative cursor-pointer ${
                  pathname === '/portfolio'
                    ? 'text-[#012156] font-semibold'
                    : 'text-gray-500 hover:text-[#012156]'
                }`}
              >
                Portfolio
                {pathname === '/portfolio' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5ABE71] rounded-full"></span>
                )}
              </Link>

              {/* Gallery */}
              <Link
                href="/gallery"
                className={`text-xs font-['Orbitron'] tracking-wider transition-colors relative cursor-pointer ${
                  pathname === '/gallery'
                    ? 'text-[#012156] font-semibold'
                    : 'text-gray-500 hover:text-[#012156]'
                }`}
              >
                Gallery
                {pathname === '/gallery' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5ABE71] rounded-full"></span>
                )}
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`text-xs font-['Orbitron'] tracking-wider transition-colors relative cursor-pointer ${
                  pathname === '/contact'
                    ? 'text-[#012156] font-semibold'
                    : 'text-gray-500 hover:text-[#012156]'
                }`}
              >
                Contact
                {pathname === '/contact' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5ABE71] rounded-full"></span>
                )}
              </Link>

              {/* Call Now Button */}
              <a
                href="tel:+254721722823"
                className="bg-[#5ABE71] hover:bg-[#359D54] text-white px-5 py-2 rounded-full text-xs font-['Orbitron'] tracking-wider transition-all hover:shadow-lg hover:shadow-[#5ABE71]/30 cursor-pointer"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#012156] focus:outline-none p-2 hover:bg-gray-100/80 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ 
              overscrollBehavior: 'contain',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>{`
              .md\\:hidden.overflow-y-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="pb-4 pt-1 border-t border-gray-200/60">
              <div className="flex flex-col gap-0.5">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-['Orbitron'] tracking-wider transition-colors py-3 px-3 rounded-lg border-b border-gray-200 last:border-b-0 cursor-pointer ${
                    pathname === '/'
                      ? 'text-[#012156] font-semibold bg-gray-100/60'
                      : 'text-gray-500 hover:text-[#012156] hover:bg-gray-100/40'
                  }`}
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-['Orbitron'] tracking-wider transition-colors py-3 px-3 rounded-lg border-b border-gray-200 last:border-b-0 cursor-pointer ${
                    pathname === '/about'
                      ? 'text-[#012156] font-semibold bg-gray-100/60'
                      : 'text-gray-500 hover:text-[#012156] hover:bg-gray-100/40'
                  }`}
                >
                  About
                </Link>

                {/* Mobile Services Dropdown — now right after About */}
                <div className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center justify-between w-full text-sm font-['Orbitron'] tracking-wider transition-colors py-3 px-3 rounded-lg cursor-pointer ${
                      isServicePage
                        ? 'text-[#012156] font-semibold bg-gray-100/60'
                        : 'text-gray-500 hover:text-[#012156] hover:bg-gray-100/40'
                    }`}
                  >
                    <span>Services</span>
                    <i className={`fas fa-chevron-${isServicesOpen ? 'up' : 'down'} text-xs transition-transform duration-300`}></i>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 pr-2 py-1 space-y-0.5">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setIsOpen(false)
                            setIsServicesOpen(false)
                          }}
                          className={`block text-sm font-['Orbitron'] tracking-wider py-2.5 px-3 rounded-lg border-b border-gray-200/60 last:border-b-0 transition-colors cursor-pointer ${
                            pathname === link.href
                              ? 'text-[#012156] font-semibold bg-gray-100/60'
                              : 'text-gray-500 hover:text-[#012156] hover:bg-gray-100/40'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Portfolio */}
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-['Orbitron'] tracking-wider transition-colors py-3 px-3 rounded-lg border-b border-gray-200 last:border-b-0 cursor-pointer ${
                    pathname === '/portfolio'
                      ? 'text-[#012156] font-semibold bg-gray-100/60'
                      : 'text-gray-500 hover:text-[#012156] hover:bg-gray-100/40'
                  }`}
                >
                  Portfolio
                </Link>

                {/* Gallery */}
                <Link
                  href="/gallery"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-['Orbitron'] tracking-wider transition-colors py-3 px-3 rounded-lg border-b border-gray-200 last:border-b-0 cursor-pointer ${
                    pathname === '/gallery'
                      ? 'text-[#012156] font-semibold bg-gray-100/60'
                      : 'text-gray-500 hover:text-[#012156] hover:bg-gray-100/40'
                  }`}
                >
                  Gallery
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-['Orbitron'] tracking-wider transition-colors py-3 px-3 rounded-lg border-b border-gray-200 last:border-b-0 cursor-pointer ${
                    pathname === '/contact'
                      ? 'text-[#012156] font-semibold bg-gray-100/60'
                      : 'text-gray-500 hover:text-[#012156] hover:bg-gray-100/40'
                  }`}
                >
                  Contact
                </Link>

                {/* Mobile Call Now Button */}
                <a
                  href="tel:+254721722823"
                  className="mt-3 bg-[#5ABE71] hover:bg-[#359D54] text-white text-sm font-['Orbitron'] tracking-wider py-3 px-3 rounded-lg text-center transition-all cursor-pointer"
                >
                  <i className="fas fa-phone mr-2"></i> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}