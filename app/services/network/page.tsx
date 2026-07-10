// app/services/network/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NetworkPage() {
  useEffect(() => {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active')
          }, index * 100)
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

  const features = [
    "Neatly done cabinet with well done, presentable cables & pathways",
    "High quality termination - No attenuation or failure of the network",
    "Easy network management with proper labeling of all points",
    "A 20-year warranty on the network system",
    "Complete documentation showing points, layout and labels",
    "Test certificates with results of network tests"
  ]

  const projects = [
    {
      title: "Old Mutual Ltd",
      location: "Nairobi Headquarters",
      description: "Complete structured cabling solution with CAT6A infrastructure supporting high-speed data transfer for financial operations.",
      tags: ["CAT6A Cabling", "Fiber Backbone", "Network Racks", "20-year Warranty"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop&auto=format&q=80"
    },
    {
      title: "Technobrain Ltd",
      location: "Nairobi Office",
      description: "Advanced network infrastructure with redundancy systems for uninterrupted operations in software development environment.",
      tags: ["Redundant Links", "PoE Switches", "Security VLANs", "Network Monitoring"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format&q=80"
    },
    {
      title: "Netherlands Embassy",
      location: "Nairobi, Kenya",
      description: "Secure network infrastructure with advanced encryption and segmented networks for diplomatic communications.",
      tags: ["High Security", "Encryption", "Segmented Networks", "Access Control"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop&auto=format&q=80"
    },
    {
      title: "West Indian Ocean Cable Co.",
      location: "Mombasa, Kenya",
      description: "Data center network infrastructure with high-speed fiber connections and redundant power systems.",
      tags: ["Fiber Optics", "Data Center", "Redundant Power", "24/7 Monitoring"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format&q=80"
    },
    {
      title: "Rentokil Ltd",
      location: "Nairobi Office",
      description: "Office network setup with wireless access points and structured cabling for multi-department connectivity.",
      tags: ["Wireless APs", "Office Network", "Multi-floor Setup", "Guest Network"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop&auto=format&q=80"
    },
    {
      title: "Norfolk Hotel",
      location: "Nairobi, Kenya",
      description: "RUCKUS Wireless network solution customized for hotel architecture with seamless guest connectivity.",
      tags: ["RUCKUS Wireless", "Hotel Network", "Guest WiFi", "Bandwidth Management"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop&auto=format&q=80"
    }
  ]

  const wirelessSolutions = [
    {
      title: "RUCKUS Wireless for Hotels",
      description: "Customized wireless network solutions for large hotels like the Norfolk, designed to serve hotel architecture flawlessly with seamless guest connectivity and management."
    },
    {
      title: "Wireless Bridging Systems",
      description: "Non-line of sight links up to 40 miles, connecting ISP base stations to client CPEs with speeds up to 150Mbps through dense foliage and urban environments."
    },
    {
      title: "Campus & City WiFi",
      description: "Large-scale wireless network deployments for educational campuses, city hotspots, and public spaces with robust authentication and management systems."
    }
  ]

  const partners = [
    { name: "Nexans", role: "Premier Partner" },
    { name: "Cisco", role: "Premier Partner" },
    { name: "RUCKUS", role: "Wireless Solutions" },
    { name: "Siemon", role: "Cabling Solutions" },
    { name: "Giganet", role: "Cabling Solutions" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />

        {/* ===== NETWORK HERO ===== */}
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
            NETWORK
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Network <span className="text-gray-500">Solutions Excellence</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Premier Partner for Structured Cabling &amp; Wireless Networking in Kenya
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== EXCELLENCE FEATURES ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Our Network <span className="text-gray-500">Excellence Standards</span>
          </h2>
          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-8 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We have been recognized and awarded premier partnership by Nexans, an international cable manufacturer, due to our competency and technical experience in the structured cabling industry. We offer the latest range of copper and fiber optic cabling solutions, including CAT7 cabling that supports speeds of up to 10G.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <i className="fas fa-check-circle text-[#5ABE71] mt-0.5"></i>
                <span className="text-gray-700 text-sm font-['Ubuntu']">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROJECTS SHOWCASE ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Our Network <span className="text-gray-500">Projects</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6 font-['Ubuntu']">
            View some of our successfully completed network infrastructure projects across Kenya
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#5ABE71] text-white text-[10px] px-3 py-1 rounded-full font-['Orbitron'] tracking-wider">
                    Completed
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-['Orbitron'] text-base font-bold text-[#012156]">{project.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs font-['Ubuntu'] mt-1">
                    <i className="fas fa-map-marker-alt text-[#5ABE71]"></i>
                    {project.location}
                  </div>
                  <p className="text-gray-600 text-xs mt-2 font-['Ubuntu'] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] bg-[#5ABE71]/10 text-[#5ABE71] px-2 py-0.5 rounded-full border border-[#5ABE71]/20 font-['Ubuntu']">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WIRELESS SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Wireless <span className="text-gray-500">Network Solutions</span>
          </h2>
          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-8 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We offer various wireless network solutions ranging from small home W-LANs to large Campus and City WIFI hotspots. Our RUCKUS Wireless solutions are specially customized for the hospitality industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {wirelessSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className="fas fa-wifi text-xl text-[#5ABE71]"></i>
                </div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#012156]/5 rounded-xl p-5 border border-gray-200 animate-on-scroll">
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Technical Capabilities</h3>
            <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">
              Our wireless solutions overcome propagation issues with higher frequency 802.11A/B/G/N systems, providing reliable connectivity even in challenging environments with line of sight obstructions.
            </p>
          </div>
        </section>

        {/* ===== PARTNERSHIPS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Our Technology <span className="text-gray-500">Partners</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6 font-['Ubuntu']">
            Backed by 20-year manufacturer warranty on all our cabling solutions through our partnerships with world-leading technology manufacturers
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all text-center animate-on-scroll">
                <div className="w-14 h-14 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-handshake text-2xl text-[#5ABE71]"></i>
                </div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156]">{partner.name}</h3>
                <p className="text-gray-500 text-[10px] font-['Ubuntu']">{partner.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-6 border border-gray-200 animate-on-scroll max-w-3xl">
            <h2 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-[#012156] mb-3">
              Transform Your <span className="text-gray-500">Network Infrastructure</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mb-5 font-['Ubuntu']">
              With premier partnerships, 20-year warranties, and proven expertise in structured cabling and wireless networking, we deliver network solutions that ensure optimal performance and reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  Request Network Assessment
                </button>
              </Link>
              <a
                href="tel:+254721722823"
                className="bg-transparent hover:bg-[#012156]/10 text-[#012156] px-8 py-3 rounded-lg border-2 border-[#012156]/30 font-['Orbitron'] text-sm tracking-wider transition-all inline-flex items-center gap-2"
              >
                <i className="fas fa-phone"></i> Call Now: +254 721 722 823
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