import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

interface ExecutiveMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

const ExecutiveCouncil: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const executiveTeam: ExecutiveMember[] = [
    {
      name: "Pratham Bansal",
      position: "President",
      image: "/Images/presidentPratham.png",
      description: "Leading DCG with strategic vision and innovative solutions to drive organizational excellence."
    },
    {
      name: "Aniket Gupta",
      position: "Vice President",
      image: "/Images/vicePresidentAniket.png",
      description: "Driving operational efficiency and fostering strategic partnerships across all business units."
    },
    {
      name: "Nishit Jain",
      position: "General Secretary",
      image: "/Images/generalSecretaryNishit.png",
      description: "Ensuring governance excellence and maintaining organizational transparency and accountability."
    },
    {
      name: "Priyank Popli",
      position: "Treasurer",
      image: "/Images/treasurerPriyank.png",
      description: "Managing financial operations and strategic investment decisions to ensure sustainable growth."
    },
    {
      name: "Pratyush Kumar",
      position: "Treasurer",
      image: "/Images/treasurerPratyush.png",
      description: "Developing innovative marketing strategies to expand our reach and strengthen brand presence."
    },
    {
      name: "Shivam Bhardwaj",
      position: "Secretary",
      image: "/Images/secretaryShivam.png",
      description: "Streamlining processes and optimizing workflow efficiency across all organizational departments."
    },
    {
      name: "Vinayak",
      position: "Secretary",
      image: "/Images/secretaryVinayak.png",
      description: "Driving digital transformation and implementing cutting-edge technology solutions for business growth."
    }
  ];

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  // Fixed: Added missing dependency array
  useEffect(() => {
    const handleResize = () => {
      const newCards = getCardsPerView();
      setCardsPerView(newCards);
      // Ensure currentIndex doesn't exceed bounds when cards per view changes
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, executiveTeam.length - newCards)));
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [executiveTeam.length]); // Fixed: Added dependency array

  const maxIndex = Math.max(0, executiveTeam.length - cardsPerView);

  // Auto-slide functionality
  useEffect(() => {
    if (maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#020F59] mb-6 tracking-tight">
            Executive Council
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Meet the talented individuals leading DCG's mission to deliver exceptional consulting services.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {executiveTeam.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsPerView}% - ${24 * (cardsPerView - 1) / cardsPerView}px)` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full">
                    {/* Profile image section */}
                    <div className="relative w-24 h-24 mx-auto mt-8 mb-6">
                      <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-[#B6D8C3] ring-opacity-30 group-hover:ring-opacity-60 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.position}`}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    
                    {/* Content section */}
                    <div className="px-8 pb-8 text-center">
                      <h3 className="text-xl font-bold text-[#020F59] mb-2 group-hover:text-[#B6D8C3] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-[#B6D8C3] font-semibold mb-4 text-sm uppercase tracking-wider">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {member.description}
                      </p>
                      <button 
                        className="inline-flex items-center space-x-2 bg-[#020F59] text-white px-4 py-2 rounded-full hover:bg-[#B6D8C3] hover:text-[#020F59] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm group-hover:shadow-xl"
                        aria-label={`Connect with ${member.name}`}
                      >
                        <User size={16} />
                        <span className="font-medium">Connect</span>
                      </button>
                    </div>
                    
                    {/* Decorative elements */}
                     </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - only show if there are multiple slides */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 text-[#020F59] z-20 group border border-gray-200"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 text-[#020F59] z-20 group border border-gray-200"
                aria-label="Next slide"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCouncil;