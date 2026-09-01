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
    },
    {
      title: 'The Proposal',
      subtitle: 'Under Starry Skies',
      date: 'Winter 2025',
      description: 'Surrounded by glowing candlelights and floating lotuses, Anand asked Ashwathi to spend a lifetime together. With joy and tears, she said Yes!',
      icon: '💍'
    },
    {
      title: 'Forever Begins',
      subtitle: 'Sacred Wedded Bliss',
      date: 'December 12, 2026',
      description: 'We step hand in hand into the sacred ritual of Kalyana Muhurtham, seeking your blessings as two hearts become one.',
      icon: '🪔'
    }
  ];

  return (
    <section id="story-section" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-body font-semibold block mb-2">
          Love & Destiny
        </span>
        <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-bold">
          Our Story
        </h2>
        <div className="gold-divider my-4 justify-center">
          <span className="text-amber-600 font-serif">🌸</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-10">
        {chapters.map((chapter, idx) => (
          <motion.div
            key={chapter.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="p-8 rounded-3xl bg-white/80 border border-amber-300/40 shadow-lg hover:shadow-xl transition-all text-center relative overflow-hidden"
          >
            {/* Top Icon Badge Centered */}
            <div className="w-12 h-12 rounded-full border-2 border-amber-400 bg-amber-50 mx-auto flex items-center justify-center text-lg shadow-sm mb-4">
              <span>{chapter.icon}</span>
            </div>

            <span className="text-xs font-body font-semibold uppercase text-amber-700 tracking-wider block mb-1">
              {chapter.date}
            </span>
            <h3 className="font-royal text-2xl text-amber-950 font-bold mb-1">
              {chapter.title}
            </h3>
            <h4 className="font-serif italic text-amber-800 text-sm mb-4">
              {chapter.subtitle}
            </h4>
            <p className="font-body text-xs sm:text-sm text-amber-900/80 leading-relaxed max-w-lg mx-auto">
              {chapter.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
