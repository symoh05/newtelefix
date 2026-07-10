// app/services/virtualization/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function VirtualizationPage() {
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
            VIRTUALIZATION
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Virtualization <span className="text-gray-500">Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Server consolidation, desktop virtualization, and cloud solutions. NComputing In a Box solutions for classrooms and offices.
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== SERVER VIRTUALIZATION ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Server <span className="text-gray-500">Virtualization</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              Consolidate multiple underutilized physical servers on a single host, running Virtual Machines. Using a range of centralized tools, IT managers can increase availability of their servers by applying modern recovery techniques. Faster deployment of new resources will reduce the time taken to get new employees up and running.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: "fa-server",
                title: "Server Consolidation",
                desc: "Reduce physical server count, lower energy consumption, and simplify management through server virtualization. Achieve better resource utilization and operational efficiency."
              },
              {
                icon: "fa-shield-alt",
                title: "Disaster Recovery",
                desc: "Modern recovery techniques for increased server availability and enhanced business continuity planning. Ensure minimal downtime and data protection."
              },
              {
                icon: "fa-rocket",
                title: "Rapid Deployment",
                desc: "Faster deployment of new resources and virtual machines as needed for business growth and scalability. Streamline your IT operations."
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

          {/* Feature items - Now consistent size with cards above */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: "fa-tachometer-alt",
                title: "Centralized Management",
                desc: "Manage all virtual servers from a single console with comprehensive monitoring and control tools."
              },
              {
                icon: "fa-chart-line",
                title: "Resource Optimization",
                desc: "Maximize hardware utilization by running multiple virtual machines on a single physical server."
              },
              {
                icon: "fa-coins",
                title: "Cost Reduction",
                desc: "Significant savings on hardware, energy, cooling, and physical space requirements."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
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

        {/* ===== DESKTOP VIRTUALIZATION ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Desktop <span className="text-gray-500">Virtualization</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <h3 className="font-['Orbitron'] text-lg font-bold text-[#5ABE71] mb-2">NComputing In a Box</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              This solution takes the guess work out of desktop virtualization and allows you to find the right solution for your needs quickly, within budget and with your green computing desires in mind. In a Box solutions are all inclusive, pre-tested and easy to deploy solutions which can be right-sized to suit your current needs and expanded in the future with modular add on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "fa-graduation-cap",
                title: "Classroom In a Box",
                desc: "Enable comprehensive computer resources for more students at a lower cost. Ideal for classrooms, computer labs, testing centers, libraries, and higher education campus deployments. Perfect for educational institutions of all sizes."
              },
              {
                icon: "fa-building",
                title: "Office In a Box",
                desc: "Pre-tested, all-inclusive desktop virtualization solution that meets computer performance demands of growing businesses, from SMBs to Enterprise. Scalable and cost-effective for modern workplaces."
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
        </section>

        {/* ===== BENEFITS SECTION - LEFT ALIGNED ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Key Benefits of <span className="text-gray-500">Virtualization</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "fa-coins",
                title: "Cost Reduction",
                desc: "Significantly lower hardware, energy, and maintenance costs through optimized resource utilization and server consolidation."
              },
              {
                icon: "fa-tasks",
                title: "Improved Management",
                desc: "Centralized control and simplified management of IT infrastructure across your entire organization."
              },
              {
                icon: "fa-leaf",
                title: "Environmental Impact",
                desc: "Reduce energy consumption and carbon footprint through efficient server utilization and virtualization."
              },
              {
                icon: "fa-lock",
                title: "Enhanced Security",
                desc: "Better security controls, data protection, and disaster recovery capabilities with virtualized environments."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-3">
                  <i className={`fas ${item.icon} text-xl text-[#5ABE71]`}></i>
                </div>
                <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-1 text-left">{item.title}</h4>
                <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION - SMALLER ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Ready to Transform Your <span className="text-gray-500">IT Infrastructure?</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              Discover why businesses across Kenya rely on our virtualization solutions for the highest level of efficiency, insight and control.
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
                <i className="fas fa-phone"></i> Call: +254 721 722 823
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