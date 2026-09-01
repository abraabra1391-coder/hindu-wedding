import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
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
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds }
  ];

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-4 relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF8] to-[#FAF8F5]">
      {/* Background Mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg className="w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] text-amber-800 rotate-mandala" viewBox="0 0 500 500" fill="currentColor">
          <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
          <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="250" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-800 font-body font-medium block mb-1">
            Auspicious Countdown
          </span>
          <h2 className="font-serif text-xl sm:text-3xl text-amber-900 font-normal uppercase tracking-widest mb-2">
            Counting down to forever
          </h2>
          <div className="gold-divider my-3 justify-center">
            <span className="text-amber-700 font-serif text-sm sm:text-base">🪔</span>
          </div>
        </motion.div>

        {/* Countdown Grid - 4 columns on mobile */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto mt-5">
          {units.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-3 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-300/40 shadow-sm relative flex flex-col items-center justify-center"
            >
              <span className="font-serif text-xl sm:text-3xl font-medium text-amber-950">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[11px] font-body font-medium tracking-widest text-amber-800 uppercase mt-1">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-5 font-serif italic text-amber-900/70 text-xs sm:text-sm">
          Save the date: Saturday, December 12, 2026 • Thiruvananthapuram
        </p>
      </div>
    </section>
  );
}
