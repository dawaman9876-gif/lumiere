import { motion } from 'motion/react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000', span: 'md:col-span-2 md:row-span-2', title: 'The Main Dining Room' },
  { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', span: 'md:col-span-1 md:row-span-1', title: 'Culinary Precision' },
  { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', span: 'md:col-span-1 md:row-span-1', title: 'Mixology Art' },
  { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', span: 'md:col-span-1 md:row-span-2', title: 'The Private Cellar' },
  { url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800', span: 'md:col-span-1 md:row-span-1', title: 'Luminous Evenings' },
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 block">Atmosphere</span>
            <h2 className="text-4xl md:text-5xl font-serif">Visual Journey</h2>
          </div>
          <button className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 hover:text-white/60 transition-colors">
            Follow @LumiereBistro
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-3 gap-4 h-auto md:h-[900px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-sm ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.3em] font-medium border border-white/40 px-6 py-3 bg-black/20 backdrop-blur-sm">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
