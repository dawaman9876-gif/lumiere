import { MenuItem } from './types';
import scallops from './assets/images/scallops.jpg';
import risotto from './assets/images/risotto.jpg';
import dessert_1 from './assets/images/dessert_1.jpg';
import cocktail from './assets/images/cocktail.jpg';
import tartare from './assets/images/tartare.jpg';
import seabass from './assets/images/seabass.jpg';
import burrata from './assets/images/burrata.jpg';
import duck from './assets/images/duck.jpg';
import lamb from './assets/images/lamb.jpg';
import tarte_tatin from './assets/images/tarte_tatin.jpg';
import martini from './assets/images/martini.jpg';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Pan-Seared Scallops',
    description: 'Fresh scallops with parsnip puree and crispy pancetta.',
    price: 18,
    category: 'Starter',
    image: scallops,
  },
  {
    id: '2',
    name: 'Truffle Mushroom Risotto',
    description: 'Arborio rice with wild mushrooms and black truffle shavings.',
    price: 26,
    category: 'Main',
    image: risotto,
  },
  {
    id: '3',
    name: 'Valrhona Chocolate Fondant',
    description: 'Warm chocolate cake with a molten center and vanilla bean ice cream.',
    price: 14,
    category: 'Dessert',
    image: dessert_1,
  },
  {
    id: '4',
    name: 'The Lumière Signature',
    description: 'Smoked bourbon with spiced bitters and orange zest.',
    price: 16,
    category: 'Drink',
    image: cocktail,
  },
  {
    id: '5',
    name: 'Wagyu Beef Tartare',
    description: 'Hand-cut wagyu with capers, shallots, and a quail egg yolk.',
    price: 22,
    category: 'Starter',
    image: tartare,
  },
  {
    id: '6',
    name: 'Roasted Seabass',
    description: 'Line-caught seabass with braised leeks and saffron beurre blanc.',
    price: 34,
    category: 'Main',
    image: seabass,
  },
  {
    id: '7',
    name: 'Heirloom Burrata',
    description: 'Creamy burrata with seasonal tomatoes, aged balsamic, and basil oil.',
    price: 19,
    category: 'Starter',
    image: burrata,
  },
  {
    id: '8',
    name: 'Honey-Glazed Duck',
    description: 'Roasted duck breast with cherry gastrique and parsnip crisps.',
    price: 38,
    category: 'Main',
    image: duck,
  },
  {
    id: '9',
    name: 'Herb-Crusted Lamb',
    description: 'Rack of lamb with fondant potatoes and mint-infused jus.',
    price: 42,
    category: 'Main',
    image: lamb,
  },
  {
    id: '10',
    name: 'Apple Tarte Tatin',
    description: 'Classic caramelized apple tart with Madagascar vanilla cream.',
    price: 15,
    category: 'Dessert',
    image: tarte_tatin,
  },
  {
    id: '11',
    name: 'Espresso Martini',
    description: 'Freshly pulled espresso, premium vodka, and coffee liqueur.',
    price: 17,
    category: 'Drink',
    image: martini,
  }
];
