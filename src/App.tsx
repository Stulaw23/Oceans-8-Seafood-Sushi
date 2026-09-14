import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { Highlights } from './components/Highlights';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#2D3748] selection:bg-[#E8A849] selection:text-[#0B3B4A]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenReservation={() => setIsReservationModalOpen(true)} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* Quick Info Bar: Hours, Price, Accessibility, Location */}
        <QuickInfoBar />

        {/* Highlights: Know Before You Go (Prawn Special, Salmon Roses & Caviar, Kingklip) */}
        <Highlights onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* Full Interactive Menu & Specials with Search, Category Filter, and Takeaway Inquiries */}
        <MenuSection onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Customer Reviews (Google 4.6 Stars from 1,092 reviews) */}
        <ReviewsSection />

        {/* Direct Table Reservation & WhatsApp Booking */}
        <ReservationSection />

        {/* Interactive Location, Directions, and Hours */}
        <LocationHoursSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsReservationModalOpen(true)} />

      {/* Global Quick Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}
