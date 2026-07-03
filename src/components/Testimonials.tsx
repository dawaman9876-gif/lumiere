import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Elena Richardson",
    role: "Food Critic",
    content: "Lumière is a revelation. The truffle risotto is quite possibly the finest I've tasted outside of Piedmont. An absolute masterclass in flavor balancing.",
  },
  {
    name: "Marcus Thorne",
    role: "Regular Guest",
    content: "The atmosphere alone is worth the visit, but the service is what keeps us coming back. They remember our favorite wine and every detail of our preferences.",
  },
  {
    name: "Sarah Chen",
    role: "Lifestyle Blogger",
    content: "Art on a plate. Every course was a visual and sensory journey. The signature cocktail program is innovative and perfectly executed.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 block">Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif">Guest Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 relative"
            >
              <Quote className="text-white/10 absolute top-6 right-8" size={48} />
              <div className="flex gap-1 mb-6 text-yellow-500/80">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 italic font-light leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-serif text-lg">{t.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
