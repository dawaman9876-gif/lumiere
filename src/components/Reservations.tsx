import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Reservation } from '../types';

export default function Reservations() {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          guests: 2,
          specialRequests: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="reservations" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Reservation</h2>
            <p className="text-white/60 mb-10 leading-relaxed font-light">
              Secure your table at Lumière Bistro. Whether it's a romantic evening or a celebratory gathering, we look forward to hosting you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Dining Hours</h4>
                <p className="text-sm font-light">Mon - Thu: 5:30 PM - 10:00 PM</p>
                <p className="text-sm font-light">Fri - Sat: 5:30 PM - 11:30 PM</p>
                <p className="text-sm font-light">Sun: Closed</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Location</h4>
                <p className="text-sm font-light">123 Culinary Lane, Gastronomy District</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-sm">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-2">Booking Confirmed</h3>
                <p className="text-white/60 font-light">We'll see you soon, {formData.name}.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-white/40 transition-colors text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-white/40 transition-colors text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50">Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-white/40 transition-colors text-sm"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50">Time</label>
                    <input 
                      required
                      type="time" 
                      className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-white/40 transition-colors text-sm"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50">Guests</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-white/40 transition-colors text-sm appearance-none"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n} className="bg-black text-white">{n} Guests</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50">Special Requests</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 p-3 outline-none focus:border-white/40 transition-colors text-sm resize-none"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-white text-black font-medium tracking-widest uppercase text-xs hover:bg-white/90 transition-colors"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
