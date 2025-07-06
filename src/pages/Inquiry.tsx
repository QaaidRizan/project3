import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import contactus from '../assert/contactus.jpg';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#212121]">
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      
      {/* Hero Section with Image */}
      <div className="relative w-full h-64 md:h-80">
        <img 
          src={contactus} 
          alt="Contact Us" 
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E75A0]/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-lg text-white/90">
            We're ready to help with your engineering needs. Contact us today.
          </p>
        </div>
      </div>
      
      <main className="py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information Section */}
            <div className="lg:order-2">
              <div className="bg-[#0E75A0] p-6 rounded-lg shadow-lg sticky top-24">
                <h2 className="text-xl font-semibold mb-6 text-white border-b border-white/20 pb-2">Contact Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-200">+94 11 234 5678</p>
                      <p className="text-gray-200">+94 77 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-200">info@terreneengineering.com</p>
                      <p className="text-gray-200">projects@terreneengineering.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Office Address</h3>
                      <p className="text-gray-200">
                        123 Engineering Plaza,<br />
                        Colombo 03,<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-200">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-[#0E75A0] p-6 rounded-lg shadow-lg border border-[#0e86b8]">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Get In Touch</h1>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                    />
                  </div>
                </div>
2
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-white">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm"
                  >
                    <option value="" className="bg-[#12121]">Select a service</option>
                    <option value="structural-design" className="bg-[#212121]">Structural Design</option>
                    <option value="civil-engineering" className="bg-[#212121]">Civil Engineering</option>
                    <option value="architectural-consulting" className="bg-[#212121]">Architectural Consulting</option>
                    <option value="project-management" className="bg-[#212121]">Project Management</option>
                    <option value="other" className="bg-[#212121]">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-white">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                    placeholder="Please describe your project requirements..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="default"
                  className="w-full py-2 text-base font-medium bg-white text-[#0E75A0] hover:bg-gray-200"
                >
                  <Send className="w-4 h-4 mr-2" /> Send Inquiry
                </Button>

                {/* Success Message */}
                {formSubmitted && (
                  <div className="mt-4 p-4 bg-green-500 text-white rounded-lg shadow-md">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <p className="text-sm font-medium">Thank you! Your inquiry has been submitted successfully.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inquiry;
