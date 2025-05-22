// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 50) {
setIsScrolled(true);
} else {
setIsScrolled(false);
}
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
const toggleAccordion = (index: number) => {
setActiveAccordion(activeAccordion === index ? null : index);
};
const services = [
{
title: "Market Research",
description: "Comprehensive market analysis to identify opportunities and threats in your industry.",
icon: "fa-solid fa-chart-line"
},
{
title: "Financial Planning",
description: "Strategic financial roadmaps to optimize resource allocation and maximize returns.",
icon: "fa-solid fa-coins"
},
{
title: "Branding & Marketing",
description: "Innovative brand strategies to enhance market presence and customer engagement.",
icon: "fa-solid fa-bullhorn"
},
{
title: "HR Management",
description: "Effective talent acquisition and management solutions for organizational growth.",
icon: "fa-solid fa-users"
},
{
title: "Process Optimization",
description: "Streamlining operations to enhance efficiency and reduce operational costs.",
icon: "fa-solid fa-gears"
},
{
title: "Strategic Planning",
description: "Long-term vision development and implementation planning for sustainable success.",
icon: "fa-solid fa-chess"
}
];
const impactMetrics = [
{ number: 150, label: "Projects Completed", icon: "fa-solid fa-briefcase" },
{ number: 5000, label: "Lives Impacted", icon: "fa-solid fa-heart" },
{ number: 75, label: "Mentors", icon: "fa-solid fa-chalkboard-teacher" },
{ number: 120, label: "Consultants", icon: "fa-solid fa-user-tie" }
];
const executiveTeam = [
{
name: "Alexandra Chen",
position: "President",
image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20female%20Asian%20business%20leader%20with%20confident%20expression%20wearing%20business%20attire%20against%20neutral%20background%2C%20high%20quality%20professional%20portrait%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=300&height=300&seq=1&orientation=squarish"
},
{
name: "Raj Patel",
position: "Vice President",
image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20Indian%20male%20business%20professional%20with%20glasses%20wearing%20a%20navy%20blue%20suit%20against%20neutral%20background%2C%20high%20quality%20professional%20portrait%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=300&height=300&seq=2&orientation=squarish"
},
{
name: "Sarah Johnson",
position: "Head of Operations",
image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20female%20business%20leader%20with%20short%20blonde%20hair%20wearing%20business%20attire%20against%20neutral%20background%2C%20high%20quality%20professional%20portrait%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=300&height=300&seq=3&orientation=squarish"
},
{
name: "Michael Zhang",
position: "Finance Director",
image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20Asian%20male%20business%20professional%20wearing%20a%20gray%20suit%20against%20neutral%20background%2C%20high%20quality%20professional%20portrait%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=300&height=300&seq=4&orientation=squarish"
},
{
name: "Priya Sharma",
position: "Marketing Lead",
image: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20Indian%20female%20business%20leader%20with%20long%20dark%20hair%20wearing%20business%20attire%20against%20neutral%20background%2C%20high%20quality%20professional%20portrait%20with%20soft%20lighting%20and%20shallow%20depth%20of%20field&width=300&height=300&seq=5&orientation=squarish"
}
];
const blogPosts = [
{
title: "The Future of Student-Led Consulting",
category: "Insights",
preview: "Exploring how student consultants are reshaping the industry with fresh perspectives and innovative approaches.",
image: "https://readdy.ai/api/search-image?query=modern%20business%20meeting%20with%20diverse%20young%20professionals%20collaborating%20around%20a%20table%20with%20laptops%20and%20documents%2C%20bright%20modern%20office%20space%20with%20glass%20walls%20and%20city%20view%2C%20professional%20atmosphere%20with%20engaged%20discussion&width=400&height=250&seq=6&orientation=landscape"
},
{
title: "Case Study: Transforming Local Businesses",
category: "Success Stories",
preview: "How our team helped a local startup increase revenue by 200% through strategic market positioning.",
image: "https://readdy.ai/api/search-image?query=two%20young%20business%20professionals%20reviewing%20charts%20and%20graphs%20on%20a%20tablet%2C%20discussing%20business%20growth%20strategy%20in%20a%20modern%20office%20setting%20with%20natural%20light%2C%20professional%20business%20atmosphere%20with%20positive%20engagement&width=400&height=250&seq=7&orientation=landscape"
},
{
title: "Balancing Academics and Consulting Work",
category: "Student Life",
preview: "Practical tips for student consultants to excel in both their academic and professional endeavors.",
image: "https://readdy.ai/api/search-image?query=young%20student%20studying%20with%20books%20and%20laptop%20in%20modern%20university%20library%2C%20focused%20expression%20while%20taking%20notes%2C%20organized%20desk%20with%20coffee%20cup%2C%20bright%20educational%20environment%20with%20bookshelves%20in%20background&width=400&height=250&seq=8&orientation=landscape"
}
];
const faqs = [
{
question: "How can students join DCG?",
answer: "Students can apply through our biannual recruitment process. We look for candidates with strong analytical skills, creativity, and a passion for solving real-world business problems. Applications typically open in August and January."
},
{
question: "What types of organizations do you work with?",
answer: "We work with a diverse range of clients including startups, non-profits, corporate entities, and government organizations. Our projects span various industries including technology, healthcare, education, and social enterprise."
},
{
question: "How are consulting projects structured?",
answer: "Projects typically run for 8-10 weeks with teams of 4-5 consultants. Each team is led by a Project Manager and supported by a faculty advisor. We follow a structured methodology including discovery, analysis, recommendation, and implementation planning phases."
},
{
question: "Do you offer pro-bono consulting services?",
answer: "Yes, we dedicate 30% of our project capacity to pro-bono work for social enterprises, NGOs, and community organizations that align with our mission of creating positive social impact."
}
];
return (
<div className="min-h-screen font-sans">
{/* Navbar */}
<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
<div className="container mx-auto px-6 flex justify-between items-center">
<div className="flex items-center">
<div className="text-2xl font-bold text-[#020F59] hover:opacity-90 transition-all duration-300 cursor-pointer">
<span className="mr-2">DCG</span>
<span className="text-base font-semibold bg-gradient-to-r from-[#020F59] to-[#0A2472] bg-clip-text text-transparent">Delhi Consulting Group</span>
</div>
</div>
<div className="hidden md:flex items-center space-x-6">
<a href="#" className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">Home</a>
<a href="#services" className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">Services</a>
<a href="#impact" className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">Impact</a>
<a href="#team" className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">Team</a>
<a href="#blog" className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">Blog</a>
<a href="#contact" className="text-[#020F59] hover:text-[#0A2472] font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">Contact</a>
<div className="flex items-center space-x-3 ml-4">
<button className="bg-[#020F59] text-white px-5 py-2 rounded-button font-medium hover:bg-[#0A2472] transition-all duration-300 whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md">Join Us</button>
</div>
</div>
<div className="md:hidden">
<button 
  onClick={() => setIsMenuOpen(!isMenuOpen)} 
  className="text-[#020F59] hover:text-[#0A2472] focus:outline-none cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
>
<i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
</button>
</div>
</div>
{/* Mobile Menu */}
{isMenuOpen && (
<div className="md:hidden bg-white shadow-lg absolute w-full">
<div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
<a href="#" className="text-gray-700 hover:text-[#020F59] font-medium py-2">Home</a>
<a href="#services" className="text-gray-700 hover:text-[#020F59] font-medium py-2">Services</a>
<a href="#impact" className="text-gray-700 hover:text-[#020F59] font-medium py-2">Impact</a>
<a href="#team" className="text-gray-700 hover:text-[#020F59] font-medium py-2">Team</a>
<a href="#blog" className="text-gray-700 hover:text-[#020F59] font-medium py-2">Blog</a>
<a href="#contact" className="text-gray-700 hover:text-[#020F59] font-medium py-2">Contact</a>
<button className="bg-[#B6D8C3] text-[#020F59] px-5 py-2 rounded-button font-medium hover:bg-[#9ac9ad] transition-all duration-300 whitespace-nowrap cursor-pointer">Join Us</button>
</div>
</div>
)}
</nav>
{/* Hero Section */}
<section className="relative min-h-screen flex items-center" style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20modern%20business%20background%20with%20gradient%20blue%20tones%20and%20subtle%20geometric%20patterns%2C%20professional%20and%20clean%20design%20with%20space%20for%20text%20on%20left%20side%2C%20perfect%20for%20corporate%20website%20hero%20section%20with%20elegant%20minimalist%20aesthetic&width=1440&height=800&seq=9&orientation=landscape')`,
backgroundSize: 'cover',
backgroundPosition: 'center'
}}>
<div className="absolute inset-0 bg-gradient-to-r from-[#020F59]/90 to-transparent"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-2xl text-white">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
Empowering Impact through Student-led Strategy
</h1>
<p className="text-lg md:text-xl mb-8 text-gray-200">
Delhi Technological University's premier student-run consulting society delivering professional solutions with fresh perspectives.
</p>
<button className="bg-[#B6D8C3] text-[#020F59] px-8 py-3 rounded-button font-bold text-lg hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer">
Explore Our Work
</button>
</div>
</div>
</section>
{/* Founder Quote Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center relative">
<i className="fa-solid fa-quote-left text-6xl text-[#020F59]/10 absolute -top-10 left-0"></i>
<p className="text-2xl md:text-3xl font-light text-gray-700 italic mb-8">
"Real impact is measured not by profits generated, but by lives improved. At DCG, we're building the next generation of consultants who understand that business can and should be a force for positive change."
</p>
<div className="flex items-center justify-center">
<div className="w-16 h-16 rounded-full overflow-hidden mr-4">
<img
src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20distinguished%20male%20academic%20in%20his%2040s%20with%20thoughtful%20expression%20wearing%20business%20casual%20attire%20against%20neutral%20background%2C%20high%20quality%20professional%20portrait%20with%20soft%20lighting&width=200&height=200&seq=10&orientation=squarish"
alt="Nat Ware"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="text-left">
<h4 className="font-bold text-[#020F59]">Dr. Nat Ware</h4>
<p className="text-gray-600">Founder, DCG</p>
</div>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section id="services" className="py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">Our Services</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
We provide comprehensive consulting solutions tailored to meet the unique challenges of our clients across various industries.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{services.map((service, index) => (
<div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
<div className="text-[#020F59] text-4xl mb-4 flex justify-center">
<i className={service.icon}></i>
</div>
<h3 className="text-xl font-bold text-[#020F59] mb-3">{service.title}</h3>
<p className="text-gray-600">{service.description}</p>
</div>
))}
</div>
</div>
</section>
{/* Impact Metrics Section */}
<section id="impact" className="py-20 bg-[#020F59] text-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
<p className="text-gray-300 max-w-2xl mx-auto">
Since our inception, we've been dedicated to creating meaningful change through strategic consulting.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{impactMetrics.map((metric, index) => (
<div key={index} className="text-center">
<div className="text-[#B6D8C3] text-4xl mb-4">
<i className={metric.icon}></i>
</div>
<div className="text-4xl md:text-5xl font-bold mb-2">{metric.number}+</div>
<p className="text-gray-300">{metric.label}</p>
</div>
))}
</div>
</div>
</section>
{/* Client Logos Section */}
<section className="py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">Trusted By</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
We're proud to have collaborated with leading organizations across diverse sectors.
</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-google"></i>
<span className="ml-2 text-xl font-semibold">Google</span>
</div>
</div>
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-microsoft"></i>
<span className="ml-2 text-xl font-semibold">Microsoft</span>
</div>
</div>
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-amazon"></i>
<span className="ml-2 text-xl font-semibold">Amazon</span>
</div>
</div>
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-salesforce"></i>
<span className="ml-2 text-xl font-semibold">Salesforce</span>
</div>
</div>
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-slack"></i>
<span className="ml-2 text-xl font-semibold">Slack</span>
</div>
</div>
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-spotify"></i>
<span className="ml-2 text-xl font-semibold">Spotify</span>
</div>
</div>
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-airbnb"></i>
<span className="ml-2 text-xl font-semibold">Airbnb</span>
</div>
</div>
<div className="flex justify-center items-center h-20">
<div className="text-gray-400 hover:text-gray-700 transition-all duration-300 text-4xl">
<i className="fa-brands fa-uber"></i>
<span className="ml-2 text-xl font-semibold">Uber</span>
</div>
</div>
</div>
</div>
</section>
{/* Executive Council Section */}
<section id="team" className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">Executive Council</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Meet the talented individuals leading DCG's mission to deliver exceptional consulting services.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{executiveTeam.map((member, index) => (
<div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
<div className="h-64 overflow-hidden">
<img
src={member.image}
alt={member.name}
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-[#020F59] mb-1">{member.name}</h3>
<p className="text-gray-600 mb-4">{member.position}</p>
<button className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer">
<i className="fa-brands fa-linkedin text-xl"></i>
</button>
</div>
</div>
))}
</div>
</div>
</section>
{/* Testimonials Section */}
<section className="py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">What People Say</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Hear from our clients and alumni about their experiences working with DCG.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
<div className="text-[#B6D8C3] text-2xl mb-4">
<i className="fa-solid fa-quote-left"></i>
</div>
<p className="text-gray-600 mb-6">
"Working with DCG was a game-changer for our startup. Their market analysis and strategic recommendations helped us secure our Series A funding. Impressive work from such young talents!"
</p>
<div className="flex items-center">
<div className="text-[#020F59] font-bold">Anika Mehta</div>
<div className="mx-2 text-gray-400">|</div>
<div className="text-gray-600">CEO, TechNova</div>
</div>
</div>
<div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
<div className="text-[#B6D8C3] text-2xl mb-4">
<i className="fa-solid fa-quote-left"></i>
</div>
<p className="text-gray-600 mb-6">
"As an alumnus of DCG, I can confidently say that my experience here shaped my consulting career. The hands-on projects and mentorship prepared me for my role at McKinsey better than any classroom could."
</p>
<div className="flex items-center">
<div className="text-[#020F59] font-bold">Rohan Kapoor</div>
<div className="mx-2 text-gray-400">|</div>
<div className="text-gray-600">Associate, McKinsey</div>
</div>
</div>
<div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
<div className="text-[#B6D8C3] text-2xl mb-4">
<i className="fa-solid fa-quote-left"></i>
</div>
<p className="text-gray-600 mb-6">
"Our NGO partnered with DCG on a pro-bono project to optimize our volunteer management system. Their solution increased our operational efficiency by 40% and allowed us to expand our community impact."
</p>
<div className="flex items-center">
<div className="text-[#020F59] font-bold">Maya Singh</div>
<div className="mx-2 text-gray-400">|</div>
<div className="text-gray-600">Director, Hope Foundation</div>
</div>
</div>
</div>
</div>
</section>
{/* Blog Section */}
<section id="blog" className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">Latest Insights</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Stay updated with our latest thoughts on consulting trends, case studies, and student experiences.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{blogPosts.map((post, index) => (
<div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
<div className="h-48 overflow-hidden">
<img
src={post.image}
alt={post.title}
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="text-sm text-[#B6D8C3] font-semibold mb-2">{post.category}</div>
<h3 className="text-xl font-bold text-[#020F59] mb-3">{post.title}</h3>
<p className="text-gray-600 mb-4">{post.preview}</p>
<a href="#" className="text-[#020F59] font-medium hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer">
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
{/* FAQ Section */}
<section className="py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">Frequently Asked Questions</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Find answers to common questions about our consulting services and student involvement.
</p>
</div>
<div className="max-w-3xl mx-auto">
{faqs.map((faq, index) => (
<div key={index} className="mb-4 border-b border-gray-200 pb-4">
<button
className="flex justify-between items-center w-full text-left font-semibold text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer"
onClick={() => toggleAccordion(index)}
>
<span>{faq.question}</span>
<i className={`fa-solid ${activeAccordion === index ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
</button>
<div
className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
}`}
>
<p className="py-2">{faq.answer}</p>
</div>
</div>
))}
</div>
</div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-[#020F59] mb-4">Get In Touch</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
Have a question or interested in working with us? Reach out and our team will get back to you soon.
</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="bg-white rounded-lg shadow-lg p-8">
<h3 className="text-2xl font-bold text-[#020F59] mb-6">Send Us a Message</h3>
<form>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
<input
type="text"
id="name"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
placeholder="John Doe"
/>
</div>
<div>
<label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
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
<label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
<input
type="text"
id="company"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
placeholder="Company Ltd."
/>
</div>
<div>
<label htmlFor="designation" className="block text-gray-700 mb-2">Designation</label>
<input
type="text"
id="designation"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
placeholder="Marketing Manager"
/>
</div>
</div>
<div className="mb-6">
<label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
<input
type="text"
id="subject"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
placeholder="How can we help you?"
/>
</div>
<div className="mb-6">
<label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
<textarea
id="message"
rows={5}
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B6D8C3] focus:border-transparent"
placeholder="Tell us about your project or inquiry..."
></textarea>
</div>
<button type="submit" className="bg-[#020F59] text-white px-6 py-3 rounded-button font-medium hover:bg-[#01083d] transition-all duration-300 whitespace-nowrap cursor-pointer">
Send Message
</button>
</form>
</div>
<div>
<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
<h3 className="text-2xl font-bold text-[#020F59] mb-6">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-start">
<div className="text-[#B6D8C3] text-xl mr-4 mt-1">
<i className="fa-solid fa-location-dot"></i>
</div>
<div>
<h4 className="font-semibold text-[#020F59]">Address</h4>
<p className="text-gray-600">
Delhi Technological University<br />
Shahbad Daulatpur, Main Bawana Road<br />
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
<h4 className="font-semibold text-[#020F59]">Office Hours</h4>
<p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
<p className="text-gray-600">Saturday - Sunday: Closed</p>
</div>
</div>
</div>
<div className="mt-8">
<h4 className="font-semibold text-[#020F59] mb-4">Connect With Us</h4>
<div className="flex space-x-4">
<a href="#" className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer">
<i className="fa-brands fa-linkedin"></i>
</a>
<a href="#" className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer">
<i className="fa-brands fa-instagram"></i>
</a>
<a href="#" className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer">
<i className="fa-brands fa-twitter"></i>
</a>
<a href="#" className="text-[#020F59] hover:text-[#B6D8C3] transition-colors duration-300 text-xl cursor-pointer">
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
{/* Footer */}
<footer className="bg-[#020F59] text-white pt-16 pb-8">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<h3 className="text-2xl font-bold mb-6">DCG</h3>
<p className="text-gray-300 mb-6">
Delhi Technological University's premier student-run consulting group, bridging academic excellence with real-world business solutions.
</p>
<div className="flex space-x-4">
<a href="#" className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer">
<i className="fa-brands fa-linkedin"></i>
</a>
<a href="#" className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer">
<i className="fa-brands fa-instagram"></i>
</a>
<a href="#" className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer">
<i className="fa-brands fa-twitter"></i>
</a>
<a href="#" className="text-white hover:text-[#B6D8C3] transition-colors duration-300 cursor-pointer">
<i className="fa-brands fa-facebook"></i>
</a>
</div>
</div>
<div>
<h3 className="text-xl font-bold mb-6">Quick Links</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Home</a></li>
<li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Services</a></li>
<li><a href="#team" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Our Team</a></li>
<li><a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Blog</a></li>
<li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold mb-6">Resources</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Case Studies</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Careers</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Join DCG</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Terms of Service</a></li>
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
<p>&copy; {new Date().getFullYear()} Delhi Consulting Group. All rights reserved.</p>
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
);
};
export default App