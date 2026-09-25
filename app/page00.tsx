// app/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Stats counter animation
  const [counts, setCounts] = useState({
    projects: 0,
    engineers: 0,
    partners: 0,
    experience: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Hero content data — first slide keeps the original image
  const heroData = [
    {
      title: 'Telefix Solutions',
      subtitle: 'Leading ICT & Power Solutions in Kenya',
      description: 'Innovative technology, sustainable power, and water solutions — delivered with excellence across Kenya since 2010.',
      backgroundImage: '/images/hero/solar.webp',
    },
    {
      title: 'Power & Water',
      subtitle: 'Sustainable Infrastructure',
      description: 'Solar systems, borehole drilling, and power backup solutions for homes and businesses across Kenya.',
      backgroundImage: '/images/storage.jpg',
    },
    {
      title: 'Network & Security',
      subtitle: 'Future-Proof Infrastructure',
      description: 'Expert installation of structured cabling, wireless networks, and security systems with 20-year warranty.',
      backgroundImage: '/images/net.jpg',
    }
  ]

  const HERO_INTERVAL = 8000 // duration per slide in ms (progress bar speed)
  const SWIPE_DURATION = 900 // image slide animation duration in ms

  const [heroIndex, setHeroIndex] = useState(0)
  const [heroTitle, setHeroTitle] = useState(heroData[0].title)
  const [heroSubtitle, setHeroSubtitle] = useState(heroData[0].subtitle)
  const [heroDescription, setHeroDescription] = useState(heroData[0].description)
  const [heroActive, setHeroActive] = useState(true)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const heroIndexRef = useRef(0)
  const isAnimatingRef = useRef(false)

  // Real testimonials
  const testimonials = [
    {
      name: "Simon Ngugi",
      role: "Manager, Hexodel Technologies",
      text: "Telefix Solutions has consistently delivered reliable and professional service. Their technical expertise and attention to detail make them a trusted partner for our projects.",
    },
    {
      name: "Michael Waweru",
      role: "CEO, Royals",
      text: "Working with Telefix Solutions has been a great experience. Their team is responsive, knowledgeable, and always delivers on time with quality workmanship.",
    }
  ]

  // Partner logos
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

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const targets = { projects: 39, engineers: 50, partners: 20, experience: 16 }
          const duration = 2000
          const interval = 20
          const steps = duration / interval
          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounts({
              projects: Math.min(targets.projects, Math.floor(progress * targets.projects)),
              engineers: Math.min(targets.engineers, Math.floor(progress * targets.engineers)),
              partners: Math.min(targets.partners, Math.floor(progress * targets.partners)),
              experience: Math.min(targets.experience, Math.floor(progress * targets.experience))
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.2 }
    )
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    return () => observer.disconnect()
  }, [hasAnimated])

  // Scroll animation for non-hero elements
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll:not(.hero-exclude)')

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

  // Hero content swapping
  const swapContent = () => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    setHeroActive(false)

    setTimeout(() => {
      const nextIndex = (heroIndexRef.current + 1) % heroData.length
      heroIndexRef.current = nextIndex

      setHeroIndex(nextIndex)
      setHeroTitle(heroData[nextIndex].title)
      setHeroSubtitle(heroData[nextIndex].subtitle)
      setHeroDescription(heroData[nextIndex].description)

      setTimeout(() => {
        setHeroActive(true)
        isAnimatingRef.current = false
      }, 100)
    }, 600)
  }

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      swapContent()
    }, HERO_INTERVAL)

    intervalRef.current = setInterval(() => {
      swapContent()
    }, HERO_INTERVAL)

    return () => {
      clearTimeout(initialTimeout)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  // Testimonial auto-slide (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Scroll to next section
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const services = [
    {
      title: "Network Solutions",
      description: "Structured cabling, wireless networks, and telecom infrastructure with 20-year warranty.",
      icon: "fa-network-wired",
      tags: ["CAT7 Cabling", "Wireless", "Fiber Optics"],
      link: "/services/network"
    },
    {
      title: "Virtualization Solutions",
      description: "Server consolidation, desktop virtualization, and cloud solutions.",
      icon: "fa-server",
      tags: ["Server Consolidation", "Cloud", "Desktop"],
      link: "/services/virtualization"
    },
    {
      title: "Security Solutions",
      description: "IP surveillance, access control, unified threat management, and cybersecurity.",
      icon: "fa-shield-alt",
      tags: ["IP Surveillance", "Access Control", "UTM"],
      link: "/services/security"
    },
    {
      title: "Data Center Solutions",
      description: "Design, construction, and commissioning of modern data centers.",
      icon: "fa-database",
      tags: ["Data Center Design", "Self-Cooling", "Energy Smart"],
      link: "/services/datacenter"
    },
    {
      title: "Unified Communications",
      description: "Alcatel-Lucent & Cisco telephony, video conferencing, and collaboration.",
      icon: "fa-phone-alt",
      tags: ["Alcatel-Lucent", "Cisco", "Video Conferencing"],
      link: "/services/unified"
    },
    {
      title: "Power Solutions",
      description: "Solar systems, inverters, generators, and comprehensive electrical solutions.",
      icon: "fa-bolt",
      tags: ["Solar Systems", "Inverters", "Electrical"],
      link: "/services/power"
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* ===== HERO SECTION - FULL WIDTH ===== */}
        <section
          className="relative min-h-[92vh] sm:min-h-[90vh] lg:min-h-[100vh] flex items-center pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-16 overflow-hidden hero-exclude w-full"
        >
          {/* ===== HERO BACKGROUND SLIDER — SWIPE TRANSITION ===== */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="flex h-full"
              style={{
                width: `${heroData.length * 100}%`,
                transform: `translateX(-${heroIndex * (100 / heroData.length)}%)`,
                transition: `transform ${SWIPE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              {heroData.map((slide, i) => (
                <div
                  key={i}
                  className="h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    width: `${100 / heroData.length}%`,
                    backgroundImage: `url('${slide.backgroundImage}')`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full">
            <Navbar />

            <div className="w-full grid lg:grid-cols-2 gap-8 items-start mt-4 sm:mt-6 lg:mt-4">
              {/* Left Content */}
              <div className="space-y-3 sm:space-y-4 max-w-xl min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[520px] flex flex-col justify-start pt-2 sm:pt-4">
                <div className="inline-flex items-center gap-2 bg-[#5ABE71]/20 border border-[#5ABE71]/30 rounded-full px-3 sm:px-5 py-1 sm:py-1.5 mb-1 sm:mb-2 w-fit flex-shrink-0">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5ABE71] rounded-full animate-pulse"></span>
                  <span className="text-white text-[10px] sm:text-xs font-['Orbitron'] tracking-wider whitespace-nowrap">
                    LEADING ICT & POWER SOLUTIONS IN KENYA
                  </span>
                </div>

                <div className="border-l-2 border-[#5ABE71] pl-3 sm:pl-5 h-[175px] sm:h-[190px] md:h-[210px] lg:h-[250px] flex flex-col justify-start overflow-hidden">
                  <h1
                    className={`font-['Orbitron'] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-1.5 sm:mb-2.5 leading-tight tracking-wider transition-all duration-700 ${
                      heroActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                  >
                    {heroTitle}
                  </h1>

                  <h2
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light mb-1.5 sm:mb-2.5 transition-all duration-700 delay-100 ${
                      heroActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                  >
                    {heroSubtitle}
                  </h2>

                  <p
                    className={`text-sm sm:text-base md:text-base lg:text-base text-white/70 max-w-md leading-relaxed transition-all duration-700 delay-200 ${
                      heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {heroDescription}
                  </p>
                </div>

                <Link href="/services" className="flex-shrink-0 pt-1 sm:pt-4 lg:pt-6">
                  <button
                    className={`bg-transparent hover:bg-[#5ABE71] text-[#5ABE71] hover:text-white px-5 sm:px-7 lg:px-8 py-2 sm:py-3 lg:py-3.5 rounded-full border-2 border-[#5ABE71] font-['Orbitron'] text-[10px] sm:text-xs lg:text-sm tracking-wider transition-all duration-700 ${
                      heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    Explore Our Work
                    <i className="fas fa-arrow-right text-[8px] sm:text-[10px] lg:text-xs ml-1.5 sm:ml-2"></i>
                  </button>
                </Link>
              </div>

              {/* Right: Empty */}
              <div className="hidden lg:block"></div>
            </div>
          </div>

          {/* ===== CONTINUOUS PROGRESS BAR AT HERO BOTTOM ===== */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 z-20">
            <div
              key={heroIndex}
              className="h-full bg-[#5ABE71]"
              style={{
                width: '100%',
                transformOrigin: 'left center',
                animation: `heroProgress ${HERO_INTERVAL}ms linear infinite`,
                boxShadow: '0 0 12px rgba(90, 190, 113, 0.6)',
              } as React.CSSProperties}
            />
          </div>

          {/* Scroll button (above the progress bar) */}
          <button
            onClick={scrollToNextSection}
            className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 group focus:outline-none cursor-pointer z-30"
            aria-label="Scroll to next section"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center pt-1.5 sm:pt-2 transition-all group-hover:border-[#5ABE71] group-hover:shadow-lg group-hover:shadow-[#5ABE71]/20">
              <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/50 rounded-full animate-bounce group-hover:bg-[#5ABE71] transition-colors"></div>
            </div>
          </button>
        </section>

        {/* ===== REST OF CONTENT ===== */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* ===== ABOUT SECTION ===== */}
          <section id="about" className="py-10 scroll-mt-20 animate-on-scroll">
            <div className="mb-6">
              <span className="text-xs font-['Orbitron'] text-[#012156]/60 tracking-widest">ABOUT US</span>
              <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mt-1 tracking-wide">
                16 Years of Excellence in <span className="text-gray-500">ICT & Power Solutions</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div className="space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  We are a 100% Kenyan owned ICT company that prides itself in delivery of
                  cost-effective future proof solutions, backed by exemplary customer service.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Through a participatory design process, innovation and continued research,
                  our highly skilled technical team has delivered tailor-made solutions across
                  all sectors and industries.
                </p>
                <Link href="/about">
                  <button className="bg-[#012156]/10 hover:bg-[#012156]/20 text-[#012156] px-6 py-2 rounded-lg border border-[#012156]/20 transition-all text-sm flex items-center gap-2 font-['Orbitron'] tracking-wider">
                    Learn More
                    <i className="fas fa-arrow-right text-xs"></i>
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all hover:-translate-y-1 duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center mb-2">
                    <i className="fas fa-handshake text-xl text-[#5ABE71]"></i>
                  </div>
                  <h4 className="text-[#012156] font-bold text-sm font-['Orbitron'] tracking-wide">Strategic Partnerships</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">World leading manufacturers</p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all hover:-translate-y-1 duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center mb-2">
                    <i className="fas fa-users text-xl text-[#5ABE71]"></i>
                  </div>
                  <h4 className="text-[#012156] font-bold text-sm font-['Orbitron'] tracking-wide">Expert Team</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Highly skilled specialists</p>
                </div>

                <div className="sm:col-span-2 lg:col-span-2 bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all hover:-translate-y-1 duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#5ABE71]/10 flex items-center justify-center mb-2">
                    <i className="fas fa-certificate text-xl text-[#5ABE71]"></i>
                  </div>
                  <h4 className="text-[#012156] font-bold text-sm font-['Orbitron'] tracking-wide">Certified Excellence</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">Recognized premier partnerships</p>
                </div>
              </div>
            </div>
          </section>

          {/* ===== SERVICES SECTION ===== */}
          <section className="py-10 animate-on-scroll">
            <div className="mb-6">
              <span className="text-xs font-['Orbitron'] text-[#012156]/60 tracking-widest">OUR SERVICES</span>
              <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mt-1 tracking-wide">
                What <span className="text-gray-500">We Do</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">Comprehensive solutions across ICT, power, and security</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <Link href={service.link} key={index} className="block">
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
                      <p className="text-gray-600 text-xs mb-2 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {service.tags.map((tag, i) => (
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

            <div className="mt-6">
              <Link href="/services">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2 rounded-lg border border-[#012156]/20 transition-all text-sm flex items-center gap-2 font-['Orbitron'] tracking-wider">
                  <i className="fas fa-th-list text-xs"></i> View All Services
                </button>
              </Link>
            </div>
          </section>

          {/* ===== STATS COUNTER ===== */}
          <section ref={statsRef} className="py-6 animate-on-scroll">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all">
                <i className="fas fa-code text-lg text-[#5ABE71] mb-1 block"></i>
                <div className="text-xl font-bold text-[#012156] font-['Orbitron']">{counts.projects}+</div>
                <p className="text-gray-500 text-[10px] mt-0.5">Projects Completed</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all">
                <i className="fas fa-users text-lg text-[#5ABE71] mb-1 block"></i>
                <div className="text-xl font-bold text-[#012156] font-['Orbitron']">{counts.engineers}+</div>
                <p className="text-gray-500 text-[10px] mt-0.5">Expert Engineers</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all">
                <i className="fas fa-handshake text-lg text-[#5ABE71] mb-1 block"></i>
                <div className="text-xl font-bold text-[#012156] font-['Orbitron']">{counts.partners}+</div>
                <p className="text-gray-500 text-[10px] mt-0.5">Technology Partners</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all">
                <i className="fas fa-calendar-alt text-lg text-[#5ABE71] mb-1 block"></i>
                <div className="text-xl font-bold text-[#012156] font-['Orbitron']">{counts.experience}+</div>
                <p className="text-gray-500 text-[10px] mt-0.5">Years Experience</p>
              </div>
            </div>
          </section>

          {/* ===== PARTNERS SECTION ===== */}
          <section className="py-10 overflow-hidden animate-on-scroll">
            <div className="mb-6">
              <span className="text-xs font-['Orbitron'] text-[#012156]/60 tracking-widest">OUR PARTNERS</span>
              <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mt-1 tracking-wide">
                Trusted by <span className="text-gray-500">Industry Leaders</span>
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

          {/* ===== TESTIMONIALS — 2 COLUMN DESKTOP, COMPACT 1 COLUMN MOBILE ===== */}
          <section className="py-10 overflow-hidden animate-on-scroll">
            <div className="mb-6">
              <span className="text-xs font-['Orbitron'] text-[#012156]/60 tracking-widest">TESTIMONIALS</span>
              <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mt-1 tracking-wide">
                What Our <span className="text-gray-500">Clients Say</span>
              </h2>
            </div>

            {/* Desktop: 2-column grid, equal height */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5ABE71] transition-all overflow-hidden flex flex-col"
                >
                  <i className="fas fa-quote-left text-[#5ABE71]/30 text-lg mb-2 block"></i>
                  <p className="text-gray-700 text-xs mb-3 leading-relaxed font-['Ubuntu'] flex-grow">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user-circle text-[#5ABE71] text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-[#012156] font-bold text-xs font-['Orbitron'] tracking-wide">{testimonial.name}</h4>
                      <p className="text-gray-500 text-[10px] font-['Ubuntu']">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-2">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fas fa-star text-yellow-500 text-[10px]"></i>
                    ))}
                  </div>
                  <i
                    className="fas fa-quote-right absolute pointer-events-none"
                    style={{
                      position: 'absolute',
                      bottom: '-10px',
                      right: '-10px',
                      fontSize: '3rem',
                      opacity: 0.05,
                      transform: 'rotate(-10deg)',
                      zIndex: 0,
                    }}
                  ></i>
                </div>
              ))}
            </div>

            {/* Mobile: compact 1-column sliding carousel, no arrows */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out items-stretch"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                      <div className="relative bg-white rounded-lg p-3 border border-gray-200 shadow-sm overflow-hidden flex flex-col min-h-[180px] h-full">
                        <i className="fas fa-quote-left text-[#5ABE71]/30 text-sm mb-2 block"></i>
                        <p className="text-gray-700 text-[11px] mb-2.5 leading-relaxed font-['Ubuntu'] flex-grow">
                          &quot;{testimonial.text}&quot;
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-user-circle text-[#5ABE71] text-xs"></i>
                          </div>
                          <div>
                            <h4 className="text-[#012156] font-bold text-[11px] font-['Orbitron'] tracking-wide">{testimonial.name}</h4>
                            <p className="text-gray-500 text-[9px] font-['Ubuntu']">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5 mt-1.5">
                          {[...Array(5)].map((_, j) => (
                            <i key={j} className="fas fa-star text-yellow-500 text-[9px]"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots only — no arrows */}
              <div className="flex justify-center gap-1.5 mt-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`transition-all duration-300 ${
                      currentTestimonial === i
                        ? 'w-5 h-1 bg-[#012156] rounded-full'
                        : 'w-1.5 h-1 bg-[#012156]/30 rounded-full'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ===== CTA ===== */}
          <section className="py-6 animate-on-scroll">
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
        </div>

        {/* ===== FOOTER ===== */}
        <Footer />
      </div>

      <style>{`
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

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hero continuous progress bar */
        @keyframes heroProgress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </>
  )
}