import React from 'react';
import { Utensils, Leaf, Check, Flame } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Utensils size={24} className="text-[#E6B325]" />,
      title: 'Daging Asli',
      description: 'Topping daging sapi dan ayam premium yang disiapkan setiap hari'
    },
    {
      icon: <Leaf size={24} className="text-[#E6B325]" />,
      title: 'Sayuran Segar',
      description: 'Selada renyah dan tomat segar untuk keseimbangan sempurna'
    },
    {
      icon: <Check size={24} className="text-[#E6B325]" />,
      title: 'Keripik Renyah',
      description: 'Keripik segitiga khas kami dengan kerenyahan yang pas'
    },
    {
      icon: <Flame size={24} className="text-[#E6B325]" />,
      title: 'Saus Pilihan',
      description: 'Pilih dari berbagai saus homemade kami'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4">
            Tentang <span className="text-[#E6B325]">Cripto</span>
          </h2>
          <div className="w-24 h-1 bg-[#E6B325] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="tentang.png"
                  alt="Cripto Experience"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E6B325] opacity-20 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#5D4037] opacity-10 rounded-full"></div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-16">
            <h3 className="text-2xl font-semibold text-[#5D4037] mb-4">
              Inovasi Makanan Ringan
            </h3>
            <p className="text-[#5D4037] mb-6">
              Cripto (Cripik Topping) berjalan di bidang makanan ringan. Produk kami berupa jajanan ringan 
              dengan bahan utama keripik dan daging serta menggunakan berbagai campuran topping.
            </p>
            <p className="text-[#5D4037] mb-6">
              Minat orang-orang untuk makanan ringan yang tidak pernah pudar untuk menemani kegiatan mereka 
              menjadi dorongan kami untuk menghasilkan produk yang dapat dinikmati banyak orang.
            </p>
            <p className="text-[#5D4037] mb-6">
              Kami memiliki visi dan misi agar produk ini dapat terus berinovasi dan berkembang dengan lebih 
              luas lagi sambil terus memertahankan kualitas dan memiliki tempat tersendiri bagi konsumen.
            </p>
            <a
              href="#customize"
              className="inline-block bg-[#E6B325] text-white px-6 py-3 rounded-full hover:bg-[#d4a520] transition-colors font-medium"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F8F3E6] p-6 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-[#5D4037] mb-2">{feature.title}</h4>
              <p className="text-[#5D4037]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;