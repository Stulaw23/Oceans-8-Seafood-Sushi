import React from 'react';
import { Calendar, Utensils, MapPin } from 'lucide-react';
import interiorHeroBg from '../assets/images/oceans_eight_interior_1789493729447.webp';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center text-center text-white pt-28 pb-20 px-4 overflow-hidden">
      {/* Background Image with Deep Ocean Dark Teal Overlay using actual Oceans 8 restaurant photo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 59, 74, 0.78), rgba(6, 31, 40, 0.90)), url('${interiorHeroBg}')`,
        }}
      />

      {/* Subtle background warm glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E8A849]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Location pill */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#E8A849] mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Somerset West • Strand</span>
        </div>

        {/* Wireframe Headline: SEAFOOD & SUSHI IN SOMERSET WEST */}
        <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase leading-[1.08]">
          Seafood & Sushi <br />
          <span className="text-[#E8A849]">In Somerset West</span>
        </h1>

        {/* Wireframe Subtitle: Fresh seafood & beautifully crafted sushi. */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-10">
          Fresh seafood &amp; beautifully crafted sushi.
        </p>

        {/* Wireframe Buttons: [ VIEW MENU ] [ BOOK A TABLE ] */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-white/90 hover:bg-white hover:text-[#0B3B4A] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md"
          >
            <Utensils className="w-4 h-4" />
            <span>View Menu</span>
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E8A849] hover:bg-[#d59536] text-[#0B3B4A] font-bold text-sm sm:text-base uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table</span>
          </button>
        </div>
      </div>
    </section>
  );
};
