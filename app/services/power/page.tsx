// app/services/power/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PowerPage() {
  useEffect(() => {
    // Animate elements on scroll
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

  const solarFeatures = [
    { title: "Off-grid & On-grid Systems", desc: "Energy generation to power domestic and industrial applications from solar panels, inverters and battery systems" },
    { title: "Solar Water Pumping", desc: "Efficient solar-powered water pumping systems for agricultural and domestic use" },
    { title: "Solar Lighting", desc: "Solar street and garden lighting solutions for enhanced visibility and security" },
    { title: "Solar CCTV Systems", desc: "Standalone solar-powered surveillance systems for remote locations" }
  ]

  const heaterTypes = [
    { title: "Integrated Systems", desc: "Non-pressurized and pressurized tube systems" },
    { title: "Split Systems", desc: "Pressurized tube and flat panel systems" },
    { title: "Centralized Systems", desc: "Large-scale solar water heating for commercial buildings" }
  ]

  const electricalServices = [
    { title: "Design & Planning", desc: "Able to design electrical plans, read and interpret blueprints, and complete wiring circuits in accordance with Electrical Code" },
    { title: "Installation & Maintenance", desc: "Professional installation, repair and maintenance of all electrical systems and components" },
    { title: "Supply & Distribution", desc: "Supply of electrical items including cables, LED lights, sockets, switches, and consumer units" }
  ]

  const backupSystems = [
    {
      title: "UPS Systems",
      desc: "We specialize in all types of UPS systems; from 650VA line-interactive UPSs to 500+KVA online UPSs for larger mission critical projects."
    },
    {
      title: "Automatic Voltage Regulators",
      desc: "Protect your equipment from power surges and low voltage with our comprehensive range of AVRs for all your needs."
    },
    {
      title: "Battery Systems",
      desc: "Lithium ion and Gel batteries for power storage solutions in solar backup systems and UPS applications."
    }
  ]

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format&q=80", title: "Solar Panel Systems Installation" },
    { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format&q=80", title: "Solar Water Pumping Systems" },
    { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format&q=80", title: "Solar Water Heating Systems" }
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
            POWER
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Power <span className="text-gray-500">Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Reliable Solar, Electrical &amp; Power Backup Systems
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== SOLAR POWER ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Solar Power <span className="text-gray-500">Systems</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              Power generation from solar water power systems for various uses including:
            </p>
          </div>

          {/* Gallery Images */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="text-white font-['Orbitron'] text-xs">{image.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solarFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SOLAR WATER HEATERS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Solar Water <span className="text-gray-500">Heaters</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We are distributors of Solar water heaters sourced from reputable industry manufacturers. Our Solar water heaters come in different types and sizes to meet our customers' requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {heaterTypes.map((heater, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className="fas fa-fire text-xl text-[#5ABE71]"></i>
                </div>
                <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{heater.title}</h4>
                <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{heater.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ELECTRICAL SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Electrical <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We have a qualified, NCA certified team of technicians who do electrical wiring, install, repair and maintain 
              wiring, switches, conduits, circuit breakers, lighting and other apparatus in buildings and other structures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {electricalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className="fas fa-plug text-xl text-[#5ABE71]"></i>
                </div>
                <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{service.title}</h4>
                <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== POWER BACKUP ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Power Backup <span className="text-gray-500">Systems</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {backupSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className="fas fa-bolt text-xl text-[#5ABE71]"></i>
                </div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">{system.title}</h3>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{system.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EPRA CERTIFICATION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-6 border border-gray-200 animate-on-scroll max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-certificate text-2xl text-[#5ABE71]"></i>
            </div>
            <h2 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-[#012156] mb-2">
              EPRA Certified Solar Contractor
            </h2>
            <p className="text-[#5ABE71] font-['Orbitron'] text-sm tracking-wider mb-2">
              Licence Number: <span className="font-bold">EPRA/SPVC/01400 (Class C1)</span>
            </p>
            <p className="text-gray-600 text-sm font-['Ubuntu'] mb-3">
              Licensed Solar Photovoltaic Systems Contractor/Vendor
            </p>
            <p className="text-gray-500 text-sm font-['Ubuntu'] max-w-xl mx-auto">
              Registered with Energy and Petroleum Regulatory Authority for professional solar system 
              installation and maintenance in accordance with Kenya Standards.
            </p>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Power Your <span className="text-gray-500">Future</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              From solar installations to electrical wiring and power backup systems, we provide comprehensive power solutions for homes, businesses, and industries.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-bolt mr-2"></i> Get Power Solution Quote
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