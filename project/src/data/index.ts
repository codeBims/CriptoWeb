import { MenuItem, SauceOption, ToppingOption, Testimonial } from '../types';

// Tambahkan interface untuk OrderFormData
interface OrderFormData {
  menuItem: string;
  topping: string;
  sauces: string[];
  address: string;
  notes: string;
  name: string;
  whatsapp: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'chicken',
    name: 'Cripto Ayam',
    description: 'Keripik renyah dengan potongan ayam tender, selada segar, tomat, dan pilihan saus signature.',
    price: 13000,
    image: '/chicken.jpg'
  },
  {
    id: 'beef',
    name: 'Cripto Sapi',
    description: 'Keripik segitiga signature kami dengan daging sapi premium, sayuran segar, dan saus favorit Anda.',
    price: 14000,
    image: '/beef.jpg'
  }
];

export const sauceOptions: SauceOption[] = [
  { id: 'mayo', name: 'Mayonaise' },
  { id: 'cheese', name: 'Saus Keju' },
  { id: 'hot', name: 'Saus Pedas' },
  { id: 'bolognese', name: 'Saus Bolognese' }
];

export const toppingOptions: ToppingOption[] = [
  { id: 'beef', name: 'Daging Sapi' },
  { id: 'chicken', name: 'Ayam' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'wati',
    comment: 'Cripto sapi dengan saus keju rasanya mantap! Cocok buat ngemil sambil nonton.',
    rating: 5,
    date: '2025-04-15'
  },
  {
    id: '2',
    name: 'Alom',
    comment: 'Suka banget bisa pilih-pilih sausnya. Saus pedasnya pas!',
    rating: 5,
    date: '2025-04-22'
  },
  {
    id: '3',
    name: 'Budi',
    comment: 'Bahan-bahannya fresh dan pengirimannya cepat. Jadi cemilan favorit kalo lagi kumpul.',
    rating: 4,
    date: '2025-04-03'
  },
  {
    id: '4',
    name: 'Tegar',
    comment: 'Packaging box-nya lucu dan praktis. Gampang dibawa kemana-mana!',
    rating: 5,
    date: '2025-04-14'
  },
  {
    id: '5',
    name: 'Owo',
    comment: 'Ide Bagus untuk Makan siang gratis:)',
    rating: 1,
    date: '2025-04-14'
  }
];

// Format WhatsApp message
export const formatWhatsAppMessage = (order: OrderFormData): string => {
  const selectedMenu = menuItems.find(item => item.id === order.menuItem)?.name || order.menuItem;
  const selectedTopping = toppingOptions.find(item => item.id === order.topping)?.name || order.topping;
  const selectedSauces = order.sauces
    .map((sauceId: string) => sauceOptions.find(sauce => sauce.id === sauceId)?.name)
    .filter(Boolean)
    .join(', ');
  
  return encodeURIComponent(
    `Halo Cripto, saya mau pesan:\n\n` +
    `Menu: ${selectedMenu}\n` +
    `Topping: ${selectedTopping}\n` +
    `Saus: ${selectedSauces}\n` +
    `Alamat: ${order.address}\n` +
    `Catatan: ${order.notes}\n\n` +
    `Nama: ${order.name}\n` +
    `WhatsApp: ${order.whatsapp}`
  );
};