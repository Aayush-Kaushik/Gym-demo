import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustProof from './components/TrustProof';
import AboutFeatures from './components/AboutFeatures';
import ProgramsSection from './components/ProgramsSection';
import TrainersSection from './components/TrainersSection';
import MembershipSection from './components/MembershipSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import LocationSection from './components/LocationSection';
import InlineLeadBanner from './components/InlineLeadBanner';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState('');

  const handleOpenBooking = (context = '') => {
    setBookingContext(context);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white selection:bg-[#E5FF3F] selection:text-[#0B0B0D] flex flex-col font-sans relative">
      {/* Sticky Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 3. Hero Section */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. Social Proof & Trust Bar */}
        <TrustProof />

        {/* 5. Why Choose Us / Features */}
        <AboutFeatures onOpenBooking={handleOpenBooking} />

        {/* 6. Training Programs */}
        <ProgramsSection onOpenBooking={handleOpenBooking} />

        {/* 7. Trainers & Coaches */}
        <TrainersSection onOpenBooking={handleOpenBooking} />

        {/* 8. Memberships & Pricing */}
        <MembershipSection onOpenBooking={handleOpenBooking} />

        {/* 9. Class Schedule */}
        <ScheduleSection onOpenBooking={handleOpenBooking} />

        {/* 10. Facility Gallery & Lightbox */}
        <GallerySection />

        {/* 11. Google Member Reviews */}
        <ReviewsSection />

        {/* 12. FAQ Section */}
        <FAQSection onOpenBooking={handleOpenBooking} />

        {/* 13. Location & Timings */}
        <LocationSection onOpenBooking={handleOpenBooking} />

        {/* 14. High-Conversion Lead Capture Banner */}
        <InlineLeadBanner onOpenBooking={handleOpenBooking} />
      </main>

      {/* 15. Comprehensive Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 16. Lead Generation Modal */}
      <LeadModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialContext={bookingContext}
      />

      {/* 17. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 18. Sticky Mobile Bottom Conversion Bar */}
      <StickyMobileBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}
