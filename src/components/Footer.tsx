import React from 'react';
import { Accessibility, Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-[#061F28] text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand (OCEANS 8) */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <span className="font-serif-heading text-3xl font-bold tracking-wider text-white">
                OCEANS <span className="text-[#E8A849]">8</span>
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-[#E8A849]/90 font-medium mt-0.5">
                Seafood & Sushi • Somerset West
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Fresh seafood & beautifully crafted sushi in the Helderberg basin. Legendary queen prawn specials, pan-grilled kingklip, and authentic salmon roses with real caviar.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80">
              <Accessibility className="w-4 h-4 text-[#E8A849]" />
              <span>Wheelchair Accessible & Ample Parking</span>
            </div>
          </div>

          {/* Col 2: Phone | Address | Hours */}
          <div className="space-y-4">
            <h3 className="font-serif-heading text-base font-bold text-[#E8A849] uppercase tracking-wider pb-1 border-b border-white/10">
              Phone • Address • Hours
            </h3>

            <div className="space-y-3 text-sm text-white/80">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E8A849] shrink-0" />
                <div>
                  <span className="block text-[11px] text-white/50 uppercase font-semibold">Phone</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="hover:text-[#E8A849] font-medium transition-colors"
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E8A849] shrink-0 mt-1" />
                <div>
                  <span className="block text-[11px] text-white/50 uppercase font-semibold">Address</span>
                  <span className="text-xs text-white/80 leading-relaxed block">
                    {RESTAURANT_INFO.address}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E8A849] shrink-0 mt-1" />
                <div>
                  <span className="block text-[11px] text-white/50 uppercase font-semibold">Hours</span>
                  <span className="text-xs text-white/80 block">
                    Tue – Sun: 12:00 – 21:00 <br />
                    <span className="text-amber-400">Monday: Closed</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Menu | Booking | Socials */}
          <div className="space-y-4">
            <h3 className="font-serif-heading text-base font-bold text-[#E8A849] uppercase tracking-wider pb-1 border-b border-white/10">
              Menu • Booking • Socials
            </h3>

            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#menu" className="hover:text-[#E8A849] transition-colors flex items-center gap-2">
                  <span>View Full Menu & Platters</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#E8A849] transition-colors text-left font-semibold text-[#E8A849]"
                >
                  Book a Table Online
                </button>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat & Takeaway</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8A849] transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google Maps Reviews & Directions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Oceans 8 Seafood & Sushi Somerset West. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hover:text-white transition-colors">
              Menu
            </a>
            <span>•</span>
            <a href="#book-table" className="hover:text-white transition-colors">
              Book Table
            </a>
            <span>•</span>
            <a href="#find-us" className="hover:text-white transition-colors">
              Google Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
