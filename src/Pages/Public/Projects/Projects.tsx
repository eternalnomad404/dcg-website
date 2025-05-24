// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
const Projects: React.FC = () => {
  const [activeLink, setActiveLink] = useState("projects");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectCount = 87;
  const participantCount = 324;
  const projects = [
    {
      id: 1,
      title: "Market Entry Strategy",
      company: "Novo Nordisk",
      description:
        "Developed a comprehensive market entry strategy for Novo Nordisk's new diabetes treatment in emerging markets, focusing on pricing, distribution, and regulatory compliance.",
      duration: "Jan - Mar 2025",
      lead: "Emma Johnson",
      coLead: "Michael Chen",
    },
    {
      id: 2,
      title: "Digital Transformation Roadmap",
      company: "Maersk",
      description:
        "Created a digital transformation roadmap to optimize supply chain operations, implementing IoT solutions and predictive analytics to reduce operational costs.",
      duration: "Feb - Apr 2025",
      lead: "Sophie Williams",
      coLead: "Alexander Petersen",
    },
    {
      id: 3,
      title: "Sustainability Initiative",
      company: "Vestas",
      description:
        "Designed a sustainability framework to reduce carbon footprint across manufacturing processes, resulting in 15% emissions reduction and improved ESG ratings.",
      duration: "Mar - May 2025",
      lead: "Thomas Nielsen",
      coLead: "Olivia Garcia",
    },
    {
      id: 4,
      title: "Product Launch Strategy",
      company: "Carlsberg Group",
      description:
        "Developed go-to-market strategy for a new premium non-alcoholic beverage line, including market research, consumer segmentation, and promotional planning.",
      duration: "Apr - Jun 2025",
      lead: "Daniel Andersen",
      coLead: "Isabella Kim",
    },
    {
      id: 5,
      title: "Operational Efficiency Analysis",
      company: "Ørsted",
      description:
        "Conducted comprehensive analysis of wind farm operations, identifying optimization opportunities that increased energy output by 8% while reducing maintenance costs.",
      duration: "May - Jul 2025",
      lead: "Lucas Schmidt",
      coLead: "Sophia Patel",
    },
    {
      id: 6,
      title: "Customer Experience Redesign",
      company: "Danske Bank",
      description:
        "Redesigned digital banking experience through customer journey mapping and UX research, resulting in 22% improvement in customer satisfaction scores.",
      duration: "Jun - Aug 2025",
      lead: "Mia Jørgensen",
      coLead: "Noah Wilson",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
        {/* Navbar */}
        <Navbar/>
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Page Title */}
        <div className="mb-12 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#020F59] tracking-tight mb-4">
            Our Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Explore our portfolio of student-led consulting projects where we've
            delivered impactful solutions to real business challenges across
            various industries.
          </p>
        </div>
        {/* Statistics Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-[#B6D8C3] transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center">
                <div className="bg-[#020F59]/10 p-4 rounded-full mr-6">
                  <i className="fas fa-project-diagram text-[#020F59] text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-[#020F59]">
                    {projectCount}
                  </h2>
                  <p className="text-gray-600 mt-1">Total Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-[#B6D8C3] transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center">
                <div className="bg-[#020F59]/10 p-4 rounded-full mr-6">
                  <i className="fas fa-users text-[#020F59] text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-[#020F59]">
                    {participantCount}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Student Consultants Involved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Grid */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#020F59]/10 flex items-center justify-center">
                    <i className={`fas fa-building text-[#020F59] text-xl`}></i>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#020F59]">
                      {project.company}
                    </span>
                    <h3 className="text-xl font-bold text-[#020F59]">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default Projects;
