import React from "react";

interface BlogPost {
  title: string;
  category: string;
  preview: string;
  image: string;
}

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Student-Led Consulting",
      category: "Insights",
      preview:
        "Exploring how student consultants are reshaping the industry with fresh perspectives and innovative approaches.",
      image: "/public/Images/blogPost.jpg",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on consulting trends, case
            studies, and student experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#B6D8C3] font-semibold mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-[#020F59] mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.preview}</p>
                <a
                  href="#"
                  className="text-[#020F59] font-medium hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer"
                >
                  Read More <i className="fa-solid fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#020F59] text-white px-6 py-3 rounded-button font-medium hover:bg-[#01083d] transition-all duration-300 whitespace-nowrap cursor-pointer">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;