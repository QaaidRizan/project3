import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award } from 'lucide-react';

import white from '../assert/Packages/white.png';
import packagestop from '../assert/Packages/packagestop.png';
import silver from '../assert/Packages/white.png';

import diamond1 from '../assert/Packages/Diamond/Diamond1.png';
import diamond2 from '../assert/Packages/Diamond/Diamond2.png';
import diamond3 from '../assert/Packages/Diamond/Diamond3.png';
import diamond4 from '../assert/Packages/Diamond/Diamond4.png';
import diamond5 from '../assert/Packages/Diamond/Diamond5.png';

const packageDetails = {
  name: 'International Package – For Overseas Clients Building in Sri Lanka',
  idealFor: 'Sri Lankans living abroad, foreign investors, or companies planning construction in Sri Lanka without being physically present.',
  includes: [
    'Customized architectural and structural design suited to Sri Lankan conditions',
    'All drawings and documents in English, with clear instructions',
    'Digital coordination via Zoom/Google Meet (weekly updates available)',
    'Assistance with obtaining plan approvals from local authorities (through authorized agents)',
    'Bank loan estimate documents prepared for Sri Lankan banks (if needed)',
    '3D walk-through & high-quality renders for remote visualization',
    'BOQ with international material references or local alternatives',
    'Contractor/tender guidance or appointment (if construction is handled locally)',
    'Progress monitoring support and milestone-based inspections (video/photo updates)',
    'Optional: Construction monitoring services through subcontracting partners',
    'Special Note: Tailored to save your time, avoid miscommunication, and allow you to build with confidence while you’re abroad.'
  ],
  benefits: [] // You can add benefits if needed, or leave as an empty array
};

const MidlevelPackage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [diamond1, diamond2, diamond3, diamond4, diamond5]; // Replace with actual house images

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageEl = document.getElementById('nextImage');
      const currentImageEl = document.getElementById('currentImage');
      if (nextImageEl && currentImageEl) {
        currentImageEl.style.opacity = '0';
        currentImageEl.style.transform = 'scale(0.95) translateZ(0)';
        nextImageEl.style.opacity = '1';
        nextImageEl.style.transform = 'scale(1.0) translateZ(0)';
        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 1500);
      } else {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#212121" }}>
      {/* Header with hide/show animation */}
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      <div className="pt-20">
        {/* Left: Image - left aligned, half of the page */}
        <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full z-0">
          <div className="relative w-full h-full overflow-hidden border-2 border-white/10 bg-black/40 shadow-2xl">
            {/* White glowing shade */}
            <div className="absolute -inset-4 bg-gradient-to-l from-white/30 via-white/10 to-white/0 rounded-none blur-2xl opacity-80 z-0"></div>
            {/* Blue light accents */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-120 h-120 rounded-full bg-blue-600/10 blur-3xl"></div>
            {/* Animated image transition */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Current image */}
              <img
                id="currentImage"
                src={images[currentImage]}
                alt="Home designs"
                className="w-full h-full object-cover absolute inset-0"
                style={{
                  opacity: 1,
                  zIndex: 10,
                  objectPosition: "center",
                  transform: "scale(1.0) translateZ(0)",
                  transition: 'opacity 1.5s ease-in-out, transform 2s ease-out'
                }}
                key={currentImage}
              />
              
              {/* Next image */}
              <img
                id="nextImage"
                src={images[(currentImage + 1) % images.length]}
                alt=""
                className="w-full h-full object-cover absolute inset-0"
                style={{
                  opacity: 0,
                  zIndex: 9,
                  objectPosition: "center",
                  transform: "scale(1.05) translateY(10px) translateZ(0)", 
                  transition: 'opacity 1.5s ease-in-out, transform 2s ease-out'
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            {/* Main Content Section */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl ml-0 lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                {/* Background effects */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute -right-8 top-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute -left-8 bottom-1/3 w-40 h-40 rounded-full bg-black/20 blur-2xl"></div>
                
                {/* Light effects */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                </div>

                {/* Background shading */}
                <div className="hidden lg:block absolute -inset-12 z-0">
                  <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px]"></div>
                  <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px]"></div>
                  <div className="absolute top-0 right-1/3 bottom-0 left-0 bg-gradient-to-br from-white/3 via-transparent to-transparent rotate-12 opacity-30 blur-3xl"></div>
                  <div className="absolute top-0 left-1/2 h-full w-40 bg-gradient-to-b from-white/5 via-white/2 to-transparent blur-2xl"></div>
                </div>
                
                {/* Package image header */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    <img
                      src={silver}
                      alt="Mid-Level Package"
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Mid-Level Package</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content container */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  {/* Package Introduction */}
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                      For 2-Storey Homes <span className="text-primary-300">or Small Apartments</span>
                    </h2>
                    <p className="text-white text-xl mb-6 text-left max-w-4xl leading-relaxed">
                      {packageDetails.idealFor}
                    </p>
                  </div>

                  {/* Package Details Section */}
                  <div className="w-full mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-left">What's Included</h2>
                    <ul className="space-y-3 max-w-4xl">
                      {packageDetails.includes
                        .filter(
                          item =>
                            !item.startsWith('Optional:') &&
                            !item.startsWith('Special Note:')
                        )
                        .map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-white/90 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-white text-lg">{item}</span>
                          </li>
                        ))}
                    </ul>
                    {/* Optional Add-Ons Section */}
                    {packageDetails.includes.find(item => item.startsWith('Optional:')) && (
                      <div className="mt-8">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Optional Add-Ons</h3>
                        <ul className="space-y-3 max-w-4xl">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-white/80 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-white text-lg">
                              {
                                packageDetails.includes
                                  .find(item => item.startsWith('Optional:'))
                                  .replace('Optional:', '')
                                  .trim()
                              }
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}
                    {/* Special Note Section */}
                    {packageDetails.includes.find(item => item.startsWith('Special Note:')) && (
                      <div className="mt-8">
                        <p className="font-semibold text-white mb-1">Special Note:</p>
                        <div className="bg-white/10 rounded-lg p-4 text-white text-base">
                          {
                            packageDetails.includes
                              .find(item => item.startsWith('Special Note:'))
                              .replace('Special Note:', '')
                              .trim()
                          }
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Benefits Section */}
                  <div className="w-full mb-10">
                   {/* <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-left">Package Benefits</h2>*/}
                    <ul className="space-y-3 max-w-4xl">
                      {packageDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="w-6 h-6 text-white/90 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-12 flex justify-center w-full">
                    <Button size="lg" className="bg-white text-[#0E75A0] hover:bg-white/90 text-lg px-8 py-6 font-semibold">
                      Request This Package
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MidlevelPackage;
