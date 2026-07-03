import { motion } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollTo: (id: string) => void;
}

export default function Navbar({ cartCount, onOpenCart, onScrollTo }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Menu', id: 'menu' },
    { name: 'Reservations', id: 'reservations' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass h-20 px-6 md:px-12 flex items-center justify-between">
      <div 
        className="text-2xl font-serif font-bold tracking-widest cursor-pointer"
        onClick={() => onScrollTo('hero')}
      >
        LUMIÈRE
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onScrollTo(link.id)}
            className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={onOpenCart}
          className="relative p-2 text-white/70 hover:text-white transition-colors"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <button onClick={onOpenCart} className="relative p-2">
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 glass p-6 md:hidden flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onScrollTo(link.id);
                setIsMenuOpen(false);
              }}
              className="text-lg uppercase tracking-widest text-white/70 text-left"
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
