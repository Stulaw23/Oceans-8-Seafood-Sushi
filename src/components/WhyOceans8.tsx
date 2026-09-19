import React from 'react';
import { Utensils, Waves, ShoppingBag, CheckCircle, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WhyOceans8: React.FC = () => {
  const pillars = [
    {
      icon: Waves,
      title: 'Fresh Sushi',
      highlight: 'Handcrafted Daily',
      description:
        'Prepared to order with premium Norwegian salmon and fresh tuna. Renowned for our signature Salmon Roses crowned with genuine black caviar pearls and artisanal sushi boats.',
    },
    {
      icon: Utensils,
      title: 'Seafood',
      highlight: 'Generous & Succulent',
      description:
        'Savor our famous queen prawn special, tender Falkland calamari, and pan-grilled Cape Kingklip served with savory yellow rice and signature lemon-garlic and chilli dipping sauces.',
    },
    {
      icon: ShoppingBag,
      title: 'Takeaway',
      highlight: 'Quick & Convenient',
      description:
        'Enjoy Oceans 8 at home. Simple phone and WhatsApp ordering with fast preparation times, perfect packaging, and easy collection at our Somerset West location.',
    },
  ];

  return (
    <section id="why-oceans-8" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B3B4A]/5 text-[#0B3B4A] text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-[#E8A849]" />
            Somerset West Dining
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B4A] uppercase tracking-wide">
            Why Oceans 8
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-[#B87B20] uppercase tracking-wider">
            <span>Fresh Sushi</span>
            <span className="text-gray-300 font-normal">|</span>
            <span>Seafood</span>
            <span className="text-gray-300 font-normal">|</span>
            <span>Takeaway</span>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-200/80 hover:border-[#0B3B4A]/30 transition-all hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#0B3B4A] text-[#E8A849] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#B87B20]">
                    {pillar.highlight}
                  </span>
                  <h3 className="font-serif-heading text-2xl font-bold text-[#0B3B4A] mt-1 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center gap-2 text-xs text-[#0B3B4A] font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Verified 4.6★ Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
