import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MessageCircle, CheckCircle, Sparkles, MapPin, Send, AlertCircle } from 'lucide-react';
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
  const [bookingMethod, setBookingMethod] = useState<'whatsapp' | 'direct'>('whatsapp');
  const [formErrors, setFormErrors] = useState<{ fullName?: string; phone?: string }>({});

  const todayStr = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  const validateForm = () => {
    const errors: { fullName?: string; phone?: string } = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (cleanPhone.length < 9) {
      errors.phone = 'Please enter a valid telephone number (at least 9 digits).';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const constructWhatsAppMessage = () => {
    return `Hello Oceans 8 Somerset West!%0A%0AI would like to reserve a table:%0A• Name: ${encodeURIComponent(formData.fullName.trim())}%0A• Contact: ${encodeURIComponent(formData.phone.trim())}%0A• Date: ${formData.date}%0A• Time: ${formData.time}%0A• Party Size: ${formData.guests} Guests%0A• Seating: ${formData.seatingArea}%0A• Special Requests: ${encodeURIComponent(formData.specialNotes.trim() || 'None')}%0A%0APlease confirm availability. Thank you!`;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = constructWhatsAppMessage();
    const cleanPhone = RESTAURANT_INFO.phoneRaw.replace(/\D/g, '');
    const newWindow = window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
    setBookingMethod('whatsapp');
    setBookingConfirmed(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setBookingMethod('direct');
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
              <div className="text-center py-8 sm:py-10 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#0B3B4A]">
                  Reservation Request Prepared!
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                  Thank you, <strong className="text-[#0B3B4A]">{formData.fullName || 'Guest'}</strong>. 
                  We have compiled your table details for <strong>{formData.guests} {formData.guests === 1 ? 'guest' : 'guests'}</strong> on <strong>{formData.date} at {formData.time}</strong> ({formData.seatingArea === 'terrace' ? 'Outdoor / Terrace' : formData.seatingArea === 'indoor' ? 'Indoor Dining Room' : 'Any Seating'}).
                </p>

                {bookingMethod === 'direct' && (
                  <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl max-w-md mx-auto text-left text-xs text-amber-900 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Next Step: Instant Confirmation</p>
                      <p className="mt-0.5 text-amber-800">
                        To lock in your table immediately without delay, click below to dispatch your details directly to the host on WhatsApp or call our reservation line.
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${RESTAURANT_INFO.phoneRaw.replace(/\D/g, '')}?text=${constructWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3B4A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1A6A7A] shadow-md transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Restaurant Directly</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(false)}
                    className="text-xs text-gray-500 hover:text-gray-900 underline py-1"
                  >
                    Modify details / make another booking
                  </button>
                </div>
              </div>
            ) : (
              <form id="book-form" onSubmit={handleWhatsAppBooking} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="res-fullname" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="res-fullname"
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.fullName ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-gray-200 focus:ring-[#0B3B4A]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label htmlFor="res-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.phone ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-gray-200 focus:ring-[#0B3B4A]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Date */}
                  <div>
                    <label htmlFor="res-date" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Date *
                    </label>
                    <div className="relative">
                      <input
                        id="res-date"
                        type="date"
                        required
                        min={todayStr}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                      />
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label htmlFor="res-time" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Time Slot *
                    </label>
                    <select
                      id="res-time"
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
                    <label htmlFor="res-guests" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Party Size
                    </label>
                    <select
                      id="res-guests"
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
                    <span>Continue on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectSubmit}
                    className="sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Review Booking Details</span>
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
