import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';
// Import your videos and logo
import heroVideo from '@/assert/videos/hero-background.mp4';
import heroVideo2 from '@/assert/videos/hero-background2.mp4';

// Import Header component
import Header from './Header';

const Hero = () => {
  // State for videos
  const [activeVideo, setActiveVideo] = useState(1);
  
  // Create refs for both video elements
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  
  // Use effect to set up playback rates and event listeners
  useEffect(() => {
    // Set playback rate for both videos
    if (video1Ref.current) {
      video1Ref.current.playbackRate = 0.6;
    }
    
    if (video2Ref.current) {
      video2Ref.current.playbackRate = 0.6;
    }
    
    // Function to handle video 1 ending
    const handleVideo1End = () => {
      if (video2Ref.current) {
        // Start playing video 2
        video2Ref.current.play()
          .then(() => {
            // Switch to video 2 with smooth transition
            setActiveVideo(2);
          })
          .catch(error => console.error("Error playing second video:", error));
      }
    };
    
    // Function to handle video 2 ending
    const handleVideo2End = () => {
      if (video1Ref.current) {
        // Start playing video 1 again
        video1Ref.current.currentTime = 0; // Reset to beginning
        video1Ref.current.play()
          .then(() => {
            // Switch to video 1 with smooth transition
            setActiveVideo(1);
          })
          .catch(error => console.error("Error playing first video:", error));
      }
    };
    
    // Add event listeners
    if (video1Ref.current) {
      video1Ref.current.addEventListener('ended', handleVideo1End);
    }
    
    if (video2Ref.current) {
      video2Ref.current.addEventListener('ended', handleVideo2End);
    }
    
    // Clean up event listeners when component unmounts
    return () => {
      if (video1Ref.current) {
        video1Ref.current.removeEventListener('ended', handleVideo1End);
      }
      if (video2Ref.current) {
        video2Ref.current.removeEventListener('ended', handleVideo2End);
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col pb-16 md:pb-20">
      {/* Videos */}
      <div className="absolute inset-0 w-full h-full">
        {/* First Video */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            activeVideo === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'brightness(0.85)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Second Video */}
        <video
          ref={video2Ref}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            activeVideo === 2 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'brightness(0.85)' }}
        >
          <source src={heroVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      </div>
      
      {/* Use the Header component from import */}
      <div className="relative z-50">
        <Header mode="transparent" />
      </div>
      
      {/* Hero Content - Updated to match reference design */}
      <div className="relative z-10 flex-grow flex items-center pt-8 md:pt-12">
        <div className="container mx-auto px-4 pl-18 md:pl-24 lg:pl-36 flex flex-col items-start justify-center text-left mt-4 md:mt-8">
          {/* Main Headline */}
          <h1 className="font-extrabold text-white mb-2 leading-tight drop-shadow-2xl"
              style={{ fontSize: "4.9rem", lineHeight: 0.85 }}>
            Shaping tomorrow with<br />
            <span className="font-extrabold" style={{ fontSize: "3.6rem", marginTop: "-0.5rem", display: "inline-block" }}>
              Visionary engineering
            </span>
          </h1>
          {/* Subheadline */}
          <br /><p
            className="text-white text-2xl md:text-3xl mb-6"
            style={{
              fontFamily: '"Abadi Extra Light", "Arial Nova Cond Light", Arial, sans-serif',
              fontWeight: 200,
              lineHeight: 1.2,
              maxWidth: 700,
              letterSpacing: "0.01em",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale"
            }}
          >
            delivering solutions for some of the world's largest and most complex projects. Our approach is guided by our unique engineering philosophies:
          </p><br />
          {/* Philosophy Line */}
          <div className="mt-2 mb-10">
            <span className="font-extrabold text-white text-2xl md:text-3xl tracking-wide">
              LEAD. CREATE. DELIVER. SUSTAIN.
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Temporarily removed
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div> */}
      {/* Thin blue line at the bottom of the video/hero section */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 z-50"></div>
    </section>
  );
};

export default Hero;
