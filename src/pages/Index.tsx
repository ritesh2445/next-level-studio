import { Navbar } from "@/components/site/Navbar";
import { AboutEditorial } from "@/components/site/AboutEditorial";
import { HeroVideo } from "@/components/site/HeroVideo";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { HeroImage } from "@/components/site/HeroImage";
import { VideoGrid } from "@/components/site/VideoGrid";
import { IconicGrid } from "@/components/site/IconicGrid";
import { PhotoBlog } from "@/components/site/PhotoBlog";
import { FilmsSection } from "@/components/site/FilmsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroVideo />
      <MarqueeStrip
        eyebrow="Next Level Photography"
        text="Signature Realms of Storytelling"
        description="A seamless blend of tradition and emotion. Explore weddings, cinematic films, pre-wedding stories and fashion editorials — crafted by the studio of Next Level Photography, Amravati."
      />
      <HeroImage />
      <AboutEditorial />
      <VideoGrid />
      <MarqueeStrip
        eyebrow="A Legacy in Frames"
        text="500+ Couples · 8+ Years · 15+ Cities"
        description="Award-winning films listed on IMDB. Trusted across Maharashtra and beyond for cinematic wedding storytelling of the finest order."
      />
      <IconicGrid />
      <MarqueeStrip
        eyebrow="Soul & Cinema"
        text="Iconic Frames From The Indian Wedding Landscape"
        description="Every wedding is unique. Every frame, intentional. A body of work shaped by light, emotion and the quiet poetry of Indian celebrations."
      />
      <PhotoBlog />
      <FilmsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
