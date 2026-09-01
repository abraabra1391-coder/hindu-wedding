import React from 'react';
import { motion } from 'framer-motion';

export default function Couple() {
  return (
    <section id="couple-section" className="py-12 sm:py-16 px-3 sm:px-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
      <div className="text-center mb-10 sm:mb-14 mx-auto w-full">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-800 font-body font-medium block mb-1">
          The Blessed Union
        </span>
        <h2 className="font-serif text-xl sm:text-3xl text-amber-900 font-normal uppercase tracking-widest">
          Bride & Groom
        </h2>
        <div className="gold-divider my-3 justify-center">
          <span className="text-rose-600 font-serif text-sm sm:text-lg">♡</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center justify-center w-full max-w-3xl mx-auto">
        {/* Bride Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center group flex flex-col items-center justify-center mx-auto w-full"
        >
          {/* Frame Centered */}
          <div className="relative mx-auto w-52 h-72 sm:w-64 sm:h-84 rounded-t-[100px] rounded-b-2xl p-2.5 bg-gradient-to-b from-amber-300 via-amber-200 to-amber-400 shadow-md transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="w-full h-full rounded-t-[94px] rounded-b-xl overflow-hidden relative border border-amber-100">
              <img 
                src="/assets/bride_ashwathi.jpg" 
                alt="Bride Ashwathi"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            {/* Corner Lotus Badge */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-amber-50 px-3.5 py-0.5 rounded-full border border-amber-300 shadow-sm text-amber-900 text-[10px] font-serif font-medium tracking-widest uppercase">
              BRIDE
            </div>
          </div>

          <div className="mt-6 space-y-1 text-center flex flex-col items-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-amber-950 font-medium tracking-wide lowercase">
              ashwathi
            </h3>
            <p className="font-serif italic text-amber-900 font-normal text-sm sm:text-base">
              Daughter of Sreekumar & Sreedevi
            </p>
          </div>
        </motion.div>

        {/* Groom Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center group flex flex-col items-center justify-center mx-auto w-full"
        >
          {/* Frame Centered */}
          <div className="relative mx-auto w-52 h-72 sm:w-64 sm:h-84 rounded-t-[100px] rounded-b-2xl p-2.5 bg-gradient-to-b from-amber-300 via-amber-200 to-amber-400 shadow-md transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="w-full h-full rounded-t-[94px] rounded-b-xl overflow-hidden relative border border-amber-100">
              <img 
                src="/assets/groom_anand.jpg" 
                alt="Groom Anand"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            {/* Corner Lotus Badge */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-amber-50 px-3.5 py-0.5 rounded-full border border-amber-300 shadow-sm text-amber-900 text-[10px] font-serif font-medium tracking-widest uppercase">
              GROOM
            </div>
          </div>

          <div className="mt-6 space-y-1 text-center flex flex-col items-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-amber-950 font-medium tracking-wide lowercase">
              anand
            </h3>
            <p className="font-serif italic text-amber-900 font-normal text-sm sm:text-base">
              Son of Vishwanadan & Radhika
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
