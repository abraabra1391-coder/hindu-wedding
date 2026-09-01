import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send } from 'lucide-react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    guestCount: '1',
    dietary: 'veg-sadya',
    wishes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Fire golden confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F8BBD0', '#FFFFFF', '#C5A059']
    });

    setSubmitted(true);
  };

  return (
    <section id="rsvp-section" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-body font-semibold block mb-2">
          Your Presence is Our Blessing
        </span>
        <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-bold">
          RSVP & Wishes
        </h2>
        <div className="gold-divider my-4 justify-center">
          <span className="text-amber-600 font-serif">💌</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[32px] p-8 sm:p-12 bg-white/90 border border-amber-300 shadow-2xl relative text-center"
      >
        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="font-royal text-2xl text-amber-950 font-bold">
              Thank You, {formData.name}!
            </h3>
            <p className="font-serif text-amber-900 text-lg max-w-md mx-auto">
              Your RSVP and warm blessings have been joyfully received by Ashwathi & Anand.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-body text-amber-700 hover:text-amber-900 underline tracking-wider"
            >
              Update or Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-center max-w-xl mx-auto">
            {/* Guest Name */}
            <div>
              <label className="block text-xs font-body font-semibold text-amber-900 uppercase tracking-wider mb-2 text-center">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh & Family"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-amber-300 bg-amber-50/40 text-amber-950 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-500 font-body text-sm text-center"
              />
            </div>

            {/* Attendance & Guest Count Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-body font-semibold text-amber-900 uppercase tracking-wider mb-2 text-center">
                  Will You Attend?
                </label>
                <select
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-300 bg-amber-50/40 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-body text-sm text-center"
                >
                  <option value="yes">Joyfully Accept (Yes)</option>
                  <option value="regret">Regretfully Decline (No)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-amber-900 uppercase tracking-wider mb-2 text-center">
                  Number of Guests
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-amber-300 bg-amber-50/40 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-body text-sm text-center"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4+">4+ Persons (Family)</option>
                </select>
              </div>
            </div>

            {/* Warm Wishes Textarea */}
            <div>
              <label className="block text-xs font-body font-semibold text-amber-900 uppercase tracking-wider mb-2 text-center">
                Warm Wishes & Blessings for the Couple
              </label>
              <textarea
                rows="3"
                placeholder="Write a sweet congratulatory message for Ashwathi & Anand..."
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-amber-300 bg-amber-50/40 text-amber-950 placeholder-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-500 font-body text-sm text-center"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="btn-gold-royal w-full sm:w-auto inline-flex items-center justify-center gap-3"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM RSVP & SEND WISHES</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
