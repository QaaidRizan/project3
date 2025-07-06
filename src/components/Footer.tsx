import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SPACING_CLASSES } from '@/lib/spacing';
// Import logo from assets folder
import Logo2 from '../assert/Logo2.png';

const Footer = () => {
  return (
    <section className="py-7 pb-0 md:py-11 md:pb-0 w-full relative overflow-hidden">
      <footer className="bg-slate-900 text-white w-full">
        <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16 py-8 pb-4 relative z-20">
          {/* Responsive grid: always 1 column on mobile, 4 columns on md+ */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 min-h-[1px] text-left">
              {/* Logo and company name */}
              <div className="flex flex-col justify-between h-full">
                <div className="flex items-center space-x-4 h-full">
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                      <img
                        src={Logo2}
                        alt="Terrene Engineering Logo"
                        className="object-contain"
                        style={{
                          width: "470px",
                          height: "auto",
                          maxWidth: "100%"
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-2xl mb-1.5">Terrene Engineering</h1>
                    <p className="text-base text-gray-400 mb-8">(Private) Limited</p>
                    <p className="text-xs text-gray-400">
                      professional engineering solutions for structural, civil, and architectural projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <div className="flex flex-col sm:flex-row gap-8">
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Structural Engineering</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Civil Engineering</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Architectural Drafting</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Project Management</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Code Compliance</a></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">MEP Engineering</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Interior Design Services</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">BIM Services</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Laboratory Testing</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Quantity Surveying</a></li>
                </ul>
              </div>
            </div>

            {/* Quick Links section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="flex flex-col sm:flex-row gap-8">
                <ul className="space-y-2 text-sm">
                  <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Qulity Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonial</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Info section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">123 Engineering Lane, Colombo 03, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">+94 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">info@terreneeng.com</span>
                </div>
                <div className="flex space-x-4 pt-2 justify-start pl-0 ml-0">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://img.icons8.com/fluent/28/000000/facebook-new.png" 
                      alt="Facebook"
                      className="w-6 h-6" 
                    />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://img.icons8.com/fluent/28/000000/linkedin-2.png" 
                      alt="LinkedIn" 
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://img.icons8.com/fluent/28/000000/instagram-new.png" 
                      alt="Instagram" 
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="https://img.icons8.com/color/28/000000/whatsapp.png" 
                      alt="WhatsApp" 
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="inline-flex">
                    <div className="bg-white rounded-sm w-6 h-6 flex items-center justify-center">
                      <img 
                        src="https://img.icons8.com/ios-filled/24/000000/tiktok--v1.png" 
                        alt="TikTok" 
                        className="w-5 h-5"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2025 Terrene Engineering (Private) Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;