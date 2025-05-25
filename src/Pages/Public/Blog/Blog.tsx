import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Remote Work",
      description: "Discover how companies are adapting to the new normal and what this means for the future of work environments.",
      imageUrl: "https://readdy.ai/api/search-image?query=modern%20office%20space%20with%20plants%2C%20natural%20light%2C%20minimalist%20design%2C%20people%20working%20on%20laptops%2C%20collaborative%20environment%2C%20high-quality%20professional%20photography%2C%20soft%20lighting%2C%20clean%20aesthetic&width=600&height=340&seq=1&orientation=landscape"
    },
    {
      id: 2,
      title: "Sustainable Tech Innovations",
      description: "Explore the latest technological advancements that are helping to create a more sustainable future for our planet.",
      imageUrl: "https://readdy.ai/api/search-image?query=futuristic%20sustainable%20technology%2C%20solar%20panels%2C%20wind%20turbines%2C%20green%20energy%20solutions%2C%20eco-friendly%20devices%2C%20environmental%20innovations%2C%20professional%20photography%2C%20clean%20background%2C%20soft%20lighting&width=600&height=340&seq=2&orientation=landscape"
    },
    {
      id: 3,
      title: "Mental Health in the Digital Age",
      description: "How technology is both contributing to and helping solve modern mental health challenges in our increasingly connected world.",
      imageUrl: "https://readdy.ai/api/search-image?query=person%20meditating%20with%20digital%20devices%20nearby%2C%20calm%20atmosphere%2C%20wellness%20concept%2C%20mental%20health%20visualization%2C%20mindfulness%20practice%2C%20soft%20lighting%2C%20minimalist%20setting%2C%20professional%20photography&width=600&height=340&seq=3&orientation=landscape"
    },
    {
      id: 4,
      title: "Artificial Intelligence Ethics",
      description: "A deep dive into the ethical considerations surrounding AI development and implementation in various industries.",
      imageUrl: "https://readdy.ai/api/search-image?query=futuristic%20AI%20visualization%2C%20digital%20brain%2C%20ethical%20technology%20concept%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20photography%2C%20clean%20background%2C%20high-tech%20aesthetic%2C%20thought-provoking%20imagery&width=600&height=340&seq=4&orientation=landscape"
    },
    {
      id: 5,
      title: "The Rise of Digital Nomads",
      description: "Learn about how location-independent professionals are reshaping work culture and travel industries worldwide.",
      imageUrl: "https://readdy.ai/api/search-image?query=person%20working%20on%20laptop%20in%20beautiful%20natural%20setting%2C%20beach%20or%20mountain%20view%2C%20digital%20nomad%20lifestyle%2C%20travel%20workspace%2C%20professional%20photography%2C%20soft%20natural%20lighting%2C%20serene%20environment&width=600&height=340&seq=5&orientation=landscape"
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Protect yourself and your business with these fundamental cybersecurity practices for the modern digital landscape.",
      imageUrl: "https://readdy.ai/api/search-image?query=digital%20security%20concept%2C%20lock%20and%20shield%20symbols%2C%20cybersecurity%20visualization%2C%20data%20protection%2C%20professional%20photography%2C%20blue%20technology%20background%2C%20clean%20aesthetic%2C%20high-tech%20imagery&width=600&height=340&seq=6&orientation=landscape"
    }
  ];

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
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[#020F59] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Insights That Matter</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore fresh perspectives and thought-provoking content that keeps you informed and inspired.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 md:h-52 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-[#020F59] text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-700 mb-4 line-clamp-2">{post.description}</p>
                  <button className="bg-[#020F59] text-white px-4 py-2 rounded whitespace-nowrap cursor-pointer hover:bg-[#B6D8C3] hover:text-[#020F59] transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Reads Section */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;