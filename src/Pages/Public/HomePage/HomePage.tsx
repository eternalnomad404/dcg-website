// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import FounderQuote from "./Components/FounderQuote";
import Services from "./Components/Services";
import ImpactMetrics from "./Components/ImpactMetrics";
import ClientLogos from "./Components/ClientLogos";
import ExecutiveCouncil from "./Components/ExecutiveCouncil";
import Testimonials from "./Components/Testimonials";
import Blog from "./Components/Blog";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "../../../Components/Footer/Footer";

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <FounderQuote />
      <Services />
      <ImpactMetrics />
      <ClientLogos />
      <ExecutiveCouncil />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;