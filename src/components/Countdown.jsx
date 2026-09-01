import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
  // Target Wedding Date: Dec 12, 2026 10:15 AM
  const targetDate = new Date('2026-12-12T10:15:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF8] to-[#FAF8F5]">
      {/* Rotating Mandala Background Pattern SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg className="w-[600px] h-[600px] text-amber-800 rotate-mandala" viewBox="0 0 500 500" fill="currentColor">
          <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
          <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="250" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M250 10 L250 490 M10 250 L490 250" stroke="currentColor" strokeWidth="2" />
          <path d="M80 80 L420 420 M80 420 L420 80" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-body font-semibold block mb-2">
            Auspicious Countdown
          </span>
          <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-bold mb-4">
            Counting down to forever
          </h2>
          <div className="gold-divider my-6">
            <span className="text-amber-600 font-serif">🪔</span>
          </div>
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mt-8">
          {units.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-amber-300/60 shadow-lg relative flex flex-col items-center justify-center group hover:border-amber-400 transition-all"
            >
              <span className="font-royal text-4xl sm:text-5xl font-bold text-amber-900 drop-shadow-sm">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[11px] font-body font-semibold tracking-widest text-amber-700 uppercase mt-2">
                {unit.label}
              </span>
              <div className="w-6 h-[1px] bg-amber-400/40 my-2" />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 font-serif italic text-amber-900/70 text-base">
          Save the date: Saturday, December 12, 2026 • Thiruvananthapuram
        </p>
      </div>
    </section>
  );
}
