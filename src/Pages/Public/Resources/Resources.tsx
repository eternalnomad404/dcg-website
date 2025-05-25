// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const Resources: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
        {/*Navbar Section*/}
        <Navbar/>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#020F59] mb-4">Resources Hub</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Curated knowledge to fuel your consulting journey
          </p>
          <div className="w-24 h-1 bg-[#B6D8C3] mx-auto mt-8"></div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guesstimates Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-calculator text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">Guesstimates (Weekly)</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Weekly updated real-world guesstimate prompts to sharpen your estimation skills.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-folder-open mr-2"></i>
                Access Guesstimates Drive
              </button>
            </div>
          </div>

          {/* Case Studies Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-briefcase text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">Case Studies</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Framework-driven problem statements with solutions – great for practice and mock interviews.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-search mr-2"></i>
                Explore Case Studies
              </button>
            </div>
          </div>

          {/* PDFs & Casebooks Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-file-pdf text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">PDFs & Casebooks</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Downloadable prep material including casebooks, guides, and frameworks from top institutes.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-download mr-2"></i>
                Download PDFs
              </button>
            </div>
          </div>

          {/* Free Courses Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-play-circle text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">Free Courses</h2>
            </div>
            <p className="text-gray-700 mb-6">
              A curated list of free learning resources for consulting, Excel, business strategy, and more.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-video mr-2"></i>
                View Courses
              </button>
            </div>
          </div>
        </div>

        {/* Featured Resources Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020F59] mb-8 text-center">Featured Resources</h2>
          <div className="bg-[#F5F9F7] rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Item 1 */}
              <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                    <i className="fas fa-star text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#020F59] ml-3">McKinsey Case Book 2025</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Latest collection of practice cases with detailed solutions and frameworks.
                </p>
                <button className="w-full py-2 px-4 bg-[#020F59] text-white text-sm rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                  <i className="fas fa-download mr-2"></i>
                  Download
                </button>
              </div>

              {/* Featured Item 2 */}
              <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                    <i className="fas fa-chart-line text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#020F59] ml-3">Market Sizing Guide</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step approach to tackle market sizing questions with real examples.
                </p>
                <button className="w-full py-2 px-4 bg-[#020F59] text-white text-sm rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                  <i className="fas fa-eye mr-2"></i>
                  View Guide
                </button>
              </div>

              {/* Featured Item 3 */}
              <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                    <i className="fas fa-video text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#020F59] ml-3">Excel Masterclass</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Free comprehensive course covering essential Excel skills for consultants.
                </p>
                <button className="w-full py-2 px-4 bg-[#020F59] text-white text-sm rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                  <i className="fas fa-play mr-2"></i>
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-[#020F59] rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our newsletter to receive weekly resource updates, exclusive materials, and interview tips.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow py-3 px-4 rounded border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B6D8C3]"
              />
              <button className="py-3 px-6 bg-[#B6D8C3] text-[#020F59] font-medium rounded !rounded-button whitespace-nowrap hover:bg-[#9ac8aa] transition-colors duration-200 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020F59] mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Frameworks', 'Interview Prep', 'Industry Insights', 'Career Paths', 'Excel & Tools', 'Presentation Skills', 'Leadership', 'Networking'].map((category, index) => (
              <div key={index} className="bg-[#F5F9F7] hover:bg-[#E0EDE6] transition-colors duration-200 rounded-lg p-4 text-center cursor-pointer">
                <p className="text-[#020F59] font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020F59] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                question: 'How often are resources updated?',
                answer: 'We update our resources weekly, with new guesstimates added every Monday and case studies refreshed monthly.'
              },
              {
                question: 'Can I download materials for offline use?',
                answer: 'Yes, all PDFs, casebooks, and frameworks are available for download and offline use. Video courses require internet connection.'
              },
              {
                question: 'Are these resources sufficient for interview preparation?',
                answer: 'Our resources provide comprehensive coverage of consulting interview topics, but we recommend complementing them with mock interviews and personalized feedback.'
              },
              {
                question: 'How do I request specific resources?',
                answer: 'You can submit resource requests through our contact form or by emailing resources@consultinghub.com with your specific needs.'
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-[#B6D8C3] transition-colors duration-200">
                <h3 className="text-lg font-semibold text-[#020F59] mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-[#020F59] mb-4">Ready to accelerate your consulting career?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Access all resources and get personalized guidance with our premium membership.
          </p>
          <button className="py-3 px-8 bg-[#020F59] text-white rounded-lg !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer font-medium">
            Upgrade to Premium
          </button>
        </div>
      
      </div>
        <Footer/>
    </div>
  );
};

export default Resources;
