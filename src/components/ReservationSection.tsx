import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MessageCircle, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationFormState } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormState>({
    fullName: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    guests: 2,
    seatingArea: 'indoor',
    specialNotes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Oceans 8 Somerset West!%0A%0AI would like to reserve a table:%0A• Name: ${encodeURIComponent(formData.fullName || 'Guest')}%0A• Contact: ${encodeURIComponent(formData.phone || 'N/A')}%0A• Date: ${formData.date}%0A• Time: ${formData.time}%0A• Party Size: ${formData.guests} Guests%0A• Seating: ${formData.seatingArea}%0A• Special Requests: ${encodeURIComponent(formData.specialNotes || 'None')}%0A%0APlease confirm availability. Thank you!`;
    
    window.open(`https://wa.me/27849049339?text=${message}`, '_blank');
    setBookingConfirmed(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section id="book-table" className="py-24 relative text-white">
      <div id="contact" className="absolute -top-12" />
      {/* Background with Dark Coastal Gradient */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 59, 74, 0.93), rgba(6, 31, 40, 0.96)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8A849]/20 text-[#E8A849] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Reservations & Inquiries
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Book Your Table
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Secure your table today and indulge in the finest seafood and sushi in Somerset West.
            Book instantly online or reach out directly via WhatsApp.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#book-form"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8A849] text-[#0B3B4A] font-bold text-xs uppercase tracking-widest hover:bg-[#d59536] transition-colors shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </a>
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Reservation Form Card */}
          <div className="lg:col-span-8 bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
            {bookingConfirmed ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#0B3B4A]">
                  Reservation Request Sent!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-[#0B3B4A]">{formData.fullName || 'Guest'}</strong>. 
                  We have noted your table for <strong>{formData.guests} people</strong> on <strong>{formData.date} at {formData.time}</strong>.
                  Our team will confirm with you promptly via WhatsApp or phone.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={RESTAURANT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => setBookingConfirmed(false)}
                    className="w-full sm:w-auto text-xs text-gray-500 hover:text-gray-900 underline py-2"
                  >
                    Make another booking
                  </button>
                </div>
              </div>
            ) : (
              <form id="book-form" onSubmit={handleWhatsAppBooking} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A] focus:border-transparent"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                      />
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A] bg-white"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A] bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Seating Area Preference
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'indoor', label: 'Cozy Dining Room' },
                      { id: 'terrace', label: 'Outdoor / Terrace' },
                      { id: 'no-preference', label: 'No Preference' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, seatingArea: opt.id as any })}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          formData.seatingArea === opt.id
                            ? 'bg-[#0B3B4A] text-white border-[#0B3B4A] shadow-xs'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Special Occasion or Dietary Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Anniversary, birthday, high-chair needed, shellfish allergy"
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                  />
                </div>

                {/* Submit buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm via WhatsApp (Fastest)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleStandardSubmit}
                    className="sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Online</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Contact & Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#061F28]/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="font-serif-heading text-xl font-bold text-[#E8A849]">
                Direct Reservation Lines
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8A849] text-[#0B3B4A] flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Phone Call</p>
                    <p className="text-base font-bold text-white">{RESTAURANT_INFO.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-300">Instant WhatsApp</p>
                    <p className="text-base font-bold text-white">Chat with Host</p>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-white/70 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E8A849] shrink-0 mt-0.5" />
                  <span>Cnr Main Rd & Van Der Byl St, Somerset West (near Strand)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#E8A849] shrink-0 mt-0.5" />
                  <span>Tue - Sun: 12:00 - 21:00 (Monday Closed)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
