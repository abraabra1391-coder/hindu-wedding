import React from 'react';
import FloatingPetals from './components/FloatingPetals';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import InvitationCard from './components/InvitationCard';
import Couple from './components/Couple';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#3B2328] selection:bg-amber-200 selection:text-amber-950 font-body text-center">
      {/* Floating Canvas Flower Petals & Gold Dust Particles Overlay */}
      <FloatingPetals />

      {/* Floating Traditional Music Audio Player Toggle */}
      <AudioPlayer />

      {/* Top Subtle Sticky Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-300/30 px-4 py-3 flex items-center justify-between text-xs font-body tracking-wider">
        <div 
          onClick={() => scrollToSection('hero')} 
          className="font-serif text-amber-900 font-medium text-base sm:text-lg cursor-pointer tracking-wider flex items-center gap-1.5"
        >
          <span className="font-devanagari text-amber-700">ॐ</span> Ashwathi ♡ Anand
        </div>
        <nav className="flex items-center justify-center gap-5 font-serif text-sm font-medium text-amber-900/80 mx-auto">
          <button onClick={() => scrollToSection('invitation-card')} className="hover:text-amber-700 transition-colors">INVITATION</button>
          <button onClick={() => scrollToSection('couple-section')} className="hover:text-amber-700 transition-colors">COUPLE</button>
          <button onClick={() => scrollToSection('story-section')} className="hover:text-amber-700 transition-colors">OUR STORY</button>
          <button onClick={() => scrollToSection('gallery-section')} className="hover:text-amber-700 transition-colors">GALLERY</button>
          <button onClick={() => scrollToSection('venue-section')} className="hover:text-amber-700 transition-colors">VENUE</button>
        </nav>
      </header>

      <main className="pt-12 w-full text-center">
        <div id="hero" className="w-full text-center">
          <Hero onScrollToInvite={() => scrollToSection('invitation-card')} />
        </div>
        <InvitationCard />
        <Couple />
        <Countdown />
        <OurStory />
        <Gallery />
        <Venue />
        <ClosingSection />
      </main>
    </div>
  );
}
