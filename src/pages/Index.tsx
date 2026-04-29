import { Navbar } from "@/components/site/Navbar";
import { HeroVideo } from "@/components/site/HeroVideo";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { HeroImage } from "@/components/site/HeroImage";
import { VideoGrid } from "@/components/site/VideoGrid";
import { IconicGrid } from "@/components/site/IconicGrid";
import { PhotoBlog } from "@/components/site/PhotoBlog";
import { FilmsSection } from "@/components/site/FilmsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroVideo />
      <MarqueeStrip
        text="Wedding Photography • Cinematic Films • Pre-Wedding Stories • Fashion • Destination Weddings • Amravati •"
        duration={28}
      />
      <HeroImage />
      <MarqueeStrip
        text="Moments You'll Relive Forever • Authentic Emotions • Timeless Memories • Every Frame Tells A Story •"
        duration={32}
      />
      <VideoGrid />
      <MarqueeStrip
        text="500+ Couples • 8+ Years • 15+ Cities • Award-Winning Films • Listed on IMDB • Maharashtra's Finest •"
        duration={24}
      />
      <IconicGrid />
      <MarqueeStrip
        text="Cinematic Storytelling • Indian Wedding Landscape • Soul & Cinema • Every Wedding is Unique • Timeless Frames •"
        duration={36}
      />
      <PhotoBlog />
      <FilmsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
