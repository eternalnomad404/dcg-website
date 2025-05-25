import React from 'react'

const SuggestedReads = () => {
    const suggestedReads = [
    {
      id: 7,
      title: "Blockchain Beyond Cryptocurrency",
      description: "Exploring practical applications of blockchain technology across various industries.",
      imageUrl: "https://readdy.ai/api/search-image?query=blockchain%20visualization%2C%20connected%20blocks%2C%20digital%20ledger%20concept%2C%20blue%20technology%20background%2C%20professional%20photography%2C%20minimalist%20design%2C%20futuristic%20aesthetic%2C%20clean%20imagery&width=400&height=225&seq=7&orientation=landscape"
    },
    {
      id: 8,
      title: "The Science of Productivity",
      description: "Research-backed methods to enhance your daily productivity and achieve more with less stress.",
      imageUrl: "https://readdy.ai/api/search-image?query=organized%20desk%20with%20notebook%20and%20coffee%2C%20productivity%20concept%2C%20time%20management%20visualization%2C%20clean%20workspace%2C%20professional%20photography%2C%20soft%20lighting%2C%20minimalist%20aesthetic&width=400&height=225&seq=8&orientation=landscape"
    },
    {
      id: 9,
      title: "Mindful Technology Usage",
      description: "Finding balance in our digital lives through intentional and mindful technology consumption.",
      imageUrl: "https://readdy.ai/api/search-image?query=person%20setting%20aside%20digital%20devices%2C%20mindfulness%20practice%2C%20digital%20detox%20concept%2C%20serene%20environment%2C%20professional%20photography%2C%20soft%20natural%20lighting%2C%20calm%20aesthetic&width=400&height=225&seq=9&orientation=landscape"
    }
  ];
  return (
    <div>
       <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-[#020F59] text-2xl font-bold mb-6 text-center">Suggested Reads</h2>
          
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide pb-4 gap-4">
              {suggestedReads.map(post => (
                <div key={post.id} className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#020F59] text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{post.description}</p>
                    <button className="bg-[#020F59] text-white text-sm px-3 py-1.5 rounded whitespace-nowrap cursor-pointer hover:bg-[#B6D8C3] hover:text-[#020F59] transition-colors duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuggestedReads
