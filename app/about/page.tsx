// app/about/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
  }, [])

  // Partner logos — SAME as home page (from /public/images/)
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

        {/* ===== ABOUT HERO ===== */}
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
            ABOUT
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              About <span className="text-gray-500">Telefix Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Leading ICT & Power Solutions Provider in Kenya Since 2010
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== COMPANY OVERVIEW ===== */}
        <section className="py-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 animate-on-scroll">
              <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156]">
                Who <span className="text-gray-500">We Are</span>
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                Telefix Solutions Limited is a 100% Kenyan owned ICT company that prides itself in delivery of cost-effective future proof solutions, backed by exemplary customer service.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-['Ubuntu']">
                Through a participatory design process, innovation and continued research, our highly skilled technical team has delivered tailor-made solutions across all sectors and industries.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-['Ubuntu']">
                By partnering with world leading technology manufacturers and vendors, we ensure that the solutions we design integrate the latest, cutting-edge technology tailored to fit your specific requirements.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll">
              <img
                src="/images/about2.jpg"
                alt="Telefix Solutions Team"
                className="w-full h-[220px] md:h-[280px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== MISSION, VISION & PURPOSE — COMPACT ON MOBILE ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6 md:mb-8">
            Our Purpose, <span className="text-gray-500">Mission & Vision</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {[
              {
                icon: "fa-bullseye",
                title: "Our Purpose",
                desc: "To provide quality and excellent ICT solutions to meet our clients' expectations.",
                bg: "bg-[#012156]/10",
                border: "border-[#012156]/20",
                iconBg: "bg-[#012156]/20"
              },
              {
                icon: "fa-rocket",
                title: "Our Mission",
                desc: "To ease the operations of our clients' core business with the best ICT solutions.",
                bg: "bg-[#5ABE71]/15",
                border: "border-[#5ABE71]/25",
                iconBg: "bg-[#5ABE71]/25"
              },
              {
                icon: "fa-eye",
                title: "Our Vision",
                desc: "To be the regional leader in the ICT industry offering the best and latest ICT solutions.",
                bg: "bg-[#012156]/10",
                border: "border-[#012156]/20",
                iconBg: "bg-[#012156]/20"
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} ${item.border} rounded-lg md:rounded-xl p-3 md:p-6 border-2 shadow-sm hover:shadow-md transition-all animate-on-scroll flex md:block items-start gap-3 md:gap-0`}
              >
                <div className={`${item.iconBg} w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-full flex items-center justify-center md:mb-4 flex-shrink-0`}>
                  <i className={`fas ${item.icon} text-sm md:text-2xl text-[#012156]`}></i>
                </div>
                <div className="md:block">
                  <h3 className="font-['Orbitron'] text-xs md:text-lg font-bold text-[#012156] mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-[10px] md:text-sm font-['Ubuntu'] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== NETWORK SOLUTIONS EXCELLENCE ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Network <span className="text-gray-500">Solutions Excellence</span>
          </h2>
          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu'] mb-6">
              We have been recognized and awarded premier partnership by Nexans, an international cable manufacturer, due to our competency and technical experience in the structured cabling industry.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Neatly done cabinet with well done, presentable cables & pathways",
                "High quality termination - No attenuation or failure of the network",
                "Easy network management with proper labeling of all points",
                "A 20-year warranty on the network system"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                  <i className="fas fa-check-circle text-[#5ABE71] mt-0.5"></i>
                  <span className="text-gray-700 text-sm font-['Ubuntu']">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VIRTUALIZATION SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Virtualization <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 animate-on-scroll">
            <div className="space-y-3">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Server Virtualization</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                Consolidate multiple underutilized physical servers on a single host, running Virtual Machines. Using range of centralized tools, IT managers can increase availability of their servers by applying modern recovery techniques.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-['Ubuntu']">
                Faster deployment of new resources will reduce the time taken to get new employees up and running.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/server.avif"
                alt="Server Virtualization"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
            <div className="space-y-4">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Desktop Virtualization</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                <strong>NComputing In a Box:</strong> This solution takes the guess work out of desktop virtualization and allows you to find the right solution for your needs quickly, within budget.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-[#012156]/5 rounded-lg p-3 border border-gray-200">
                  <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156]">Classroom In a Box</h4>
                  <p className="text-gray-600 text-xs mt-1 font-['Ubuntu']">Comprehensive computer resources to more students at a lower cost.</p>
                </div>
                <div className="bg-[#012156]/5 rounded-lg p-3 border border-gray-200">
                  <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156]">Office In a Box</h4>
                  <p className="text-gray-600 text-xs mt-1 font-['Ubuntu']">Excellent alternative to traditional PCs for many organizations.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/desktop.jpg"
                alt="Desktop Virtualization"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== SECURITY SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Security <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6 animate-on-scroll">
            <div className="space-y-3">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">IP Surveillance Systems</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                Telefix is a solution integrator for various leading brands of cameras including the ACTi, Arecont Vision and the D-Link Cameras. We major in providing quality service to our clients.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/ip.jpg"
                alt="IP Surveillance Systems"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
            <div className="space-y-3 md:order-2">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Access Control Systems</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                Telefix has branded itself with the FINGERTEC brand of biometric and proximity systems for intrusion access and control. We have offered different solutions for RFID proximity cards.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg md:order-1">
              <img
                src="/images/access.webp"
                alt="Access Control Systems"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== DATA CENTER SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Data Center <span className="text-gray-500">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
            <div className="space-y-3">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Data Center Design & Construction</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                At TELEFIX SOLUTIONS, we believe that your data center strategy should be a source of your strategic advantage. As the market leaders in the region, we put our expertise to work for your business.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/data.webp"
                alt="Data Center Solutions"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== POWER SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Power <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6 animate-on-scroll">
            <div className="space-y-3">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Solar Power Systems</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                Power generation from solar water power systems for various uses including energy generation to power domestic and industrial applications as Off-grid and On-grid systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Solar water pumping systems", "Solar street and garden lighting", "Solar CCTV systems"].map((item, i) => (
                  <span key={i} className="bg-[#5ABE71]/10 text-[#5ABE71] px-3 py-1 rounded-full text-xs border border-[#5ABE71]/20 font-['Ubuntu']">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/about.jpg"
                alt="Solar Power Systems"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6 animate-on-scroll">
            <div className="space-y-3 md:order-2">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Solar Water Heaters</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                We are distributors of Solar water heaters sourced from reputable industry manufacturers. Our Solar water heaters come in different types and sizes to meet our customers' requirements.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg md:order-1">
              <img
                src="/images/heater.webp"
                alt="Solar Water Heaters"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
            <div className="space-y-3">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Electrical Solutions</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                We have a qualified, NCA certified team of technicians who do electrical wiring, install, repair and maintain wiring, switches, conduits, circuit breakers, lighting and other apparatus.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/electrical .jpg"
                alt="Electrical Solutions"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== WATER SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Water <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6 animate-on-scroll">
            <div className="space-y-3">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Borehole Drilling & Equipping</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                We operate borehole drilling rigs and offer professional services including hydrological surveys, borehole drilling, electric and solar water pumps, borehole camera services, and irrigation systems.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/about2.jpg"
                alt="Borehole Drilling"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
            <div className="space-y-3 md:order-2">
              <h3 className="font-['Orbitron'] text-xl font-bold text-[#5ABE71]">Water Filtration Systems</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                We offer four types of water filtration systems to ensure clean and healthy water for our clients.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Reverse Osmosis", desc: "Process for reduction of dissolved ions from water using pressure to force liquid through a semi-permeable membrane." },
                  { title: "Ultraviolet", desc: "Combined with filtration system to enhance purification process using UV spectrum to kill microorganisms." },
                  { title: "Filtration", desc: "Process where water passes through systems to remove turbidity, taste, color, iron or odor." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#012156]/5 rounded-lg p-3 border border-gray-200">
                    <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156]">{item.title}</h4>
                    <p className="text-gray-600 text-[10px] mt-1 font-['Ubuntu']">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg md:order-1">
              <img
                src="/images/filtration.webp"
                alt="Water Filtration Systems"
                className="w-full h-[180px] md:h-[220px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== CERTIFICATIONS & PARTNERSHIPS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Certifications <span className="text-gray-500">& Partnerships</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-certificate",
                title: "EPRA Certified",
                desc: "Licensed Solar PV Contractor/Vendor with EPRA Licence Number: EPRA/SPVC/01400 (Class C1)"
              },
              {
                icon: "fa-handshake",
                title: "Nexans Premier Partner",
                desc: "Recognized and awarded premier partnership by Nexans for competency in structured cabling industry."
              },
              {
                icon: "fa-award",
                title: "Cisco Premier Partner",
                desc: "Authorized Cisco Premier Partner for networking, security, and unified communications solutions."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="w-14 h-14 rounded-full bg-[#5ABE71]/10 flex items-center justify-center mb-4">
                  <i className={`fas ${item.icon} text-2xl text-[#5ABE71]`}></i>
                </div>
                <h3 className="font-['Orbitron'] text-base font-bold text-[#012156] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm font-['Ubuntu']">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PARTNERS SECTION - SAME AS HOME ===== */}
        <section className="py-10 overflow-hidden">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Our <span className="text-gray-500">Partners</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6 font-['Ubuntu']">Collaborating with world-class technology partners</p>

          <div className="relative overflow-hidden">
            <div className="flex animate-slide">
              {partnerLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-40 h-20 mx-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                  <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain p-2" />
                </div>
              ))}
              {partnerLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-40 h-20 mx-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                  <img src={logo.src} alt={`${logo.alt} duplicate`} className="max-w-full max-h-full object-contain p-2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-6 border border-gray-200 animate-on-scroll max-w-3xl">
            <h2 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-[#012156] mb-3">
              Partner With <span className="text-gray-500">Telefix Solutions</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mb-5 font-['Ubuntu']">
              With over 16 years of experience, 500+ completed projects, and partnerships with world-leading technology manufacturers, we are your trusted partner.
            </p>
            <Link href="/contact">
              <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                Contact Us Today
              </button>
            </Link>
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
      `}</style>
    </div>
  )
}