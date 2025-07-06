import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, 
  Briefcase, Award, Users, BookOpen, ChevronRight 
} from 'lucide-react';
import contactus from '../assert/career.jpg';

const Career = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: '',
  });
  
  const [formStep, setFormStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const formRef = useRef(null);

  // Job positions
  const positions = [
    {
      title: "Senior Structural Engineer",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 150,000 - 200,000",
      description: "Lead structural design projects and mentor junior engineers in our growing team."
    },
    {
      title: "Civil Engineering Graduate",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 80,000 - 120,000",
      description: "Join our team as a fresh graduate and grow your career in civil engineering."
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "LKR 180,000 - 250,000",
      description: "Manage multiple engineering projects and coordinate with clients and teams."
    }
  ];

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' && files?.[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    window.scrollTo({ top: formRef.current.offsetTop, behavior: 'smooth' });
  };

  const nextStep = () => setFormStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setFormStep(prev => Math.max(prev - 1, 0));

  const isFormValid = () => {
    if (formStep === 0) {
      return formData.name && formData.email && formData.phone;
    } else if (formStep === 1) {
      return formData.position && formData.experience;
    }
    return formData.resume && formData.coverLetter;
  };

  return (
    <div className="min-h-screen bg-[#212121]">
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      
      {/* Hero Section with Image */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <img 
          src={contactus} 
          alt="Career Opportunities" 
          className="w-full h-full object-cover object-center brightness-70 scale-105 hover:scale-100 transition-all duration-700"
        />
        {/* Enhanced shading with multiple overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E75A0]/40 to-[#212121]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-12 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4 shadow-md">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">Build Your Career at <br/><span className="text-blue-300">Terrene Engineering</span></h1>
            <p className="text-lg md:text-xl text-white mb-6 drop-shadow-md">
              Be part of an innovative team shaping the future of infrastructure and design
            </p>
            <a href="#open-positions" className="inline-flex items-center bg-white text-[#0E75A0] px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-lg">
              View Open Positions <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Why work with us section */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-center mb-4 text-white">Why Work With Us</h2>
              <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
                Join a workplace that values innovation, growth, and work-life balance
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-[#0E75A0] rounded-lg shadow-lg p-5 text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white text-lg">50+ Employees</h3>
                  <p className="text-gray-200 text-sm">Growing team of diverse professionals from various backgrounds</p>
                </div>
                <div className="bg-[#0E75A0] rounded-lg shadow-lg p-5 text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white text-lg">Flexible Hours</h3>
                  <p className="text-gray-200 text-sm">Work-life balance is our priority for employee wellbeing</p>
                </div>
                <div className="bg-[#0E75A0] rounded-lg shadow-lg p-5 text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white text-lg">Competitive Pay</h3>
                  <p className="text-gray-200 text-sm">Market-leading salaries and performance bonuses</p>
                </div>
                <div className="bg-[#0E75A0] rounded-lg shadow-lg p-5 text-center transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white text-lg">Career Growth</h3>
                  <p className="text-gray-200 text-sm">Professional development and advancement opportunities</p>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="w-full">
              {/* Open Positions */}
              <div
                className="mb-16 flex flex-col justify-center min-h-[18rem] md:min-h-[24rem] px-0"
                id="open-positions"
                style={{ maxWidth: "100%" , }} // Ensures full width
              >
                <h2 className="text-3xl font-semibold text-center mb-4 text-white">Open Positions</h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
                  Explore our current job openings and find the right fit for your skills
                </p>
                
                <div className="space-y-5">
                  {positions.map((position, index) => (
                    <div
                      key={index}
                      className="bg-[#0E75A0] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group w-[95vw] relative left-1/2 right-1/2 -mx-[47.5vw]"
                      style={{ minHeight: '100px' }}
                    >
                      <div className="p-8 md:p-8 max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                          <div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">{position.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-200 mb-4">
                              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                <Briefcase className="w-5 h-5 text-white" />
                                {position.department}
                              </span>
                              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                <MapPin className="w-5 h-5 text-white" />
                                {position.location}
                              </span>
                              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                <Clock className="w-5 h-5 text-white" />
                                {position.type}
                              </span>
                            </div>
                          </div>
                          <div className="text-white bg-white/10 px-6 py-2 rounded-lg font-medium">
                            {position.salary}
                          </div>
                        </div>
                        <p className="text-gray-200 mb-6 text-lg">{position.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="w-full mb-16">
              <h2 className="text-3xl font-semibold text-center mb-4 text-white">Contact Us</h2>
              <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
                Have questions about our openings? Get in touch with our recruitment team
              </p>
              
              <div 
                className="bg-[#0E75A0] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group w-[95vw] relative left-1/2 right-1/2 -mx-[47.5vw]"
              >
                <div className="p-8 md:p-12 max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="mt-1 mr-4 bg-white/10 p-3 rounded-full">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">Call Us</h4>
                            <p className="text-gray-200">+94 11 123 4567</p>
                            <p className="text-gray-200">Mon-Fri, 9:00 AM - 6:00 PM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-1 mr-4 bg-white/10 p-3 rounded-full">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">Email Us</h4>
                            <p className="text-gray-200">careers@terreneeng.com</p>
                            <p className="text-gray-200">hr@terreneeng.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="mt-1 mr-4 bg-white/10 p-3 rounded-full">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">Visit Us</h4>
                            <p className="text-gray-200">123 Engineering Plaza,</p>
                            <p className="text-gray-200">Colombo 03, Sri Lanka</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-6 bg-[#094a65] rounded-lg">
                        <h4 className="font-semibold text-white mb-3">Follow Our Journey</h4>
                        <p className="text-gray-200 mb-4">Connect with us on social media for company updates and new opportunities</p>
                        <div className="flex gap-4">
                          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-white/5 p-6 md:p-8 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>
                      
                      <form className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                            Full Name
                          </label>
                          <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email Address
                          </label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
                            Subject
                          </label>
                          <input 
                            type="text" 
                            id="subject" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="What is this regarding?"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                            Message
                          </label>
                          <textarea 
                            id="message" 
                            rows={4}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="How can we help you?"
                          ></textarea>
                        </div>
                        
                        <Button 
                          type="submit"
                          className="w-full bg-white hover:bg-gray-100 text-[#0E75A0] transition-colors flex items-center justify-center gap-2 py-6"
                        >
                          <Send className="w-4 h-4" />
                          Send Message
                        </Button>
                      </form>
                      
                      <p className="text-gray-300 text-sm mt-6">
                        By submitting this form, you agree to our privacy policy and consent to being contacted regarding employment opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
