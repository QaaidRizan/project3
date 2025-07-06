import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Home, FileText, Briefcase, Users, Phone, Mail, Grid, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import image from '../assert/home.jpg'; // Adjust the import if needed

// Sitemap data structure
const sitemapData = [
  {
    title: 'Home',
    path: '/',
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <Users className="w-5 h-5" />,
    children: [
      { title: 'Our Story', path: '/about#story' },
      { title: 'Our Team', path: '/about#team' },
      { title: 'Our Values', path: '/about#values' },
      { title: 'Company History', path: '/about#history' },
    ]
  },
  {
    title: 'Services',
    path: '/services',
    icon: <Grid className="w-5 h-5" />,
    children: [
      { title: 'Structural Engineering', path: '/services/structural' },
      { title: 'Civil Engineering', path: '/services/civil' },
      { title: 'Architectural Design', path: '/services/architecture' },
      { title: 'Project Management', path: '/services/project-management' },
      { title: 'Consultancy', path: '/services/consultancy' },
    ]
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Map className="w-5 h-5" />,
    children: [
      { title: 'Residential', path: '/projects/residential' },
      { title: 'Commercial', path: '/projects/commercial' },
      { title: 'Industrial', path: '/projects/industrial' },
      { title: 'Infrastructure', path: '/projects/infrastructure' },
      { 
        title: 'Case Studies', 
        path: '/projects/case-studies',
        children: [
          { title: 'Harbor City Tower', path: '/projects/case-studies/harbor-city-tower' },
          { title: 'Marina Bay Complex', path: '/projects/case-studies/marina-bay-complex' },
          { title: 'Central Highway Project', path: '/projects/case-studies/central-highway' },
        ] 
      },
    ]
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <FileText className="w-5 h-5" />,
    children: [
      { title: 'Industry News', path: '/blog/news' },
      { title: 'Technical Articles', path: '/blog/technical' },
      { title: 'Company Updates', path: '/blog/updates' },
    ]
  },
  {
    title: 'Careers',
    path: '/careers',
    icon: <Briefcase className="w-5 h-5" />,
    children: [
      { title: 'Open Positions', path: '/careers#open-positions' },
      { title: 'Why Join Us', path: '/careers#benefits' },
      { title: 'Application Process', path: '/careers#application' },
    ]
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Phone className="w-5 h-5" />,
    children: [
      { title: 'General Inquiries', path: '/contact#general' },
      { title: 'Project Inquiries', path: '/contact#project' },
      { title: 'Office Locations', path: '/contact#locations' },
    ]
  },
];

// Recursive component to render sitemap items
const SitemapItem = ({ item, level = 0 }) => {
  return (
    <div className={`pl-${level > 0 ? level * 8 : 0}`}>
      <div className={`flex items-center ${level === 0 ? 'mb-2' : 'my-1'}`}>
        {level === 0 && item.icon && 
          <div className="mr-2 text-white">{item.icon}</div>
        }
        {level > 0 && 
          <ChevronRight className="w-4 h-4 mr-2 text-white/70" />
        }
        <Link 
          to={item.path} 
          className={`
            ${level === 0 ? 'text-lg font-semibold text-white' : 'text-base text-white/80 hover:text-white'}
            transition-colors
          `}
        >
          {item.title}
        </Link>
      </div>
      {item.children && (
        <div className={`ml-${level > 0 ? '6' : '4'} pl-4 border-l-2 border-white/20 my-2`}>
          {item.children.map((child, idx) => (
            <SitemapItem key={idx} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sitemap = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

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

  return (
    <div className="min-h-screen bg-[#212121]">
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      
      {/* Header Banner with Background Image */}
      <div className="relative py-24 px-4"> {/* Increased from py-16 to py-24 */}
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="Sitemap Header" 
            className="w-full h-full object-cover"
          />
          {/* Darker overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#094a65]/95 via-[#094a65]/90 to-[#094a65]/95"></div>
          <div className="absolute inset-0 bg-black/40"></div> {/* Increased from 30% to 40% for better visibility */}
        </div>
        
        {/* Content (in front of the image) */}
        <div className="container mx-auto relative z-10 pt-8"> {/* Added pt-8 to move text down */}
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg shadow-black">Sitemap</h1>
          <div className="flex justify-center mt-4">
            <nav className="flex items-center text-white drop-shadow-md">
              <Link to="/" className="hover:text-white transition-colors shadow-sm">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white font-medium">Sitemap</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="bg-[#0E75A0] rounded-lg shadow-md p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-8 pb-4 border-b border-white/20">
            Website Navigation Structure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {sitemapData.map((section, index) => (
              <div key={index} className="bg-[#0a6489] rounded-lg p-6 shadow-sm border border-white/10">
                <SitemapItem item={section} />
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Additional Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#0a6489] p-4 rounded-md border border-white/10">
                <h4 className="font-medium text-white mb-2">Legal Information</h4>
                <ul className="space-y-2">
                  <li><Link to="/terms" className="text-white/80 hover:text-white hover:underline">Terms of Service</Link></li>
                  <li><Link to="/privacy" className="text-white/80 hover:text-white hover:underline">Privacy Policy</Link></li>
                  <li><Link to="/cookies" className="text-white/80 hover:text-white hover:underline">Cookie Policy</Link></li>
                </ul>
              </div>
              <div className="bg-[#0a6489] p-4 rounded-md border border-white/10">
                <h4 className="font-medium text-white mb-2">Support</h4>
                <ul className="space-y-2">
                  <li><Link to="/faq" className="text-white/80 hover:text-white hover:underline">FAQ</Link></li>
                  <li><Link to="/support" className="text-white/80 hover:text-white hover:underline">Help Center</Link></li>
                  <li><Link to="/contact#support" className="text-white/80 hover:text-white hover:underline">Contact Support</Link></li>
                </ul>
              </div>
              <div className="bg-[#0a6489] p-4 rounded-md border border-white/10">
                <h4 className="font-medium text-white mb-2">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/investors" className="text-white/80 hover:text-white hover:underline">Investors</Link></li>
                  <li><Link to="/partners" className="text-white/80 hover:text-white hover:underline">Partners</Link></li>
                  <li><Link to="/newsroom" className="text-white/80 hover:text-white hover:underline">Press & Media</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sitemap;