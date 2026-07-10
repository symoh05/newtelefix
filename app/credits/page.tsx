// app/credits/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function CreditsPage() {
  useEffect(() => {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    animateElements.forEach(item => {
      observer.observe(item)
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />

        {/* ===== CREDITS HERO ===== */}
        <section className="relative py-12 md:py-16 pt-32 sm:pt-28 lg:pt-32">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            style={{
              fontSize: 'clamp(60px, 12vw, 140px)',
              fontWeight: '900',
              color: 'rgba(1, 33, 86, 0.05)',
              letterSpacing: 'clamp(5px, 2vw, 15px)',
              fontFamily: "'Orbitron', monospace",
              whiteSpace: 'nowrap',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            CREDITS
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Site <span className="text-gray-500">Credits</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              The people and technology behind this website
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== DEVELOPER CREDITS ===== */}
        <section className="py-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Developer Info Card */}
            <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 animate-on-scroll">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#5ABE71]/10 flex items-center justify-center border-2 border-[#5ABE71]/20">
                  <i className="fas fa-code text-2xl text-[#012156]"></i>
                </div>
                <div>
                  <h2 className="font-['Orbitron'] text-xl font-bold text-[#012156]">Simon K.</h2>
                  <p className="text-[#5ABE71] text-sm font-['Orbitron'] tracking-wider">BSc IT · Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">
                I'm a passionate Full-Stack Developer based in Kiambu, Kenya. I specialize in building modern, responsive web applications using Next.js, React, and Node.js. With a BSc in Information Technology, I bring both technical expertise and a user-centered approach to every project.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 animate-on-scroll">
              <h3 className="font-['Orbitron'] text-lg font-bold text-[#012156] mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm font-['Ubuntu']">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-[#5ABE71]/10 flex items-center justify-center">
                    <i className="fab fa-whatsapp text-[#25D366]"></i>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px]">WhatsApp</p>
                    <a href="https://wa.me/254773743248" className="text-[#012156] hover:text-[#5ABE71] transition-colors font-medium">
                      +254 773 743 248
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-[#5ABE71]/10 flex items-center justify-center">
                    <i className="fas fa-phone text-[#5ABE71]"></i>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px]">Phone</p>
                    <a href="tel:+254768924330" className="text-[#012156] hover:text-[#5ABE71] transition-colors font-medium">
                      +254 768 924 330
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-[#5ABE71]/10 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-[#5ABE71]"></i>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px]">Location</p>
                    <p className="text-[#012156] font-medium">Kiambu, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 animate-on-scroll">
              <h3 className="font-['Orbitron'] text-lg font-bold text-[#012156] mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-200 text-[#012156] px-3 py-1.5 rounded-lg text-xs font-['Orbitron'] shadow-sm">Next.js</span>
                <span className="bg-white border border-gray-200 text-[#012156] px-3 py-1.5 rounded-lg text-xs font-['Orbitron'] shadow-sm">React</span>
                <span className="bg-white border border-gray-200 text-[#012156] px-3 py-1.5 rounded-lg text-xs font-['Orbitron'] shadow-sm">Node.js</span>
                <span className="bg-white border border-gray-200 text-[#012156] px-3 py-1.5 rounded-lg text-xs font-['Orbitron'] shadow-sm">TypeScript</span>
                <span className="bg-white border border-gray-200 text-[#012156] px-3 py-1.5 rounded-lg text-xs font-['Orbitron'] shadow-sm">Tailwind CSS</span>
                <span className="bg-white border border-gray-200 text-[#012156] px-3 py-1.5 rounded-lg text-xs font-['Orbitron'] shadow-sm">PostgreSQL</span>
              </div>
            </div>

            {/* Built With Card */}
            <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 animate-on-scroll">
              <h3 className="font-['Orbitron'] text-lg font-bold text-[#012156] mb-4">Built With</h3>
              <ul className="space-y-2 text-sm font-['Ubuntu']">
                <li className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <i className="fas fa-check-circle text-[#5ABE71]"></i>
                  <span className="text-gray-600">Next.js 15 – React Framework</span>
                </li>
                <li className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <i className="fas fa-check-circle text-[#5ABE71]"></i>
                  <span className="text-gray-600">TypeScript – Type Safety</span>
                </li>
                <li className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <i className="fas fa-check-circle text-[#5ABE71]"></i>
                  <span className="text-gray-600">Tailwind CSS – Styling</span>
                </li>
                <li className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <i className="fas fa-check-circle text-[#5ABE71]"></i>
                  <span className="text-gray-600">Font Awesome – Icons</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== BACK TO HOME ===== */}
        <section className="py-6">
          <Link href="/">
            <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2">
              <i className="fas fa-arrow-left"></i> Back to Home
            </button>
          </Link>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="mt-6 pt-4 border-t border-gray-200 text-center text-xs pb-6 text-gray-400">
          <i className="fas fa-shield-alt text-[#5ABE71] mr-2"></i>
          &copy; 2026 Telefix Solutions. All rights reserved.
        </footer>
      </div>

      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }
        
        .animate-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}