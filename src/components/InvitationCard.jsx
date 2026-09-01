import React from 'react';
import { motion } from 'framer-motion';

export default function InvitationCard() {
  return (
    <section id="invitation-card" className="py-14 sm:py-20 px-3 sm:px-4 w-full flex flex-col items-center justify-center text-center mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="indian-arch-card p-7 sm:p-12 text-center relative bg-gradient-to-b from-[#FFFDF8] to-[#FBF7EE] mx-auto flex flex-col items-center justify-center space-y-4"
      >
        {/* Arch Header Motif */}
        <div className="flex justify-center mb-4 mx-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-amber-400/40 flex items-center justify-center bg-amber-50/50 shadow-inner">
            <span className="text-xl sm:text-2xl font-devanagari text-amber-800 font-normal">ॐ</span>
          </div>
        </div>

        {/* Heading */}
        <h3 className="font-serif text-lg sm:text-2xl text-amber-900 font-medium tracking-widest mb-4 uppercase">
          With the blessings of our families
        </h3>

        <div className="gold-divider my-4 justify-center">
          <span className="text-amber-700 font-serif text-sm sm:text-base">✦</span>
        </div>

        {/* Invocation Verse & Card Body */}
        <div className="max-w-xl mx-auto space-y-4 font-serif text-[#3B2328] text-xs sm:text-base leading-relaxed font-normal">
          <p className="italic text-amber-900/90 font-normal text-xs sm:text-sm tracking-wide py-2 px-4 mb-4 inline-block">
            "Vakratunda Mahakaya Surya Koti Samaprabha |<br />
            Nirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada ||"
          </p>

          <p className="pt-2 text-[#3B2328] font-normal leading-relaxed mb-4">
            As two souls bind together under the sacred vows of the Vedic ceremony, we request the pleasure of your company to celebrate the wedding union of
          </p>

          <div className="py-3 my-2 flex flex-col items-center justify-center">
            <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-amber-900 font-medium tracking-wide block mb-2 lowercase">
              ashwathi & anand
            </span>
          </div>


        </div>


      </motion.div>
    </section>
  );
}
