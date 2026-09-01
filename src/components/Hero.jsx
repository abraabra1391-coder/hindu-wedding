import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles } from 'lucide-react';

export default function Hero({ onScrollToInvite }) {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between px-4 py-8 md:py-12 overflow-hidden bg-[#FAF8F5] text-center mx-auto">
      {/* Background Arch Overlay Image matching the Reference Graphic */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none md:opacity-40 transition-opacity"
        style={{ backgroundImage: `url(/assets/hero_palace_arch.jpg)` }}
      />

      {/* Decorative Warm Ambient Glow Radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hanging Brass Diyas Visual Elements (Left & Right) */}
      <div className="hidden lg:block absolute left-8 top-16 w-32 pointer-events-none z-10">
        <div className="w-[1px] h-36 bg-amber-600/40 mx-auto" />
        <div className="w-16 h-20 mx-auto relative flex flex-col items-center diya-glow">
          <div className="w-3.5 h-3.5 bg-amber-400 rounded-full blur-sm animate-pulse mb-1" />
          <svg className="w-14 h-14 text-amber-800" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 20 C30 50 20 70 50 85 C80 70 70 50 50 20 Z" />
          </svg>
        </div>
      </div>
      <div className="hidden lg:block absolute right-8 top-16 w-32 pointer-events-none z-10">
        <div className="w-[1px] h-36 bg-amber-600/40 mx-auto" />
        <div className="w-16 h-20 mx-auto relative flex flex-col items-center diya-glow">
          <div className="w-3.5 h-3.5 bg-amber-400 rounded-full blur-sm animate-pulse mb-1" />
          <svg className="w-14 h-14 text-amber-800" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 20 C30 50 20 70 50 85 C80 70 70 50 50 20 Z" />
          </svg>
        </div>
      </div>

      {/* Top Auspicious Symbol */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center mt-2 mx-auto flex flex-col items-center"
      >
        <span className="text-3xl md:text-4xl font-devanagari text-amber-800 font-normal drop-shadow-sm inline-block">
          ॐ
        </span>
        <div className="text-[11px] sm:text-xs tracking-[0.3em] font-serif text-amber-900 font-normal uppercase mt-1">
          || Shree Ganeshay Namah ||
        </div>
      </motion.div>

      {/* Hero Central Invitation Card Content Centered - Minimal Standard */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="z-10 max-w-2xl w-full text-center mx-auto my-auto py-8 px-6 sm:px-10 rounded-[36px] border border-amber-500/20 bg-white/80 backdrop-blur-md shadow-xl relative flex flex-col items-center justify-center"
        style={{
          boxShadow: '0 20px 45px rgba(59, 35, 40, 0.08), inset 0 0 25px rgba(212, 175, 55, 0.08)'
        }}
      >
        {/* Ornate Top Ganesh Motif SVG */}
        <div className="w-14 h-14 mx-auto mb-3 text-amber-700/90 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current">
            <path d="M50 5 C30 5 15 20 15 40 C15 65 35 85 50 95 C65 85 85 65 85 40 C85 20 70 5 50 5 Z M50 20 C58 20 65 27 65 35 C65 48 50 62 50 72 C50 62 35 48 35 35 C35 27 42 20 50 20 Z" />
            <circle cx="50" cy="35" r="5" fill="#C5A059" />
          </svg>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif italic text-base sm:text-lg text-amber-900/80 font-normal tracking-wide mb-2">
          Together with their families
        </h2>

        {/* Couple Names */}
        <div className="my-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5">
          <span className="font-royal text-3xl sm:text-5xl md:text-6xl text-gold-gradient font-semibold tracking-wider lowercase">
            ashwathi
          </span>
          <span className="font-script text-3xl sm:text-4xl text-rose-700 my-1">
            ♡
          </span>
          <span className="font-royal text-3xl sm:text-5xl md:text-6xl text-gold-gradient font-semibold tracking-wider lowercase">
            anand
          </span>
        </div>

        {/* Invitation Message */}
        <p className="font-serif text-base sm:text-lg text-[#3B2328] font-normal max-w-md mx-auto leading-relaxed my-3">
          Request the pleasure of your presence as they begin their journey together in holy matrimony
        </p>

        {/* Traditional Gold Line Divider */}
        <div className="gold-divider my-5 justify-center">
          <div className="w-3 h-3 rotate-45 border border-amber-600/60 bg-amber-100" />
        </div>

        {/* Date Display */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-amber-400/40 bg-amber-50/70 text-amber-900 font-serif text-sm sm:text-base font-medium tracking-widest uppercase mb-6 shadow-sm">
          <Calendar className="w-4 h-4 text-amber-700" />
          <span>Saturday, December 12, 2026</span>
        </div>

        {/* CTA Button */}
        <div>
          <button 
            onClick={onScrollToInvite}
            className="btn-gold-royal inline-flex items-center gap-2.5 group"
          >
            <span>VIEW INVITATION</span>
            <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="z-10 mt-5 cursor-pointer text-amber-800/70 hover:text-amber-900 flex flex-col items-center mx-auto"
        onClick={onScrollToInvite}
      >
        <span className="text-[10px] tracking-[0.25em] font-royal uppercase mb-1 font-semibold">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 text-amber-700" />
      </motion.div>
    </section>
  );
}
