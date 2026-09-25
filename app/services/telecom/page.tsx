// app/services/telecom/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TelecomPage() {
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
    {
      title: "Tower Erection & Installation",
      desc: "Professional telecom tower construction and installation services including steel lattice towers, monopoles, and guyed towers"
    },
    {
      title: "Active Equipment Installation",
      desc: "Installation and commissioning of active telecom equipment including base stations, antennas, and transmission equipment"
    },
    {
      title: "Passive Equipment Maintenance",
      desc: "Installation and maintenance of passive telecom equipment including rectifiers, batteries, and distribution boards"
    },
    {
      title: "Site Power Solutions",
      desc: "Comprehensive power solutions for telecom sites including generators, solar power systems, and backup power"
    },
    {
      title: "Asset Verification & Audits",
      desc: "Professional asset verification, audits, and legacy equipment decommissioning for telecom operators"
    },
    {
      title: "Collocation Services",
      desc: "Site collocation services for multiple telecom operators including site sharing and infrastructure sharing"
    }
  ]

  const expertise = [
    { title: "Project Management", desc: "End-to-end telecom project management from planning and design to implementation and commissioning" },
    { title: "Infrastructure Development", desc: "Complete telecom infrastructure development and deployment including site acquisition and civil works" },
    { title: "Maintenance Services", desc: "Preventive and corrective maintenance for telecom systems including emergency response and 24/7 support" }
  ]

  const equipment = [
    { icon: "fa-tower-broadcast", title: "Telecom Towers", desc: "Steel lattice towers, monopoles, and guyed towers for all telecom applications" },
    { icon: "fa-satellite-dish", title: "Base Stations", desc: "Complete base station installation and commissioning for mobile networks" },
    { icon: "fa-bolt", title: "Power Systems", desc: "Rectifiers, batteries, generators, and power distribution systems" },
    { icon: "fa-wifi", title: "Microwave Links", desc: "Point-to-point microwave communication systems for backbone and access networks" },
    { icon: "fa-network-wired", title: "Fiber Optics", desc: "Fiber optic cable installation, splicing, and termination for high-speed networks" },
    { icon: "fa-cloud-sun", title: "Grounding & Lightning", desc: "Lightning protection and grounding systems for telecom site safety" }
  ]

  const galleryImages = [
    { src: "/images/tel.webp", title: "Telecom Tower Installation" },
    { src: "/images/base.webp", title: "Base Station Equipment" },
    { src: "/images/fiber.jpg", title: "Fiber Optic Installation" }
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
            TELECOM
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Telecommunications <span className="text-gray-500">Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Comprehensive Telecom Infrastructure &amp; Project Management in Kenya
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== TELECOM OVERVIEW ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Telecommunications <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              Our esteemed outfit has a team of experienced telecommunication experts who give comprehensive packages 
              in their expertise. We major in telecom project management, passive maintenance, telecom implementation, 
              and active equipment installation and maintenance.
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
        </section>

        {/* ===== TELECOM PROJECT SERVICES — LEFT ALIGNED ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Telecom Project <span className="text-gray-500">Services</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-tower-broadcast text-base text-[#5ABE71]"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{service.title}</h4>
                    <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TECHNICAL EXPERTISE — LEFT ALIGNED ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Technical <span className="text-gray-500">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-cogs text-base text-[#5ABE71]"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EQUIPMENT & SYSTEMS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Equipment <span className="text-gray-500">&amp; Systems</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${item.icon} text-[#5ABE71]`}></i>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Reliable <span className="text-gray-500">Telecom Infrastructure</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              With experienced telecom experts and comprehensive project management capabilities, we deliver reliable 
              telecommunications infrastructure solutions across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-comment mr-2"></i> Discuss Telecom Project
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