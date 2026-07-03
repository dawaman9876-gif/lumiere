import { motion } from 'motion/react';
import { Star } from 'lucide-react';
export default function SpecialHighlight() {
  const risottoImage = 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800';
  return (
    <section className="py-24 px-6 md:px-12 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <Star size={12} className="text-yellow-500/80 fill-yellow-500/80" />
              <span className="text-[10px] uppercase tracking-widest text-white/60">Seasonal Selection</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Truffle Season <br /><span className="italic">Has Arrived</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-10 max-w-xl">
              From the pristine forests of Umbria to our kitchen. We are proud to present our limited-time Truffle Experience, featuring a five-course tasting menu dedicated to the 'Black Diamond' of the culinary world.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-serif mb-2">Tasting Menu</h4>
                <p className="text-xs text-white/40 font-light">$185 Per Person</p>
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2">Wine Pairing</h4>
                <p className="text-xs text-white/40 font-light">+$95 Selection</p>
              </div>
            </div>

            <button className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition-colors">
              Explore The Experience
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={risottoImage} 
                alt="Truffle Special" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 hidden md:block max-w-[200px]">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Featured Dish</p>
              <p className="text-sm font-serif">Wild Mushroom & Truffle Confit with Aged Parmesan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
