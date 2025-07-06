import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';
import engineeringTeam from '../assert/ProjectManagment.jpg';
import aboutImage from '../assert/Faq/faq2.png';
import about2bg from '../assert/about2bg.jpg';
import faq1 from '../assert/Faq/faq1.png';
import faq2 from '../assert/Faq/faq2.png';
import faq3 from '../assert/Faq/faq3.png';
import faq4 from '../assert/Faq/faq4.png';
import faq5 from '../assert/Faq/faq5.png';




const Faq = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [faq4 , faq1, faq5];

  // FAQ data
  const faqItems = [
    {
      question: "What services does Terrene Engineering offer?",
      answer: "Terrene Engineering provides a comprehensive range of services including structural engineering, civil engineering, architectural drafting, project management, and construction supervision. We specialize in both residential and commercial projects."
    },
    {
      question: "How long has Terrene Engineering been in business?",
      answer: "Terrene Engineering has been providing expert engineering solutions for over 20 years, with a proven track record of successful projects across residential, commercial, and industrial sectors."
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer: "Yes, we have extensive experience in both residential and commercial projects. Our team is equipped to handle projects of all sizes, from single-family homes to large-scale commercial developments."
    },
    {
      question: "What software does your team use?",
      answer: "Our engineering team is proficient in industry-leading software including AutoCAD, Revit, ETABS, and STAAD Pro. This allows us to deliver precise designs and analysis for all our projects."
    },
    {
      question: "How do I request a quote for my project?",
      answer: "You can request a quote by filling out our inquiry form online, calling our office directly, or sending us an email with your project details. We aim to respond to all quote requests within 24-48 hours."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. Small residential projects may take 2-4 weeks, while larger commercial projects can take several months. We'll provide you with a detailed timeline during our initial consultation."
    }
  ];

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

  const handleToggle = (index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index],
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
                alt="FAQ section"
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
          </div>
        </div>
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
              {/* Right: Content - same alignment and top image as About */}
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
                      alt="FAQ Banner"
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Frequently Asked Questions</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* FAQ Dropdowns */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  <div className="mb-8 w-full">
                    <ul className="space-y-4 max-w-4xl">
                      {faqItems.map((item, index) => (
                        <li key={index}>
                          <div
                            className={`flex items-center justify-between px-4 py-3 border border-white bg-white/5 cursor-pointer transition-all duration-300 ${
                              openSections[index]
                                ? 'bg-primary/10 border-white rounded-t-lg'
                                : 'hover:bg-white/10 rounded-lg'
                            }`}
                            onClick={() => handleToggle(index)}
                          >
                            <span className="text-lg font-semibold text-white">{item.question}</span>
                            <ChevronDown
                              className={`w-6 h-6 text-white transition-transform duration-200 ${
                                openSections[index] ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                          <div
                            className={`transition-all duration-300 overflow-hidden border-x border-b border-white ${
                              openSections[index]
                                ? 'max-h-96 opacity-100 rounded-b-lg'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="p-6 bg-white/10 text-white">
                              <p className="text-base">{item.answer}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12 text-center">
                      <p className="text-gray-200 mb-6">
                        Still have questions? Contact our team for more information.
                      </p>
                      <a
                        href="/contact"
                        className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Faq;
