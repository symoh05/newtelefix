// app/services/electrical/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ElectricalPage() {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active')
          }, index * 150)
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

  const services = [
    { icon: "fa-pencil-ruler", title: "Electrical Design", desc: "Design electrical plans, read and interpret blueprints, plans and sketches following Electrical Code standards" },
    { icon: "fa-tools", title: "Installation", desc: "Complete wiring circuits in accordance with Electrical Code using variety of methods and practices" },
    { icon: "fa-wrench", title: "Maintenance & Repair", desc: "Professional repair and maintenance of wiring, switches, conduits, circuit breakers, and lighting" }
  ]

  const products = [
    "Cables",
    "LED Lights",
    "Flood Lights",
    "Sockets",
    "Light Switches",
    "Control Units",
    "Fans & Ventilation",
    "Safety Equipment"
  ]

  const galleryImages = [
    { src: "/images/electrical .jpg", title: "Electrical Installation" },
    { src: "/images/wire.webp", title: "Electrical Wiring Systems" },
    { src: "/images/cir.jpg", title: "Circuit Testing & Maintenance" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />

        {/* ===== HERO SECTION ===== */}
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
            ELECTRICAL
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Electrical <span className="text-gray-500">Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              NCA Certified Electrical Services for Residential &amp; Commercial Buildings
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== PROFESSIONAL SERVICES ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Professional Electrical <span className="text-gray-500">Services</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We have a qualified, NCA certified team of technicians who do electrical wiring, install, repair and maintain 
              wiring, switches, conduits, circuit breakers, lighting and other apparatus in buildings and other structures.
            </p>
          </div>

          {/* Gallery Images */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[180px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="text-white font-['Orbitron'] text-xs">{image.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Services — LEFT ALIGNED */}
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${service.icon} text-base text-[#5ABE71]`}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{service.title}</h3>
                    <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PRODUCTS SUPPLY ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Electrical Products <span className="text-gray-500">Supply</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We supply quality electrical items for all your installation and maintenance needs:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {products.map((product, index) => (
              <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <i className="fas fa-check-circle text-[#5ABE71] text-xs"></i>
                <span className="text-gray-700 text-sm font-['Ubuntu']">{product}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== NCA CERTIFICATION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-6 border border-gray-200 animate-on-scroll max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-certificate text-2xl text-[#5ABE71]"></i>
            </div>
            <h2 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-[#012156] mb-2">
              NCA Certified Team
            </h2>
            <p className="text-[#5ABE71] font-['Orbitron'] text-sm tracking-wider mb-3">
              National Construction Authority Certified Electrical Technicians
            </p>
            <p className="text-gray-600 text-sm font-['Ubuntu'] mb-3">
              Professional Electrical Services Provider
            </p>
            <p className="text-gray-500 text-sm font-['Ubuntu'] max-w-xl mx-auto">
              Our electrical technicians are certified and qualified to handle all types of electrical installations, 
              ensuring safety, compliance, and quality workmanship according to Kenyan regulations and standards.
            </p>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Need Professional <span className="text-gray-500">Electrical Services?</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              From design and installation to maintenance and supply, our NCA certified team provides comprehensive 
              electrical solutions for residential, commercial, and industrial applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-bolt mr-2"></i> Get Electrical Quote
                </button>
              </Link>
              <a
                href="tel:+254721722823"
                className="bg-transparent hover:bg-[#012156]/10 text-[#012156] px-6 py-2.5 rounded-lg border-2 border-[#012156]/30 font-['Orbitron'] text-sm tracking-wider transition-all inline-flex items-center gap-2"
              >
                <i className="fas fa-phone"></i> Call Us Now
              </a>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <Footer />
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