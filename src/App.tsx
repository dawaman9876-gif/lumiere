import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Gallery from './components/Gallery';
import SpecialHighlight from './components/SpecialHighlight';
import Testimonials from './components/Testimonials';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('lumiere_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('lumiere_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        onScrollTo={handleScrollTo}
      />
      
      <main>
        <Hero onScrollTo={handleScrollTo} />
        
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <span className="text-sm uppercase tracking-[0.3em] text-white/40">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-serif">A Legacy of <br /><span className="italic">Culinary Passion</span></h2>
              <p className="text-white/60 font-light leading-relaxed">
                Founded in 2010, Lumière Bistro was born from a desire to create a dining space that celebrates the purity of ingredients and the artistry of French-inspired modern cuisine.
              </p>
              <p className="text-white/60 font-light leading-relaxed">
                Our kitchen is led by Chef Julian Vane, whose philosophy centers on seasonal sourcing and technical precision. Every dish tells a story of heritage, reimagined for the contemporary palate.
              </p>
              <div className="pt-4">
                <button className="px-8 py-3 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        <Menu onAddToCart={handleAddToCart} />
        
        <SpecialHighlight />
        
        <Gallery />
        
        <Testimonials />

        <Reservations />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}
