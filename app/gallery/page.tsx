// app/gallery/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// 40 images from /public/images/1.jpg ... 40.jpg
const galleryImages = Array.from({ length: 40 }, (_, i) => {
  const id = i + 1
  return {
    id,
    image: `/images/${id}.jpg`,
    caption: 'Telefix Solutions',
  }
})

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />

        {/* ===== GALLERY HERO ===== */}
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
            GALLERY
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Our <span className="text-gray-500">Gallery</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              A visual showcase of our completed projects across Kenya
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== GALLERY GRID ===== */}
        <section className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square animate-on-scroll"
                onClick={() => openModal(image)}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <img
                  src={image.image}
                  alt={image.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay with caption text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#012156]/90 via-[#012156]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 pointer-events-none">
                  <h3 className="font-['Orbitron'] text-xs font-bold text-white tracking-wide">
                    {image.caption}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#5ABE71] mt-1.5"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-6 border border-gray-200 max-w-3xl">
            <h2 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-[#012156] mb-3">
              Want Your Project <span className="text-gray-500">Featured Here?</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mb-5 font-['Ubuntu']">
              Join our growing list of satisfied clients across Kenya. Let us deliver professional results that you'll be proud to showcase.
            </p>
            <Link href="/contact">
              <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md">
                Start Your Project
              </button>
            </Link>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <Footer />
      </div>

      {/* ===== LIGHTBOX MODAL ===== */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          <div
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.caption}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-['Orbitron'] tracking-wide">
            {selectedImage.caption}
          </div>
        </div>
      )}

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