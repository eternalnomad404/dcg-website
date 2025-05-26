import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Linkedin,} from "lucide-react";

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
      description: "Supporting the team and driving new initiatives for society growth.."
    },
    {
      name: "Nishit Jain",
      position: "General Secretary",
      image: "/Images/generalSecretaryNishit.png",
      description: "Ensuring smooth communication and organizing all our activities."
    },
    {
      name: "Priyank Popli",
      position: "Treasurer",
      image: "/Images/treasurerPriyank.png",
      description: "Managing financial operations and strategic investment decisions to ensure sustainable growth."
    },
    {
      name: "Pratyush Kumar",
      position: "Tresurer",
      image: "/Images/treasurerPratyush.png",
      description: "Overseeing budgets and making sure our spending is transparent."
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

  useEffect(() => {
    const handleResize = () => {
      const newCards = getCardsPerView();
      setCardsPerView(newCards);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, executiveTeam.length - newCards)));
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },);

  const maxIndex = Math.max(0, executiveTeam.length - cardsPerView);

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
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

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
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                gap: "1.5rem",
              }}
            >
              {executiveTeam.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group h-full">
                    <div className="relative w-24 h-24 mx-auto mt-8 mb-6">
                      <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-[#B6D8C3] ring-opacity-30 group-hover:ring-opacity-60 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
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
                      <button className="inline-flex items-center space-x-2 bg-[#020F59] text-white px-4 py-2 rounded-full hover:bg-[#B6D8C3] hover:text-[#020F59] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm group-hover:shadow-xl">
                        <Linkedin size={16} />
                        <span className="font-medium">Connect</span>
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#B6D8C3] to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-[#020F59] to-transparent rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 text-[#020F59] z-20 group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 text-[#020F59] z-20 group"
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
