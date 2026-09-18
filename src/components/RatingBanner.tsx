import React from 'react';
import { Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const RatingBanner: React.FC = () => {
  return (
    <section className="bg-[#0B3B4A] border-y border-white/10 text-white py-4 sm:py-5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-14 md:gap-20 text-center">
          {/* ★ 4.6 Google */}
          <div className="flex items-center gap-3 group">
            <div className="flex items-center gap-1 text-[#E8A849]">
              <Star className="w-5 h-5 fill-[#E8A849]" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif-heading">
                  4.6
                </span>
                <span className="text-xs uppercase tracking-widest text-[#E8A849] font-bold">
                  Google
                </span>
              </div>
              <p className="text-[11px] text-white/60">Over 1,090+ Verified Reviews</p>
            </div>
          </div>

          {/* Divider on desktop */}
          <div className="hidden sm:block w-px h-8 bg-white/15" />

          {/* ★ 4.6 Tripadvisor */}
          <div className="flex items-center gap-3 group">
            <div className="flex items-center gap-1 text-[#E8A849]">
              <Star className="w-5 h-5 fill-[#E8A849]" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif-heading">
                  4.6
                </span>
                <span className="text-xs uppercase tracking-widest text-[#E8A849] font-bold">
                  Tripadvisor
                </span>
              </div>
              <p className="text-[11px] text-white/60">Top Rated Seafood & Sushi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
