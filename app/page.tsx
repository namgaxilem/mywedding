import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WeddingCalendar from "@/components/WeddingCalendar";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import RSVPSection from "@/components/RSVPSection";
import WishesSection from "@/components/WishesSection";
import GuestWishes from "@/components/GuestWishes";
import Footer from "@/components/Footer";
import FallingFlowers from "@/components/FallingFlowers";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <FallingFlowers />
      <Header />
      <main className="pb-20">
        <HeroSection />
        <WeddingCalendar />
        <StorySection />
        <GallerySection />
        <EventsSection />
        <RSVPSection />
        <WishesSection />
        <GuestWishes />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
