import { motion } from 'motion/react';
import heroImage from '../assets/images/hero.jpg';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4 block">
            Excellence in every detail
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tight">
            The Art of <br />
            <span className="italic">Fine Dining</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Experience a symphony of flavors crafted with the finest seasonal ingredients in an atmosphere of refined elegance.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onScrollTo('reservations')}
              className="px-10 py-4 bg-white text-black font-medium tracking-widest uppercase text-sm hover:bg-white/90 transition-colors w-full md:w-auto"
            >
              Book a Table
            </button>
            <button 
              onClick={() => onScrollTo('menu')}
              className="px-10 py-4 border border-white/30 text-white font-medium tracking-widest uppercase text-sm hover:bg-white/10 transition-colors w-full md:w-auto"
            >
              View Menu
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-white" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Scroll</span>
      </motion.div>
    </section>
  );
}
