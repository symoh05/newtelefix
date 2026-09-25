// app/services/security/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SecurityPage() {
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

  const securitySolutions = [
    {
      icon: "fa-shield-alt",
      title: "UTM Security",
      desc: "Identity-based security solutions with Cyberoam and Sophos for complete network protection against viruses, malware, spam, Trojans, and insider attacks."
    },
    {
      icon: "fa-video",
      title: "IP Surveillance",
      desc: "Megapixel cameras with advanced features for comprehensive monitoring and surveillance. Partners include ACTi, Arecont Vision, and D-Link."
    },
    {
      icon: "fa-fingerprint",
      title: "Access Control",
      desc: "Biometric and proximity systems for secure intrusion access and control management using FINGERTEC technology."
    }
  ]

  const cameraFeatures = [
    "Day/Night Vision",
    "Wide Dynamic Range",
    "Panoramic Viewing",
    "Megapixel Resolution"
  ]

  const biometricModels = ["R2", "AC900", "Keylock 7700/8800", "H2i", "Kiosk400 Plus", "Q2i", "Face ID2/3", "Kadex"]

  const timeAttendanceModels = ["AC100", "TA100C", "TA200 Plus", "TA300", "Face ID4", "Ofis-X/Y"]

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
            SECURITY
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Security <span className="text-gray-500">Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Comprehensive Cybersecurity &amp; Physical Security Protection for Your Business
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== SECURITY OVERVIEW ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Our Security <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              In today's digital age, continuous protection against blended threats is essential. We offer comprehensive security solutions from network gateway to endpoints, securing your every move at work, at home, and while you travel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {securitySolutions.map((item, index) => (
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

        {/* ===== UTM SECURITY ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            UTM Security <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            {/* Text side */}
            <div className="space-y-4 animate-on-scroll">
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                As an individual user or employee, blended threats are waiting to attack by identifying vulnerable moments when your defenses are low. These can be viruses, malware, spam, Trojans, and insider attacks like data theft and leakage. Securing you - the User, thus becomes critical!
              </p>

              <div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Our Security Partners:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#012156]/10 text-[#012156] px-4 py-1.5 rounded-full text-xs font-['Orbitron']">Cyberoam</span>
                  <span className="bg-[#012156]/10 text-[#012156] px-4 py-1.5 rounded-full text-xs font-['Orbitron']">Sophos</span>
                </div>
              </div>

              <div className="grid gap-3 pt-2">
                {[
                  {
                    icon: "fa-user-shield",
                    title: "Identity-Based Security",
                    desc: "Bind security with your identity for personalized protection that follows you wherever you go, ensuring consistent security policies across all devices and locations."
                  },
                  {
                    icon: "fa-laptop",
                    title: "Endpoint Protection",
                    desc: "Secure your endpoints, storage devices, and control applications to protect sensitive data from unauthorized access and malware threats."
                  },
                  {
                    icon: "fa-shield-virus",
                    title: "Unified Threat Management",
                    desc: "Best-of-breed assembly of solutions over a single interface for complete, dependable protection including firewall, antivirus, and intrusion prevention."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${item.icon} text-sm text-[#5ABE71]`}></i>
                      </div>
                      <div>
                        <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side — compact height */}
            <div className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll lg:sticky lg:top-24">
              <img
                src="/images/upm.webp"
                alt="Cybersecurity Protection"
                className="w-full h-[220px] lg:h-[260px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-white font-['Orbitron'] text-xs">Network Security Infrastructure</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== IP SURVEILLANCE ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            IP Surveillance <span className="text-gray-500">Systems</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            {/* Image side (left on desktop) */}
            <div className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll lg:order-1">
              <img
                src="/images/ip.jpg"
                alt="IP Camera Installation"
                className="w-full h-[220px] lg:h-[260px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-white font-['Orbitron'] text-xs">IP Camera Installation &amp; Monitoring</div>
              </div>
            </div>

            {/* Text side (right on desktop) */}
            <div className="space-y-4 animate-on-scroll lg:order-2">
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                Telefix is a solution integrator for various leading brands of cameras including ACTi, Arecont Vision and D-Link Cameras. We major in providing quality service to our clients with megapixel cameras featuring advanced capabilities.
              </p>

              <div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Camera Features:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {cameraFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-200">
                      <i className="fas fa-check-circle text-[#5ABE71] text-xs"></i>
                      <span className="text-gray-600 text-xs font-['Ubuntu']">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#012156]/5 rounded-xl p-4 border border-gray-200">
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Major Clients:</h3>
                <p className="text-gray-600 text-sm font-['Ubuntu']">Old Mutual Ltd, Techno-brain Ltd, Netherlands Embassy, West Indian Ocean Cable Company, Rentokil, RBA, Africa Fuel, etc.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ACCESS CONTROL ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Access Control <span className="text-gray-500">Systems</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            {/* Text side */}
            <div className="space-y-4 animate-on-scroll">
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                Telefix has branded itself with the FINGERTEC brand of biometric and proximity systems for intrusion access and control. We offer different solutions for RFID proximity cards and biometric face and fingerprint recognition systems.
              </p>

              <div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Available Biometric Models:</h3>
                <div className="flex flex-wrap gap-2">
                  {biometricModels.map((model, index) => (
                    <span key={index} className="bg-[#012156]/10 text-[#012156] px-3 py-1 rounded-full text-xs font-['Orbitron']">
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#012156]/5 rounded-xl p-4 border border-gray-200">
                <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Major Clients:</h4>
                <p className="text-gray-600 text-sm font-['Ubuntu']">Malawi Embassy, Retirement Authority, Burbidae Capital, ESBC, West Indian Ocean Cable Company, etc.</p>
              </div>
            </div>

            {/* Image side */}
            <div className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll lg:sticky lg:top-24">
              <img
                src="/images/access.webp"
                alt="Biometric Access Control"
                className="w-full h-[220px] lg:h-[260px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-white font-['Orbitron'] text-xs">Biometric Access Control System</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TIME ATTENDANCE ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Time Attendance <span className="text-gray-500">Systems</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            {/* Image side (left on desktop) */}
            <div className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll lg:order-1">
              <img
                src="/images/time.avif"
                alt="Time Attendance System"
                className="w-full h-[220px] lg:h-[260px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-white font-['Orbitron'] text-xs">Biometric Time Attendance System</div>
              </div>
            </div>

            {/* Text side (right on desktop) */}
            <div className="space-y-4 animate-on-scroll lg:order-2">
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                We offer automatic systems for registering check in/out for different industries including hospitality, hospitals, organizations and companies for their staff management. These systems integrate with HR and Accounting systems for appraisal and payroll processing.
              </p>

              <div>
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Fingertec Models:</h3>
                <div className="flex flex-wrap gap-2">
                  {timeAttendanceModels.map((model, index) => (
                    <span key={index} className="bg-[#012156]/10 text-[#012156] px-3 py-1 rounded-full text-xs font-['Orbitron']">
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#012156]/5 rounded-xl p-4 border border-gray-200">
                <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">Deployed Systems:</h4>
                <p className="text-gray-600 text-sm font-['Ubuntu']">These systems have been deployed in our offices and other clients include Royal City Hotel, Kongoni Camp, Kirimara Springs Hotel, ESBC, and more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BURGLARY SYSTEMS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Burglary &amp; <span className="text-gray-500">Emergency Systems</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 items-start mb-6">
            {/* Text side */}
            <div className="space-y-4 animate-on-scroll">
              <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
                TELEFIX SOLUTIONS offers a wide range of alarm burglary, emergency, explosives/drugs detectors, etc. depending on the various corporate and residential client needs.
              </p>

              <div className="grid gap-3">
                {[
                  {
                    icon: "fa-bell",
                    title: "Digital Security Controls (DSC)",
                    desc: "Alarm systems for burglary and emergency alarm systems connected to panic buttons, motion sensors, vibration sensors, magnetic contacts among others."
                  },
                  {
                    icon: "fa-search",
                    title: "Detection Systems",
                    desc: "Partnership with Adani Systems Inc. for drugs, explosives and weapons detection systems for both vehicles and pedestrians for surveillance purposes."
                  },
                  {
                    icon: "fa-cogs",
                    title: "Customized Solutions",
                    desc: "Solutions will be designed to cater for the individual client needs with professional consultation and implementation based on specific security requirements."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${item.icon} text-sm text-[#5ABE71]`}></i>
                      </div>
                      <div>
                        <h4 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="relative rounded-xl overflow-hidden shadow-lg animate-on-scroll lg:sticky lg:top-24">
              <img
                src="/images/alarm.png"
                alt="Burglar Alarm System"
                className="w-full h-[220px] lg:h-[260px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-white font-['Orbitron'] text-xs">Advanced Burglar Alarm System</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Secure Your <span className="text-gray-500">Business Today</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              From cybersecurity to physical surveillance and access control, we provide comprehensive security solutions tailored to your specific needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-search mr-2"></i> Request Security Audit
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