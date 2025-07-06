import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import coper from '../assert/Packages/coper.png';
import silver from '../assert/Packages/Silver.png';
import gold from '../assert/Packages/gold.png';
import Crystal from '../assert/Packages/Crystal.png';
import white from '../assert/Packages/white.png';
import Header from '../components/Header.tsx';
import packagestop from '../assert/Project/faculty.jpg';


const packageData = [
	{
		name: 'Starter Package – For First-Time Builders or Small Homes',
		image: coper,
		details: `Ideal for: Small house builders, basic 1-storey buildings, or those with tight budgets.
Included:
• Simple building plan + 3D image to visualize
• Structural layout for safe construction
• Electrical & plumbing line plan (basic)
• Setting Out Plan for on-site work
• BOQ (Budget Estimate) – Simple cost estimate
• Bank Loan Estimate – Approved format for banks
• Help with local plan approval documents
• Material advice for low-cost, good-quality products
• Quotation format to help with outside labour
• Optional construction support (foundation to slab)`,
		price: '$500',
	},
	{
		name: 'Mid-Level Package – For 2-Storey Homes or Small Apartments',
		image: silver,
		details: `Ideal for: Growing families, upstairs homes, or people needing more detail & finish.
Included:
• Upgraded house plans + full 3D views
• Detailed structure for all floors
• Wiring for CCTV, TV, door bells, etc.
• Drainage, water tanks, and pipe layout
• Setting Out Plan for all floors
• Price comparison for materials (local brands)
• Detailed BOQ for full cost idea
• Bank Loan Estimate in professional format
• Full help with local plan approval process
• Optional construction support for reliable clients
• Tender/Quotation support if you're subcontracting`,
		price: '$1,200',
	},
	{
		name: 'High-End Package – For Modern Homes, Apartments, or Offices',
		image: gold,
		details: `Ideal for: Stylish villas, apartments, high-budget houses or business premises.
Included:
• Fully customized building design + interiors
• Creative landscaping & garden planning
• Full safety structure (wind, flood, earthquake areas)
• A/C, solar, water filtration, and smart home layout
• CCTV, access control, smart lighting systems
• Setting Out Plan with BIM-supported accuracy
• BOQ with stage-wise cost breakdown
• Bank Loan Estimate matching financial institution needs
• Support for full tender & contract documents
• Plan approval guidance with required Sri Lankan documents
• Full construction management (for selected clients only)
• Software training (AutoCAD, Revit, SketchUp etc.) – Optional`,
		price: '$2,500',
	},
	{
		name: 'International Package – For Overseas Clients Building in Sri Lanka',
		image: white,
		details: `Ideal for: Sri Lankans living abroad, foreign investors, or companies planning construction in Sri Lanka without being physically present.
Included:
• Customized architectural and structural design suited to Sri Lankan conditions
• All drawings and documents in English, with clear instructions
• Digital coordination via Zoom/Google Meet (weekly updates available)
• Assistance with obtaining plan approvals from local authorities (through authorized agents)
• Bank loan estimate documents prepared for Sri Lankan banks (if needed)
• 3D walk-through & high-quality renders for remote visualization
• BOQ with international material references or local alternatives
• Contractor/tender guidance or appointment (if construction is handled locally)
• Progress monitoring support and milestone-based inspections (video/photo updates)
• Optional: Construction monitoring services through subcontracting partners
Special Note: Tailored to save your time, avoid miscommunication, and allow you to build with confidence while you’re abroad.`,
		price: '$4,000',
	},
	{
		name: 'Corporate Package – For Companies, Offices, Schools, and Institutions',
		image: Crystal,
		details: `Ideal for: Businesses, schools, government projects, hotels, hospitals, and private sector buildings.
Included:
• Detailed architectural and structural plans for commercial use
• Electrical, plumbing, and ELV systems designed as per regulatory codes
• Energy-efficient designs and layout optimization for business use
• BOQ with phase-wise implementation (foundation, structure, finishing, etc.)
• Support for tender documentation and contractor shortlisting
• Documentation for approvals from relevant regulatory bodies (UDA, CEA, etc.)
• Cost-saving suggestions through value engineering
• Optional BIM-based service for large-scale coordination
• Corporate identity-based interior design (branding integration)
• Dedicated project manager for corporate clients (available on retainer)
Optional Add-Ons:
• Software training for your staff (AutoCAD, Revit, Primavera)
• Furniture and interior layout planning
• Material supply coordination from local or international sources`,
		price: 'Custom Quote',
	},
	{
		name: 'Terrene Special',
		image: gold, // You can use any image you prefer
		details: `Ideal for: Luxury villas, custom homes, or clients seeking exclusive design and project management.
Included:
• Bespoke architectural and interior design
• Advanced 3D visualization and VR walkthroughs
• Full project management and site supervision
• Smart home and automation integration
• Landscape and pool design
• Concierge support for permits and approvals
Optional Add-Ons:
• Private client portal for project tracking
• International material sourcing
• Post-construction maintenance package`,
		price: '$7,500',
	},
];

const Packages = () => {
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);

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

    return (
        <div className="min-h-screen bg-[#212121]">
			<div
				className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
					showHeader ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<Header />
			</div>

			{/* Hero Section with Packages Image */}
			<div className="relative w-full h-64 md:h-80">
				<img
					src={packagestop}
					alt="Architectural Packages"
					className="w-full h-full object-cover brightness-50"
				/>
				{/* Add a dark shadow overlay for better text visibility */}
				<div className="absolute inset-0 bg-black/"></div>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
					<h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-2xl">Our Packages</h1>
					<p className="text-lg md:text-xl max-w-2xl text-center px-4 drop-shadow-lg">
						Transforming spaces with innovative design and precision
					</p>
				</div>
			</div>

			<div className="relative py-4 px-4">
				<div className="absolute inset-0 bg-gradient-to-b from-[#0E75A0]/30 to-[#212121]"></div>
				<div className="relative z-10 max-w-[2400px] mx-auto text-center">
					<div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
				</div>
			</div>

			{/* Packages Grid */}
			<main className="pt-0 md:pt-0 pb- md:pb-24">
				<div className="w-full max-w-[2400px] mx-auto px-5 md:px-9 lg:px-14 relative z-20">
					{/* First row - 3 packages */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
						{packageData.slice(0, 3).map((pkg, index) => (
							<div
								key={index}
								className="flex flex-col justify-start p-0 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl"
							>
								{/* Shading Effects */}
								<div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
								<div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
								<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>

								{/* Light Effects */}
								<div className="absolute inset-0 opacity-10 pointer-events-none">
									<div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
									<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
								</div>

								{/* Package Image */}
								<div className="w-full overflow-hidden rounded-t-3xl -mt-12">
									<div className="relative">
										<img
											src={pkg.image}
											alt={pkg.name}
											className="w-full h-[320px] object-cover object-center"
										/>
									</div>
								</div>

								{/* Content */}
								<div className="relative z-10 flex flex-col items-start h-full p-6">
									<h3 className="text-2xl font-bold text-white mb-4">
										{pkg.name}
									</h3>

									{/* Structured Content */}
									<div className="text-white/ mb-6 flex-grow space-y-4">
										{/* Ideal For Section */}
										<div>
											<p className="font-semibold text-white mb-1">
												Ideal for:
											</p>
											<p className="pl-4 text-sm">
												{pkg.details
													.split('Ideal for:')[1]
													.split('Included:')[0]
													.trim()}
											</p>
										</div>

										{/* Included Section */}
										<div>
											<p className="font-semibold text-white mb-1">
												Included:
											</p>
											<ul className="list-none pl-4 space-y-1">
												{pkg.details
													.split('Included:')[1]
													.split('•')
													.filter(item => item.trim())
													.map((item, i) => (
														<li
															key={i}
															className="text-sm flex items-start"
														>
															<span className="mr-2">•</span>
															<span>{item.trim()}</span>
														</li>
													))}
											</ul>
										</div>

										{/* Optional Add-Ons Section - Only for packages that have them */}
										{pkg.details.includes('Optional Add-Ons:') && (
											<div>
												<p className="font-semibold text-white mb-1">
													Optional Add-Ons:
												</p>
												<ul className="list-none pl-4 space-y-1">
													{pkg.details
														.split('Optional Add-Ons:')[1]
														.split('•')
														.filter(item => item.trim())
														.map((item, i) => (
															<li
																key={i}
																className="text-sm flex items-start"
															>
																<span className="mr-2">•</span>
																<span>{item.trim()}</span>
															</li>
														))}
												</ul>
											</div>
										)}
									</div>

									<div className="w-full">
										<Link
											to={`/packages/${pkg.name
												.toLowerCase()
												.replace(' ', '-')}`}
											className="block w-full text-center py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all duration-300"
										>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Second row - 2 packages, manual alignment */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{packageData.slice(3, 6).map((pkg, index) => (
							<div
								key={index}
								className="flex flex-col justify-start p-0 bg-gradient-to-br from-[#0E75A0] to-[#0a5a7a] rounded-3xl border-2 border-white/10 relative overflow-hidden shadow-2xl"
							>
								{/* Shading Effects */}
								<div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
								<div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
								<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>

								{/* Light Effects */}
								<div className="absolute inset-0 opacity-10 pointer-events-none">
									<div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
									<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
								</div>

								{/* Package Image */}
								<div className="w-full overflow-hidden rounded-t-3xl -mt-12">
									<div className="relative">
										<img
											src={pkg.image}
											alt={pkg.name}
											className="w-full h-[320px] object-cover object-center"
										/>
									</div>
								</div>

								{/* Content */}
								<div className="relative z-10 flex flex-col items-start h-full p-6">
									<h3 className="text-2xl font-bold text-white mb-4">
										{pkg.name}
									</h3>

									{/* Structured Content */}
									<div className="text-white/ mb-6 flex-grow space-y-4">
										{/* Ideal For Section */}
										<div>
											<p className="font-semibold text-white mb-1">
												Ideal for:
											</p>
											<p className="pl-4 text-sm">
												{pkg.details
													.split('Ideal for:')[1]
													.split('Included:')[0]
													.trim()}
											</p>
										</div>

										{/* Included Section */}
										<div>
											<p className="font-semibold text-white mb-1">
												Included:
											</p>
											<ul className="list-none pl-4 space-y-1">
												{pkg.details
													.split('Included:')[1]
													.split('•')
													.filter(item => item.trim())
													.map((item, i) => (
														<li
															key={i}
															className="text-sm flex items-start"
														>
															<span className="mr-2">•</span>
															<span>{item.trim()}</span>
														</li>
													))}
											</ul>
										</div>

										{/* Optional Add-Ons Section - Only for packages that have them */}
										{pkg.details.includes('Optional Add-Ons:') && (
											<div>
												<p className="font-semibold text-white mb-1">
													Optional Add-Ons:
												</p>
												<ul className="list-none pl-4 space-y-1">
													{pkg.details
														.split('Optional Add-Ons:')[1]
														.split('•')
														.filter(item => item.trim())
														.map((item, i) => (
															<li
																key={i}
																className="text-sm flex items-start"
															>
																<span className="mr-2">•</span>
																<span>{item.trim()}</span>
															</li>
														))}
												</ul>
											</div>
										)}
									</div>

									<div className="w-full">
										<Link
											to={`/packages/${pkg.name
												.toLowerCase()
												.replace(' ', '-')}`}
											className="block w-full text-center py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all duration-300"
										>
											Learn More
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>

			<div className="hidden md:block" style={{ width: '5%' }} />

			<Footer />
		</div>
    );
};

export default Packages;