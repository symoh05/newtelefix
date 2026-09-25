// app/services/filtration/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FiltrationPage() {
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

  const systems = [
    {
      icon: "fa-water",
      title: "Reverse Osmosis Systems",
      desc: "Process for the reduction of dissolved ions (such as salts) from water in which pressure is employed to force liquid (water) through a semi-permeable membrane, which will transmit the water but reject most other dissolved materials.",
      bestFor: ["Removing dissolved salts and minerals", "Reducing heavy metals and chemicals", "Producing pure drinking water"]
    },
    {
      icon: "fa-sun",
      title: "Ultraviolet Purification",
      desc: "This system is combined with filtration system to enhance the purification process. Sunlight has long since been known to kill microorganisms. The rays from the sun contain the UV spectrum used in Ultraviolet Water Treatment Systems - although at much lower intensities.",
      bestFor: ["Killing bacteria and viruses", "Chemical-free disinfection", "Maintaining water mineral content"]
    },
    {
      icon: "fa-filter",
      title: "Multi-Stage Filtration",
      desc: "A process in which water passes through a water system that may include one or more filters for the purpose of removing turbidity, taste, color, iron or odor. The design can be loose media tank-type systems or cartridge devices.",
      bestFor: ["Mechanical filters for sediment", "Adsorptive filters (activated carbon)", "Neutralizing and oxidizing filters"]
    }
  ]

  const qualityIssues = [
    { icon: "fa-tint", title: "Sediment & Turbidity", desc: "Remove sand, silt, clay, rust, and other particulate matter that causes cloudy water and affects appliance performance." },
    { icon: "fa-flask", title: "Chemical Contaminants", desc: "Reduce chlorine, pesticides, herbicides, and industrial chemicals that affect taste, odor, and water safety." },
    { icon: "fa-biohazard", title: "Biological Contaminants", desc: "Eliminate bacteria, viruses, cysts, and other microorganisms that pose health risks and affect water purity." }
  ]

  const applications = [
    { icon: "fa-home", title: "Residential Homes", desc: "Whole house systems, under-sink filters, and point-of-use systems for clean drinking water" },
    { icon: "fa-building", title: "Commercial Buildings", desc: "Office water coolers, restaurant water systems, and commercial kitchen water filtration" },
    { icon: "fa-industry", title: "Industrial Applications", desc: "Process water treatment, boiler feed water, cooling tower water, and manufacturing water needs" },
    { icon: "fa-hospital", title: "Healthcare Facilities", desc: "Hospitals, clinics, laboratories, and dialysis centers requiring ultra-pure water" },
    { icon: "fa-graduation-cap", title: "Educational Institutions", desc: "Schools, colleges, and universities for drinking water and laboratory applications" },
    { icon: "fa-utensils", title: "Hospitality Industry", desc: "Hotels, restaurants, and resorts for guest water needs and food preparation" }
  ]

  const benefits = [
    {
      icon: "fa-heartbeat",
      title: "Improved Health",
      desc: "Remove contaminants that can cause gastrointestinal illnesses, reproductive problems, and neurological disorders. Protect your family from waterborne diseases and health risks."
    },
    {
      icon: "fa-coins",
      title: "Cost Savings",
      desc: "Reduce expenses on bottled water and minimize plumbing repairs by preventing scale buildup and corrosion. Extend the lifespan of water-using appliances and fixtures."
    },
    {
      icon: "fa-leaf",
      title: "Environmental Impact",
      desc: "Reduce plastic waste from bottled water consumption. Minimize chemical discharge into the environment with efficient filtration systems that require fewer chemicals."
    },
    {
      icon: "fa-glass-cheers",
      title: "Better Taste & Quality",
      desc: "Improve the taste of drinking water, coffee, tea, and food prepared with filtered water. Enjoy clear, odor-free water for all your household and cooking needs."
    }
  ]

  const processSteps = [
    { number: "01", title: "Water Quality Testing", desc: "We begin with comprehensive water testing to identify specific contaminants, pH levels, hardness, and other quality parameters. This ensures we recommend the right filtration system for your needs." },
    { number: "02", title: "System Design & Recommendation", desc: "Based on test results and your requirements, we design a customized filtration system. We consider water usage, pressure requirements, space constraints, and specific contaminant removal needs." },
    { number: "03", title: "Professional Installation", desc: "Our certified technicians install the system with minimal disruption. We ensure proper plumbing connections, electrical requirements (if needed), and optimal placement for maintenance access." },
    { number: "04", title: "System Testing & Commissioning", desc: "After installation, we thoroughly test the system to ensure it's working correctly. We check for leaks, verify water pressure, and test the filtered water quality to confirm contaminant removal." },
    { number: "05", title: "Training & Maintenance Plan", desc: "We provide complete training on system operation and maintenance. We establish a maintenance schedule for filter changes and system checks to ensure long-term performance and water quality." }
  ]

  const galleryImages = [
    { src: "/images/filtration.jpg", title: "Water Filtration Systems" },
    { src: "/images/filtration.webp", title: "Reverse Osmosis Systems" },
    { src: "/images/uv.avif", title: "UV Water Purification" }
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
            FILTRATION
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Water <span className="text-gray-500">Filtration Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Clean, Safe Drinking Water Systems for Homes, Offices &amp; Industries in Kenya
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== FILTRATION SYSTEMS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Our Water <span className="text-gray-500">Filtration Systems</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              Water is life, and clean water means health. We provide comprehensive water filtration systems that are 
              cost-effective ways to improve your water quality without using electricity or wasting water. Systems can 
              be specialized to target particular water issues such as high sediment, fluoride, or chlorine taste.
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

          {/* Systems — LEFT ALIGNED */}
          <div className="grid md:grid-cols-3 gap-4">
            {systems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3 text-left mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${system.icon} text-base text-[#5ABE71]`}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-['Orbitron'] text-xs font-bold text-[#012156]">{system.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{system.desc}</p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <h4 className="font-['Orbitron'] text-[10px] font-bold text-[#012156] mb-1.5">Best For:</h4>
                  <ul className="space-y-0.5">
                    {system.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-gray-600 text-[10px] font-['Ubuntu']">
                        <i className="fas fa-check-circle text-[#5ABE71] text-[8px] mt-0.5"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WATER QUALITY ISSUES ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Common Water Quality <span className="text-gray-500">Issues We Solve</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {qualityIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${issue.icon} text-[#5ABE71]`}></i>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{issue.title}</h4>
                    <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{issue.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== APPLICATION AREAS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Application <span className="text-gray-500">Areas</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${app.icon} text-[#5ABE71]`}></i>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{app.title}</h4>
                    <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Benefits of <span className="text-gray-500">Clean Water</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${benefit.icon} text-[#5ABE71]`}></i>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1">{benefit.title}</h4>
                    <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== INSTALLATION PROCESS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Our Installation <span className="text-gray-500">Process</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#5ABE71]/10 flex items-center justify-center">
                    <span className="font-['Orbitron'] text-sm font-bold text-[#5ABE71]">{step.number}</span>
                  </div>
                  <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156]">{step.title}</h4>
                </div>
                <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Get Clean, Safe <span className="text-gray-500">Water Today</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              With professional water quality testing, customized filtration solutions, and expert installation, 
              we ensure you have access to clean, safe drinking water for your home or business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-flask mr-2"></i> Request Water Testing
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