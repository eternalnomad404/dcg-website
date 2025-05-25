import Navbar from "../../../Components/Navbar/Navbar";
import PageTitle from "./Components/PageTitle";
import ProjectGrid from "./Components/ProjectGrid";
import StatisticsSection from "./Components/StatisticsSection";
const Projects: React.FC = () => {
 
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
        {/* Navbar */}
        <Navbar/>
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Page Title */}
      <PageTitle/>
        {/* Statistics Section */}
       <StatisticsSection/>
        {/* Projects Grid */}
       <ProjectGrid/>
      </main>
    </div>
  );
};
export default Projects;
