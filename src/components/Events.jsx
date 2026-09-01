import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: 'haldi',
      name: 'Haldi Ceremony',
      tagline: 'A Splash of Yellow & Golden Blessings',
      icon: '🌼',
      date: 'Friday, Dec 11, 2026',
      time: '09:30 AM - 12:00 PM',
      venue: 'Shree Krishna Garden Courtyard',
      address: 'Palace Road, Kowdiar, Thiruvananthapuram',
      mapUrl: 'https://maps.google.com/?q=Kowdiar+Palace+Thiruvananthapuram',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony+-+Ashwathi+%26+Anand&dates=20261211T040000Z/20261211T063000Z&details=Haldi+Ceremony&location=Shree+Krishna+Garden+Courtyard',
      color: 'from-amber-500/10 to-yellow-500/5',
      borderColor: 'border-amber-400/40',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'mehendi',
      name: 'Mehendi Night',
      tagline: 'Henna Patterns, Music & Joyful Celebration',
      icon: '🌿',
      date: 'Friday, Dec 11, 2026',
      time: '06:00 PM Onwards',
      venue: 'Royal Heritage Lawn',
      address: 'Palace Road, Kowdiar, Thiruvananthapuram',
      mapUrl: 'https://maps.google.com/?q=Kowdiar+Palace+Thiruvananthapuram',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehendi+Night+-+Ashwathi+%26+Anand&dates=20261211T123000Z/20261211T163000Z&details=Mehendi+Night&location=Royal+Heritage+Lawn',
      color: 'from-emerald-500/10 to-teal-500/5',
      borderColor: 'border-emerald-500/30',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony (Muhurtham)',
      tagline: 'Sacred Vows under the Holy Mandap',
      icon: '🪔',
      date: 'Saturday, Dec 12, 2026',
      time: '09:15 AM - 11:30 AM (Muhurtham 10:15 AM)',
      venue: 'The Kowdiar Royal Convention Centre',
      address: 'Palace Road, Kowdiar, Thiruvananthapuram',
      mapUrl: 'https://maps.google.com/?q=Kowdiar+Palace+Thiruvananthapuram',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+-+Ashwathi+%26+Anand&dates=20261212T034500Z/20261212T060000Z&details=Kalyana+Muhurtham+Ceremony&location=The+Kowdiar+Royal+Convention+Centre',
      color: 'from-rose-500/10 to-amber-500/10',
      borderColor: 'border-amber-500/50',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
      featured: true
    },
    {
      id: 'reception',
      name: 'Grand Reception',
      tagline: 'An Evening of Fine Dining, Music & Happiness',
      icon: '✨',
      date: 'Saturday, Dec 12, 2026',
      time: '06:30 PM Onwards',
      venue: 'The Grand Ballroom, Kowdiar Palace',
      address: 'Palace Road, Kowdiar, Thiruvananthapuram',
      mapUrl: 'https://maps.google.com/?q=Kowdiar+Palace+Thiruvananthapuram',
      calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Grand+Reception+-+Ashwathi+%26+Anand&dates=20261212T130000Z/20261212T170000Z&details=Wedding+Grand+Reception&location=The+Grand+Ballroom',
      color: 'from-amber-600/10 to-amber-900/5',
      borderColor: 'border-amber-400/40',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    }
  ];

  return (
    <section id="events-section" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-700 font-body font-semibold block mb-2">
          Auspicious Gatherings
        </span>
        <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-bold">
          Wedding Events
        </h2>
        <div className="gold-divider my-4">
          <span className="text-amber-600 font-serif">🌸</span>
        </div>
        <p className="font-serif text-lg text-amber-950/70 max-w-xl mx-auto">
          We invite you to partake in every moment of our joyous traditional festivities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`relative rounded-3xl p-8 bg-white/80 backdrop-blur-sm border ${event.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
          >
            {/* Background Subtle Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

            {/* Event Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2 rounded-2xl bg-white/90 shadow-sm border border-amber-200">
                  {event.icon}
                </span>
                <span className={`text-xs font-semibold px-3.5 py-1 rounded-full border ${event.badgeColor} font-body tracking-wider`}>
                  {event.id.toUpperCase()}
                </span>
              </div>

              <h3 className="font-royal text-2xl text-amber-950 font-bold mb-1">
                {event.name}
              </h3>
              <p className="font-serif italic text-amber-800 text-sm mb-6">
                {event.tagline}
              </p>

              {/* Details List */}
              <div className="space-y-3 font-body text-amber-900/90 text-sm mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-amber-950">{event.venue}</div>
                    <div className="text-xs text-amber-800/80">{event.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-amber-200/60">
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-900 text-amber-100 hover:bg-amber-800 font-body text-xs font-semibold tracking-wider transition-colors shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={event.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 font-body text-xs font-semibold tracking-wider transition-colors"
                title="Add to Google Calendar"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline">ADD TO CALENDAR</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
