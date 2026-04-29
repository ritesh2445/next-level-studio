import heroImg from "@/assets/hero-couple-arch.jpg";

export const HeroImage = () => (
  <section className="relative w-full overflow-hidden bg-background">
    <img
      src={heroImg}
      alt="Couple framed by a black circular arch — fine art wedding portrait"
      className="w-full h-[80vh] md:h-auto object-cover md:object-contain object-center"
    />
  </section>
);
