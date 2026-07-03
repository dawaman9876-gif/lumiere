export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}
