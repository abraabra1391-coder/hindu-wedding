import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    {
      id: 1,
      src: '/assets/gallery_1.jpg',
      caption: 'Pre-Wedding Royal Shoot',
      category: 'Palace Memories'
    },
    {
      id: 2,
      src: '/assets/gallery_2.jpg',
      caption: 'Under the Golden Archway',
      category: 'Romantic Moments'
    },
    {
      id: 3,
      src: '/assets/gallery_3.jpg',
      caption: 'Haldi & Mehendi Celebration',
      category: 'Festivities'
    },
    {
      id: 4,
      src: '/assets/bride_ashwathi.jpg',
      caption: 'Bride Ashwathi',
      category: 'Traditional Attire'
    },
    {
      id: 5,
      src: '/assets/groom_anand.jpg',
      caption: 'Groom Anand',
      category: 'Royal Elegance'
    },
    {
      id: 6,
      src: '/assets/hero_palace_arch.jpg',
      caption: 'The Sacred Palace Backdrop',
      category: 'Heritage'
    }
  ];

  return (
    <section id="gallery-section" className="pt-20 pb-16 px-4 max-w-6xl mx-auto text-center">
      <div className="text-center mb-14 mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-body font-medium block mb-2">
          Captured Moments
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-900 font-normal uppercase tracking-widest">
          Pre-Wedding Gallery
        </h2>
        <div className="gold-divider my-4 justify-center">
          <span className="text-amber-700 font-serif text-base">📷</span>
        </div>
        <p className="font-serif text-base sm:text-lg text-amber-900/80 max-w-lg mx-auto font-normal">
          Glimpses of love, tradition, and timeless laughter shared between Ashwathi & Anand.
        </p>
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedImg(img)}
            className="group cursor-pointer relative rounded-2xl p-1.5 bg-gradient-to-b from-amber-200/60 via-amber-100/40 to-amber-300/60 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-full h-72 rounded-xl overflow-hidden relative border border-white/60">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                <span className="text-[10px] uppercase font-body font-medium text-amber-300 tracking-wider">
                  {img.category}
                </span>
                <span className="font-serif text-white font-normal text-base flex items-center justify-between">
                  {img.caption}
                  <ZoomIn className="w-4 h-4 text-amber-200" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal View */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImg.src}
                alt={selectedImg.caption}
                className="max-w-full max-h-[80vh] rounded-2xl border border-amber-400/60 shadow-2xl object-contain"
              />
              <div className="mt-4 text-center text-white">
                <h4 className="font-serif text-xl text-amber-300 font-normal">{selectedImg.caption}</h4>
                <p className="text-xs text-amber-200/80 font-body uppercase tracking-wider font-normal">{selectedImg.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
