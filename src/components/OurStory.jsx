import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  const chapters = [
    {
      title: 'How We Met',
      subtitle: 'A Serendipitous Beginning',
      date: 'Autumn 2021',
      description: 'Introduced by mutual family friends during a festive gathering, our first conversation sparked an effortless connection that neither of us saw coming.',
      icon: '✨'
    },
    {
      title: 'Our First Chapter',
      subtitle: 'Growing Closer',
      date: 'Spring 2022',
      description: 'Long conversations, shared cups of traditional chai, and discovering endless common dreams deepened our friendship into a profound bond.',
      icon: '☕'
    }
  ];

  return (
    <section id="story-section" className="py-12 sm:py-16 px-3 sm:px-4 max-w-3xl mx-auto text-center">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-800 font-body font-medium block mb-1">
          Love & Destiny
        </span>
        <h2 className="font-serif text-xl sm:text-3xl text-amber-900 font-normal uppercase tracking-widest">
          Our Story
        </h2>
        <div className="gold-divider my-3 justify-center">
          <span className="text-amber-700 font-serif text-sm sm:text-base">🌸</span>
        </div>
      </div>

      <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
        {chapters.map((chapter, idx) => (
          <motion.div
            key={chapter.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-5 sm:p-7 rounded-2xl bg-white/80 border border-amber-300/30 shadow-sm text-center relative"
          >
            {/* Top Icon Badge Centered */}
            <div className="w-10 h-10 rounded-full border border-amber-400/50 bg-amber-50 mx-auto flex items-center justify-center text-sm shadow-xs mb-3">
              <span>{chapter.icon}</span>
            </div>

            <span className="text-[10px] sm:text-xs font-body font-medium uppercase text-amber-800 tracking-wider block mb-0.5">
              {chapter.date}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-amber-950 font-normal mb-0.5">
              {chapter.title}
            </h3>
            <h4 className="font-serif italic text-amber-900/80 text-xs sm:text-sm mb-2">
              {chapter.subtitle}
            </h4>
            <p className="font-body text-[11px] sm:text-xs text-[#5E4348] leading-relaxed max-w-md mx-auto font-normal">
              {chapter.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
