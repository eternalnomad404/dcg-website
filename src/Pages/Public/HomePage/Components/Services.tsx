import React from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}


const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Management",
      description:
        "Strategic planning and organizational development to optimize business operations and drive sustainable growth.",
      icon: "fa-solid fa-users-cog",
    },
    {
      title: "Human Resource",
      description:
        "Talent acquisition, development, and retention strategies to build high-performing teams.",
      icon: "fa-solid fa-user-tie",
    },
    {
      title: "Sustainability",
      description:
        "Environmental and social impact consulting to create responsible business practices.",
      icon: "fa-solid fa-leaf",
    },
    {
      title: "Financial",
      description:
        "Financial planning, analysis, and modeling to ensure fiscal health and profitability.",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "Marketing",
      description:
        "Data-driven marketing strategies and brand positioning to reach target audiences effectively.",
      icon: "fa-solid fa-bullhorn",
    },
    {
      title: "Database",
      description:
        "Database management, client calling, and lead generation systems for efficient operations.",
      icon: "fa-solid fa-database",
    },
    {
      title: "Strategy",
      description:
        "Comprehensive business strategy development for market entry and competitive advantage.",
      icon: "fa-solid fa-chess",
    },
    {
      title: "Networking",
      description:
        "Building strategic partnerships and expanding professional networks for business growth.",
      icon: "fa-solid fa-network-wired",
    },
    {
      title: "Technology",
      description:
        "Digital transformation and technical consulting to leverage emerging technologies.",
      icon: "fa-solid fa-laptop-code",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
            Our Core Strengths
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive consulting expertise across key business domains to drive sustainable growth and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="text-[#020F59] text-4xl mb-4 flex justify-center">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-[#020F59] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;