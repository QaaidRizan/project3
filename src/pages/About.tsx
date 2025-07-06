import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Globe, ChevronDown } from 'lucide-react';
import aboutImage from '../assert/about.jpg';
import about1 from '../assert/about/about1.jpg';
import about2 from '../assert/about/about2.jpg';
import about3 from '../assert/about/about3.jpg';
import about4 from '../assert/about/about4.jpg';
import about5 from '../assert/about/about5.jpg';


const About = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    mission: false,
    vision: false,
    team: false,
  });
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [about1, about2, about3, about4, about5];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Update the useEffect that controls image transitions
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger the animation before changing the currentImage state
      const nextImageEl = document.getElementById('nextImage');
      const currentImageEl = document.getElementById('currentImage');
      
      if (nextImageEl && currentImageEl) {
        // Start animation
        currentImageEl.style.opacity = '0';
        currentImageEl.style.transform = 'scale(0.95) translateZ(0)';
        nextImageEl.style.opacity = '1';
        nextImageEl.style.transform = 'scale(1.0) translateZ(0)';
        
        // Change the currentImage state after animation starts
        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 1500); // Wait until animation is almost complete
      } else {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 7000); // <-- Increased from 5000ms to 8000ms (8 seconds)
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleToggle = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
            {/* Animated image transition - improved with scale and movement effects */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Current image - fade out and scale down when transitioning */}
              <img
                id="currentImage"
                src={images[currentImage]}
                alt="About section"
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
              
              {/* Next image - starts zoomed in and slides up while fading in */}
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

            {/* Remove this block to remove the dots below the image carousel */}
            {/*
            <div className="absolute bottom-8 left-0 w-full flex justify-center z-20 gap-2">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    currentImage === index ? 'bg-white scale-110' : 'bg-white/40 scale-100'
                  }`}
                ></div>
              ))}
            </div>
            */}
          </div>
        </div>
        
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            {/* Main About Section */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              {/* Empty column for spacing on small screens */}
              <div className="hidden lg:block"></div>
              
              {/* Right: Content - adjust padding to accommodate image */}
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl ml-80 lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                {/* Keep existing shading effects */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute -right-8 top-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute -left-8 bottom-1/3 w-40 h-40 rounded-full bg-black/20 blur-2xl"></div>
                
                {/* Keep existing light effects */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                </div>

                {/* Add additional background shading effects around the content */}
                <div className="hidden lg:block absolute -inset-12 z-0">
                  {/* Top-right glow */}
                  <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px]"></div>
                  
                  {/* Bottom-left glow */}
                  <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px]"></div>
                  
                  {/* Diagonal accent */}
                  <div className="absolute top-0 right-1/3 bottom-0 left-0 bg-gradient-to-br from-white/3 via-transparent to-transparent rotate-12 opacity-30 blur-3xl"></div>
                  
                  {/* Subtle vertical light beam */}
                  <div className="absolute top-0 left-1/2 h-full w-40 bg-gradient-to-b from-white/5 via-white/2 to-transparent blur-2xl"></div>
                </div>
                
                {/* About image that fills top and extends to corners */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    {/* Increased image height */}
                    <img 
                      src={aboutImage} 
                      alt="About Terrene Engineering" 
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    
                    {/* Blue overlay to match reference image */}
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    
                    {/* Construction image specific gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Content container aligned to bottom like reference */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Engineering Excellence</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content container - with proper padding now that image is at the top */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  {/* Company Introduction - reduce margin */}
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      About <span className="text-primary-300">Terrene Engineering</span>
                    </h2>
                    <p className="text-white text-xl mb-4 text-left max-w-4xl leading-relaxed">
                      Terrene Engineering (Private) Limited is a leading engineering consultancy firm 
                      established with a vision to provide innovative and sustainable engineering solutions. 
                      With over two decades of experience in the industry, we have built a reputation 
                      for excellence in structural design, civil engineering, and architectural consulting.
                    </p>
                  </div>

                  {/* Mission, Vision, Team Dropdowns - reduce spacing */}
                  <div className="w-full">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Our Company</h2>
                    <ul className="space-y-4 max-w-4xl">
                      {/* Mission Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['mission']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('mission')}
                        >
                          <span className="text-xl font-semibold text-white">Our Mission</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['mission'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['mission']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              Our mission is to deliver innovative and sustainable engineering solutions that exceed client expectations while maintaining the highest standards of quality, safety, and environmental responsibility.
                            </p>
                            <p className="text-lg">
                              We aim to contribute positively to the built environment through thoughtful design, technical excellence, and collaborative partnerships with our clients and communities.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      {/* Vision Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['vision']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('vision')}
                        >
                          <span className="text-xl font-semibold text-white">Our Vision</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['vision'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['vision']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              To be recognized globally as a leading engineering firm that shapes the future of sustainable infrastructure and creates spaces that inspire, endure, and enhance quality of life.
                            </p>
                            <p className="text-lg">
                              We envision a world where engineering excellence and environmental stewardship go hand in hand, creating lasting value for generations to come.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      {/* Team Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['team']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('team')}
                        >
                          <span className="text-xl font-semibold text-white">Our Team</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['team'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['team']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              Our team comprises experienced professional engineers, designers, and technical specialists who bring diverse expertise and perspectives to every project.
                            </p>
                            <p className="mb-4 text-lg">
                              We pride ourselves on our collaborative approach, combining technical excellence with creative problem-solving to deliver exceptional results for our clients.
                            </p>
                            <p className="text-lg">
                              With ongoing professional development and a culture of innovation, our team stays at the forefront of industry advancements and best practices.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export default About;
