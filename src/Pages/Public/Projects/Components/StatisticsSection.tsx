
const StatisticsSection = () => {
    
  const projectCount = 87;
  const participantCount = 324;
  return (
    <div>
       <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-[#B6D8C3] transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center">
                <div className="bg-[#020F59]/10 p-4 rounded-full mr-6">
                  <i className="fas fa-project-diagram text-[#020F59] text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-[#020F59]">
                    {projectCount}
                  </h2>
                  <p className="text-gray-600 mt-1">Total Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-[#B6D8C3] transform transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center">
                <div className="bg-[#020F59]/10 p-4 rounded-full mr-6">
                  <i className="fas fa-users text-[#020F59] text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-[#020F59]">
                    {participantCount}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Student Consultants Involved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default StatisticsSection
