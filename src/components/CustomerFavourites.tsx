import React from 'react';
import { Sparkles, Utensils, ArrowRight, Heart } from 'lucide-react';
import salmonRosesImage from '../assets/images/oceans_salmon_roses_1789493775348.jpg';
import kingklipImage from '../assets/images/oceans_kingklip_dish_1789493761329.jpg';
import sushiBoatImage from '../assets/images/oceans_sushi_boat_1789493745623.jpg';

interface CustomerFavouritesProps {
  onOpenReservation: () => void;
}

export const CustomerFavourites: React.FC<CustomerFavouritesProps> = ({ onOpenReservation }) => {
  const favourites = [
    {
      category: 'Sushi',
      name: 'Salmon Roses with Real Caviar (4 pcs)',
      badge: 'Signature',
      price: 'R 99',
      image: salmonRosesImage,
      description:
        'Delicate ribbons of fresh Norwegian salmon wrapped around seasoned sushi rice and kewpie mayo, topped with genuine black caviar pearls.',
      anchor: '#menu',
    },
    {
      category: 'Prawns',
      name: 'Famous Queen Prawn Special',
      badge: 'Best Seller',
      price: 'R 195',
      image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=800&auto=format&fit=crop',
      description:
        'Succulent butterflied queen prawns flame-grilled with fragrant lemon-garlic butter sauce, served with chips or yellow savory rice.',
      anchor: '#menu',
    },
    {
      category: 'Kingklip',
      name: 'Pan-Grilled Cape Kingklip Fillet',
      badge: 'House Classic',
      price: 'R 210',
      image: kingklipImage,
      description:
        'Tender local Kingklip pan-seared to golden perfection, served with yellow fragrant rice and our signature trio of dipping ramekins.',
      anchor: '#menu',
    },
    {
      category: 'Sushi Platters',
      name: 'The Grand Oceans 8 Sushi Boat (32 pcs)',
      badge: 'Showstopper',
      price: 'R 420',
      image: sushiBoatImage,
      description:
        'An impressive artisanal wooden vessel laden with salmon roses, tuna crunch rolls, California rolls, salmon nigiri, and fresh yellowfin sashimi.',
      anchor: '#menu',
    },
  ];

  return (
    <section id="favourites" className="py-20 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8A849]/15 text-[#0B3B4A] text-xs font-bold uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-[#E8A849] fill-[#E8A849]" />
            Diner Approved
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B4A] uppercase tracking-wide">
            Customer Favourites
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#E8A849] uppercase tracking-wider">
            <span>Sushi</span>
            <span className="text-gray-300">|</span>
            <span>Prawns</span>
            <span className="text-gray-300">|</span>
            <span>Kingklip</span>
            <span className="text-gray-300">|</span>
            <span>Sushi Platters</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favourites.map((dish) => (
            <div
              key={dish.name}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Category & Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#0B3B4A]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    {dish.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#E8A849] text-[#0B3B4A] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {dish.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
                  <span className="text-xl font-bold font-serif-heading text-[#E8A849]">
                    {dish.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0B3B4A] group-hover:text-[#1A6A7A] transition-colors leading-snug">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2 leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B3B4A] hover:text-[#E8A849] uppercase tracking-wider transition-colors"
                  >
                    <span>View on Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={onOpenReservation}
                    className="text-xs text-[#E8A849] hover:underline font-semibold"
                  >
                    Book Table
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
