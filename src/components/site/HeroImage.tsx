import heroImg from "@/assets/hero-wedding.jpg";

export const HeroImage = () => (
  <section className="relative w-full h-screen overflow-hidden">
    <img
      src={heroImg}
      alt="Bride and groom in traditional Indian wedding attire at golden hour"
      className="w-full h-full object-cover object-top md:object-top"
      style={{ objectPosition: "center" }}
    />
  </section>
);
