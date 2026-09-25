// app/services/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const animateElements = document.querySelectorAll('.animate-on-scroll')

      animateElements.forEach(el => el.classList.remove('active'))

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isMounted.current) {
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
    }, 50)

    return () => clearTimeout(timer)
  }, [activeCategory])

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ict', name: 'ICT Solutions' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'energy', name: 'Energy & Power' },
    { id: 'utilities', name: 'Utilities' },
  ]

  const allServices = [
    {
      title: "Virtualization Solutions",
      description: "Server consolidation, desktop virtualization, and cloud solutions. NComputing In a Box solutions for classrooms and offices.",
      icon: "fa-server",
      tags: ["Server Consolidation", "Desktop Virtualization", "Cloud Solutions"],
      link: "/services/virtualization",
      category: "ict"
    },
    {
      title: "Network Solutions",
      description: "Structured cabling, wireless networks, and telecom infrastructure with 20-year warranty. Premier partnership with Nexans.",
      icon: "fa-network-wired",
      tags: ["CAT7 Cabling", "Wireless Networks", "Fiber Optics"],
      link: "/services/network",
      category: "infrastructure"
    },
    {
      title: "Security Solutions",
      description: "IP surveillance, access control, unified threat management, and cybersecurity solutions. Partners: Cyberoam & Sophos.",
      icon: "fa-shield-alt",
      tags: ["IP Surveillance", "Access Control", "UTM Systems"],
      link: "/services/security",
      category: "security"
    },
    {
      title: "Data Center Solutions",
      description: "Design, construction, and commissioning of modern data centers. Self-cooling cabinets and energy-efficient solutions.",
      icon: "fa-database",
      tags: ["Data Center Design", "Self-Cooling Cabinets", "Energy Smart Racks"],
      link: "/services/datacenter",
      category: "ict"
    },
    {
      title: "Unified Communications",
      description: "Alcatel-Lucent & Cisco telephony, video conferencing, and collaboration solutions. Cisco Premier Partners.",
      icon: "fa-tower-cell",
      tags: ["Alcatel-Lucent", "Cisco Systems", "Video Conferencing"],
      link: "/services/unified",
      category: "ict"
    },
    {
      title: "Solar Power Systems",
      description: "EPRA certified Solar PV Contractor/Vendor. Design, installation, and maintenance of solar systems for domestic and commercial applications.",
      icon: "fa-solar-panel",
      tags: ["EPRA Certified", "Solar Water Heating", "Solar Street Lights"],
      link: "/services/solar",
      category: "energy"
    },
    {
      title: "Power Solutions",
      description: "UPS systems, AVRs, generators, and comprehensive electrical solutions. Solar water pumping systems and power backup.",
      icon: "fa-bolt",
      tags: ["UPS Systems", "AVRs", "Generators"],
      link: "/services/power",
      category: "energy"
    },
    {
      title: "Electrical Installation",
      description: "Qualified, NCA certified team of technicians for electrical wiring, installation, repair, and maintenance of all electrical systems.",
      icon: "fa-plug",
      tags: ["NCA Certified", "Electrical Wiring", "LED Lighting"],
      link: "/services/electrical",
      category: "infrastructure"
    },
    {
      title: "Borehole Drilling",
      description: "Professional borehole drilling services including hydrological surveys, electric and solar water pumps, and borehole camera services.",
      icon: "fa-water",
      tags: ["Hydrological Surveys", "Solar Water Pumps", "Borehole Camera"],
      link: "/services/borehole",
      category: "utilities"
    },
    {
      title: "Water Filtration Systems",
      description: "Four filtration systems: Reverse Osmosis, Ultraviolet, Filtration, and specialized systems for high sediment, fluoride, or chlorine taste.",
      icon: "fa-filter",
      tags: ["Reverse Osmosis", "Ultraviolet", "Multi-Stage Filtration"],
      link: "/services/filtration",
      category: "utilities"
    },
    {
      title: "Water Storage Solutions",
      description: "Elevated pressed steel water tanks, steel structures to support plastic tanks, and comprehensive water storage solutions.",
      icon: "fa-tint",
      tags: ["Elevated Steel Tanks", "Plastic Tank Support", "Water Tower Construction"],
      link: "/services/storage",
      category: "utilities"
    },
    {
      title: "Telecom Project Management",
      description: "Experienced telecommunication experts providing comprehensive packages in telecom project management and passive maintenance.",
      icon: "fa-broadcast-tower",
      tags: ["Tower Erection", "Equipment Installation", "Site Power Collocation"],
      link: "/services/telecom",
      category: "infrastructure"
    }
  ]

  const filteredServices = activeCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === activeCategory)

  const whyItems = [
    {
      icon: "fa-award",
      title: "Certified Excellence",
      description: "EPRA certified Solar PV Contractor/Vendor. Recognized and awarded premier partnership by Nexans for competency in structured cabling."
    },
    {
      icon: "fa-handshake",
      title: "Strategic Partnerships",
      description: "Partnering with world-leading technology manufacturers: Cisco Premier Partners, Dell Preferred Partners, Nexans, Alcatel-Lucent, and more."
    },
    {
      icon: "fa-users",
      title: "Expert Team",
      description: "Highly skilled technical team with specialized training and access to partner resources. Qualified, NCA certified technicians for all installations."
    },
    {
      icon: "fa-clock",
      title: "16 Years Experience",
      description: "Since 2010, we have delivered innovative ICT and power solutions across Kenya, building a reputation for reliability and excellence."
    }
  ]

  // Partner logos — SAME as home page (from /public/images/partners/)
  const partnerLogos = [
    { src: '/images/partners/sigona.png', alt: 'Sigona Golf Club' },
    { src: '/images/partners/uplands.png', alt: 'Uplands Farm' },
    { src: '/images/partners/turnpoint.jpg', alt: 'Turnpoint' },
    { src: '/images/partners/uhai.jpg', alt: 'Uhai' },
    { src: '/images/partners/roy.png', alt: 'Roy' },
    { src: '/images/partners/cylinder.png', alt: 'Cylinder' },
    { src: '/images/partners/pcea.png', alt: 'PCEA' },
    { src: '/images/partners/child.png', alt: 'Child' },
    { src: '/images/partners/clinton.png', alt: 'Clinton Hotel' },
    { src: '/images/partners/edenville (1).png', alt: 'EdenVille' },
    { src: '/images/partners/faith.png', alt: 'Faith' },
    { src: '/images/partners/ikweta.png', alt: 'Ikweta' },
    { src: '/images/partners/kirinyaga.png', alt: 'Kirinyaga' },
    { src: '/images/partners/linksoft.png', alt: 'Linksoft' },
    { src: '/images/partners/moi (1).png', alt: 'Moi' },
    { src: '/images/partners/ag (1).png', alt: 'AG' },
    { src: '/images/partners/happy (1).png', alt: 'Happy' },
    { src: '/images/partners/runda.png', alt: 'Runda' },
    { src: '/images/partners/Texaco.png', alt: 'Texaco' },
    { src: '/images/partners/spring-logo.png', alt: 'Spring' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />

        {/* ===== SERVICES HERO ===== */}
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
            SERVICES
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Our <span className="text-gray-500">Comprehensive Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              From network infrastructure to solar power systems, we provide end-to-end technology solutions backed by 16 years of expertise and strategic partnerships with world-leading manufacturers.
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== CATEGORY TABS ===== */}
        <section className="py-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 mb-6 min-w-max pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-['Orbitron'] tracking-wider transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-[#012156] text-white shadow-md'
                      : 'bg-[#012156]/10 text-[#012156] hover:bg-[#012156]/20'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section className="py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service, index) => (
              <Link href={service.link} key={`${activeCategory}-${index}`} className="block animate-on-scroll">
                <div className="relative bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all hover:-translate-y-1 group overflow-hidden h-full cursor-pointer">
                  <i className={`fas ${service.icon} absolute pointer-events-none`}
                    style={{
                      position: 'absolute',
                      bottom: '-15px',
                      right: '-15px',
                      fontSize: '3.5rem',
                      opacity: 0.06,
                      transform: 'rotate(-15deg)',
                      zIndex: 0
                    }}
                  ></i>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center mb-2 group-hover:bg-[#5ABE71] group-hover:text-white transition-all">
                      <i className={`fas ${service.icon} text-xl text-[#5ABE71] group-hover:text-white transition-all`}></i>
                    </div>
                    <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1 tracking-wide">{service.title}</h3>
                    <p className="text-gray-600 text-xs mb-2 leading-relaxed line-clamp-2">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {service.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[9px] bg-[#5ABE71]/10 text-[#5ABE71] px-2 py-0.5 rounded-full border border-[#5ABE71]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#012156]/50 group-hover:text-[#5ABE71] transition-colors text-xs font-['Orbitron'] tracking-wider">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="py-10">
          <div className="mb-6">
            <span className="text-xs font-['Orbitron'] text-[#012156]/60 tracking-widest">WHY CHOOSE US</span>
            <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mt-1 tracking-wide">
              Why Choose <span className="text-gray-500">Telefix Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {whyItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center mb-2">
                  <i className={`fas ${item.icon} text-xl text-[#5ABE71]`}></i>
                </div>
                <h4 className="text-[#012156] font-bold text-sm font-['Orbitron'] tracking-wide">{item.title}</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PARTNERS SECTION - SAME AS HOME ===== */}
        <section className="py-10 overflow-hidden">
          <div className="mb-6">
            <span className="text-xs font-['Orbitron'] text-[#012156]/60 tracking-widest">OUR PARTNERS</span>
            <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mt-1 tracking-wide">
              Our <span className="text-gray-500">Technology Partners</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">Collaborating with world-class technology partners</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-slide">
              {partnerLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-40 h-20 mx-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
              ))}
              {partnerLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-40 h-20 mx-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                  <img
                    src={logo.src}
                    alt={`${logo.alt} duplicate`}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-6">
          <div className="bg-gradient-to-r from-[#012156]/5 to-[#5ABE71]/5 rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <i className="fas fa-rocket text-xl text-[#5ABE71] mb-1 block md:inline md:mr-2"></i>
                <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] inline tracking-wide">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-500 text-xs mt-1 max-w-lg">
                  Contact us today to discuss how our innovative solutions can help your organization.
                </p>
              </div>
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg border border-[#012156]/20 transition-all text-sm flex items-center gap-2 font-['Orbitron'] tracking-wider whitespace-nowrap shadow-sm hover:shadow-md">
                  <i className="fas fa-paper-plane text-xs"></i> Contact Us Now
                </button>
              </Link>
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

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 45s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}