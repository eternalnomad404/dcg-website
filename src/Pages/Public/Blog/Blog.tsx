import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Hero from './Components/Hero';
import BlogGrid from './Components/BlogGrid';
import SuggestedReads from './Components/SuggestedReads';

const Blog: React.FC = () => {
  

  

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
     <Hero/>

      {/* Blog Grid */}
      <BlogGrid/>

      {/* Suggested Reads Section */}
     <SuggestedReads/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;