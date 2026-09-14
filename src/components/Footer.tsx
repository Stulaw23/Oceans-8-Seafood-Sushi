import React from 'react';
import { Accessibility, Phone, MessageCircle, MapPin, Clock, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-[#061F28] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <span className="font-serif-heading text-2xl font-bold tracking-wider text-white">
                Oceans <span className="text-[#E8A849]">8</span>
              </span>
              <span className="block text-xs uppercase tracking-widest text-[#E8A849]/90 font-medium">
                Seafood & Sushi
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed">
              Somerset West's favorite destination for fresh seafood platters, giant grilled prawns, authentic kingklip, and masterfully crafted sushi boats.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80">
              <Accessibility className="w-4 h-4 text-[#E8A849]" />
              <span>Wheelchair Accessible</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif-heading text-base font-bold text-[#E8A849] uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a href="#highlights" className="hover:text-[#E8A849] transition-colors">
                  Know Before You Go
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E8A849] transition-colors">
                  Menu & Specials
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E8A849] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E8A849] transition-colors">
                  Customer Reviews (1,092)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#E8A849] transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="text-[#E8A849] hover:underline font-semibold text-left"
                >
                  Reserve a Table
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Info */}
          <div>
            <h3 className="font-serif-heading text-base font-bold text-[#E8A849] uppercase tracking-wider mb-4">
              Hours & Dining
            </h3>
            <div className="space-y-2 text-sm text-white/75">
              <p>
                <strong className="text-white">Tuesday – Sunday:</strong>
                <br />
                12:00 – 21:00
              </p>
              <p>
                <strong className="text-white">Monday:</strong>
                <br />
                <span className="text-red-400">Closed (Opens 12:00 Tue)</span>
              </p>
              <p className="pt-2">
                <strong className="text-white">Price Range:</strong>
                <br />
                R 200 – R 300 per person
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Directions */}
          <div>
            <h3 className="font-serif-heading text-base font-bold text-[#E8A849] uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-white/75">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E8A849]" />
                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Booking Line</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#E8A849] shrink-0 mt-1" />
                <span className="text-xs text-white/70 leading-relaxed">
                  Corner of Main Rd & Van Der Byl Straat, Somerset West, Cape Town 7130
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Oceans 8 Seafood & Sushi Somerset West. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#highlights" className="hover:text-white transition-colors">
              Somerset West
            </a>
            <span>•</span>
            <a href="#menu" className="hover:text-white transition-colors">
              Strand & Helderberg
            </a>
            <span>•</span>
            <a href="#location" className="hover:text-white transition-colors">
              Directions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
