import React from "react";

interface ExecutiveMember {
  name: string;
  position: string;
  image: string;
}


const ExecutiveCouncil: React.FC = () => {
  const executiveTeam: ExecutiveMember[] = [
    {
      name: "Pratham Bansal",
      position: "President",
      image: "/Images/presidentPratham.png",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
            Executive Council
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals leading DCG's mission to deliver
            exceptional consulting services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#020F59] mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <button className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCouncil;