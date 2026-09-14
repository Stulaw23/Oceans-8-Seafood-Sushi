import React from 'react';
import { Clock, Banknote, Accessibility, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const QuickInfoBar: React.FC = () => {
  return (
    <section className="bg-[#0B3B4A] text-white border-y border-[#1A6A7A] py-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          {/* Operating Hours */}
          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#1A6A7A]/40 flex items-center justify-center shrink-0 border border-white/10">
              <Clock className="w-5 h-5 text-[#E8A849]" />
            </div>
            <div>
              <h4 className="text-[#E8A849] text-xs font-semibold uppercase tracking-wider">
                Operating Hours
              </h4>
              <p className="text-white/90 text-sm font-light">
                Tue – Sun: 12:00 – 21:00
              </p>
              <span className="text-xs text-white/60">Monday: Closed</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#1A6A7A]/40 flex items-center justify-center shrink-0 border border-white/10">
              <MapPin className="w-5 h-5 text-[#E8A849]" />
            </div>
            <div>
              <h4 className="text-[#E8A849] text-xs font-semibold uppercase tracking-wider">
                Location
              </h4>
              <p className="text-white/90 text-sm font-light truncate max-w-[220px]">
                Cnr Main Rd & Van Der Byl St
              </p>
              <span className="text-xs text-white/60">Somerset West (Near Strand)</span>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#1A6A7A]/40 flex items-center justify-center shrink-0 border border-white/10">
              <Banknote className="w-5 h-5 text-[#E8A849]" />
            </div>
            <div>
              <h4 className="text-[#E8A849] text-xs font-semibold uppercase tracking-wider">
                Price Range
              </h4>
              <p className="text-white/90 text-sm font-light">
                {RESTAURANT_INFO.priceRange}
              </p>
              <span className="text-xs text-white/60">Generous Portions & Value</span>
            </div>
          </div>

          {/* Accessibility */}
          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#1A6A7A]/40 flex items-center justify-center shrink-0 border border-white/10">
              <Accessibility className="w-5 h-5 text-[#E8A849]" />
            </div>
            <div>
              <h4 className="text-[#E8A849] text-xs font-semibold uppercase tracking-wider">
                Accessibility
              </h4>
              <p className="text-white/90 text-sm font-light">
                Wheelchair Accessible
              </p>
              <span className="text-xs text-white/60">Entrance & Dining friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
