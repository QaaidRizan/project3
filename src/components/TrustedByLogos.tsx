import React, { useEffect, useRef, useState } from "react";

// Example logo imports (replace with your actual logo paths)
import logo1 from "../assert/logos/company1.png";
import logo2 from "../assert/logos/company2.png";
import logo3 from "../assert/logos/company3.png";
import logo4 from "../assert/logos/company4.png";
import logo5 from "../assert/logos/company5.png";
import logo6 from "../assert/logos/company6.png"; // Add new logo import
import logobbackground from "../assert/career.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6]; // Add logo6 to array
const CARD_WIDTH = 224; // w-56 = 224px
const CARD_GAP = 64;    // gap-16 = 64px
const VISIBLE_COUNT = 5; // Changed from 3 to 4
const SLIDE_INTERVAL = 2500; // ms (pause before sliding)
const ANIMATION_DURATION = 700; // ms (slide animation duration)

const TrustedByLogos = () => {
  const [logoList, setLogoList] = useState([...logos]);
  const [isSliding, setIsSliding] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // <-- Add pause state
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return; // Don't slide if paused

    let slideTimeout: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const slide = () => {
      setIsSliding(true);
      slideTimeout = setTimeout(() => {
        setLogoList((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setIsSliding(false);
        pauseTimeout = setTimeout(slide, SLIDE_INTERVAL);
      }, ANIMATION_DURATION);
    };

    pauseTimeout = setTimeout(slide, SLIDE_INTERVAL);

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [logoList, isPaused]); // <-- depend on isPaused

  // Get the visible logos for the current window
  const visibleLogos = logoList.slice(0, VISIBLE_COUNT + 1); // +1 for smooth slide

  return (
    <section className="py-16 md:py-20 bg-[#212121] w-full relative overflow-hidden">
      <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16 relative z-20">
        {/* Card wrapper with ONLY background image */}
        <div 
          className="rounded-2xl border border-white p-4 md:p- relative overflow-hidden"
          style={{
            backgroundImage: `url(${logobbackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative z-10">
            <div
              className="overflow-hidden"
              style={{
                width: `${VISIBLE_COUNT * (CARD_WIDTH + CARD_GAP) - CARD_GAP}px`,
                margin: "0 auto"
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex gap-16 transition-transform"
                style={{
                  transition: isSliding ? `transform ${ANIMATION_DURATION}ms cubic-bezier(.4,0,.2,1)` : "none",
                  transform: isSliding
                    ? `translate3d(-${CARD_WIDTH + CARD_GAP}px, 0, 0)`
                    : "translate3d(0, 0, 0)",
                  width: `${(VISIBLE_COUNT + 1) * (CARD_WIDTH + CARD_GAP)}px`
                }}
              >
                {visibleLogos.map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center h-32 w-56">
                    <img
                      src={logo}
                      alt={`Company logo ${((idx) % logos.length) + 1}`}
                      className="h-28 w-auto object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLogos;