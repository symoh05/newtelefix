// app/services/datacenter/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DatacenterPage() {
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

  const processSteps = [
    { number: "01", title: "Assessment", desc: "We review the client's requirements with a location assessment that includes technology, systems, designs, integration, and energy management." },
    { number: "02", title: "Strategy Development", desc: "We recommend an approach to leverage the most advanced data center technology and systems available and ensure alignment with the client's objectives." },
    { number: "03", title: "Design", desc: "Based on the assessment and approved strategy, Telefix designs the data center to provide high availability, flexibility, and simplicity." },
    { number: "04", title: "Construct", desc: "Upon approval of the design, Telefix will construct the data center using best practice processes, systems, and services." },
    { number: "05", title: "Commission", desc: "When construction is completed, Telefix will commission the data center and monitor operations for a specified period to ensure delivery of anticipated results." }
  ]

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format&q=80", title: "Data Center Infrastructure" },
    { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop&auto=format&q=80", title: "Server Racks & Cabinets" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format&q=80", title: "Cooling Systems" }
  ]

  const cabinetFeatures = [
    "Install rack enclosures one at a time instead of setting up whole pods for aisle containment",
    "Position each rack directly above a well-ventilated tile to capture cold air directly into a controlled flow environment",
    "Deploy fewer racks since you can increase the density of IT equipment installed in each one",
    "Build out your data center without impacting facilities such as on-site fire-suppression systems"
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
            DATACENTER
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Data Center <span className="text-gray-500">Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Strategic Data Center Design, Implementation &amp; Management
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== STRATEGY ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Strategic Data Center <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              At TELEFIX SOLUTIONS, we believe that your data center strategy should be a source of your strategic advantage. 
              As market leaders and one of the most experienced data center companies in the region, we put our expertise 
              to work for your business, partnering with you every step of the way to achieve the business outcomes you need.
            </p>
          </div>

          {/* Gallery Images */}
          <div className="grid md:grid-cols-3 gap-4">
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
        </section>

        {/* ===== PROCESS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Our Data Center <span className="text-gray-500">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center">
                    <span className="font-['Orbitron'] text-sm font-bold text-[#5ABE71]">{step.number}</span>
                  </div>
                  <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156]">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SELF-COOLING CABINETS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Self-Cooling <span className="text-gray-500">Cabinets</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              TELEFIX SOLUTIONS LIMITED has partnered with DELL to provide the DELL self-cooling cabinet for data 
              solutions to save on energy and operations cost.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm mb-6 animate-on-scroll">
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Simple, Cost-Effective Deployment</h3>
            <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">
              Imagine your raised floor data center without curtains or dividers, cross-aisle containment panels 
              or even a traditional hot aisle/cold aisle containment layout at all. Energy Smart Racks enable you to deploy efficient cooling solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {cabinetFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <i className="fas fa-check-circle text-[#5ABE71] mt-0.5"></i>
                <span className="text-gray-700 text-sm font-['Ubuntu']">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#012156]/5 rounded-xl p-5 border border-gray-200 animate-on-scroll">
            <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Technical Specifications:</h4>
            <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">
              Energy Smart Rack design uses standard Dell rack frame in 42U and 48U heights (40U and 46U of usable internal space). 
              The 600mm x 1200mm footprint fits on two standard floor tiles. No on-site assembly is required.
            </p>
          </div>
        </section>

        {/* ===== POWER SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Data Center <span className="text-gray-500">Power Solutions</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: "fa-bolt",
                title: "Uninterruptible Power Supply (UPS)",
                desc: "We specialize in all types of UPS systems; from 650VA line-interactive UPSs to 500+KVA online UPSs for larger mission critical projects."
              },
              {
                icon: "fa-wave-square",
                title: "Automatic Voltage Regulators (AVR)",
                desc: "Protect your equipment from power surges and low voltage with our comprehensive range of AVRs for all your needs."
              },
              {
                icon: "fa-plug",
                title: "PDUs and IT Racks",
                desc: "Basic PDUs, metered PDUs and switched PDUs available in both 1U/2U rack mount or 0U vertical mount with remote monitoring options."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className={`fas ${item.icon} text-xl text-[#5ABE71]`}></i>
                </div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "fa-snowflake",
                title: "Precision Cooling",
                desc: "We provide precision cooling equipment for your data centers, built to work 24/7 to control temperature and humidity for precise cooling."
              },
              {
                icon: "fa-eye",
                title: "Remote Monitoring Systems",
                desc: "Comprehensive remote monitoring interfaces and software to monitor power quality, set alerts, check temperature readings, and more from anywhere."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${item.icon} text-[#5ABE71]`}></i>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{item.desc}</p>
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
              Transform Your <span className="text-gray-500">Data Center Strategy</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              Partner with Telefix Solutions for comprehensive data center design, implementation, and management services that turn your data center into a strategic advantage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-comment mr-2"></i> Request Consultation
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