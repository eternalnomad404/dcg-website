const FAQSection = () => {
  return (
    <div>
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

    </div>
  )
}

export default FAQSection
