import React from 'react';
import { Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#5D4037] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="mb-6">
              <a href="#home" className="text-[#E6B325] font-bold text-3xl">Cripto</a>
              <p className="text-white/80 mt-2">Shake, Meat, Repeat!</p>
            </div>
            
            <p className="text-white/80 mb-6">
              Nikmati kombinasi sempurna keripik renyah dan topping premium, semua bisa disesuaikan dengan selera Anda.
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/cripto_official/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E6B325] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/6287877461799" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E6B325] transition-colors"
                aria-label="WhatsApp"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Menu Cepat</h3>
            <ul className="space-y-3">
              {['Beranda', 'Tentang', 'Menu', 'Pesan', 'Kontak'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-[#E6B325] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Cripto. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 text-sm hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="text-white/60 text-sm hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;