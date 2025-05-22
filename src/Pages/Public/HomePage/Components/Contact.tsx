import React from 'react'

const Contact = () => {
  return (
    <div>
       <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or interested in working with us? Reach out and
              our team will get back to you soon.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#020F59] mb-6">
                Send Us a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
                      placeholder="Company Ltd."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="designation"
                      className="block text-gray-700 mb-2"
                    >
                      Designation
                    </label>
                    <input
                      type="text"
                      id="designation"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
                      placeholder="Marketing Manager"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#020F59] text-white px-6 py-3 rounded-button font-medium hover:bg-[#01083d] transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#020F59] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[#B6D8C3] text-xl mr-4 mt-1">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#020F59]">Address</h4>
                      <p className="text-gray-600">
                        Delhi Technological University
                        <br />
                        Shahbad Daulatpur, Main Bawana Road
                        <br />
                        Delhi, 110042
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#B6D8C3] text-xl mr-4 mt-1">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#020F59]">Email</h4>
                      <p className="text-gray-600">contact@dcg.org</p>
                      <p className="text-gray-600">recruitment@dcg.org</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#B6D8C3] text-xl mr-4 mt-1">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#020F59]">Phone</h4>
                      <p className="text-gray-600">+91 11 2787 1018</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#B6D8C3] text-xl mr-4 mt-1">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#020F59]">
                        Office Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-[#020F59] mb-4">
                    Connect With Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.2249368657404!2d77.11171491508857!3d28.74975098237484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1621845433600!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="DCG Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
