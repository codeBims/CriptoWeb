import React from 'react';
import { menuItems } from '../data';
import MenuItem from './MenuItem';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-[#F8F3E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4">
            Our <span className="text-[#E6B325]">Menu</span>
          </h2>
          <p className="text-[#5D4037] max-w-xl mx-auto">
            Temukan kombinasi lezat dari keripik renyah dengan topping premium dan saus khas kami.
          </p>
          <div className="w-24 h-1 bg-[#E6B325] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#customize"
            className="inline-block bg-[#E6B325] text-white px-8 py-3 rounded-full hover:bg-[#d4a520] transition-colors font-medium"
          >
            Customize Your Own
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;