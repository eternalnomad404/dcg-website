// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Header from "./Components/Header";
import ResourcesGrid from "./Components/ResourcesGrid";
import FeaturesResourcesSection from "./Components/FeaturesResourcesSection";
import NewsletterSection from "./Components/NewsletterSection";
import FAQSection from "./Components/FAQSection";
import FooterCTA from "./Components/FooterCTA";

const Resources: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/*Navbar Section*/}
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Header Section */}
        <Header />

        {/* Resources Grid */}
        <ResourcesGrid />

        {/* Featured Resources Section */}
        <FeaturesResourcesSection />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Resource Categories */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020F59] mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Frameworks",
              "Interview Prep",
              "Industry Insights",
              "Career Paths",
              "Excel & Tools",
              "Presentation Skills",
              "Leadership",
              "Networking",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-[#F5F9F7] hover:bg-[#E0EDE6] transition-colors duration-200 rounded-lg p-4 text-center cursor-pointer"
              >
                <p className="text-[#020F59] font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
        {/* Footer CTA */}
        <FooterCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
