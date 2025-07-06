import React, { useEffect, useRef, useState } from "react";
import blog from "../assert/blog/blog.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const blogData = [
  {
    category: "BIM Services",
    description:
      "The latest and modern services have entirely changed the working concept and thinking process of constructing a building for a better future. Here are some ideas and concepts related to different types of BIM Services and their integration process.",
    articles: [
      "BIM for Product Manufacturers",
      "Why It is Time to Develop BIM Content?",
      "How MEP BIM Can Be Super Beneficial to MEP Contractors?",
      "Implementation of Shop Drawings into MEP BIM Services",
    ],
  },
  {
    category: "MEP Services",
    description:
      "MEP stands for mechanical, electrical, and plumbing services. We are an esteemed MEP service provider who understands client needs and delivers consultancy and services best suited for each project.",
    articles: [
      "What is the Role of an MEP Engineer before Construction Begins",
      "Benefits of Outsourcing MEP Services",
      "How to Coordinate MEP Systems in BIM",
    ],
  },
  {
    category: "Shop Drawing Services",
    description:
      "Shop Drawing Services provide a roadmap for clients to evaluate work details and understand the concept and need for the services. Our offerings include MEP Shop Drawings, BIM Shop Drawings, and more.",
    articles: [
      "Millwork Shop Drawing Company Serves the Construction Industry?",
      "Why Shop Drawings are Critical for Project Success",
      "How to Review and Approve Shop Drawings Efficiently",
    ],
  },
  {
    category: "General",
    description:
      "Terrene Engineering is a leading company providing services globally. With an in-house team of skilled engineers, designers, drafters, and modelers, we specialize in delivering accurate engineering services.",
    articles: [
      "How Outsourcing Helped Civil Engineering Companies During the Pandemic",
      "Statue of Unity: A Symbol of Engineering Excellence",
      '"Lachlan Line\'s Bridge": Easy to Pronounce, Hard to Build',
      "How Navisworks Helps with Clash Detection Services",
      "BOQ vs BOM: A Detailed Report on the Differences",
    ],
  },
];

const Blog = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

      {/* Hero Section with Blog Image */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={blog}
          alt="Engineering Blog"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Blog</h1>
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">
            Insights, news and technical articles from Terrene Engineering
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto py-10 px-4 md:px-60">
        <div className="space-y-8">
          {blogData.map((section, idx) => (
            <div
              key={idx}
              className="bg-[#0E75A0] rounded-lg shadow-xl overflow-hidden flex flex-col"
            >
              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3 border-b border-white/20 pb-2">
                  {section.category}
                </h2>

                <p className="text-gray-200 mb-4">{section.description}</p>

                <div className="border-t border-white/20 pt-4">
                  <h3 className="text-white font-semibold mb-2">
                    Featured Articles:
                  </h3>
                  <ul className="space-y-2">
                    {section.articles.slice(0, 3).map((article, i) => (
                      <li
                        key={i}
                        className="text-white/90 hover:text-white flex items-center"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-primary-300" />
                        <a
                          href="#"
                          className="hover:underline transition-all"
                        >
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {section.articles.length > 3 && (
                    <div className="mt-4 text-right">
                      <a
                        href="#"
                        className="text-white font-medium hover:underline inline-flex items-center"
                      >
                        View all {section.articles.length} articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="bg-[#085978] p-4 text-center">
                <a
                  href="#"
                  className="text-white font-medium hover:underline"
                >
                  Browse {section.category}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;