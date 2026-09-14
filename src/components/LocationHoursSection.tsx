import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink, Car, Accessibility } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationHoursSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B4A]/5 text-[#0B3B4A] text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E8A849]" />
            <span>Find Us in Somerset West</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B4A] mb-4">
            Visit Oceans 8
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Conveniently situated on the corner of Main Road & Van Der Byl Straat, easily accessible from Somerset West, Strand, and Gordon's Bay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Column */}
          <div className="lg:col-span-5 bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B3B4A] text-[#E8A849] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0B3B4A]">
                    Restaurant Location
                  </h3>
                  <p className="text-gray-700 text-sm mt-1 font-medium">
                    {RESTAURANT_INFO.address}
                  </p>
                  <span className="inline-block mt-2 text-xs text-gray-500 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                    Helderberg Basin / Near Strand & Stellenbosch
                  </span>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B3B4A] text-[#E8A849] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0B3B4A]">
                    Opening Hours
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between gap-6">
                      <span className="font-medium">Tuesday – Sunday:</span>
                      <span className="font-bold text-[#0B3B4A]">{RESTAURANT_INFO.hours.tuesdayToSunday}</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="font-medium text-red-600">Monday:</span>
                      <span className="font-bold text-red-600">{RESTAURANT_INFO.hours.monday}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    *Popular dining times: 18:30 – 20:30. Reservations advised.
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-200">
                  <Accessibility className="w-4 h-4 text-[#0B3B4A]" />
                  <span>Wheelchair Entrance</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-200">
                  <Car className="w-4 h-4 text-[#0B3B4A]" />
                  <span>Nearby Parking</span>
                </div>
              </div>
            </div>

            {/* Direction & Call CTA buttons */}
            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#E8A849]" />
                <span>Get Directions (Maps)</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-gray-100 text-[#0B3B4A] border border-gray-300 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E8A849]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Interactive Visual Map Representation */}
          <div className="lg:col-span-7 bg-[#0B3B4A] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative min-h-[380px] flex flex-col">
            {/* Map Visual Header */}
            <div className="p-6 bg-[#061F28] text-white flex items-center justify-between border-b border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A849]">
                  Google Maps Pinpoint
                </p>
                <h4 className="font-serif-heading text-lg font-bold">
                  Oceans 8 Seafood & Sushi Somerset West
                </h4>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E8A849] hover:underline"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Canvas styling with interactive card */}
            <div className="relative flex-1 bg-slate-800 flex items-center justify-center p-6 overflow-hidden">
              {/* Abstract Map Background Grid */}
              <div 
                className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
              />

              <div className="relative z-10 max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl text-center border border-white">
                <div className="w-14 h-14 rounded-full bg-[#0B3B4A] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <MapPin className="w-7 h-7 text-[#E8A849] animate-bounce" />
                </div>
                <h4 className="font-serif-heading text-xl font-bold text-[#0B3B4A]">
                  Oceans 8 Seafood & Sushi
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Corner of Main Rd & Van Der Byl Straat
                </p>
                <p className="text-xs font-medium text-gray-800">
                  Somerset West, Cape Town 7130
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-around text-xs text-gray-600">
                  <span>🚗 3 min from Strand</span>
                  <span>🍷 15 min from Stellenbosch</span>
                </div>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#E8A849] hover:bg-[#d59536] text-[#0B3B4A] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Launch Live GPS Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
