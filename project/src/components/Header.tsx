import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F8F3E6] shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-[#5D4037] font-bold text-2xl flex items-center">
          <span className="text-[#E6B325]">Cripto</span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Menu', 'Customize', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#5D4037] hover:text-[#E6B325] transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#order"
            className="bg-[#E6B325] text-white px-4 py-2 rounded-full hover:bg-[#d4a520] transition-colors font-medium"
          >
            Order Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#5D4037]" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F8F3E6] shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Menu', 'Customize', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#5D4037] hover:text-[#E6B325] transition-colors font-medium py-2"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <a
              href="#order"
              className="bg-[#E6B325] text-white px-4 py-2 rounded-full hover:bg-[#d4a520] transition-colors font-medium text-center"
              onClick={toggleMenu}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;