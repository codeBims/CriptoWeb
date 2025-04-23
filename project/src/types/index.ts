export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface SauceOption {
  id: string;
  name: string;
  image?: string;
}

export interface ToppingOption {
  id: string;
  name: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface OrderFormData {
  name: string;
  whatsapp: string;
  menuItem: string;
  topping: string;
  sauces: string[];
  notes: string;
  address: string;
}