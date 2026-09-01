import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check } from 'lucide-react';

export default function ClosingSection() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ashwathi ♡ Anand — Royal Wedding Invitation',
        text: 'Together with their families, Ashwathi & Anand request your presence at their wedding celebration.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section className="relative pt-24 pb-32 px-4 text-center overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF8] to-[#F5EFE6] border-t border-amber-300/30">
      {/* Section Content */}
      <div className="max-w-2xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center space-y-4"
        >
          {/* Om Symbol */}
          <div className="w-12 h-12 mx-auto mb-4 text-amber-800">
            <span className="text-3xl font-devanagari">ॐ</span>
          </div>

          <h3 className="font-serif italic text-2xl sm:text-3xl text-amber-950 font-normal leading-relaxed mb-6">
            "Two hearts, one beautiful journey."
          </h3>

          <div className="gold-divider my-6 justify-center">
            <span className="text-amber-700 font-serif text-lg">✦</span>
          </div>

          {/* With love and blessings */}
          <p className="font-serif text-base sm:text-xl text-amber-900/80 font-normal mb-4 pt-2">
            With love and blessings,
          </p>

          {/* Couple Names */}
          <p className="font-serif text-2xl sm:text-4xl text-amber-900 font-medium mb-6 uppercase tracking-widest">
            ASHWATHI & ANAND
          </p>

          {/* Thank You Note */}
          <p className="font-body text-xs sm:text-sm tracking-widest text-amber-800/80 uppercase max-w-md mx-auto mb-8 leading-relaxed font-normal">
            Thank you for being a part of our special day.
          </p>

          {/* Share Invitation Button */}
          <div className="my-8 pt-2">
            <button
              onClick={handleShare}
              className="btn-gold-royal inline-flex items-center gap-2 px-6 py-3"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4 text-amber-200" />}
              <span>{copied ? 'LINK COPIED TO CLIPBOARD!' : 'SHARE DIGITAL INVITATION'}</span>
            </button>
          </div>

          {/* Date & Location Footer */}
          <div className="pt-12 text-xs sm:text-sm text-amber-800/70 font-body uppercase tracking-[0.25em] font-normal">
            December 12, 2026 • Kowdiar Palace • Thiruvananthapuram
          </div>
        </motion.div>
      </div>
    </section>
  );
}
