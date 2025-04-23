import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';
import { formatCurrency } from '../utils/formatCurrency';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Halo Cripto, saya mau pesan ${item.name}!`
    );
    window.open(`https://wa.me/6287877461799?text=${message}`, '_blank');
  };

  // Menentukan gambar berdasarkan nama item
  const getImageSource = () => {
    // Gunakan nama item untuk menentukan gambar
    return item.name.toLowerCase().includes("sapi") ? "/beef.png" : "/chicken.png";
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={getImageSource()}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <button
            onClick={handleWhatsAppOrder}
            className="bg-[#E6B325] text-white px-4 py-2 rounded-full hover:bg-[#d4a520] transition-colors font-medium flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            <ShoppingBag size={16} className="mr-2" />
            Pesan Sekarang
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#5D4037]">{item.name}</h3>
          <span className="text-[#E6B325] font-bold">{formatCurrency(item.price)}</span>
        </div>
        
        <p className="text-[#5D4037]/70 text-sm mb-4">{item.description}</p>
        
        <button
          onClick={handleWhatsAppOrder}
          className="w-full bg-white border-2 border-[#E6B325] text-[#E6B325] px-4 py-2 rounded-full hover:bg-[#E6B325] hover:text-white transition-colors font-medium flex items-center justify-center md:hidden"
        >
          <ShoppingBag size={16} className="mr-2" />
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

export default MenuItem;