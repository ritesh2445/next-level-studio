import heroImg from "@/assets/hero-couple-arch.jpg";

export const HeroImage = () => (
  <section className="relative w-full overflow-hidden bg-background">
    <img
      src={heroImg}
      alt="Couple framed by a black circular arch — fine art wedding portrait"
      className="w-full h-[70vh] md:h-[75vh] object-cover object-bottom"
    />
  </section>
);
