import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';
import qualitypolicy1 from '../assert/qualitypolicy/qualitypolicy1.png';
import qualitypolicy2 from '../assert/qualitypolicy/qualitypolicy2.png';
import qualitypolicy3 from '../assert/qualitypolicy/qualitypolicy3.png';
import aboutImage from '../assert/qualitypolicy/qulitypolicy4.jpg';
import about2bg from '../assert/about2bg.jpg';

const QualityPolicy = () => {
  const [openSections, setOpenSections] = useState({
    commitment: false,
    standards: false,
    improvement: false,
  });
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [qualitypolicy3, qualitypolicy2, qualitypolicy1];

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
                alt="Quality Policy section"
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
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
              {/* Right: Content */}
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl ml-80 lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                {/* Shading and background effects */}
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
                      src={aboutImage}
                      alt="Quality Policy"
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Our Quality Policy</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content container */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      Quality Policy at <span className="text-primary-300">Terrene Engineering</span>
                    </h2>
                    <p className="text-white text-xl mb-4 text-left max-w-4xl leading-relaxed">
                      At Terrene Engineering, our commitment to quality is the foundation of everything we do. We strive to deliver engineering solutions that meet the highest standards of excellence, safety, and reliability for our clients and stakeholders.
                    </p>
                  </div>
                  <div className="w-full">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Our Quality Principles</h2>
                    <ul className="space-y-4 max-w-4xl">
                      {/* Commitment Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['commitment']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('commitment')}
                        >
                          <span className="text-xl font-semibold text-white">Commitment to Excellence</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['commitment'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['commitment']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              We are dedicated to achieving excellence in every project by adhering to strict quality control processes and industry best practices.
                            </p>
                            <p className="text-lg">
                              Our team is committed to continuous improvement and delivering results that consistently exceed client expectations.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* Standards Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['standards']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('standards')}
                        >
                          <span className="text-xl font-semibold text-white">Adherence to Standards</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['standards'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['standards']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              We strictly comply with national and international standards, codes, and regulations to ensure the safety, durability, and sustainability of our engineering solutions.
                            </p>
                            <p className="text-lg">
                              Our quality management system is regularly reviewed and updated to reflect the latest advancements and requirements in the industry.
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* Improvement Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['improvement']
                              ? 'bg-primary/10 border-white rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('improvement')}
                        >
                          <span className="text-xl font-semibold text-white">Continuous Improvement</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['improvement'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                            openSections['improvement']
                              ? 'max-h-96 opacity-100 rounded-b-lg'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-6 bg-white/10 text-white">
                            <p className="mb-4 text-lg">
                              We foster a culture of learning and innovation, encouraging our team to seek new methods and technologies that enhance quality and efficiency.
                            </p>
                            <p className="text-lg">
                              Continuous feedback and proactive risk management are integral to our process, enabling us to anticipate challenges and implement effective solutions swiftly.
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

export default QualityPolicy;
