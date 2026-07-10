// app/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    partners: 0,
    experience: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      name: "John Mwangi",
      role: "IT Manager, Sigona Golf Club",
      text: "Telefix delivered exceptional network infrastructure for our club. Professional team, outstanding results!",
    },
    {
      name: "Mary Wanjiru",
      role: "Operations Director, Uplands Farm",
      text: "The solar solution installed by Telefix cut our energy costs significantly. Highly recommended!",
    },
    {
      name: "Peter Ochieng",
      role: "CEO, TechHub Kenya",
      text: "Deep technical expertise with a focus on client needs. They exceeded our expectations.",
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const targets = { projects: 500, clients: 50, partners: 20, experience: 16 }
          const duration = 2000
          const interval = 20
          const steps = duration / interval
          let step = 0
          const timer = setInterval(() => {
            step++
            setCounts({
              projects: Math.min(targets.projects, Math.floor((step / steps) * targets.projects)),
              clients: Math.min(targets.clients, Math.floor((step / steps) * targets.clients)),
              partners: Math.min(targets.partners, Math.floor((step / steps) * targets.partners)),
              experience: Math.min(targets.experience, Math.floor((step / steps) * targets.experience))
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    return () => observer.disconnect()
  }, [hasAnimated])

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const services = [
    {
      title: "Network Solutions",
      description: "Structured cabling, wireless networks, and telecom infrastructure with 20-year warranty.",
      icon: "fa-network-wired",
      tags: ["CAT7 Cabling", "Wireless", "Fiber Optics"]
    },
    {
      title: "Virtualization Solutions",
      description: "Server consolidation, desktop virtualization, and cloud solutions.",
      icon: "fa-server",
      tags: ["Server Consolidation", "Cloud", "Desktop"]
    },
    {
      title: "Security Solutions",
      description: "IP surveillance, access control, unified threat management, and cybersecurity.",
      icon: "fa-shield-alt",
      tags: ["IP Surveillance", "Access Control", "UTM"]
    },
    {
      title: "Data Center Solutions",
      description: "Design, construction, and commissioning of modern data centers.",
      icon: "fa-database",
      tags: ["Data Center Design", "Self-Cooling", "Energy Smart"]
    },
    {
      title: "Unified Communications",
      description: "Alcatel-Lucent & Cisco telephony, video conferencing, and collaboration.",
      icon: "fa-phone-alt",
      tags: ["Alcatel-Lucent", "Cisco", "Video Conferencing"]
    },
    {
      title: "Power Solutions",
      description: "Solar systems, inverters, generators, and comprehensive electrical solutions.",
      icon: "fa-bolt",
      tags: ["Solar Systems", "Inverters", "Electrical"]
    }
  ]

  return (
    <>
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 overflow-x-hidden">
        <Navbar />

        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex items-center py-8 relative">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            style={{
              fontSize: 'clamp(50px, 15vw, 200px)',
              fontWeight: '900',
              color: 'rgba(255, 255, 255, 0.04)',
              letterSpacing: 'clamp(5px, 2vw, 15px)',
              fontFamily: "'Orbitron', monospace",
              whiteSpace: 'nowrap',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            TELEFIX
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-white text-xs font-['Orbitron'] tracking-wider">
                LEADING ICT & POWER SOLUTIONS IN KENYA
              </span>
            </div>

            <h1 className="font-['Orbitron'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight tracking-wider">
              <span className="text-gray-400">Telefix</span> Solutions
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
              Delivering innovative ICT, telecommunications, power, and water solutions
              backed by exemplary customer service.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/services">
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg border border-white/30 transition-all text-sm flex items-center gap-2 font-['Orbitron'] tracking-wider">
                  Explore Services
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg border border-white/20 transition-all text-sm flex items-center gap-2">
                  About Us
                  <i className="fas fa-chevron-right text-xs"></i>
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
                <div className="text-xl md:text-2xl font-bold text-white font-['Orbitron']">500+</div>
                <p className="text-gray-400 text-xs mt-0.5">Projects</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
                <div className="text-xl md:text-2xl font-bold text-white font-['Orbitron']">50+</div>
                <p className="text-gray-400 text-xs mt-0.5">Clients</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
                <div className="text-xl md:text-2xl font-bold text-white font-['Orbitron']">20+</div>
                <p className="text-gray-400 text-xs mt-0.5">Partners</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
                <div className="text-xl md:text-2xl font-bold text-white font-['Orbitron']">16</div>
                <p className="text-gray-400 text-xs mt-0.5">Years</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-10">
          <div className="mb-6">
            <span className="text-xs font-['Orbitron'] text-gray-400 tracking-widest">ABOUT US</span>
            <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-white mt-1 tracking-wide">
              16 Years of Excellence in <span className="text-gray-400">ICT & Power Solutions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                We are a 100% Kenyan owned ICT company that prides itself in delivery of
                cost-effective future proof solutions, backed by exemplary customer service.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Through a participatory design process, innovation and continued research,
                our highly skilled technical team has delivered tailor-made solutions across
                all sectors and industries.
              </p>
              <Link href="/about">
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all text-sm flex items-center gap-2 font-['Orbitron'] tracking-wider">
                  Learn More
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                  <i className="fas fa-handshake text-xl text-white"></i>
                </div>
                <h4 className="text-white font-bold text-sm font-['Orbitron'] tracking-wide">Strategic Partnerships</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">World leading manufacturers</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                  <i className="fas fa-users text-xl text-white"></i>
                </div>
                <h4 className="text-white font-bold text-sm font-['Orbitron'] tracking-wide">Expert Team</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">Highly skilled specialists</p>
              </div>

              <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-white/5 to-transparent rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all hover:-translate-y-1 duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                  <i className="fas fa-certificate text-xl text-white"></i>
                </div>
                <h4 className="text-white font-bold text-sm font-['Orbitron'] tracking-wide">Certified Excellence</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">Recognized premier partnerships</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Reduced tilted icon size */}
        <section className="py-10">
          <div className="mb-6">
            <span className="text-xs font-['Orbitron'] text-gray-400 tracking-widest">OUR SERVICES</span>
            <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-white mt-1 tracking-wide">
              What <span className="text-gray-400">We Do</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">Comprehensive solutions across ICT, power, and security</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white/5 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all hover:-translate-y-1 group overflow-hidden h-full">
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
                  <i className={`fas ${service.icon} text-2xl text-white mb-2 block group-hover:scale-110 transition-transform`}></i>
                  <h3 className="font-['Orbitron'] text-sm font-bold text-white mb-1 tracking-wide">{service.title}</h3>
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-white/60 group-hover:text-white/90 transition-colors text-xs font-['Orbitron'] tracking-wider">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/services">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all text-sm flex items-center gap-2 font-['Orbitron'] tracking-wider">
                <i className="fas fa-th-list text-xs"></i> View All Services
              </button>
            </Link>
          </div>
        </section>

        {/* STATS COUNTER */}
        <section ref={statsRef} className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-code text-lg text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white font-['Orbitron']">{counts.projects}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Projects Completed</p>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-users text-lg text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white font-['Orbitron']">{counts.clients}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Happy Clients</p>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-handshake text-lg text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white font-['Orbitron']">{counts.partners}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Tech Partners</p>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-calendar-alt text-lg text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white font-['Orbitron']">{counts.experience}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Years Experience</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - With sliding functionality */}
        <section className="py-10 overflow-hidden">
          <div className="mb-6">
            <span className="text-xs font-['Orbitron'] text-gray-400 tracking-widest">TESTIMONIALS</span>
            <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-white mt-1 tracking-wide">
              What Our <span className="text-gray-400">Clients Say</span>
            </h2>
          </div>

          {/* Desktop View - Show all 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="relative bg-white/5 rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all overflow-hidden">
                <i className="fas fa-quote-left text-gray-500 text-lg mb-2 block"></i>
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <i className="fas fa-user-circle text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs font-['Orbitron'] tracking-wide">{testimonial.name}</h4>
                    <p className="text-gray-500 text-[10px]">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-500 text-[10px]"></i>
                  ))}
                </div>
                <i className="fas fa-quote-right absolute pointer-events-none"
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    right: '-10px',
                    fontSize: '3rem',
                    opacity: 0.05,
                    transform: 'rotate(-10deg)',
                    zIndex: 0
                  }}
                ></i>
              </div>
            ))}
          </div>

          {/* Mobile View - Carousel sliding */}
          <div className="md:hidden relative px-2">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <div className="relative bg-white/5 rounded-xl p-4 border border-white/20 overflow-hidden">
                      <i className="fas fa-quote-left text-gray-500 text-lg mb-2 block"></i>
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <i className="fas fa-user-circle text-white text-sm"></i>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-xs font-['Orbitron'] tracking-wide">{testimonial.name}</h4>
                          <p className="text-gray-500 text-[10px]">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-500 text-[10px]"></i>
                        ))}
                      </div>
                      <i className="fas fa-quote-right absolute pointer-events-none"
                        style={{
                          position: 'absolute',
                          bottom: '-10px',
                          right: '-10px',
                          fontSize: '3rem',
                          opacity: 0.05,
                          transform: 'rotate(-10deg)',
                          zIndex: 0
                        }}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 mt-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`transition-all duration-300 ${
                    currentTestimonial === i 
                      ? 'w-5 h-1 bg-white rounded-full' 
                      : 'w-1.5 h-1 bg-white/30 rounded-full'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
            >
              <i className="fas fa-chevron-left text-white text-xs"></i>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
            >
              <i className="fas fa-chevron-right text-white text-xs"></i>
            </button>
          </div>
        </section>

        {/* CTA - Reduced size, removed Explore button */}
        <section className="py-6">
          <div className="bg-gradient-to-r from-white/5 to-transparent rounded-lg p-4 border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <i className="fas fa-rocket text-xl text-white mb-1 block md:inline md:mr-2"></i>
                <h2 className="font-['Orbitron'] text-lg md:text-xl font-bold text-white inline tracking-wide">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-400 text-xs mt-1 max-w-lg">
                  Contact us today to discuss how our innovative solutions can help your organization.
                </p>
              </div>
              <Link href="/contact">
                <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg border border-white/30 transition-all text-sm flex items-center gap-2 font-['Orbitron'] tracking-wider whitespace-nowrap">
                  <i className="fas fa-paper-plane text-xs"></i> Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-6 pt-4 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/" className="text-gray-400 hover:text-white text-xs transition-colors font-['Orbitron'] tracking-wider">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white text-xs transition-colors">About</Link>
              <Link href="/services" className="text-gray-400 hover:text-white text-xs transition-colors">Services</Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-white text-xs transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-xs transition-colors">Contact</Link>
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-facebook-f text-sm"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter text-sm"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-sm"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-youtube text-sm"></i></a>
            </div>
          </div>
          <div className="text-center md:text-left mt-3">
            <p className="text-gray-500 text-[10px]">
              <i className="fas fa-shield-alt text-white/50 mr-1"></i>
              &copy; 2026 Telefix Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}