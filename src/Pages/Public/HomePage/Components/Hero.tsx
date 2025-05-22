import React from "react";


const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url('./public/Images/heroImage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#020F59]/90 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Empowering Impact through Student-led Strategy
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Delhi Technological University's premier student-run consulting
            society delivering professional solutions with fresh perspectives.
          </p>
          <button className="bg-[#B6D8C3] text-[#020F59] px-8 py-3 rounded-button font-bold text-lg hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;