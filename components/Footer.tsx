// components/Footer.tsx
'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-6 pt-4 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
          {/* Company Info */}
          <div>
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Telefix Solutions</h3>
            <p className="text-gray-500 text-xs font-['Ubuntu'] leading-relaxed">
              Leading ICT & Power Solutions provider in Kenya since 2010. 
              We deliver innovative technology, sustainable power, and water solutions 
              with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Contact Info</h3>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <i className="fas fa-phone text-[#5ABE71] text-xs mt-0.5"></i>
                <div>
                  <a href="tel:+254721722823" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors block">
                    +254 721 722 823
                  </a>
                  <a href="tel:+254789035570" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors block">
                    +254 789 035 570
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-envelope text-[#5ABE71] text-xs mt-0.5"></i>
                <div>
                  <a href="mailto:sales@telefix.co.ke" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors block">
                    sales@telefix.co.ke
                  </a>
                  <a href="mailto:info@telefix.co.ke" className="text-gray-500 hover:text-[#012156] text-xs font-['Ubuntu'] transition-colors block">
                    info@telefix.co.ke
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-[#5ABE71] text-xs mt-0.5"></i>
                <span className="text-gray-500 text-xs font-['Ubuntu']">
                  Kefan House, Wood Ave, Kilimani<br />
                  P.O. BOX 55400-00200, Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Developer */}
          <div>
            <h3 className="font-['Orbitron'] text-sm font-bold text-[#012156] mb-3">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#012156]/10 hover:bg-[#012156] text-[#012156] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#012156]/10 hover:bg-[#012156] text-[#012156] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#012156]/10 hover:bg-[#012156] text-[#012156] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#012156]/10 hover:bg-[#012156] text-[#012156] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-[#012156]/10 hover:bg-[#012156] text-[#012156] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-['Ubuntu']">
                Site developed by{' '}
                <Link href="/credits" className="text-[#5ABE71] hover:text-[#012156] transition-colors font-medium">
                  Simon K.
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-[10px] font-['Ubuntu']">
            <i className="fas fa-shield-alt text-[#5ABE71]/50 mr-1"></i>
            &copy; {currentYear} Telefix Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}