// app/services/unified/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function UnifiedPage() {
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

  const ucFeatures = [
    { icon: "fa-phone", title: "Telephony", desc: "Voice communication systems with advanced call features and management" },
    { icon: "fa-video", title: "Video Conferencing", desc: "High-quality video meetings and collaboration tools for remote teams" },
    { icon: "fa-comment-dots", title: "Instant Messaging", desc: "Real-time chat and presence information for immediate communication" },
    { icon: "fa-mobile-alt", title: "Mobility", desc: "Work anywhere on any device with consistent communication experience" }
  ]

  const alcatelSolutions = [
    {
      title: "OmniPCX Office",
      desc: "An 'e-communications server' combining proven telephony functions with access to all Unified Communications resources. Perfect for small to medium enterprises with 6 to 200 employees."
    },
    {
      title: "OmniPCX Enterprise",
      desc: "Highly scalable solution based on pure software communication server platform providing multimedia call processing for medium, large and very large companies."
    },
    {
      title: "Hospitality Solutions",
      desc: "Customized call servers specifically designed for the hotel industry, with solutions to match any hotel size or needs. Praised by industry specialists."
    },
    {
      title: "Contact Center",
      desc: "Efficient contact center solutions for customer care with flexible management applications to monitor service levels and make real-time adjustments."
    }
  ]

  const ciscoSolutions = [
    {
      title: "Cisco Unified Communications Manager",
      desc: "Unified Communications software enabling session and call control for video, voice, messaging, mobility, instant messaging (IM), and presence. Offers simplified voice systems that help cut costs."
    },
    {
      title: "Cisco Business Edition 6000",
      desc: "Designed for organizations with up to 1000 employees. Offers premium voice, video, mobility, messaging, conferencing, instant messaging and presence, and contact center features on a single platform."
    },
    {
      title: "Cisco Unified Communications 560",
      desc: "Affordable unified communications appliance that provides voice and data communications, voicemail, automated attendant, video, security, and wireless capabilities. Supports up to 138 users."
    }
  ]

  const telepresenceFeatures = [
    "HD Video Quality",
    "Multiparty Conferencing",
    "Flexible Room Sizes",
    "Value Pricing"
  ]

  const benefits = [
    {
      icon: "fa-rocket",
      title: "Improved Efficiency",
      desc: "Enhance team collaboration and work efficiency across different locations and departments"
    },
    {
      icon: "fa-smile",
      title: "Increased Customer Satisfaction",
      desc: "Better customer service through efficient call routing and management systems"
    },
    {
      icon: "fa-coins",
      title: "Cost-Effective Operations",
      desc: "Reduce communication costs with integrated solutions and simplified management"
    },
    {
      icon: "fa-shield-alt",
      title: "Future-Proof Solutions",
      desc: "Adaptable systems that meet client needs now and in the future, easy to upgrade or expand"
    }
  ]

  const galleryImages = [
    { src: "/images/conf.jpg", title: "Video Conferencing Solutions" },
    { src: "/images/bus.jpg", title: "Business Communication Systems" },
    { src: "/images/mes.jpg", title: "Collaboration & Messaging Tools" }
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
            UNIFIED
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Unified <span className="text-gray-500">Communications</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Seamless Integration of Voice, Video &amp; Collaboration Solutions
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== UC OVERVIEW ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            What is <span className="text-gray-500">Unified Communications?</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              Unified Communications is the integration of real-time communication services such as telephony (voice), 
              video conferencing, data sharing, instant messaging (chat), presence information, call control, speech 
              recognition and messaging (voicemail, email, SMS and fax).
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

          {/* UC Features — LEFT ALIGNED */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ucFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${feature.icon} text-base text-[#5ABE71]`}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-['Orbitron'] text-xs font-bold text-[#012156] mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-[10px] font-['Ubuntu'] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ALCATEL-LUCENT SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Alcatel-Lucent <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We are authorized partners for Alcatel-Lucent telecommunications equipment, offering comprehensive 
              solutions focused on fixed, mobile and converged networking hardware, IP technologies, software and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {alcatelSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CISCO SOLUTIONS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Cisco Premier Partner <span className="text-gray-500">Solutions</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              We are Cisco Premier Partners, dealing with Cisco networking solutions that are worldwide leading in 
              networking and transforms how people connect, communicate and collaborate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {ciscoSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all animate-on-scroll">
                <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-xs font-['Ubuntu'] leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TELEPRESENCE ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Cisco <span className="text-gray-500">Telepresence</span>
          </h2>

          <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 mb-6 animate-on-scroll">
            <h3 className="font-['Orbitron'] text-lg font-bold text-[#5ABE71] mb-2">High-Definition Video Conferencing</h3>
            <p className="text-gray-700 text-sm leading-relaxed font-['Ubuntu']">
              Cisco Telepresence transforms any flat panel display into a powerful Telepresence system designed to 
              deliver high-definition video and multiparty conferencing with the flexibility to accommodate various 
              room sizes and configurations - all at a value price.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {telepresenceFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200 shadow-sm animate-on-scroll">
                <i className="fas fa-check-circle text-[#5ABE71] text-xs"></i>
                <span className="text-gray-700 text-sm font-['Ubuntu']">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#012156]/5 rounded-xl p-5 border border-gray-200 animate-on-scroll">
            <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">
              Supports embedded capability for multipoint support with Cisco Telepresence Multisite technology, 
              enabling users to add three additional participants to a Telepresence call.
            </p>
          </div>
        </section>

        {/* ===== BUSINESS BENEFITS ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
            Business <span className="text-gray-500">Benefits</span>
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

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-5 border border-gray-200 animate-on-scroll max-w-2xl">
            <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-[#012156] mb-2">
              Transform Your <span className="text-gray-500">Communications</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mb-4 font-['Ubuntu']">
              From small businesses to large enterprises, we provide unified communications solutions that improve 
              efficiency, increase customer satisfaction, and ensure cost-effective IT operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-search mr-2"></i> Request UC Assessment
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