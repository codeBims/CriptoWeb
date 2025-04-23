import React, { useState } from 'react';
import { Check, ChevronDown, ShoppingBag } from 'lucide-react';
import { toppingOptions, sauceOptions, formatWhatsAppMessage } from '../data';
import { OrderFormData } from '../types';

const CustomizeSection: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    whatsapp: '',
    menuItem: 'custom',
    topping: '',
    sauces: [],
    notes: '',
    address: ''
  });
  
  const [dropdowns, setDropdowns] = useState({
    topping: false,
    sauce: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleDropdown = (dropdown: 'topping' | 'sauce') => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };
  
  const selectTopping = (id: string) => {
    setFormData(prev => ({
      ...prev,
      topping: id
    }));
    setDropdowns(prev => ({
      ...prev,
      topping: false
    }));
  };
  
  const toggleSauce = (id: string) => {
    setFormData(prev => ({
      ...prev,
      sauces: prev.sauces.includes(id)
        ? prev.sauces.filter(s => s !== id)
        : [...prev.sauces, id]
    }));
  };
  
  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp || !formData.topping || formData.sauces.length === 0 || !formData.address) {
      alert('Mohon lengkapi semua field yang wajib diisi');
      return;
    }
    
    const message = formatWhatsAppMessage(formData);
    window.open(`https://wa.me/6287877461799?text=${message}`, '_blank');
  };

  const getSelectedToppingName = () => {
    const selected = toppingOptions.find(opt => opt.id === formData.topping);
    return selected ? selected.name : 'Pilih topping';
  };

  return (
    <section id="customize" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4">
            Buat <span className="text-[#E6B325]">Cripto</span> Kamu
          </h2>
          <p className="text-[#5D4037] max-w-xl mx-auto">
            Racik Cripto favoritmu dengan memilih topping dan saus yang kamu suka
          </p>
          <div className="w-24 h-1 bg-[#E6B325] mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="custom.png" 
                alt="Customize your order" 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E6B325] opacity-20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#5D4037] opacity-10 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-[#F8F3E6] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#5D4037] mb-6">Racik Box Kamu</h3>
              
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                {/* Topping Selection */}
                <div>
                  <label className="block text-[#5D4037] font-medium mb-2">
                    Pilih Topping <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown('topping')}
                      className={`w-full px-4 py-3 rounded-lg bg-white text-left flex items-center justify-between ${
                        formData.topping ? 'text-[#5D4037]' : 'text-[#5D4037]/60'
                      }`}
                    >
                      {getSelectedToppingName()}
                      <ChevronDown size={20} />
                    </button>
                    
                    {dropdowns.topping && (
                      <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        {toppingOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => selectTopping(option.id)}
                            className={`w-full px-4 py-3 text-left hover:bg-[#F8F3E6] flex items-center ${
                              formData.topping === option.id ? 'bg-[#F8F3E6]' : ''
                            }`}
                          >
                            {formData.topping === option.id && (
                              <Check size={16} className="text-[#E6B325] mr-2" />
                            )}
                            {option.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Sauce Selection */}
                <div>
                  <label className="block text-[#5D4037] font-medium mb-2">
                    Pilih Saus <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {sauceOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleSauce(option.id)}
                        className={`w-full px-4 py-3 rounded-lg text-left flex items-center ${
                          formData.sauces.includes(option.id)
                            ? 'bg-[#E6B325] text-white'
                            : 'bg-white text-[#5D4037] hover:bg-[#F8F3E6]'
                        }`}
                      >
                        {formData.sauces.includes(option.id) && (
                          <Check size={16} className="mr-2" />
                        )}
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Contact Info */}
                <div>
                  <label className="block text-[#5D4037] font-medium mb-2">
                    Nama <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama kamu"
                    className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E6B325]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#5D4037] font-medium mb-2">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Masukkan nomor WhatsApp kamu"
                    className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E6B325]"
                    required
                  />
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block text-[#5D4037] font-medium mb-2">
                    Alamat Pengiriman <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Masukkan alamat lengkap pengiriman"
                    className="w-full px-4 py-3 rounded-lg bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#E6B325]"
                    rows={3}
                    required
                  />
                </div>
                
                {/* Notes */}
                <div>
                  <label className="block text-[#5D4037] font-medium mb-2">
                    Catatan Tambahan
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Ada permintaan khusus?"
                    className="w-full px-4 py-3 rounded-lg bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#E6B325]"
                    rows={3}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-[#5D4037]/70 italic mb-4">
                    Pesanan akan dikirim melalui WhatsApp untuk diproses.
                  </p>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#E6B325] text-white px-6 py-3 rounded-full hover:bg-[#d4a520] transition-colors font-medium flex items-center justify-center"
                  >
                    <ShoppingBag size={20} className="mr-2" />
                    Pesan via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;