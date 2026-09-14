import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageCircle, Phone, CheckCircle, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationFormState } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormState>({
    fullName: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    guests: 2,
    seatingArea: 'indoor',
    specialNotes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Oceans 8 Somerset West!%0A%0AI would like to reserve a table:%0A• Name: ${encodeURIComponent(formData.fullName || 'Guest')}%0A• Contact: ${encodeURIComponent(formData.phone || 'N/A')}%0A• Date: ${formData.date}%0A• Time: ${formData.time}%0A• Party Size: ${formData.guests} Guests%0A• Seating: ${formData.seatingArea}%0A• Special Requests: ${encodeURIComponent(formData.specialNotes || 'None')}%0A%0APlease confirm availability. Thank you!`;
    
    window.open(`https://wa.me/27849049339?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  const handleInstantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Dark Ocean color */}
        <div className="bg-[#0B3B4A] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-[#E8A849] mb-1">
            <Sparkles className="w-3 h-3" /> Table Reservation
          </span>
          <h3 className="font-serif-heading text-2xl font-bold">
            Reserve at Oceans 8
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1">
            Somerset West • Tue – Sun: 12:00 – 21:00
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="font-serif-heading text-2xl font-bold text-[#0B3B4A]">
                Reservation Received!
              </h4>
              <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you! We've noted your table for <strong>{formData.guests} people</strong> on <strong>{formData.date} at {formData.time}</strong>.
                Our host will contact you shortly on <strong>{formData.phone}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0B3B4A] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 084 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A] bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A] bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Seating Area
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'indoor', label: 'Cozy Inside' },
                    { id: 'terrace', label: 'Terrace' },
                    { id: 'no-preference', label: 'Any' },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, seatingArea: opt.id as any })}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border text-center transition-all ${
                        formData.seatingArea === opt.id
                          ? 'bg-[#0B3B4A] text-white border-[#0B3B4A]'
                          : 'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Special Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, window seat, seafood allergy"
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleInstantSubmit}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Form</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="text-xs text-gray-600 hover:text-[#0B3B4A] inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E8A849]" />
                  <span>Or call host at {RESTAURANT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
