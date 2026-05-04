import heroImg from "@/assets/heroimg2.jpg";

export const HeroImage = () => (
  <section className="relative w-full overflow-hidden bg-background">
    <img
      src={heroImg}
      alt="Hero Portrait — Next Level Photography"
      fetchPriority="high"
      decoding="async"
      className="w-full h-full object-cover"
    />
  </section>
);
