import React from "react";

interface ImpactMetric {
  number: number | string; // updated here
  label: string;
  icon: string;
}



const ImpactMetrics: React.FC = () => {
  const impactMetrics: ImpactMetric[] = [
    { number: '40+', label: "Projects Completed", icon: "fa-solid fa-briefcase" },// updated here
    { number: '5000+', label: "Lives Impacted", icon: "fa-solid fa-heart" },// updated here
    { number: '30+', label: "Mentors", icon: "fa-solid fa-chalkboard-teacher" },// updated here
    { number: '150+', label: "Consultants", icon: "fa-solid fa-user-tie" },// updated here
  ];

  return (
    <section id="impact" className="py-20 bg-[#020F59] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Since our inception, we've been dedicated to creating meaningful
            change through strategic consulting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-[#B6D8C3] text-4xl mb-4">
                <i className={metric.icon}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {metric.number}+
              </div>
              <p className="text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;