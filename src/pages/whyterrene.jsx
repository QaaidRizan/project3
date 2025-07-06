import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Globe, ChevronDown } from 'lucide-react';
// Remove engineeringTeam and aboutImage imports
// import engineeringTeam from '../assert/ProjectManagment.jpg';
// import aboutImage from '../assert/about.jpg';
import about2bg from '../assert/about2bg.jpg';
import whyus from '../assert/whyterren/whyus.jpg';
import whyterren from '../assert/whyterren/whyterren.jpg';
import whyterren2 from '../assert/whyterren/whyterren2.jpg';

// ...existing code...

const Whyterrene = () => {
  // ...existing state...
  const [openSections, setOpenSections] = useState({
    expertise: false,
    approach: false,
    benefits: false,
  });
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Use the three new images for the carousel
  const images = [whyus, whyterren, whyterren2];

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
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleToggle = (section) => {
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
                alt="Why Terrene section"
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
          </div>
        </div>
        
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            {/* Main Why Terrene Section */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              {/* Empty column for spacing on small screens */}
              <div className="hidden lg:block"></div>
              
              {/* Right: Content - adjust padding to accommodate image */}
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl ml-80 lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                {/* Shading and background effects (copied from About.tsx) */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute -right-8 top-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute -left-8 bottom-1/3 w-40 h-40 rounded-full bg-black/20 blur-2xl"></div>
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                </div>
                <div className="hidden lg:block absolute -inset-12 z-0">
                  <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px]"></div>
                  <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px]"></div>
                  <div className="absolute top-0 right-1/3 bottom-0 left-0 bg-gradient-to-br from-white/3 via-transparent to-transparent rotate-12 opacity-30 blur-3xl"></div>
                  <div className="absolute top-0 left-1/2 h-full w-40 bg-gradient-to-b from-white/5 via-white/2 to-transparent blur-2xl"></div>
                </div>

                {/* Top image banner (copied from About.tsx) */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    <img 
                      src={about2bg} 
                      alt="Why Terrene Engineering" 
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Partner with Excellence</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content container - with proper padding now that image is at the top */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  {/* Main topic and dropdowns */}
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      Why <span className="text-primary-300">Terrene Engineering</span>
                    </h2>
                    <p className="text-white text-xl mb-4 text-left max-w-4xl leading-relaxed">
                      Choosing Terrene Engineering means partnering with a team dedicated to excellence, 
                      innovation, and client satisfaction. Our unique approach combines technical expertise 
                      with creative problem-solving to deliver solutions that exceed expectations and 
                      stand the test of time.
                    </p>
                  </div>

                  {/* Expertise, Approach, Benefits Dropdowns */}
                  <div className="w-full">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Our Advantages</h2>
                    <ul className="space-y-4 max-w-4xl">
                      {/* Expertise Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['expertise']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('expertise')}
                        >
                          <span className="text-xl font-semibold text-white">Technical Expertise</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['expertise'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['expertise']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              Our team consists of highly qualified engineers with decades of combined experience in structural design, civil engineering, and architectural consulting.
                            </p>
                            <p className="text-lg">
                              We maintain cutting-edge knowledge through continuous professional development and stay at the forefront of industry innovations and best practices.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      {/* Approach Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['approach']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('approach')}
                        >
                          <span className="text-xl font-semibold text-white">Client-Centered Approach</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['approach'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['approach']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              We place clients at the center of our process, ensuring thorough understanding of requirements before crafting tailored solutions that address specific needs.
                            </p>
                            <p className="text-lg">
                              Our collaborative approach means transparent communication throughout the project lifecycle, allowing for adaptability and ensuring your vision is realized.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      {/* Benefits Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['benefits']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('benefits')}
                        >
                          <span className="text-xl font-semibold text-white">Sustainable Solutions</span>
                          <ChevronDown 
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['benefits'] ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['benefits']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              Sustainability is integrated into everything we do, from initial concept development through detailed design and implementation.
                            </p>
                            <p className="mb-4 text-lg">
                              Our commitment to environmentally responsible engineering creates buildings and infrastructure that not only meet today's needs but also preserve resources for future generations.
                            </p>
                            <p className="text-lg">
                              By choosing Terrene, you're investing in solutions that deliver long-term value through reduced operating costs, improved efficiency, and enhanced durability.
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

export default Whyterrene;