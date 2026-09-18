import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatingBanner } from './components/RatingBanner';
import { WhyOceans8 } from './components/WhyOceans8';
import { CustomerFavourites } from './components/CustomerFavourites';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#2D3748] selection:bg-[#E8A849] selection:text-[#0B3B4A]">
      {/* 1. Navbar: OCEANS 8 | MENU | BOOK TABLE */}
      <Navbar onOpenReservation={() => setIsReservationModalOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero: SEAFOOD & SUSHI IN SOMERSET WEST | [ VIEW MENU ] [ BOOK A TABLE ] */}
        <Hero onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 3. Rating Banner: ★ 4.6 Google   ★ 4.6 Tripadvisor */}
        <RatingBanner />

        {/* 4. WHY OCEANS 8: Fresh Sushi | Seafood | Takeaway */}
        <WhyOceans8 />

        {/* 5. CUSTOMER FAVOURITES: Sushi | Prawns | Kingklip | Sushi Platters */}
        <CustomerFavourites onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 6. MENU: [ VIEW FULL MENU ] */}
        <MenuSection onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 7. WHAT CUSTOMERS SAY: ★★★★★ Reviews */}
        <ReviewsSection />

        {/* 8. GALLERY: REAL OCEANS 8 PHOTOS */}
        <GallerySection />

        {/* 9. BOOK YOUR TABLE: [ BOOK NOW ] [ WHATSAPP ] */}
        <ReservationSection />

        {/* 10. FIND US: [ GOOGLE MAP ] */}
        <LocationHoursSection />
      </main>

      {/* 11. FOOTER: OCEANS 8 | Phone | Address | Hours | Menu | Booking | Socials */}
      <Footer onOpenReservation={() => setIsReservationModalOpen(true)} />

      {/* Global Quick Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}
