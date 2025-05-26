import React from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
}


const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Technology Consulting",
      description:
        "We assist startups and organizations in leveraging cutting-edge technology. From product development strategies to UI/UX enhancements and digital transformation, we ensure tech solutions align with long-term business goals.",
      icon: "fa-solid fa-chart-line",
    },
    
     {
      title: "Market Research",
      description:
        "We conduct detailed market research, competitor analysis and benchmarking to help our clients gain an in-depth understanding of the sectoral landscape, identify opportunities and navigate challenges.",
      icon: "fa-solid fa-chart-line",
    },
     {
      title: "Financial Planning",
      description:
        "We formulate funding, revenue generation and cost-cutting strategies thereby helping our clients build financially sustainable organisations..",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "Branding and Marketing",
      description:
        "We develop innovative branding and marketing campaigns which portray our clients' work in the best way possible and maximise their reach.",
      icon: "fa-solid fa-chart-line",
    },
     {
      title: "Human Resource Management",
      description:
        "We help our clients attract and retain top talent by devising employee/volunteer recruitment and management strategies.",
      icon: "fa-solid fa-chart-line",
    },
     {
      title: "Process Optimization",
      description:
        "We identify key performance indicators and help our client optimise business processes to maximise their operational efficiency.",
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