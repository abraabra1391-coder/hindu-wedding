import React from 'react';
import { motion } from 'framer-motion';

export default function InvitationCard() {
  return (
    <section id="invitation-card" className="py-20 px-4 w-full flex flex-col items-center justify-center text-center mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="indian-arch-card p-8 sm:p-12 md:p-16 text-center relative bg-gradient-to-b from-[#FFFDF8] to-[#FBF7EE] mx-auto flex flex-col items-center justify-center"
      >
        {/* Arch Header Ornament Motif */}
        <div className="flex justify-center mb-5 mx-auto">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border border-amber-400/40 flex items-center justify-center bg-amber-50/50 shadow-inner">
              <span className="text-2xl font-devanagari text-amber-800 font-normal">ॐ</span>
            </div>
          </div>
        </div>

        {/* Minimal Standard Heading */}
        <h3 className="font-royal text-xl sm:text-3xl text-gold-gradient font-semibold tracking-wider mb-3 uppercase">
          With the blessings of our families
        </h3>

        <div className="gold-divider my-5 justify-center">
          <span className="text-amber-700 font-serif text-lg">✦</span>
        </div>

        {/* Traditional Invocation Verse & Card Body */}
        <div className="max-w-2xl mx-auto space-y-5 font-serif text-[#3B2328] text-base sm:text-xl leading-relaxed font-normal">
          <p className="italic text-amber-900/90 font-medium text-base sm:text-lg tracking-wide py-2 px-4 inline-block">
            "Vakratunda Mahakaya Surya Koti Samaprabha |<br />
            Nirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada ||"
          </p>

          <p className="pt-2 text-[#3B2328] font-normal leading-relaxed">
            As two souls bind together under the sacred vows of the Vedic ceremony, we request the pleasure of your company to celebrate the wedding union of
          </p>

          <div className="py-4 flex flex-col items-center justify-center">
            <span className="font-royal text-3xl sm:text-5xl md:text-6xl text-amber-900 font-semibold tracking-wider block mb-1 lowercase">
              ashwathi & anand
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.25em] text-amber-800 uppercase font-body block mt-2">
              Kalyana Muhurtham & Celebration
            </span>
          </div>

          <p className="text-sm sm:text-lg text-[#4E3237] font-serif leading-relaxed max-w-xl mx-auto">
            Your presence, warm prayers, and blessings on this auspicious day will illuminate their new journey together.
          </p>
        </div>

        {/* Bottom Corner Ornaments */}
        <div className="mt-10 flex items-center justify-between w-full max-w-xl mx-auto px-4 border-t border-amber-300/40 pt-5">
          <div className="w-10 h-10 border-l border-b border-amber-500/40 rounded-bl-xl" />
          <span className="font-script text-2xl sm:text-3xl text-amber-800 font-normal">Subham Astu</span>
          <div className="w-10 h-10 border-r border-b border-amber-500/40 rounded-br-xl" />
        </div>
      </motion.div>
    </section>
  );
}
