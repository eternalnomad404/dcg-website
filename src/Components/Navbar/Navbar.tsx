import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/Images/dcgLogoblack.png"
            alt="Delhi Consulting Group Logo"
            className="h-10 cursor-pointer hover:opacity-90 transition-all duration-300"
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="projects"
            className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Projects
          </a>
           {/* <a
            href="blogs"
            className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Blogs
          </a> */}
           <a
            href="resources"
            className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Resources
          </a>
           <a
            href="events"
            className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Events
          </a>
          <div className="flex items-center space-x-3 ml-4">
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#020F59] hover:text-[#0A2472] focus:outline-none cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <i
              className={`fa-solid ${
                isMenuOpen ? "fa-xmark" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="/"
              className="text-gray-700 hover:text-[#020F59] font-medium py-2"
            >
              Home
            </a>
             <a
              href="projects"
              className="text-gray-700 hover:text-[#020F59] font-medium py-2"
            >
              Projects
            </a>
             {/* <a
              href="blogs"
              className="text-gray-700 hover:text-[#020F59] font-medium py-2"
            >
              Blogs
            </a> */}
            <a
              href="/resources"
              className="text-gray-700 hover:text-[#020F59] font-medium py-2"
            >
              Resources
            </a>
                        <a
              href="/events"
              className="text-gray-700 hover:text-[#020F59] font-medium py-2"
            >
              Events
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
