import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, CheckCircle } from 'lucide-react';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';
import homepageBuildingImage from '@/assert/homepagebuilding1.jpg';
import building2 from '@/assert/building2.jpg';


const About = () => {
	const [isImageVisible, setIsImageVisible] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const [startTextAnimation, setStartTextAnimation] = useState(false);
	const [animated, setAnimated] = useState({ content: false });
	const [showSecondImage, setShowSecondImage] = useState(false);
	const imageRef = useRef(null);
	const contentRef = useRef(null);

	// Observer for animations
	useEffect(() => {
		const observerOptions = { root: null, rootMargin: '0px', threshold: 0.2 };
		const animateElement = (entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				if (entry.target === contentRef.current) {
					setAnimated((prev) => ({ ...prev, content: true }));
				}
			});
		};
		const observer = new IntersectionObserver(animateElement, observerOptions);
		if (contentRef.current) observer.observe(contentRef.current);
		return () => observer.disconnect();
	}, []);

	// Image animation observer
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setIsImageVisible(true);
					observer.disconnect();
					setTimeout(() => setStartTextAnimation(true), 1200);
				}
			},
			{ threshold: 0.3 }
		);
		if (imageRef.current) observer.observe(imageRef.current);
		return () => observer.disconnect();
	}, []);

	// After the image is visible, trigger the second image with animation (slower, smoother)
	useEffect(() => {
		let timer1: NodeJS.Timeout;
		let timer2: NodeJS.Timeout;

		if (isImageVisible) {
			// Show second image after 5s
			timer1 = setTimeout(() => setShowSecondImage(true), 5000);
			// Switch back to first image after 5s + 1s (total 6s)
			timer2 = setTimeout(() => setShowSecondImage(false), 6000);
		}
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, [isImageVisible, showSecondImage]);

	return (
		<section
			id="about"
			className="py-16 md:py-20 bg-[#212121] overflow-hidden w-full relative"
		>
			<div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16 relative z-20">
				{/* Main content */}
				<div ref={contentRef} className={`transform transition-all duration-700 ${animated.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
					<div 
						className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl"
						style={{
							boxShadow: SHADOW_PRESETS.ABOUT.style,
						}}
					>
						{/* Text content */}
						<div className="flex flex-col justify-center p-6 lg:p-8 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-l-2xl border-r border-white/10 relative overflow-hidden transition-all duration-300"
							style={{ 
								boxShadow: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
							}}>
							<div className="absolute inset-0 opacity-10">
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
							</div>
							
							<div className="relative z-10">
								<div className="mb-10">
									<div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 py-3 px-6 rounded-2xl shadow-lg hover:bg-white/15 transition-all duration-300 group"
										style={{
											boxShadow: DARK_THEME_SHADOWS.CARD.MEDIUM,
										}}>
										<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
										<h5 className="text-white font-bold text-lg tracking-wider group-hover:scale-105 transition-transform">ABOUT US</h5>
										<div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
									</div>
								</div>
								
								<h2 className="text-4xl lg:text-6xl font-bold text-white mb-10 leading-tight">
									<span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">About Terrene</span>
									<br /><span className="text-white/90 font-light">Engineering</span>
								</h2>
								
								<div className="flex items-center gap-4 mb-10">
									<div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
									<div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
									<div className="w-8 h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full"></div>
								</div>
								
								<p className="text-white/90 text-lg leading-relaxed max-w-lg mb-6">
									Established with a vision to transform the engineering landscape, Terrene Engineering (Private) Limited has been at the forefront of innovative solutions for over two decades. Our team of licensed professional engineers specializes in structural design, civil engineering, and architectural consulting, delivering projects that exceed industry standards while maintaining the highest levels of safety and sustainability.
								</p>
								
								<div className="flex flex-wrap gap-4 mb-8">
									<div className="flex items-center gap-2 text-white/80 text-sm">
										<Award className="w-4 h-4 text-primary" />
										<span>20+ Years Experience</span>
									</div>
									<div className="flex items-center gap-2 text-white/80 text-sm">
										<Users className="w-4 h-4 text-primary" />
										<span>Expert Team</span>
									</div>
									<div className="flex items-center gap-2 text-white/80 text-sm">
										<CheckCircle className="w-4 h-4 text-primary" />
										<span>Quality Assured</span>
									</div>
								</div>
								
								<Button variant="outline" className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
									style={{
										boxShadow: DARK_THEME_SHADOWS.CARD.MEDIUM,
									}}>
									<span className="flex items-center gap-3">
										Learn More About Us
										<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
									</span>
								</Button>
							</div>
						</div>
						
						{/* Image */}
						<div
							ref={imageRef}
							className="relative min-h-[250px] md:min-h-[300px] lg:min-h-[350px] flex items-stretch rounded-r-2xl overflow-hidden border border-white/10 transition-all duration-300"
							style={{
								opacity: isImageVisible ? 1 : 0,
								transform: isImageVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
								transition: 'all 1s cubic-bezier(.4,0,.2,1)',
								boxShadow: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
							}}
							onMouseEnter={() => setIsHovering(true)}
							onMouseLeave={() => setIsHovering(false)}
						>
							{/* First image */}
							<img
								src={homepageBuildingImage}
								alt="Terrene Engineering Building"
								className={`w-full h-full object-cover transition-transform duration-1000 absolute inset-0 ${showSecondImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
								style={{
									zIndex: 10,
									transform: isHovering ? 'scale(1.07)' : 'scale(1)',
									minHeight: '250px',
									height: '100%',
									transition: 'opacity 1s, transform 1s',
								}}
							/>
							{/* Second image with fade-in and slight scale animation */}
							<img
								src={building2}
								alt="Terrene Engineering Building 2"
								className={`w-full h-full object-cover transition-transform duration-1000 absolute inset-0 ${showSecondImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
								style={{
									zIndex: 20,
									minHeight: '250px',
									height: '100%',
									transition: 'opacity 1s, transform 1s',
								}}
							/>
							<div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#141414]/95 via-[#141414]/70 to-transparent pointer-events-none z-30"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;