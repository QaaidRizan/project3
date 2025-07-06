import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';
import engineeringTeam from '../assert/ProjectManagment.jpg';
import sustainabilitmaine from '../assert/sustainability/sustainabilitmaine.png';
import about2bg from '../assert/about2bg.jpg';
import sustainability1 from '../assert/sustainability/sustainability1.png';
import sustainability2 from '../assert/sustainability/sustainability2.png';
import sustainability3 from '../assert/sustainability/sustainability3.png';


const Sustainability = () => {
  const [openSections, setOpenSections] = useState({
    philosophy: false,
    initiatives: false,
    impact: false,
  });
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [sustainability3,sustainability2,sustainability1];

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
            <div className="absolute -inset-4 bg-gradient-to-l from-white/30 via-white/10 to-white/0 rounded-none blur-2xl opacity-80 z-0"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-120 h-120 rounded-full bg-blue-600/10 blur-3xl"></div>
            <div className="relative w-full h-full overflow-hidden">
              <img
                id="currentImage"
                src={images[currentImage]}
                alt="Sustainability section"
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
          </div>
        </div>
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
              {/* Right: Content */}
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl ml-80 lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
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
                {/* Top image banner */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    <img
                      src={sustainabilitmaine}
                      alt="Sustainability at Terrene"
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Building a Greener Tomorrow</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content container */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      Sustainability at <span className="text-primary-300">Terrene</span>
                    </h2>
                    <p className="text-white text-xl mb-4 text-left max-w-4xl leading-relaxed">
                      At Terrene, sustainability is at the core of everything we do. We are committed to creating solutions that protect the environment, support communities, and ensure a better future for generations to come.
                    </p>
                  </div>
                  <div className="w-full">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Our Sustainability Focus</h2>
                    <ul className="space-y-4 max-w-4xl">
                      {/* Philosophy Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['philosophy']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('philosophy')}
                        >
                          <span className="text-xl font-semibold text-white">Our Philosophy</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['philosophy'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['philosophy']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              We believe that sustainable development is essential for the well-being of people and the planet. Our philosophy is to integrate eco-friendly practices into every stage of our projects.
                            </p>
                            <p className="text-lg">
                              By prioritizing resource efficiency, renewable materials, and innovative design, we strive to minimize our environmental footprint while maximizing positive impact.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* Initiatives Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['initiatives']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('initiatives')}
                        >
                          <span className="text-xl font-semibold text-white">Key Initiatives</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['initiatives'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['initiatives']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              Our sustainability initiatives include energy-efficient building designs, water conservation strategies, and the use of low-impact construction methods.
                            </p>
                            <p className="text-lg">
                              We collaborate with partners and clients to implement green technologies and promote sustainable lifestyles in the communities we serve.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* Impact Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['impact']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('impact')}
                        >
                          <span className="text-xl font-semibold text-white">Our Impact</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['impact'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['impact']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              Through our projects, we have reduced carbon emissions, improved energy efficiency, and enhanced biodiversity in urban and rural environments.
                            </p>
                            <p className="mb-4 text-lg">
                              We measure our success by the positive changes we bring to the environment and the communities we engage with.
                            </p>
                            <p className="text-lg">
                              Join us on our journey towards a sustainable future, where every action counts and together, we can make a difference.
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
      </div>
      {/* Footer */}
      <div className="mt-8 lg:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Sustainability;