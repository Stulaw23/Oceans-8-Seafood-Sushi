import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // South Africa Standard Time (UTC+2)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const saHours = (now.getUTCHours() + 2) % 24;
      const day = now.getUTCDay(); // 0 Sunday, 1 Monday
      if (day === 1) {
        setIsOpenNow(false);
      } else {
        setIsOpenNow(saHours >= 12 && saHours < 21);
      }
    };
    checkOpenStatus();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B3B4A]/95 shadow-lg backdrop-blur-md py-3.5 border-b border-white/10'
          : 'bg-[#0B3B4A]/85 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: OCEANS 8 */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-wider text-white">
              OCEANS <span className="text-[#E8A849] group-hover:scale-105 transition-transform inline-block">8</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] text-[#E8A849]/90 border-l border-white/20 pl-2.5 ml-1">
              Seafood & Sushi
            </span>
          </a>

          {/* Desktop Nav: MENU & Secondary Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#why-oceans-8"
              className="text-white/85 hover:text-[#E8A849] text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              Why Oceans 8
            </a>
            <a
              href="#favourites"
              className="text-white/85 hover:text-[#E8A849] text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              Favourites
            </a>
            <a
              href="#menu"
              className="text-white/95 hover:text-[#E8A849] text-sm lg:text-base font-bold tracking-wider uppercase transition-colors border-b-2 border-transparent hover:border-[#E8A849] py-1"
            >
              Menu
            </a>
            <a
              href="#reviews"
              className="text-white/85 hover:text-[#E8A849] text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              Reviews
            </a>
            <a
              href="#gallery"
              className="text-white/85 hover:text-[#E8A849] text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              Gallery
            </a>
            <a
              href="#find-us"
              className="text-white/85 hover:text-[#E8A849] text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              Find Us
            </a>
          </nav>

          {/* Right Action: BOOK TABLE */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Icon */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="p-2.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Direct Phone */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              title="Call Oceans 8"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8A849]" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>

            {/* Wireframe CTA: BOOK TABLE */}
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8A849] hover:bg-[#d59536] text-[#0B3B4A] font-bold text-xs uppercase tracking-widest transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#061F28] border-t border-white/10 px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              {isOpenNow ? 'Open Now (12:00 – 21:00)' : 'Opens at 12:00 (Tue–Sun)'}
            </span>
            <span className="text-[#E8A849] font-medium">Somerset West</span>
          </div>

          <div className="flex flex-col space-y-2.5">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-bold text-[#E8A849] hover:bg-white/5"
            >
              Menu
            </a>
            <a
              href="#why-oceans-8"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/5"
            >
              Why Oceans 8
            </a>
            <a
              href="#favourites"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/5"
            >
              Customer Favourites
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/5"
            >
              What Customers Say
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/5"
            >
              Gallery
            </a>
            <a
              href="#find-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/5"
            >
              Find Us (Google Maps)
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E8A849] text-[#0B3B4A] font-bold text-sm uppercase tracking-wider shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-700 text-white font-medium text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-white font-medium text-xs"
              >
                <Phone className="w-4 h-4 text-[#E8A849]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
