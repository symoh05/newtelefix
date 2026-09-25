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

  // Hero content data - 3 images rotating
  const heroData = [
    {
      title: 'Telefix Solutions',
      subtitle: 'Leading ICT & Power Solutions in Kenya',
      description: 'Innovative technology, sustainable power, and water solutions — delivered with excellence across Kenya since 2010.',
      image: 'images/about2.jpg'
    },
    {
      title: 'Power & Water',
      subtitle: 'Sustainable Infrastructure',
      description: 'Solar systems, borehole drilling, and power backup solutions for homes and businesses across Kenya.',
      image: '/images/storage.jpg'
    },
    {
      title: 'Network & Security',
      subtitle: 'Future-Proof Infrastructure',
      description: 'Expert installation of structured cabling, wireless networks, and security systems with 20-year warranty.',
      image: '/images/net.jpg'
    }
  ]

  const [heroIndex, setHeroIndex] = useState(0)
  const [heroTitle, setHeroTitle] = useState(heroData[0].title)
  const [heroSubtitle, setHeroSubtitle] = useState(heroData[0].subtitle)
  const [heroDescription, setHeroDescription] = useState(heroData[0].description)
  const [heroImage, setHeroImage] = useState(heroData[0].image)
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

  // Partner logos — from /public/images/partners/
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

  // Stats counter animation - 39 projects
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
      setHeroImage(heroData[nextIndex].image)

      setTimeout(() => {
        setHeroActive(true)
        isAnimatingRef.current = false
      }, 50)
    }, 600)
  }

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    const initialTimeout = setTimeout(() => {
      swapContent()
    }, 3000)

    intervalRef.current = setInterval(() => {
      swapContent()
    }, 7500)

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <Navbar />

          {/* ===== HERO SECTION - LIGHT with RECTANGULAR BLUR-SWEEP BANNER ===== */}
          <section className="min-h-[85vh] flex items-center pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-8 relative hero-exclude">
            {/* Background Watermark - Light */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
              style={{
                fontSize: 'clamp(40px, 12vw, 160px)',
                fontWeight: '900',
                color: 'rgba(1, 33, 86, 0.05)',
                letterSpacing: 'clamp(5px, 2vw, 15px)',
                fontFamily: "'Orbitron', monospace",
                whiteSpace: 'nowrap',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              TELEFIX
            </div>

            <div className="relative z-10 w-full grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content - FIXED HEIGHT, TOP ALIGNED */}
              <div className="space-y-3 max-w-xl min-h-[360px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px] flex flex-col justify-start pt-2">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#5ABE71]/10 border border-[#5ABE71]/20 rounded-full px-4 sm:px-4 py-1.5 mb-1 w-fit flex-shrink-0">
                  <span className="w-2 h-2 bg-[#5ABE71] rounded-full animate-pulse"></span>
                  <span className="text-[#012156] text-xs sm:text-xs font-['Orbitron'] tracking-wider whitespace-nowrap">
                    LEADING ICT & POWER SOLUTIONS IN KENYA
                  </span>
                </div>

                {/* Content container */}
                <div className="border-l-2 border-[#5ABE71] pl-4 h-[150px] sm:h-[170px] md:h-[190px] lg:h-[210px] flex flex-col justify-start overflow-hidden">
                  <h1
                    className={`font-['Orbitron'] text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156] mb-1.5 leading-tight tracking-wider transition-all duration-500 ${
                      heroActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                  >
                    {heroTitle}
                  </h1>

                  <h2
                    className={`text-base sm:text-base md:text-lg lg:text-xl text-[#012156]/70 font-light mb-1.5 transition-all duration-500 delay-75 ${
                      heroActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                  >
                    {heroSubtitle}
                  </h2>

                  <p
                    className={`text-sm sm:text-sm text-gray-600 max-w-md leading-relaxed transition-all duration-500 delay-150 ${
                      heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {heroDescription}
                  </p>
                </div>

                {/* Button */}
                <Link href="/services" className="flex-shrink-0 pt-1">
                  <button
                    className={`bg-transparent hover:bg-[#5ABE71] text-[#5ABE71] hover:text-white px-6 sm:px-7 py-2.5 sm:py-2.5 rounded-full border-2 border-[#5ABE71] font-['Orbitron'] text-xs sm:text-xs tracking-wider transition-all duration-300 inline-flex items-center gap-2 ${
                      heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    Explore Our Work
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </button>
                </Link>
              </div>

              {/* Right: Rectangular banner with blur-strip transition */}
              <div className="w-full flex justify-center lg:justify-end pb-8 sm:pb-0 -mt-14 sm:mt-0">
                <div className="relative w-full max-w-[500px] aspect-[2/1] sm:aspect-[16/10] flex-shrink-0">
                  {/* Back layer — soft tinted rectangle sitting behind */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-full h-full rounded-2xl bg-gradient-to-br from-[#012156]/8 to-[#5ABE71]/8 shadow-md z-0"></div>

                  {/* Mid layer — white card with border for depth */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-full h-full rounded-2xl border-2 border-[#012156]/15 bg-white/40 backdrop-blur-sm shadow-lg z-10"></div>

                  {/* Front layer — stacked images + blur sweep */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl z-20">
                    {/* Bottom layer: PREVIOUS image stays visible underneath */}
                    <img
                      src={heroData[(heroIndex - 1 + heroData.length) % heroData.length].image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                      aria-hidden="true"
                    />

                    {/* Top layer: CURRENT image slides in from right */}
                    <img
                      key={heroIndex}
                      src={heroImage}
                      alt="Telefix Solutions"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      style={{
                        animation: 'heroSlideIn 7.5s cubic-bezier(0.22, 1, 0.36, 1) infinite',
                      }}
                      loading="eager"
                    />

                    {/* Blur strip sweeping across — hides the seam */}
                    <div
                      key={`blur-${heroIndex}`}
                      className="absolute top-0 h-full w-[25%] z-20 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        animation: 'heroBlurSweep 7.5s cubic-bezier(0.22, 1, 0.36, 1) infinite',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToNextSection}
              className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 group focus:outline-none cursor-pointer"
              aria-label="Scroll to next section"
            >
              <div className="w-6 h-10 border-2 border-[#012156]/30 rounded-full flex justify-center pt-2 transition-all group-hover:border-[#5ABE71] group-hover:shadow-lg group-hover:shadow-[#5ABE71]/20">
                <div className="w-1 h-3 bg-[#012156]/50 rounded-full animate-bounce group-hover:bg-[#5ABE71] transition-colors"></div>
              </div>
            </button>
          </section>

          {/* ===== ABOUT SECTION - with ID for scrolling ===== */}
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

          {/* ===== SERVICES SECTION - CLICKABLE ===== */}
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

              {/* Dots only */}
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
        /* Hero image — slide in from right, then hold (previous image underneath) */
        @keyframes heroSlideIn {
          0%   { transform: translateX(100%); }
          10%  { transform: translateX(0); }
          100% { transform: translateX(0); }
        }

        /* Blur strip — sweeps left → right across the frame, hiding the seam */
        @keyframes heroBlurSweep {
          0%   { transform: translateX(-150%); opacity: 0; }
          3%   { opacity: 1; }
          11%  { transform: translateX(500%); opacity: 1; }
          12%  { opacity: 0; }
          100% { transform: translateX(500%); opacity: 0; }
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
    </>
  )
}