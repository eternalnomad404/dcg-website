import React from "react";

interface ClientLogosProps {}

const ClientLogos: React.FC<ClientLogosProps> = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
            Trusted By
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to have collaborated with leading organizations across
            diverse sectors.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex justify-center items-center h-20">
            <div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
              <i className="fa-brands fa-google"></i>
              <span className="ml-2 text-xl font-semibold">Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;