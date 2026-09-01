import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';

export default function Hero({ onScrollToInvite }) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col items-center justify-between px-3 sm:px-4 py-6 sm:py-10 overflow-hidden bg-[#FAF8F5] text-center mx-auto">
      {/* Background Arch Overlay Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none sm:opacity-35 transition-opacity"
        style={{ backgroundImage: `url(/assets/hero_palace_arch.jpg)` }}
      />

      {/* Warm Glow Radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Auspicious Symbol */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mt-1 sm:mt-2 mx-auto flex flex-col items-center"
      >
        <span className="text-2xl sm:text-3xl font-devanagari text-amber-800 font-normal drop-shadow-sm inline-block">
          ॐ
        </span>
        <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] font-serif text-amber-900 font-normal uppercase mt-0.5">
          || Shree Ganeshay Namah ||
        </div>
      </motion.div>

      {/* Hero Central Invitation Card Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="z-10 max-w-xl w-full text-center mx-auto my-auto py-6 px-4 sm:py-8 sm:px-8 rounded-[28px] sm:rounded-[36px] border border-amber-500/20 bg-white/85 backdrop-blur-md shadow-md relative flex flex-col items-center justify-center"
      >
        {/* Top Ganesh Motif SVG */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 text-amber-700/85 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-9 h-9 sm:w-10 sm:h-10 fill-current">
            <path d="M50 5 C30 5 15 20 15 40 C15 65 35 85 50 95 C65 85 85 65 85 40 C85 20 70 5 50 5 Z M50 20 C58 20 65 27 65 35 C65 48 50 62 50 72 C50 62 35 48 35 35 C35 27 42 20 50 20 Z" />
            <circle cx="50" cy="35" r="5" fill="#C5A059" />
          </svg>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif italic text-xs sm:text-base text-amber-900/80 font-normal tracking-wide mb-1">
          Together with their families
        </h2>

        {/* Couple Names */}
        <div className="my-2 sm:my-3 flex flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-amber-900 font-medium tracking-wide lowercase">
            ashwathi
          </span>
          <span className="font-script text-xl sm:text-3xl text-rose-700">
            ♡
          </span>
          <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-amber-900 font-medium tracking-wide lowercase">
            anand
          </span>
        </div>

        {/* Invitation Message */}
        <p className="font-serif text-xs sm:text-base text-[#3B2328] font-normal max-w-xs sm:max-w-md mx-auto leading-relaxed my-2">
          Request the pleasure of your presence as they begin their journey together in holy matrimony
        </p>

        {/* Traditional Gold Line Divider */}
        <div className="gold-divider my-3 justify-center">
          <div className="w-2.5 h-2.5 rotate-45 border border-amber-600/50 bg-amber-100" />
        </div>

        {/* Date Display */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-50/70 text-amber-900 font-serif text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 shadow-sm">
          <Calendar className="w-3.5 h-3.5 text-amber-700" />
          <span>Saturday, Dec 12, 2026</span>
        </div>

        {/* CTA Button */}
        <div>
          <button 
            onClick={onScrollToInvite}
            className="btn-gold-royal inline-flex items-center gap-2 group"
          >
            <span>VIEW INVITATION</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-200 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="z-10 mt-3 cursor-pointer text-amber-800/70 hover:text-amber-900 flex flex-col items-center mx-auto"
        onClick={onScrollToInvite}
      >
        <span className="text-[9px] tracking-[0.2em] font-serif uppercase mb-0.5 font-normal">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-amber-700" />
      </motion.div>
    </section>
  );
}
