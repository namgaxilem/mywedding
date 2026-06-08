import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoupleIntro from "@/components/CoupleIntro";
import VenueSection from "@/components/VenueSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import RSVPSection from "@/components/RSVPSection";
import GuestWishes from "@/components/GuestWishes";
import Footer from "@/components/Footer";
import FallingFlowers from "@/components/FallingFlowers";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <FallingFlowers />
      <Header />
      <main>
        <HeroSection />
        <CoupleIntro />
        <StorySection />
        <VenueSection />
        <GallerySection />
        <EventsSection />
        <RSVPSection />
        <GuestWishes />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
