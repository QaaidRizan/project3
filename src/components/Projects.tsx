import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';

import commercialImage from '../assert/Project/comercial.jpg';
import educationImage from '../assert/Project/education.jpg';
import facultyImage from '../assert/Project/faculty.jpg';
import hospitalImage from '../assert/Project/hospital.jpg';
import infrastructureImage from '../assert/Project/infrastructure.jpg';
import StructuralEngineering from '../assert/StructuralEngineering.jpg';

const CARD_WIDTH = 300.5; // Adjusted from 320 to 300
const CARD_GAP = 17; // Adjusted from 20 to 16
const VISIBLE_COUNT = 4;

const initialProjects = [
    {
        index: 1,
        title: 'Commercial Complex Design',
        category: 'Commercial',
        image: commercialImage,
        location: 'Downtown Metro City',
        year: '2023',
    },
    {
        index: 2,
        title: 'Educational Building',
        category: 'Institutional',
        image: educationImage,
        location: 'University Campus',
        year: '2022',
    },
    {
        index: 3,
        title: 'Residential Development',
        category: 'Residential',
        image: facultyImage,
        location: 'Coastal Heights',
        year: '2022',
    },
    {
        index: 4,
        title: 'Healthcare Facility',
        category: 'Healthcare',
        image: hospitalImage,
        location: 'Central Medical District',
        year: '2021',
    },
    {
        index: 5,
        title: 'Infrastructure Project',
        category: 'Infrastructure',
        image: infrastructureImage,
        location: 'Regional Highway 101',
        year: '2023',
    },
    {
        index: 6,
        title: 'Industrial Facility',
        category: 'Industrial',
        image: commercialImage,
        location: 'Tech Industrial Park',
        year: '2021',
    },
    {
        index: 7,
        title: 'Urban Office Tower',
        category: 'Commercial',
        image: commercialImage,
        location: 'Metro Business District',
        year: '2024',
    },
    {
        index: 8,
        title: 'Science Research Center',
        category: 'Institutional',
        image: educationImage,
        location: 'Innovation Park',
        year: '2023',
    },
    {
        index: 9,
        title: 'Luxury Apartments',
        category: 'Residential',
        image: facultyImage,
        location: 'Uptown Residences',
        year: '2024',
    },
    {
        index: 10,
        title: 'City Hospital Expansion',
        category: 'Healthcare',
        image: hospitalImage,
        location: 'Health Avenue',
        year: '2023',
    },
];

function preloadImages(projects) {
    projects.forEach((p) => {
        const img = new window.Image();
        img.src = p.image;
    });
}

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false); // <-- Add this state
    const intervalRef = useRef(null);
    const carouselRef = useRef(null);

    // Preload images
    useEffect(() => {
        preloadImages(initialProjects);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        if (isPaused) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }
        const startAutoSlide = () => {
            intervalRef.current = setInterval(() => {
                handleNext();
            }, 4000);
        };

        startAutoSlide();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]); // <-- depend on isPaused

    // Create extended array for infinite scrolling
    const extendedProjects = [
        ...initialProjects.slice(-VISIBLE_COUNT), // Last 5 items at the beginning
        ...initialProjects,
        ...initialProjects.slice(0, VISIBLE_COUNT), // First 5 items at the end
    ];

    const handleNext = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
        
        setTimeout(() => {
            setIsTransitioning(false);
            // Reset to beginning when we reach the end
            setCurrentIndex(prev => {
                if (prev >= initialProjects.length) {
                    return 0;
                }
                return prev;
            });
        }, 600);
    };

    // Calculate transform for smooth infinite scrolling
    const getTransform = () => {
        const baseTransform = (currentIndex + VISIBLE_COUNT) * (CARD_WIDTH + CARD_GAP);
        return `translateX(-${baseTransform}px)`;
    };

    // Responsive card width classes
    const getCardWidthClass = () => {
        return "w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]";
    };

    return (
        <section
            id="projects"
            className="py-16 md:py-20 bg-[#212121] w-full relative overflow-hidden"
        >
            <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16 relative z-20">
                <Card
                    className={`${SPACING_CLASSES.COMPONENT} bg-background/80 rounded-2xl border border-white/10 relative overflow-hidden transition-all duration-300 hover:shadow-2xl`}
                >
                    {/* Blurred background image */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url(${StructuralEngineering})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/25 z-10"></div>
                    
                    <div className="relative z-20 p-6 md:p-8 lg:p-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                    Featured Projects
                                </h2>
                                <div className="relative h-1.5 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                                </div>
                              
                            </div>
                            <div className="hidden md:block">
                                <Button
                                    variant="outline"
                                    className="bg-[#00A5E7] border-white border-2 text-white hover:bg-[#00A5E7]/90 hover:border-white px-6 py-1.5 font-semibold rounded-lg transition-all duration-300 shadow-lg text-base"
                                >
                                    View All Projects
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        {/* Carousel Container */}
                        <div className="relative">
                            {/* Carousel */}
                            <div
                                className="overflow-hidden"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div
                                    ref={carouselRef}
                                    className="flex gap-5 transition-transform duration-700 ease-in-out will-change-transform"
                                    style={{
                                        transform: getTransform(),
                                    }}
                                >
                                    {extendedProjects.map((project, idx) => (
                                        <Card
                                            key={`${project.index}-${idx}`}
                                            className={`${getCardWidthClass()} flex-none group hover:shadow-2xl shadow-lg transition-all duration-500 overflow-hidden bg-background/90 backdrop-blur-md border border-white/20 select-none p-0 hover:scale-105 hover:-translate-y-2 shadow-xl`}
                                        >
                                            <div className="relative overflow-hidden h-67 md:h-53 lg:h-[385px]">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-white/20">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                                                    <h3 className="text-base md:text-lg font-semibold text-white mb-1 line-clamp-2">
                                                        {project.title}
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-white/ truncate mr-2">
                                                            {project.location}
                                                        </span>
                                                        <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded">
                                                            {project.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>


                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-12 text-center md:hidden">
                            <Button
                                variant="outline"
                                className="w-full max-w-md transition-all duration-300 hover:shadow-lg border-primary text-primary hover:bg-primary/10"
                            >
                                View All Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Projects;