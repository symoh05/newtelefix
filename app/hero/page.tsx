// app/hero/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HeroPage() {
  // Hero content data - 3 items rotating with background images
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
      backgroundImage: '/images/hero/solar.webp',
    },
    {
      title: 'Network & Security',
      subtitle: 'Future-Proof Infrastructure',
      description: 'Expert installation of structured cabling, wireless networks, and security systems with 20-year warranty.',
      backgroundImage: '/images/hero/security.png',
    }
  ]

  const [heroIndex, setHeroIndex] = useState(0)
  const [heroTitle, setHeroTitle] = useState(heroData[0].title)
  const [heroSubtitle, setHeroSubtitle] = useState(heroData[0].subtitle)
  const [heroDescription, setHeroDescription] = useState(heroData[0].description)
  const [heroBackground, setHeroBackground] = useState(heroData[0].backgroundImage)
  const [heroActive, setHeroActive] = useState(true)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const heroIndexRef = useRef(0)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
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
        setHeroBackground(heroData[nextIndex].backgroundImage)
        
        setTimeout(() => {
          setHeroActive(true)
          isAnimatingRef.current = false
        }, 50)
      }, 600)
    }

    // Initial delay before first swap
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
  }, [heroData])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dynamic Background Image */}
      <section 
        className="relative min-h-[92vh] sm:min-h-[90vh] lg:min-h-[100vh] flex items-center pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-16 transition-all duration-700"
        style={{
          backgroundImage: `url('${heroBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <Navbar />

          <div className="relative z-10 w-full grid lg:grid-cols-2 gap-8 items-start mt-4 sm:mt-6 lg:mt-4">
            {/* Left Content - Responsive heights */}
            <div className="space-y-3 sm:space-y-4 max-w-xl min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[520px] flex flex-col justify-start pt-2 sm:pt-4">
              <div className="inline-flex items-center gap-2 bg-[#5ABE71]/20 border border-[#5ABE71]/30 rounded-full px-3 sm:px-5 py-1 sm:py-1.5 mb-1 sm:mb-2 w-fit flex-shrink-0">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5ABE71] rounded-full animate-pulse"></span>
                <span className="text-white text-[10px] sm:text-xs font-['Orbitron'] tracking-wider whitespace-nowrap">
                  LEADING ICT & POWER SOLUTIONS IN KENYA
                </span>
              </div>

              <div className="border-l-2 border-[#5ABE71] pl-3 sm:pl-5 h-[175px] sm:h-[190px] md:h-[210px] lg:h-[250px] flex flex-col justify-start overflow-hidden">
                <h1 
                  className={`font-['Orbitron'] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-1.5 sm:mb-2.5 leading-tight tracking-wider transition-all duration-500 ${
                    heroActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                >
                  {heroTitle}
                </h1>
                
                <h2 
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light mb-1.5 sm:mb-2.5 transition-all duration-500 delay-75 ${
                    heroActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                >
                  {heroSubtitle}
                </h2>
                
                <p 
                  className={`text-sm sm:text-base md:text-base lg:text-base text-white/70 max-w-md leading-relaxed transition-all duration-500 delay-150 ${
                    heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {heroDescription}
                </p>
              </div>

              {/* Button section - responsive padding */}
              <Link href="/services" className="flex-shrink-0 pt-1 sm:pt-4 lg:pt-6">
                <button 
                  className={`bg-transparent hover:bg-[#5ABE71] text-[#5ABE71] hover:text-white px-5 sm:px-7 lg:px-8 py-2 sm:py-3 lg:py-3.5 rounded-full border-2 border-[#5ABE71] font-['Orbitron'] text-[10px] sm:text-xs lg:text-sm tracking-wider transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2 ${
                    heroActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Explore Our Work
                  <i className="fas fa-arrow-right text-[8px] sm:text-[10px] lg:text-xs"></i>
                </button>
              </Link>
            </div>

            {/* Right: Empty - keeps the layout structure */}
            <div className="hidden lg:block"></div>
          </div>

          <button 
            onClick={scrollToNextSection}
            className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 group focus:outline-none cursor-pointer z-10"
            aria-label="Scroll to next section"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center pt-1.5 sm:pt-2 transition-all group-hover:border-[#5ABE71] group-hover:shadow-lg group-hover:shadow-[#5ABE71]/20">
              <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/50 rounded-full animate-bounce group-hover:bg-[#5ABE71] transition-colors"></div>
            </div>
          </button>
        </div>
      </section>

      <section id="next-section" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-[#012156]/5 rounded-xl p-12 border border-gray-200 text-center">
            <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-4">
              Hero Section <span className="text-gray-500">Scrolls Here</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Ubuntu']">
              This is the section below the hero. The scroll indicator scrolls to this section.
            </p>
            <div className="mt-6">
              <Link href="/">
                <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                  <i className="fas fa-arrow-left mr-2"></i> Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}