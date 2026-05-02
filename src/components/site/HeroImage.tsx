import heroImg from "@/assets/heroimg2.jpg";

export const HeroImage = () => (
  <section className="relative w-full aspect-[4/5] md:aspect-auto overflow-hidden bg-background">
    <img
      src={heroImg}
      alt="Hero Portrait — Next Level Photography"
      className="w-full h-full md:h-auto object-cover md:object-contain md:scale-100"
    />
  </section>
);
