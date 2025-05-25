
const ResourcesGrid = () => {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guesstimates Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-calculator text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">Guesstimates (Weekly)</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Weekly updated real-world guesstimate prompts to sharpen your estimation skills.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-folder-open mr-2"></i>
                Access Guesstimates Drive
              </button>
            </div>
          </div>

          {/* Case Studies Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-briefcase text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">Case Studies</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Framework-driven problem statements with solutions – great for practice and mock interviews.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-search mr-2"></i>
                Explore Case Studies
              </button>
            </div>
          </div>

          {/* PDFs & Casebooks Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-file-pdf text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">PDFs & Casebooks</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Downloadable prep material including casebooks, guides, and frameworks from top institutes.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-download mr-2"></i>
                Download PDFs
              </button>
            </div>
          </div>

          {/* Free Courses Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#B6D8C3] flex items-center justify-center text-[#020F59]">
                <i className="fas fa-play-circle text-xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-[#020F59] ml-4">Free Courses</h2>
            </div>
            <p className="text-gray-700 mb-6">
              A curated list of free learning resources for consulting, Excel, business strategy, and more.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#020F59] text-white rounded !rounded-button whitespace-nowrap hover:bg-[#01083d] transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <i className="fas fa-video mr-2"></i>
                View Courses
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ResourcesGrid
