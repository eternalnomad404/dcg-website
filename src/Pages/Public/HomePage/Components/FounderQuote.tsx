import React from "react";

interface FounderQuoteProps {}

const FounderQuote: React.FC<FounderQuoteProps> = () => {
  return (
    <section className="py-20 bg-gray-50">
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
                src="/Images/presidentPratham.png"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-[#020F59]">Dr. Nat Ware</h4>
              <p className="text-gray-600">Founder, DCG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;