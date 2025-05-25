const NewsletterSection = () => {
  return (
    <div>
          <div className="mt-20 bg-[#020F59] rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our newsletter to receive weekly resource updates, exclusive materials, and interview tips.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow py-3 px-4 rounded border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B6D8C3]"
              />
              <button className="py-3 px-6 bg-[#B6D8C3] text-[#020F59] font-medium rounded !rounded-button whitespace-nowrap hover:bg-[#9ac8aa] transition-colors duration-200 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewsletterSection
