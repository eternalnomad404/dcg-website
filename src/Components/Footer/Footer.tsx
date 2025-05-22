
const Footer = () => {
  return (
    <div>
         <footer className="bg-[#020F59] text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">DCG</h3>
              <p className="text-gray-300 mb-6">
                Delhi Technological University's premier student-run consulting
                group, bridging academic excellence with real-world business
                solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Join DCG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <form className="mb-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 w-full rounded-l-lg text-gray-800 focus:outline-none border-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#B6D8C3] text-[#020F59] px-4 py-2 rounded-r-lg font-medium hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              <p className="text-gray-400 text-sm">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Delhi Consulting Group. All
              rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <i className="fa-brands fa-cc-visa text-2xl"></i>
              <i className="fa-brands fa-cc-mastercard text-2xl"></i>
              <i className="fa-brands fa-cc-paypal text-2xl"></i>
              <i className="fa-brands fa-cc-amex text-2xl"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
