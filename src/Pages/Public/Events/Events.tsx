import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';

interface EventData {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const events: EventData[] = [
  {
    id: 'bizmark2023',
    title: 'Bizmark 2023',
    description: 'A flagship case competition that brought together over 500 participants from premier institutions across India. Teams tackled real-world business challenges presented by industry leaders.',
    images: [
      'https://readdy.ai/api/search-image?query=professional%20business%20conference%20event%20with%20modern%20stage%20setup%2C%20blue%20lighting%2C%20corporate%20audience%20in%20a%20luxury%20venue%2C%20high%20end%20professional%20photography&width=800&height=450&seq=1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=business%20presentation%20workshop%20with%20executives%20discussing%20strategy%20charts%20and%20graphs%2C%20modern%20corporate%20meeting%20room%20setting&width=800&height=450&seq=2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=networking%20event%20at%20luxury%20corporate%20venue%20with%20professionals%20engaging%20in%20discussions%2C%20elegant%20evening%20atmosphere&width=800&height=450&seq=3&orientation=landscape',
      'https://readdy.ai/api/search-image?query=award%20ceremony%20celebration%20in%20corporate%20environment%20with%20trophy%20presentation%2C%20professional%20stage%20lighting&width=800&height=450&seq=4&orientation=landscape'
    ]
  },
  {
    id: 'bizmark2024',
    title: 'Bizmark 2024',
    description: 'The latest edition of our signature event featured innovative case studies focused on sustainable business practices and digital transformation strategies.',
    images: [
      'https://readdy.ai/api/search-image?query=modern%20business%20conference%202024%20with%20cutting%20edge%20technology%20displays%2C%20futuristic%20stage%20design%20with%20blue%20LED%20lighting&width=800&height=450&seq=5&orientation=landscape',
      'https://readdy.ai/api/search-image?query=interactive%20workshop%20session%20with%20digital%20screens%20and%20collaborative%20team%20discussions%20in%20modern%20office%20space&width=800&height=450&seq=6&orientation=landscape',
      'https://readdy.ai/api/search-image?query=professional%20networking%20mixer%20in%20contemporary%20venue%20with%20mood%20lighting%20and%20business%20professionals&width=800&height=450&seq=7&orientation=landscape',
      'https://readdy.ai/api/search-image?query=corporate%20awards%20ceremony%202024%20with%20modern%20stage%20design%20and%20professional%20lighting%20setup&width=800&height=450&seq=8&orientation=landscape'
    ]
  },
  {
    id: 'orientation2023',
    title: 'Orientation 2023',
    description: 'Welcome session for new members featuring industry speakers, alumni interactions, and comprehensive introduction to consulting practices.',
    images: [
      'https://readdy.ai/api/search-image?query=university%20orientation%20event%20with%20modern%20auditorium%20setup%2C%20professional%20presentation%20screens%20and%20engaged%20student%20audience&width=800&height=450&seq=9&orientation=landscape',
      'https://readdy.ai/api/search-image?query=student%20networking%20session%20in%20modern%20campus%20facility%20with%20professional%20mentors%20and%20industry%20experts&width=800&height=450&seq=10&orientation=landscape',
      'https://readdy.ai/api/search-image?query=interactive%20workshop%20session%20with%20students%20and%20professionals%20in%20modern%20learning%20environment&width=800&height=450&seq=11&orientation=landscape',
      'https://readdy.ai/api/search-image?query=campus%20welcome%20event%20with%20professional%20setup%20and%20modern%20audiovisual%20equipment&width=800&height=450&seq=12&orientation=landscape'
    ]
  },
  {
    id: 'orientation2024',
    title: 'Orientation 2024',
    description: 'An immersive introduction to consulting featuring virtual reality simulations, interactive case workshops, and mentorship sessions.',
    images: [
      'https://readdy.ai/api/search-image?query=2024%20student%20orientation%20with%20virtual%20reality%20demonstrations%20in%20modern%20university%20setting&width=800&height=450&seq=13&orientation=landscape',
      'https://readdy.ai/api/search-image?query=interactive%20digital%20workshop%20with%20students%20using%20modern%20technology%20in%20professional%20learning%20environment&width=800&height=450&seq=14&orientation=landscape',
      'https://readdy.ai/api/search-image?query=mentorship%20session%20in%20contemporary%20campus%20facility%20with%20professional%20setup%20and%20engaged%20participants&width=800&height=450&seq=15&orientation=landscape',
      'https://readdy.ai/api/search-image?query=modern%20campus%20event%20with%20digital%20displays%20and%20professional%20presentation%20equipment&width=800&height=450&seq=16&orientation=landscape'
    ]
  },
  {
    id: 'competition2025',
    title: 'Case Competition 2025',
    description: 'Upcoming flagship competition focusing on future-ready business solutions, featuring international participation and industry partnerships.',
    images: [
      'https://readdy.ai/api/search-image?query=futuristic%20business%20competition%20venue%20with%20advanced%20technology%20displays%20and%20modern%20stage%20design&width=800&height=450&seq=17&orientation=landscape',
      'https://readdy.ai/api/search-image?query=next%20generation%20presentation%20setup%20with%20holographic%20displays%20and%20modern%20corporate%20environment&width=800&height=450&seq=18&orientation=landscape',
      'https://readdy.ai/api/search-image?query=innovative%20business%20workshop%20space%20with%20cutting%20edge%20technology%20and%20professional%20atmosphere&width=800&height=450&seq=19&orientation=landscape',
      'https://readdy.ai/api/search-image?query=modern%20corporate%20event%20space%20with%20advanced%20digital%20integration%20and%20professional%20lighting&width=800&height=450&seq=20&orientation=landscape'
    ]
  }
];

const Events: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('bizmark2023');
const scrollTimeout = useRef<number | null>(null);


  // Smooth scroll with offset for sticky navbar
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -80; // adjust for navbar height
      const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Active section detection with debounce
  useEffect(() => {
    const handleScroll = () => {
      window.clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => {
        for (const event of events) {
          const el = document.getElementById(event.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(event.id);
              break;
            }
          }
        }
      }, 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20corporate%20event%20venue%20with%20dramatic%20blue%20lighting%2C%20professional%20stage%20setup%20with%20LED%20screens%20showing%20business%20presentations&width=1440&height=400&seq=21&orientation=landscape"
          alt="Events background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Events</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Discover the premier consulting events that shape future business leaders and drive innovation in the industry.
          </p>
        </div>
      </div>

      {/* Navbar Sections */}
<div className="sticky top-0 z-50 bg-white shadow-md">
  <div className="w-full px-4 py-3">
    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-start">
      {events.map(event => (
        <button
          key={event.id}
          onClick={() => scrollToSection(event.id)}
          className={`font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
            activeSection === event.id
              ? 'text-blue-900 bg-blue-50 border border-blue-200'
              : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
          }`}
        >
          {event.title}
        </button>
      ))}
    </div>
  </div>
</div>



      {/* Event Sections */}
      <div className="container mx-auto px-6 py-16">
        {events.map(event => (
          <section
            key={event.id}
            id={event.id}
            className="mb-24 scroll-mt-32"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">{event.title}</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl">{event.description}</p>
            <CustomSlider images={event.images} title={event.title} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Events;

// CustomSlider Component 
function CustomSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Responsive slide count
  useEffect(() => {
    const updateSlides = () => setSlidesToShow(window.innerWidth >= 1024 ? 2 : 1);
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const maxIndex = Math.ceil(images.length / slidesToShow);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % maxIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [maxIndex]);

  const goToSlide = (index: number) => { setCurrentIndex(index); setIsAutoPlaying(false); };
  const nextSlide = () => { setCurrentIndex(prev => (prev + 1) % maxIndex); setIsAutoPlaying(false); };
  const prevSlide = () => { setCurrentIndex(prev => (prev - 1 + maxIndex) % maxIndex); setIsAutoPlaying(false); };

  return (
    <div className="relative w-full" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / maxIndex)}%)`,
            width: `${maxIndex * 100}%`
          }}
        >
          {Array.from({ length: maxIndex }).map((_, slideIdx) => (
            <div key={slideIdx} className="w-full flex gap-6">
              {images.slice(slideIdx * slidesToShow, (slideIdx + 1) * slidesToShow).map((img, i) => (
                <div key={i} className={`${slidesToShow === 2 ? 'w-1/2' : 'w-full'} aspect-video rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]`}>
                  <img src={img} alt={`${title} image ${slideIdx * slidesToShow + i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow transition z-10" aria-label="Previous slide">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-2 rounded-full shadow transition z-10" aria-label="Next slide">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex }).map((_, idx) => (
          <button key={idx} onClick={() => goToSlide(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-blue-900 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
