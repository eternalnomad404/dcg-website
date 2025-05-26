import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "The collaboration with DCG was instrumental in refining our strategic frameworks. Their innovative approach and commitment to excellence aligned perfectly with our objectives, leading to impactful outcomes. We highly value this partnership.",
      author: "Rishabh Bapna",
      title: "Founder & Director, Strategic Execution Consultants Pvt. Ltd.",
    },
    {
      quote:
        "Collaborating with the Delhi Consulting Group was a transformative experience. Their team's analytical prowess and strategic insights significantly contributed to our mission of pioneering sustainable nanotechnology solutions. Their dedication and professionalism were truly commendable.",
      author: "Kunal Dugar",
      title: "CEO & Co-Founder, High Vision Technologies LLP",
    },
    {
      quote:
        "Working with DCG has been an eye-opening experience. Their strategic expertise, dedication, and innovative solutions have transformed the way we approach problem-solving. Their professionalism and commitment to excellence are truly unparalleled.",
      author: "Waquar Azhar Ali",
      title: "Manager & Lead Commercial Product Development",
    },
  ];

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
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-[#B6D8C3] text-2xl mb-4">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="text-gray-600 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center">
                <div className="text-[#020F59] font-bold">{t.author}</div>
                <div className="mx-2 text-gray-400">|</div>
                <div className="text-gray-600">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
