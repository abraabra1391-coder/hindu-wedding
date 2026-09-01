import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue-section" className="pt-36 pb-24 px-4 max-w-5xl mx-auto text-center mt-12">
      <div className="text-center mb-14 mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-body font-medium block mb-2">
          Royal Location
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-900 font-normal uppercase tracking-widest">
          The Wedding Venue
        </h2>
        <div className="gold-divider my-4 justify-center">
          <span className="text-amber-700 font-serif text-base">🏰</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[32px] p-8 md:p-12 bg-white/90 border border-amber-300/40 shadow-xl relative overflow-hidden flex flex-col items-center text-center max-w-3xl mx-auto space-y-8"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-radial from-amber-100/30 to-transparent pointer-events-none" />

        {/* Venue Info */}
        <div className="relative z-10 space-y-4 flex flex-col items-center text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100/60 border border-amber-300/50 text-amber-900 text-[11px] font-medium tracking-wider font-body">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>PRIMARY CELEBRATION PALACE</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-amber-950 font-medium leading-relaxed max-w-xl mx-auto">
            The Kowdiar Royal Convention Centre & Palace Grounds
          </h3>
        </div>

        {/* Interactive Map */}
        <div className="relative z-10 w-full h-72 rounded-2xl border border-amber-300/60 overflow-hidden shadow-sm group max-w-2xl mx-auto">
          <iframe
            title="Venue Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.2104198007!2d76.9535!3d8.5241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb6d2524a87%3A0x6b3f81e3a6c0b968!2sKowdiar%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-lg border border-amber-200 text-xs font-medium text-amber-900 shadow-sm flex items-center gap-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Kowdiar Palace Grounds</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
