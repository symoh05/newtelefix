// app/contact/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Animate elements on scroll
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />

        {/* ===== CONTACT HERO ===== */}
        <section className="relative py-12 md:py-16 pt-32 sm:pt-28 lg:pt-32">
          {/* Background Watermark */}
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
            CONTACT
          </div>

          <div className="relative z-10">
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#012156]">
              Contact <span className="text-gray-500">Telefix Solutions</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
              Get in touch with our team of experts
            </p>
            <div className="w-16 h-0.5 bg-[#5ABE71] mt-3"></div>
          </div>
        </section>

        {/* ===== CONTACT INFORMATION & FORM ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-8">
            Get <span className="text-gray-500">In Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-on-scroll">
              <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200">
                <h3 className="font-['Orbitron'] text-lg font-bold text-[#012156] mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-phone text-[#5ABE71]"></i>
                    </div>
                    <div>
                      <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156]">Phone Numbers</h4>
                      <p className="text-gray-600 text-sm font-['Ubuntu']">
                        <a href="tel:+254721722823" className="hover:text-[#5ABE71] transition-colors">+254 721 722 823</a><br />
                        <a href="tel:+254789035570" className="hover:text-[#5ABE71] transition-colors">+254 789 035 570</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-envelope text-[#5ABE71]"></i>
                    </div>
                    <div>
                      <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156]">Email Addresses</h4>
                      <p className="text-gray-600 text-sm font-['Ubuntu']">
                        <a href="mailto:sales@telefix.co.ke" className="hover:text-[#5ABE71] transition-colors">sales@telefix.co.ke</a><br />
                        <a href="mailto:info@telefix.co.ke" className="hover:text-[#5ABE71] transition-colors">info@telefix.co.ke</a>
                      </p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-map-marker-alt text-[#5ABE71]"></i>
                    </div>
                    <div>
                      <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156]">Main Office</h4>
                      <p className="text-gray-600 text-sm font-['Ubuntu']">
                        Telefix Solutions Limited<br />
                        Kefan House, Wood Ave, Kilimani<br />
                        P.O. BOX 55400-00200<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-clock text-[#5ABE71]"></i>
                    </div>
                    <div>
                      <h4 className="font-['Orbitron'] text-sm font-bold text-[#012156]">Business Hours</h4>
                      <div className="space-y-1 text-gray-600 text-sm font-['Ubuntu']">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="text-gray-400">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Directly */}
              <div className="bg-gradient-to-r from-[#012156]/5 to-[#5ABE71]/5 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#5ABE71]/10 flex items-center justify-center">
                    <i className="fas fa-paper-plane text-[#5ABE71]"></i>
                  </div>
                  <h3 className="font-['Orbitron'] text-lg font-bold text-[#012156]">Email Us Directly</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 font-['Ubuntu']">
                  For all inquiries, quotations, and support, please email us directly:
                </p>
                
                <a 
                  href="mailto:info@telefix.co.ke?subject=Inquiry from Telefix Website"
                  className="inline-flex items-center gap-2 bg-[#012156] hover:bg-[#012156]/80 text-white px-6 py-2.5 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md"
                >
                  <i className="fas fa-envelope"></i> info@telefix.co.ke
                </a>
                
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-700 text-sm font-['Ubuntu'] mb-2">
                    <i className="fas fa-list text-[#5ABE71] mr-2"></i> Please include:
                  </p>
                  <ul className="space-y-1 text-gray-600 text-sm font-['Ubuntu'] list-disc list-inside">
                    <li>Your name and contact details</li>
                    <li>Company/Organization (if applicable)</li>
                    <li>Nature of your inquiry</li>
                    <li>Any relevant project details</li>
                  </ul>
                </div>
                
                <div className="mt-3 flex items-start gap-2 text-gray-500 text-sm font-['Ubuntu']">
                  <i className="fas fa-clock text-[#5ABE71] mt-0.5"></i>
                  <p>We typically respond within 24 hours during business days.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#012156]/5 rounded-xl p-6 border border-gray-200 animate-on-scroll">
              <h3 className="font-['Orbitron'] text-lg font-bold text-[#012156] mb-4">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#012156] text-xs font-['Orbitron'] mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-[#012156] placeholder-gray-400 focus:outline-none focus:border-[#5ABE71] focus:ring-2 focus:ring-[#5ABE71]/20 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-[#012156] text-xs font-['Orbitron'] mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-[#012156] placeholder-gray-400 focus:outline-none focus:border-[#5ABE71] focus:ring-2 focus:ring-[#5ABE71]/20 transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-[#012156] text-xs font-['Orbitron'] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-[#012156] placeholder-gray-400 focus:outline-none focus:border-[#5ABE71] focus:ring-2 focus:ring-[#5ABE71]/20 transition-all text-sm"
                    placeholder="+254 700 000 000"
                  />
                </div>
                
                <div>
                  <label className="block text-[#012156] text-xs font-['Orbitron'] mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-[#012156] placeholder-gray-400 focus:outline-none focus:border-[#5ABE71] focus:ring-2 focus:ring-[#5ABE71]/20 transition-all text-sm"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-[#012156] text-xs font-['Orbitron'] mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-[#012156] placeholder-gray-400 focus:outline-none focus:border-[#5ABE71] focus:ring-2 focus:ring-[#5ABE71]/20 transition-all resize-none text-sm"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-['Orbitron'] font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-[#012156] hover:bg-[#012156]/80 text-white shadow-sm hover:shadow-md'
                  }`}
                >
                  {isSubmitting ? (
                    <><i className="fas fa-spinner fa-spin"></i> SENDING...</>
                  ) : (
                    <>SEND MESSAGE <i className="fas fa-arrow-right text-xs"></i></>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-300 rounded-lg p-3 text-center text-green-700 text-sm font-['Ubuntu']">
                    <i className="fas fa-check-circle mr-2"></i> Message sent! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* ===== MAP SECTION ===== */}
        <section className="py-10">
          <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-[#012156] mb-6">
            Find Our <span className="text-gray-500">Location</span>
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 animate-on-scroll">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817225353982!2d36.783773!3d-1.2935974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11912cb272a3%3A0xa3f35b10772b0d27!2sTelefix%20Solutions%20Ltd!5e0!3m2!1sen!2ske!4v1706800000000!5m2!1sen!2ske" 
              className="w-full h-[300px] md:h-[400px] border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-10">
          <div className="bg-gradient-to-r from-[#012156]/8 to-[#5ABE71]/8 rounded-xl p-6 border border-gray-200 animate-on-scroll max-w-3xl">
            <h2 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-[#012156] mb-3">
              Ready to <span className="text-gray-500">Get Started?</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mb-5 font-['Ubuntu']">
              Whether you need a consultation for a new project, technical support, or just want to learn more about our services, our team is ready to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+254721722823"
                className="bg-[#012156] hover:bg-[#012156]/80 text-white px-8 py-3 rounded-lg font-['Orbitron'] text-sm tracking-wider transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2"
              >
                <i className="fas fa-phone"></i> Call Us Now
              </a>
              <a
                href="mailto:info@telefix.co.ke?subject=Telefix Website Inquiry"
                className="bg-transparent hover:bg-[#012156]/10 text-[#012156] px-8 py-3 rounded-lg border-2 border-[#012156]/30 font-['Orbitron'] text-sm tracking-wider transition-all inline-flex items-center gap-2"
              >
                <i className="fas fa-envelope"></i> Email Us
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