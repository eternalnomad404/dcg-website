import React, { useState, useEffect } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
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
          <div className="text-2xl font-bold text-[#020F59] hover:opacity-90 transition-all duration-300 cursor-pointer">
            <span className="mr-2">DCG</span>
            <span className="text-base font-semibold bg-gradient-to-r from-[#020F59] to-[#0A2472] bg-clip-text text-transparent">
              Delhi Consulting Group
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Services
          </a>
          <div className="flex items-center space-x-3 ml-4">
            <button className="bg-[#020F59] text-white px-5 py-2 rounded-button font-medium hover:bg-[#0A2472] transition-all duration-300 whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md">
              Join Us
            </button>
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
              href="#"
              className="text-gray-700 hover:text-[#020F59] font-medium py-2"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#020F59] font-medium py-2"
            >
              Services
            </a>
            <button className="bg-[#B6D8C3] text-[#020F59] px-5 py-2 rounded-button font-medium hover:bg-[#9ac9ad] transition-all duration-300 whitespace-nowrap cursor-pointer">
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;