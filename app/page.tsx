import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WeddingCalendar from "@/components/WeddingCalendar";
import VenueSection from "@/components/VenueSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import RSVPSection from "@/components/RSVPSection";
import WishesSection from "@/components/WishesSection";
import GuestWishes from "@/components/GuestWishes";
import SeatingChart from "@/components/SeatingChart";
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
        <VenueSection />
        <StorySection />
        <GallerySection />
        <EventsSection />
        <RSVPSection />
        <WishesSection />
        <GuestWishes />
        <SeatingChart />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
