// app/services/borehole/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BoreholePage() {
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

  const services = [
    { icon: "fa-drill", title: "Borehole Drilling", desc: "Professional borehole drilling services using state-of-the-art rigs and equipment for reliable water supply solutions." },
    { icon: "fa-sun", title: "Solar Conversion", desc: "Solar-powered borehole pumping systems for sustainable and cost-effective water supply solutions." },
    { icon: "fa-tools", title: "Maintenance & Repair", desc: "Comprehensive borehole maintenance, repair, and servicing to ensure optimal performance and longevity." }
  ]

  const professionalServices = [
    { title: "Hydrological Surveys", desc: "Professional site assessment and hydrological surveys to determine optimal borehole locations and water potential." },
    { title: "Borehole Drilling", desc: "Complete borehole drilling services using modern equipment for residential, commercial, and agricultural applications." },
    { title: "Electric & Solar Water Pumps", desc: "Installation of electric and solar water pumps for submersible and surface applications with optimal efficiency." },
    { title: "Borehole Camera Services", desc: "Professional borehole inspection, cleaning, and servicing using advanced camera technology for maintenance and repair." },
    { title: "Water Tower Construction", desc: "Construction of water towers, storage tanks fabrication, and complete water storage solutions for reliable supply." },
    { title: "Irrigation Systems", desc: "Installation of borehole UPVC pipes, galvanized pipes, HDPE pipes, water sprinklers & drip irrigation lines." }
  ]

  const projects = [
    {
      title: "Gatundu Farm Project",
      details: [
        { label: "Scope", value: "3HP Borehole Solar Powering" },
        { label: "Solar Panels", value: "18 × 285W" },
        { label: "Pump Details", value: "3HP/2.2KW Motor" },
        { label: "Capacity", value: "4,000 liters/hr" },
        { label: "Duration", value: "4 days" }
      ]
    },
    {
      title: "PCEA Nkoroi Church - UHAI Water Project",
      details: [
        { label: "Scope", value: "Commercial Borehole" },
        { label: "Solar Panels", value: "32 × 335W" },
        { label: "Pump Details", value: "7.5HP/5.5KW Motor" },
        { label: "Capacity", value: "8,500 liters/hr" },
        { label: "Duration", value: "14 days" }
      ]
    }
  ]

  const testPumpingFeatures = [
    "Expanded range of flows up to 100m³/hr to accurately ascertain aquifer yield",
    "Fully automated pump installation unit for faster and more efficient setup",
    "Professional borehole repair and maintenance services for optimal performance",
    "Borehole flushing, cleaning, and decontamination services for water quality assurance"
  ]

  const storageSolutions = [
    { title: "Elevated Pressed Steel Water Tanks", desc: "Durable and reliable elevated pressed steel water tanks designed for long-term water storage with minimal maintenance." },
    { title: "Elevated Steel Structures", desc: "Robust steel structures designed to support plastic tanks and other water storage containers for elevated water supply." },
    { title: "Professional Engineering", desc: "Our qualified and registered Civil & Mechanical Engineers bring decades of experience in both public and private construction." }
  ]

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format&q=80", title: "Borehole Drilling Services" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format&q=80", title: "Solar Water Pumping Systems" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format&q=80", title: "Water Storage Solutions" }
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
            BOREHOLE
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Professional <span className="text-gray-500">Borehole Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Complete Water Well Drilling, Equipping &amp; Solar Conversion Services in Kenya
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== SERVICES OVERVIEW ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Complete <span className="text-gray-500">Borehole Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              Water is life, and clean water means health. We provide comprehensive water solutions including borehole drilling, water filtration, and storage systems.
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

          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className={`fas ${service.icon} text-xl text-[#5ABE71]`}></i>
                </div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROFESSIONAL SERVICES ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Our Professional <span className="text-gray-500">Services</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We operate borehole drilling rigs and offer professional services including:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {professionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check-circle text-[#5ABE71]"></i>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{service.title}</h4>
                    <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SOLAR CONVERSION PROJECTS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Borehole Solar Conversion <span className="text-gray-500">Projects</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We specialize in converting conventional borehole systems to solar-powered solutions for sustainable and cost-effective water supply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">{project.title}</h3>
                <div className="space-y-1.5">
                  {project.details.map((detail, i) => (
                    <div key={i} className="flex justify-between text-xs font-['Ubuntu'] border-b border-gray-100 pb-1.5">
                      <span className="text-gray-500">{detail.label}</span>
                      <span className="text-[#012156] font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TEST PUMPING SERVICES ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Test Pumping <span className="text-gray-500">Services</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We offer comprehensive borehole test-pumping services to determine aquifer yield and ensure optimal pump sizing for your specific requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {testPumpingFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-200 shadow-sm animate-on-scroll">
                <i className="fas fa-check-circle text-[#5ABE71] mt-0.5"></i>
                <span className="text-gray-700 text-sm font-['Ubuntu']">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#012156]/5 rounded-xl p-5 border border-gray-200 animate-on-scroll">
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Why Choose Our Test Pumping Services?</h3>
            <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">
              Our test pumping services help determine the exact yield of an aquifer, ensuring proper pump sizing and system design. This prevents under-performance or over-sizing of equipment, saving you money in the long run and ensuring reliable water supply.
            </p>
          </div>
        </section>

        {/* ===== WATER STORAGE SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Water Storage <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We offer comprehensive water storage solutions for governments, institutions, organizations, and individual clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {storageSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className="fas fa-tint text-xl text-[#5ABE71]"></i>
                </div>
                <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{solution.title}</h4>
                <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#012156]/5 rounded-xl p-5 border border-gray-200 animate-on-scroll">
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Expert Engineering Team</h3>
            <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">
              Our team of qualified and registered Civil & Mechanical Engineers brings close to two decades of experience in both the public and private civil construction industry in Kenya. We ensure that every water storage solution is designed and implemented to the highest standards of safety, durability, and efficiency.
            </p>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Get Reliable <span className="text-gray-500">Water Supply Today</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              With professional borehole drilling, solar conversion, and comprehensive water solutions, we ensure sustainable and reliable water supply for your home, farm, or business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-water mr-2"></i> Request a Quote
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