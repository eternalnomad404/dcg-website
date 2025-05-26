import React from "react";

const clientLogos = [
  { src: "/images/HIgh-vison-technology.png", alt: "High vison technology" },
  { src: "/images/STRATEGIC-EXECUTION-CONSULTANTS-PVT. LTD.png", alt: "STRATEGIC EXECUTION CONSULTANTS PVT. LTD" },
  { src: "/images/RentOK.png", alt: "RentOK" },
  { src: "/images/zuno.png", alt: "zuno" },
  // Add more logos here
];

const ClientLogos: React.FC = () => {
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
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center h-20">
              <img src={logo.src} alt={logo.alt} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
