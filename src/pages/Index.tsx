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
        id="about"
        text="Signature Realms of Storytelling"
        description="Our signature style lies in crafting visually striking Western-themed wedding stories that feel both cinematic and deeply personal. We specialize in creating creative, thoughtfully composed shots that go beyond traditional frames, blending mood, styling, and storytelling into every scene. From concept-driven setups to dynamic intro pattern videos, we design each sequence with a strong narrative flow that captures the essence of your celebration. Our approach is not just about documenting moments, but about elevating them into timeless visuals with a distinctive, modern Western aesthetic that sets your story apart."
        className="py-[calc(3rem-1.0vh)] md:py-[calc(6rem-7.0vh)]"
        containerClassName="max-w-7xl"
        descriptionClassName="max-w-5xl md:max-w-7xl mx-auto"
      />
      <HeroImage />
      <AboutEditorial />
      <VideoGrid />
      <MarqueeStrip
        text="Stories in Frames"
        description="Our most iconic captures, where every image reflects timeless moments, creative vision, and unforgettable storytelling."
        className="pb-10 md:pt-14 md:pb-10"
      />
      <IconicGrid />
      <MarqueeStrip
        text="A seamless blend of tradition and emotion"
        description="Explore weddings, cinematic films, pre-wedding stories and fashion editorials, crafted by the studio of Next Level Photography, Amravati."
        className="pb-0 md:pt-14 md:pb-0 border-b-0"
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
