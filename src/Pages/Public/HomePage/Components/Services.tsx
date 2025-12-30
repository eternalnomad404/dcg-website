import React from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}


const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Digital Transformation",
      description:
        "We help businesses embrace technology-driven change by streamlining processes and enhancing customer experiences. Our solutions focus on modernizing legacy systems, integrating digital tools, and driving innovation. This ensures long-term growth and adaptability in a rapidly evolving market.",
      icon: "fa-solid fa-chart-line",
    },
    
     {
      title: "Digital Strategy",
      description:
        "We design data-driven strategies that align digital initiatives with business goals. From improving online presence to optimizing customer engagement, we create actionable roadmaps for sustainable success. Our approach ensures measurable outcomes and a competitive edge.",
      icon: "fa-solid fa-chart-line",
    }, {
      title: "Market Research",
      description:
        "We provide in-depth insights into market trends, consumer behavior, and competitor activities. Our research helps businesses uncover opportunities, assess risks, and make confident strategic decisions. This empowers clients to stay ahead in dynamic industries.",
      icon: "fa-solid fa-chart-line",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive consulting solutions tailored to meet the
            unique challenges of our clients across various industries.
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