import React from 'react';
import { Star, Utensils, Calendar, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import interiorHeroBg from '../assets/images/oceans_eight_interior_1789493729447.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Image with Deep Ocean Dark Teal Overlay using actual Oceans 8 restaurant photo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 59, 74, 0.76), rgba(6, 31, 40, 0.88)), url('${interiorHeroBg}')`,
        }}
      />

      {/* Subtle background glow effect */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#E8A849]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Rating Pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-medium text-white mb-5 shadow-sm">
          <div className="flex items-center text-[#E8A849]">
            <Star className="w-3.5 h-3.5 fill-[#E8A849]" />
            <Star className="w-3.5 h-3.5 fill-[#E8A849]" />
            <Star className="w-3.5 h-3.5 fill-[#E8A849]" />
            <Star className="w-3.5 h-3.5 fill-[#E8A849]" />
            <Star className="w-3.5 h-3.5 fill-[#E8A849]/80" />
          </div>
          <span className="font-semibold text-white tracking-wide">
            {RESTAURANT_INFO.rating}
          </span>
          <span className="text-white/70">({RESTAURANT_INFO.reviewCount} Google Reviews)</span>
          <span className="text-[#E8A849] font-medium hidden sm:inline">• R 200 – R 300</span>
        </div>

        {/* Subtitle / Location */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-[#E8A849] mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Somerset West, Cape Town</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
          Oceans <span className="text-[#E8A849]">8</span> Seafood & Sushi
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed mb-8">
          Experience the freshest catch and masterfully prepared sushi in the Helderberg basin. 
          From our legendary juicy queen prawn special and salmon roses topped with real caviar, 
          to pan-grilled Kingklip with signature dipping sauces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E8A849] hover:bg-[#d59536] text-[#0B3B4A] font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent border-2 border-white/80 hover:bg-white hover:text-[#0B3B4A] text-white font-semibold text-base transition-all"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
          </a>

          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-base transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Signature Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-white/70">
          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A849]" /> Real Caviar Salmon Roses
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A849]" /> Famous Prawn Special
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A849]" /> Grilled Kingklip & Yellow Rice
          </span>
        </div>
      </div>
    </section>
  );
};
