const FeaturesResourcesSection = () => {
  return (
    <div>
       <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020F59] mb-8 text-center">Featured Resources</h2>
          <div className="bg-[#F5F9F7] rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Item 1 */}
              <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                    <i className="fas fa-star text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#020F59] ml-3">McKinsey Case Book 2025</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Latest collection of practice cases with detailed solutions and frameworks.
                </p>
                <button className="w-full py-2 px-4 bg-[#020F59] text-white text-sm rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                  <i className="fas fa-download mr-2"></i>
                  Download
                </button>
              </div>

              {/* Featured Item 2 */}
              <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                    <i className="fas fa-chart-line text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#020F59] ml-3">Market Sizing Guide</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step approach to tackle market sizing questions with real examples.
                </p>
                <button className="w-full py-2 px-4 bg-[#020F59] text-white text-sm rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                  <i className="fas fa-eye mr-2"></i>
                  View Guide
                </button>
              </div>

              {/* Featured Item 3 */}
              <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                    <i className="fas fa-video text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#020F59] ml-3">Excel Masterclass</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Free comprehensive course covering essential Excel skills for consultants.
                </p>
                <button className="w-full py-2 px-4 bg-[#020F59] text-white text-sm rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                  <i className="fas fa-play mr-2"></i>
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FeaturesResourcesSection
