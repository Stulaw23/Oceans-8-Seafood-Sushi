import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageCircle, Phone, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
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
  const [submitMode, setSubmitMode] = useState<'whatsapp' | 'direct'>('whatsapp');
  const [formErrors, setFormErrors] = useState<{ fullName?: string; phone?: string }>({});

  const todayStr = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

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
    const newWindow = window.open(`https://wa.me/${RESTAURANT_INFO.phoneRaw.replace(/\D/g, '')}?text=${message}`, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
    setSubmitMode('whatsapp');
    setIsSubmitted(true);
  };

  const handleInstantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitMode('direct');
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
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="font-serif-heading text-2xl font-bold text-[#0B3B4A]">
                Reservation Details Prepared!
              </h4>
              <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0B3B4A]">{formData.fullName || 'Guest'}</strong>. We have prepared your table inquiry for <strong>{formData.guests} people</strong> on <strong>{formData.date} at {formData.time}</strong> ({formData.seatingArea === 'terrace' ? 'Terrace' : formData.seatingArea === 'indoor' ? 'Dining Room' : 'Any Seating'}).
              </p>

              {submitMode === 'direct' && (
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl max-w-md mx-auto text-left text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <p>
                    For instant table guarantee, send your prepared details directly to our WhatsApp reservation desk or call us immediately.
                  </p>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.phoneRaw.replace(/\D/g, '')}?text=${constructWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 084 904 9339</span>
                </a>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-gray-500 hover:text-gray-900 underline"
                >
                  Close & return to site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Smith"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.fullName ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-gray-200 focus:ring-[#0B3B4A]'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-[11px] mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="e.g. 084 123 4567"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.phone ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-gray-200 focus:ring-[#0B3B4A]'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-[11px] mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B4A]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-time" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Time *
                  </label>
                  <select
                    id="modal-time"
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
                  <label htmlFor="modal-guests" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Guests
                  </label>
                  <select
                    id="modal-guests"
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
                  <span>Continue on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleInstantSubmit}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B3B4A] hover:bg-[#1A6A7A] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Review Details</span>
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
