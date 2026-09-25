// app/services/storage/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function StoragePage() {
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

  const solutions = [
    {
      title: "Elevated Pressed Steel Tanks",
      desc: "Custom-designed elevated pressed steel water tanks with capacities ranging from 5,000 to 50,000 liters, built to withstand harsh weather conditions"
    },
    {
      title: "Steel Support Structures",
      desc: "Heavy-duty steel structures designed to support plastic tanks and other storage containers, ensuring stability and longevity"
    },
    {
      title: "Water Tower Construction",
      desc: "Complete water tower construction including foundation works, structural steel fabrication, and tank installation"
    },
    {
      title: "Piping & Distribution Systems",
      desc: "Comprehensive piping networks and distribution systems to ensure efficient water flow from storage to consumption points"
    },
    {
      title: "Maintenance & Repairs",
      desc: "Regular maintenance, inspection, and repair services for existing water storage systems and structures"
    },
    {
      title: "Custom Fabrication",
      desc: "Custom-designed storage solutions tailored to specific site requirements and water storage needs"
    }
  ]

  const tankTypes = [
    { title: "Elevated Steel Tanks", desc: "Galvanized pressed steel tanks elevated on steel structures for gravity-fed water distribution systems" },
    { title: "Ground-Level Storage", desc: "Large-capacity ground-level storage tanks with pumping systems for industrial and agricultural applications" },
    { title: "Plastic Tank Support", desc: "Steel support structures designed specifically for commercial-grade plastic water storage tanks" }
  ]

  const features = [
    { icon: "fa-hard-hat", title: "Professional Engineering", desc: "Designed and installed by qualified Civil & Mechanical Engineers" },
    { icon: "fa-shield-alt", title: "Durable Construction", desc: "Galvanized steel construction resistant to rust and corrosion" },
    { icon: "fa-tachometer-alt", title: "Optimal Pressure", desc: "Gravity-fed systems ensure consistent water pressure" },
    { icon: "fa-pencil-ruler", title: "Custom Designs", desc: "Tailored solutions for specific site requirements" },
    { icon: "fa-clock", title: "Quick Installation", desc: "Efficient installation minimizing disruption" },
    { icon: "fa-headset", title: "After-Sales Support", desc: "Maintenance and repair services available" }
  ]

  // Only 2 images now — 2-column grid
  const galleryImages = [
    { src: "/images/storage.jpg", title: "Water Storage Tank" },
    { src: "/images/tower.jpg", title: "Water Tower Installation" }
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
            STORAGE
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Water <span className="text-gray-500">Storage Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Elevated Water Tanks &amp; Storage Systems for Reliable Water Supply
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== STORAGE OVERVIEW ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Water Storage <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We specialize in designing, fabricating, and installing elevated pressed steel water tanks and 
              supporting structures for reliable water storage and distribution. Our experienced team of Civil 
              &amp; Mechanical Engineers ensures durable and efficient water storage solutions for residential, 
              commercial, and industrial applications.
            </p>
          </div>

          {/* Gallery Images — 2-column grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[220px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="text-white font-['Orbitron'] text-xs">{image.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== STORAGE SOLUTIONS — LEFT ALIGNED ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Our Storage <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-tint text-base text-[#5ABE71]"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{solution.title}</h4>
                    <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TANK TYPES — LEFT ALIGNED ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Types of <span className="text-gray-500">Water Storage</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {tankTypes.map((tank, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-database text-base text-[#5ABE71]"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{tank.title}</h4>
                    <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{tank.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FEATURES & BENEFITS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Features <span className="text-gray-500">&amp; Benefits</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${feature.icon} text-[#5ABE71]`}></i>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{feature.desc}</p>
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
              Reliable Water <span className="text-gray-500">Storage Solutions</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              With decades of construction experience and professional engineering expertise, we deliver durable 
              and efficient water storage solutions for homes, businesses, and communities across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-comment mr-2"></i> Discuss Storage Project
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