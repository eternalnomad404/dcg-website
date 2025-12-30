import React from "react";


const FounderQuote: React.FC = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-12 text-center">
              Why Choose Us?
            </h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Clients & Engagements */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <i className="fa-solid fa-handshake text-3xl text-[#020F59] mr-3"></i>
                  <div>
                    <h3 className="font-bold text-[#020F59] mb-2">CLIENTS & ENGAGEMENTS</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>30+ student-led and startup projects</strong> successfully consulted in the last 2 years</li>
                      <li>• <strong>18+ corporate collaborations</strong> with SMEs and early-stage ventures</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conversions & Results */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <i className="fa-solid fa-chart-line text-3xl text-[#020F59] mr-3"></i>
                  <div>
                    <h3 className="font-bold text-[#020F59] mb-2">CONVERSIONS & RESULTS</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>65% client conversion rate</strong> from initial consultation to full engagement</li>
                      <li>• <strong>20+ startups scaled operations</strong> with our strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Network & Recognition */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start mb-4">
                  <i className="fa-solid fa-award text-3xl text-[#020F59] mr-3"></i>
                  <div>
                    <h3 className="font-bold text-[#020F59] mb-2">NETWORK & RECOGNITION</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Partnerships with <strong>5+ societies & incubators</strong> across DTU and beyond</li>
                      <li>• <strong>30+ alumni</strong> in consulting & strategy roles (McKinsey, BCG, Bain, Big 4, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            <i className="fa-solid fa-quote-left text-6xl text-[#020F59]/10 absolute -top-10 left-0"></i>
            <p className="text-2xl md:text-3xl font-light text-gray-700 italic mb-8">
              "Real impact is measured not by profits generated, but by lives
              improved. At DCG, we're building the next generation of
              consultants who understand that business can and should be a force
              for positive change."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src="/Images/presidentAdarsh.png"
                  alt="Adarsh Ranjan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-[#020F59]">Adarsh Ranjan</h4>
                <p className="text-gray-600">President, DCG</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderQuote;