import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, Calendar, Menu as MenuIcon, X, MapPin } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine open/closed status based on SAST (UTC+2)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // South Africa Standard Time is UTC+2
      const saHours = (now.getUTCHours() + 2) % 24;
      const day = now.getUTCDay(); // 0 is Sunday, 1 is Monday

      if (day === 1) {
        // Monday closed
        setIsOpenNow(false);
      } else {
        // Tue - Sun: 12:00 - 21:00
        setIsOpenNow(saHours >= 12 && saHours < 21);
      }
    };
    checkOpenStatus();
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#highlights' },
    { label: 'Menu & Specials', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B3B4A]/95 shadow-lg backdrop-blur-md py-3.5 border-b border-white/10'
          : 'bg-[#0B3B4A]/90 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-wider text-white">
              Oceans <span className="text-[#E8A849] group-hover:scale-110 transition-transform inline-block">8</span>
            </span>
            <span className="hidden md:inline-block text-[11px] uppercase tracking-widest text-[#E8A849]/90 border-l border-white/20 pl-2 ml-1">
              Seafood & Sushi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 text-sm font-medium tracking-wide hover:text-[#E8A849] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Open/Closed indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white/80 border border-white/10">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{isOpenNow ? 'Open Now (Till 21:00)' : 'Opens at 12:00'}</span>
            </div>

            {/* Quick Call */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              title="Call Oceans 8 Somerset West"
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8A849]" />
              <span className="hidden md:inline">{RESTAURANT_INFO.phoneDisplay}</span>
            </a>

            {/* WhatsApp Quick Link */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Oceans 8"
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Reserve Table CTA */}
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E8A849] hover:bg-[#d59536] text-[#0B3B4A] font-bold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061F28] border-t border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          {/* Quick status badge in mobile */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              {isOpenNow ? 'Open Now (12:00 – 21:00)' : 'Opens 12:00 Tue (Mon Closed)'}
            </span>
            <span className="text-[#E8A849]">Somerset West</span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-[#E8A849] hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E8A849] text-[#0B3B4A] font-bold text-sm tracking-wide shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table Online</span>
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
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
