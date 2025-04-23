import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#F8F3E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4">
            Customer <span className="text-[#E6B325]">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-[#E6B325] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
                      <div className="w-16 h-16 bg-[#E6B325]/20 rounded-full flex items-center justify-center mb-6">
                        <span className="text-2xl font-bold text-[#E6B325]">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      
                      <p className="text-center text-[#5D4037] italic mb-6">
                        "{testimonial.comment}"
                      </p>
                      
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={18}
                            className={i < testimonial.rating ? "text-[#E6B325] fill-[#E6B325]" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      
                      <h4 className="font-bold text-[#5D4037]">{testimonial.name}</h4>
                      <p className="text-sm text-[#5D4037]/70">{testimonial.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#5D4037] hover:text-[#E6B325] transition-colors"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#5D4037] hover:text-[#E6B325] transition-colors"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === activeIndex ? 'bg-[#E6B325]' : 'bg-[#5D4037]/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/cripto_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#5D4037] hover:text-[#E6B325] transition-colors"
          >
            View more reviews on our Instagram @cripto_official
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;