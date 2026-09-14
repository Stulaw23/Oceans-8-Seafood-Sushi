import React from 'react';
import { Sparkles, Calendar, Fish, Award } from 'lucide-react';

interface HighlightsProps {
  onOpenReservation: () => void;
}

export const Highlights: React.FC<HighlightsProps> = ({ onOpenReservation }) => {
  const highlights = [
    {
      icon: '🦐',
      title: 'Popular Prawn Special',
      subtitle: 'Huge, Juicy & Succulent',
      description:
        'A legendary customer favorite in the Helderberg area. Prepared fresh, flame-grilled and basted generously with lemon herb garlic butter or fiery peri-peri, accompanied by fragrant yellow rice.',
      badge: 'Most Popular',
    },
    {
      icon: '🥢',
      title: 'Salmon Roses & Real Caviar',
      subtitle: 'Artisanal Craftsmanship',
      description:
        'Delicate fresh Norwegian salmon wraps filled with sushi rice and Japanese kewpie mayo, elegantly crowned with genuine black caviar pearls and ripe avocado.',
      badge: 'Signature Dish',
    },
    {
      icon: '🐟',
      title: 'Pan-Grilled Cape Kingklip',
      subtitle: 'Trio of Signature Sauces',
      description:
        'Tender, sweet Cape kingklip pan-grilled to perfection, served with savory rice and our celebrated trio of dipping sauces: rich lemon butter, creamy garlic, and freshly sliced green chillies.',
      badge: 'Local Catch',
    },
    {
      icon: '📅',
      title: 'Reservations Recommended',
      subtitle: 'Peak Evenings & Weekends',
      description:
        'With high demand and intimate seating, Oceans 8 fills up quickly for dinner and weekend lunches. We strongly recommend booking in advance via our quick online form or WhatsApp.',
      badge: 'Guest Tip',
      action: {
        text: 'Book Table Now',
        handler: onOpenReservation,
      },
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B4A]/5 text-[#0B3B4A] text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-[#E8A849]" />
            <span>Know Before You Go</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B4A] mb-4">
            The Oceans 8 Experience
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Insider tips and signature culinary creations that make dining with us in Somerset West memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group bg-[#F8F9FA] rounded-2xl p-7 border-t-4 border-[#E8A849] border-x border-b border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#0B3B4A] shadow-xs border border-gray-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif-heading text-xl font-bold text-[#0B3B4A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#E8A849] uppercase tracking-wider mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.action && (
                <div className="mt-6 pt-4 border-t border-gray-200/60">
                  <button
                    onClick={item.action.handler}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    {item.action.text}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
