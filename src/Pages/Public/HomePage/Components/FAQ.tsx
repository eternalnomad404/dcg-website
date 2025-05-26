import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}


const FAQ: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is DTU Consulting Group's primary mission?",
      answer:
        "DTU Consulting Group was established in 2018 by like-minded enthusiasts with the mission to foster a consulting culture among engineering undergraduates5. The organization helps students gain industry knowledge and build commercial acumen through case-solving practices, small-scale projects, alumni talks, and networking opportunities. The focus extends beyond individual development to include meaningful client service and social impact.",
    },
    {
      question: "How does DCG differ from other student organizations?",
      answer:
        "DCG distinguishes itself through its professional approach to consulting delivery combined with educational objectives. Unlike purely academic clubs, DCG engages in real consulting projects with external clients, providing students with authentic consulting experience while delivering value to partner organizations. The organization maintains professional standards through structured project management, mentor oversight, and systematic capability development programs.",
    },
    {
      question: "Who can join DTU Consulting Group?",
      answer:
        "DCG welcomes students from across Delhi Technological University's academic programs, with particular emphasis on those interested in developing consulting skills and contributing to impactful projects. The organization operates through a structured recruitment process that evaluates candidates based on analytical capabilities, communication skills, and commitment to the organization's mission and values.",
    },
   
    {
      question: "What types of projects does DCG undertake?",
      answer:
        "DCG engages in diverse project types including sponsored research projects, industrial consultancy assignments, and social impact initiatives5. Recent examples include projects with NGOs focused on child development, technology startups requiring growth strategy, and established companies seeking market analysis and operational improvements. ",
    },
    {
      question: "How does DCG ensure project quality and client satisfaction?",
      answer:
        "Quality assurance is maintained through structured project management processes, mentor oversight, and systematic review mechanisms. The organization maintains intellectual property protocols and professional standards that protect both client interests and student learning objectives. ",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our consulting services and
            student involvement.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <i
                  className={`fa-solid ${
                    activeAccordion === index ? "fa-minus" : "fa-plus"
                  } text-sm`}
                ></i>
              </button>
              <div
                className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                  activeAccordion === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;