import React from 'react';
import { Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4">
            Hubungi <span className="text-[#E6B325]">Kami</span>
          </h2>
          <p className="text-[#5D4037] max-w-xl mx-auto">
            Punya pertanyaan atau pesanan khusus? Hubungi kami langsung
          </p>
          <div className="w-24 h-1 bg-[#E6B325] mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8F3E6] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#5D4037] mb-6">Temukan Kami</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#5D4037]">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/cripto_official/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E6B325] flex items-center mt-1 hover:underline"
                  >
                    <Instagram size={18} className="mr-2" /> @cripto_official
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#5D4037]">WhatsApp</h4>
                  <a 
                    href="https://wa.me/6287877461799" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D4037] mt-1 hover:text-[#E6B325]"
                  >
                    +62 878-7746-1799
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#5D4037]">Jam Operasional</h4>
                  <p className="text-[#5D4037]">Senin-Sabtu: 10:00 - 20:00</p>
                  <p className="text-[#5D4037]">Minggu: 12:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8F3E6] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#5D4037] mb-6">FAQ</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#5D4037]">Bagaimana cara memesan?</h4>
                  <p className="text-[#5D4037]/80">Cukup hubungi kami melalui WhatsApp atau gunakan form pemesanan online.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#5D4037]">Apakah ada layanan pengantaran?</h4>
                  <p className="text-[#5D4037]/80">Ya, kami mengantar melalui pengantaran langsung untuk area tertentu.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#5D4037]">Bisakah saya mengkustomisasi pesanan?</h4>
                  <p className="text-[#5D4037]/80">Tentu! Anda bisa memilih topping dan saus sesuai selera.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#5D4037]">Apakah tersedia untuk acara?</h4>
                  <p className="text-[#5D4037]/80">Ya, kami menyediakan layanan katering untuk acara. Hubungi kami untuk paket khusus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;