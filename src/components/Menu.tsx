import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Starter', 'Main', 'Dessert', 'Drink'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Our Menu</h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-all ${
                  activeCategory === cat ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white/60'
                }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative overflow-hidden glass rounded-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif">{item.name}</h3>
                    <span className="text-lg font-light text-white/80">${item.price}</span>
                  </div>
                  <p className="text-sm text-white/60 font-light mb-6">
                    {item.description}
                  </p>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-white/10 hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest"
                  >
                    <Plus size={14} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
