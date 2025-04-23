import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#F8F3E6] pt-16">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#E6B325] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#5D4037] opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="md:pr-10 animate-fadeIn">
              <div className="flex items-center mb-4">
                <div className="w-16 h-1 bg-[#E6B325] mr-4"></div>
                <p className="text-[#5D4037] font-medium">Snack Innovation</p>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-[#5D4037] mb-6">
                <span className="text-[#E6B325]">Cripto</span> <br />
                Shake, Meat, Repeat!
              </h1>
              
              <p className="text-[#5D4037] text-lg mb-8 max-w-md">
              Nikmati perpaduan sempurna antara keripik renyah dan topping premium. Kreasikan snack box-mu dengan daging asli, sayuran segar, dan saus khas kami.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#order" 
                  className="bg-[#E6B325] text-white px-8 py-3 rounded-full hover:bg-[#d4a520] transition-colors font-medium"
                >
                  Order Now
                </a>
                <a 
                  href="#menu" 
                  className="border-2 border-[#5D4037] text-[#5D4037] px-8 py-3 rounded-full hover:bg-[#5D4037] hover:text-white transition-colors font-medium"
                >
                  See Menu
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-[#E6B325] opacity-10 blur-xl"></div>
              <img 
                src="awal.png" 
                alt="Cripto Box" 
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg z-20 max-w-[150px]">
                <p className="text-[#5D4037] font-bold">100% Real Meat</p>
                <p className="text-xs text-[#5D4037]/70">Premium quality ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#5D4037] animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;