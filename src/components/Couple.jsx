import React from 'react';
import { motion } from 'framer-motion';

export default function Couple() {
  return (
    <section id="couple-section" className="py-20 px-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
      <div className="text-center mb-14 mx-auto w-full">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-body font-semibold block mb-2">
          The Blessed Union
        </span>
        <h2 className="font-royal text-2xl sm:text-4xl text-gold-gradient font-semibold uppercase tracking-wider">
          Bride & Groom
        </h2>
        <div className="gold-divider my-4 justify-center">
          <span className="text-rose-600 font-serif text-xl">♡</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center justify-center w-full max-w-4xl mx-auto">
        {/* Bride Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center group flex flex-col items-center justify-center mx-auto w-full"
        >
          {/* Ornamental Gold Frame Centered */}
          <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 rounded-t-[120px] rounded-b-3xl p-3 bg-gradient-to-b from-amber-300 via-amber-200 to-amber-400 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="w-full h-full rounded-t-[112px] rounded-b-2xl overflow-hidden relative border border-amber-100">
              <img 
                src="/assets/bride_ashwathi.jpg" 
                alt="Bride Ashwathi"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            {/* Corner Decorative Lotus Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-50 px-4 py-1 rounded-full border border-amber-300 shadow-md text-amber-900 text-[11px] font-royal font-semibold tracking-widest uppercase">
              BRIDE
            </div>
          </div>

          <div className="mt-8 space-y-2 text-center flex flex-col items-center">
            <h3 className="font-royal text-3xl md:text-4xl text-amber-950 font-semibold tracking-wide lowercase">
              ashwathi
            </h3>
            <p className="font-serif italic text-amber-900 font-medium text-lg">
              Daughter of Sreekumar & Sreedevi
            </p>
            <p className="font-body text-xs text-[#5E4348] max-w-xs mx-auto leading-relaxed pt-1 font-normal">
              "Graceful, compassionate, and filled with warmth. Ashwathi brings light and joy to every life she touches."
            </p>
          </div>
        </motion.div>

        {/* Groom Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center group flex flex-col items-center justify-center mx-auto w-full"
        >
          {/* Ornamental Gold Frame Centered */}
          <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 rounded-t-[120px] rounded-b-3xl p-3 bg-gradient-to-b from-amber-300 via-amber-200 to-amber-400 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="w-full h-full rounded-t-[112px] rounded-b-2xl overflow-hidden relative border border-amber-100">
              <img 
                src="/assets/groom_anand.jpg" 
                alt="Groom Anand"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            {/* Corner Decorative Lotus Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-50 px-4 py-1 rounded-full border border-amber-300 shadow-md text-amber-900 text-[11px] font-royal font-semibold tracking-widest uppercase">
              GROOM
            </div>
          </div>

          <div className="mt-8 space-y-2 text-center flex flex-col items-center">
            <h3 className="font-royal text-3xl md:text-4xl text-amber-950 font-semibold tracking-wide lowercase">
              anand
            </h3>
            <p className="font-serif italic text-amber-900 font-medium text-lg">
              Son of Vishwanadan & Radhika
            </p>
            <p className="font-body text-xs text-[#5E4348] max-w-xs mx-auto leading-relaxed pt-1 font-normal">
              "Ambitious, kind-hearted, and steadfast. Anand embodies strength and devotion for the new journey ahead."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
