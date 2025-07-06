import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Globe, ChevronDown } from 'lucide-react';
import aboutImage from '../assert/testimonial/tetimonial10.png';
import testimonial1 from '../assert/testimonial/testimonial1.png';
import testimonial2 from '../assert/testimonial/testimonial2.png';
import testimonial3 from '../assert/testimonial/testimonial3.jpg'; 
import testimonial4 from '../assert/testimonial/testimonial4.jpg';
import testimonial5 from '../assert/testimonial/testimonial5.png';
import testimonial6 from '../assert/testimonial/testimonial6.png';
import testimonial7 from '../assert/testimonial/testimonial7.webp';
import testimonial8 from '../assert/testimonial/testimonial8.jpg';
import testimonial9 from '../assert/testimonial/testimonial9.jpg';




const testimonials = [
  {
    id: 'customer1',
    name: 'John Reynolds',
    country: 'United States',
    company: 'Reynolds Construction',
    position: 'Chief Project Manager',
    projectName: 'Manhattan Heights Tower',
    projectType: 'High-rise Residential Complex',
    projectDetails: 'A 42-story luxury residential tower with sustainable design features and structural innovation.',
    testimonial: "Terrene Engineering's structural design expertise was instrumental in overcoming the challenges we faced with our Manhattan project. Their team's innovative approach and attention to detail saved us both time and resources."
  },
  {
    id: 'customer2',
    name: 'Mei Zhang',
    country: 'Singapore',
    company: 'Pacific Development Group',
    position: 'Director of Operations',
    projectName: 'Marina Bay Commercial Center',
    projectType: 'Mixed-use Commercial Complex',
    projectDetails: 'A waterfront commercial hub with 5 interconnected buildings and integrated sustainable systems.',
    testimonial: "Working with Terrene Engineering was a seamless experience. Their team understood our complex requirements and delivered solutions that exceeded our expectations. The project was completed ahead of schedule and the engineering work was flawless."
  },
  {
    id: 'customer3',
    name: 'Ahmed Al-Farsi',
    country: 'UAE',
    company: 'Al-Farsi Holdings',
    position: 'CEO',
    projectName: 'Dubai Horizon Tower',
    projectType: 'Multi-purpose Skyscraper',
    projectDetails: 'A 78-floor iconic building featuring offices, luxury apartments, and a 5-star hotel with advanced MEP systems.',
    testimonial: "Terrene Engineering provided exceptional value with their innovative structural solutions. Their ability to integrate sustainable systems while maintaining the architectural vision of our landmark project was impressive. I highly recommend their services."
  },
  {
    id: 'customer4',
    name: 'Isabella Martínez',
    country: 'Spain',
    company: 'Barcelona Urban Renewal',
    position: 'Project Director',
    projectName: 'Mediterranean Cultural Center',
    projectType: 'Cultural Heritage Renovation',
    projectDetails: 'Restoration and modernization of a 19th century building into a cultural hub with state-of-the-art facilities.',
    testimonial: "The team at Terrene Engineering demonstrated remarkable sensitivity to the historical elements of our project while implementing modern engineering solutions. Their expertise in heritage conservation and structural reinforcement was invaluable."
  }
];

const Testimonial = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    customer1: false,
    customer2: false,
    customer3: false,
    customer4: false
  });
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8, testimonial9];

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
                alt="Testimonial section"
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
            {/* Main Testimonial Section */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
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
                      alt="Customer Testimonials" 
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    
                    {/* Blue overlay to match reference image */}
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    
                    {/* Construction image specific gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Content container aligned to bottom like reference */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Customer Testimonials</h3>
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
                      What Our <span className="text-primary-300">Customers Say</span>
                    </h2>
                    <p className="text-white text-xl mb-4 text-left max-w-4xl leading-relaxed">
                      Real feedback from our valued customers around the world.
                    </p>
                  </div>

                  {/* Mission, Vision, Team Dropdowns - reduce spacing */}
                  {/* Customer Reviews Section */}
                  <div className="w-full">
  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Customer Reviews</h2>
  <ul className="space-y-8 max-w-4xl">
    {testimonials.map((testimonial) => (
      <li key={testimonial.id} className="p-6 bg-white/10 rounded-lg border border-white/20">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">
            {testimonial.name} <span className="text-white/70 text-sm">({testimonial.country})</span>
          </h3>
        </div>
        <p className="mb-4 text-lg italic">"{testimonial.testimonial}"</p>
      </li>
    ))}
  </ul>
</div>

{/* Feedback Button */}
<div className="mt-16 flex justify-center">
  <Button size="lg" className="bg-[#0E75A0] text-white hover:bg-[#0a5a7a]">
    Send Your Feedback
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

export default Testimonial;
