import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How can students join DCG?",
      answer:
        "Students can apply through our biannual recruitment process. We look for candidates with strong analytical skills, creativity, and a passion for solving real-world business problems. Applications typically open in August and January.",
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