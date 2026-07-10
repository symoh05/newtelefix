// app/gallery/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Gallery images data
const galleryImages = [
  {
    id: 1,
    title: "Solar Installation at Tumaini Brooks School",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format&q=80",
    description: "15HP Borehole solarizing and 5KVA School solar Power system"
  },
  {
    id: 2,
    title: "Borehole Drilling Project",
    category: "Borehole",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Professional borehole drilling services with hydrological surveys"
  },
  {
    id: 3,
    title: "Solar Lighting Installation",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Solar lighting systems for institutions and commercial buildings"
  },
  {
    id: 4,
    title: "Data Center Solutions",
    category: "ICT",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Design and construction of modern data centers"
  },
  {
    id: 5,
    title: "Network Infrastructure",
    category: "Network",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Structured cabling and wireless network solutions"
  },
  {
    id: 6,
    title: "Solar Water Heating",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Solar water heating systems for residential and commercial use"
  },
  {
    id: 7,
    title: "Water Filtration System",
    category: "Water",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Advanced water filtration systems for clean and healthy water"
  },
  {
    id: 8,
    title: "Security Systems Installation",
    category: "Security",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&auto=format&q=80",
    description: "IP surveillance and access control systems"
  },
  {
    id: 9,
    title: "Electrical Installation",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&auto=format&q=80",
    description: "NCA certified electrical wiring and installation services"
  },
  {
    id: 10,
    title: "Solar Street Lighting",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Solar street and garden lighting solutions"
  },
  {
    id: 11,
    title: "Telecom Project Management",
    category: "Telecom",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Telecom tower erection and equipment installation"
  },
  {
    id: 12,
    title: "Solar Power System",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format&q=80",
    description: "Complete solar power systems for domestic and commercial use"
  }
];

const categories = ['All', 'Solar', 'Borehole', 'Water', 'Lighting', 'ICT', 'Network', 'Security', 'Electrical', 'Telecom'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Animate gallery items on scroll
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
  }, [filter])

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

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

        {/* ===== CATEGORY FILTERS ===== */}
        <section className="py-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-['Orbitron'] tracking-wider transition-all whitespace-nowrap ${
                    filter === cat
                      ? 'bg-[#012156] text-white shadow-md'
                      : 'bg-[#012156]/10 text-[#012156] hover:bg-[#012156]/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-3 font-['Ubuntu']">
            Showing {filteredImages.length} of {galleryImages.length} images
          </div>
        </section>

        {/* ===== GALLERY GRID ===== */}
        <section className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer animate-on-scroll"
                onClick={() => openModal(image)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#012156]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <h3 className="font-['Orbitron'] text-xs font-bold text-white">{image.title}</h3>
                  <p className="text-gray-300 text-[10px] font-['Ubuntu']">{image.category}</p>
                </div>
                <div className="absolute top-2 right-2 bg-[#012156]/80 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded-full font-['Orbitron']">
                  {image.category}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-images text-4xl text-gray-300 block mb-4"></i>
              <p className="text-gray-500 font-['Ubuntu']">No images found in this category.</p>
            </div>
          )}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-colors"
            >
              ×
            </button>

            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-[400px] object-cover rounded-t-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h2 className="font-['Orbitron'] text-xl font-bold text-white">{selectedImage.title}</h2>
                <span className="inline-block mt-1 bg-[#5ABE71]/20 text-[#5ABE71] text-xs px-3 py-1 rounded-full font-['Orbitron']">
                  {selectedImage.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-sm font-['Ubuntu'] leading-relaxed">{selectedImage.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <Link href="/contact">
                  <button className="bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2 rounded-lg font-['Orbitron'] text-xs tracking-wider transition-all">
                    Get a Quote
                  </button>
                </Link>
                <span className="text-gray-400 text-xs font-['Ubuntu']">Image {selectedImage.id} of {galleryImages.length}</span>
              </div>
            </div>
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}