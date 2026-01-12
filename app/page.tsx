import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";
import FallingFlowers from "@/components/FallingFlowers";

export default function Home() {
  return (
    <>
      <FallingFlowers />
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <GallerySection />
        <EventsSection />
        <WishesSection />
      </main>
      <Footer />
    </>
  );
}
