export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 md:px-12 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">LUMIÈRE</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Fine dining reimagined. A culinary journey through the senses, where tradition meets innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-white/40">
              <li>info@lumierebistro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Culinary Lane, Gastronomy District</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-6">Links</h4>
            <ul className="space-y-4 text-sm font-light text-white/40">
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-6">Newsletter</h4>
            <p className="text-xs text-white/40 mb-4 font-light">Join our list for exclusive event invitations.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border border-white/10 p-3 text-xs outline-none focus:border-white/30 flex-1"
              />
              <button className="bg-white text-black px-4 text-[10px] uppercase font-bold tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-widest">
          <p>© 2026 Lumière Bistro. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
