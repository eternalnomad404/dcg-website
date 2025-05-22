import React from "react";

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our clients and alumni about their experiences working
            with DCG.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div className="text-[#B6D8C3] text-2xl mb-4">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="text-gray-600 mb-6">
              "Working with DCG was a game-changer for our startup. Their
              market analysis and strategic recommendations helped us secure
              our Series A funding. Impressive work from such young talents!"
            </p>
            <div className="flex items-center">
              <div className="text-[#020F59] font-bold">Anika Mehta</div>
              <div className="mx-2 text-gray-400">|</div>
              <div className="text-gray-600">CEO, TechNova</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;