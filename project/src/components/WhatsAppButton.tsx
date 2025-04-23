import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Halo Cripto, saya mau pesan!');
    window.open(`https://wa.me/6287877461799?text=${message}`, '_blank');
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20BD5C] transition-colors"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
      <span className="sr-only">Order via WhatsApp</span>
      
      <div className="absolute -top-10 right-0 bg-white px-4 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap">
        Order Now
      </div>
    </button>
  );
};

export default WhatsAppButton;