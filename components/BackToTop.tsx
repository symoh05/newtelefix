// components/BackToTop.tsx
'use client'

import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#012156] text-white hover:bg-[#5ABE71] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group border border-white/10 ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ borderRadius: '10px' }}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up text-lg group-hover:-translate-y-0.5 transition-transform"></i>
    </button>
  )
}