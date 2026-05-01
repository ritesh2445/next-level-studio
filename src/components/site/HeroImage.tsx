import heroImg from "@/assets/hero-couple-arch.jpg";

export const HeroImage = () => (
  <section className="relative w-full aspect-square md:aspect-auto overflow-hidden bg-background">
    <img
      src={heroImg}
      alt="Couple framed by a black circular arch — fine art wedding portrait"
      className="w-full h-full md:h-auto object-cover md:object-contain scale-[1.15] md:scale-100 origin-bottom"
    />
  </section>
);
