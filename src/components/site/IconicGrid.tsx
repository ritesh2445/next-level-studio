import wedding from "@/assets/wedding-ceremony.jpg";
import hero from "@/assets/hero-wedding.jpg";
import fashion from "@/assets/fashion.jpg";
import prewed from "@/assets/prewedding.jpg";
import films from "@/assets/films.jpg";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";
import iconic from "@/assets/iconic-text.jpg";
import mosaic from "@/assets/mosaic-couple.jpg";

const grid = [
  wedding, hero, fashion, prewed, films,
  b2, b1, iconic, b1, wedding,
  mosaic, prewed, fashion, films, b2,
];

export const IconicGrid = () => (
  <section className="bg-background">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-0 w-full">
      {grid.map((src, i) => (
        <div 
          key={i} 
          className="img-zoom relative aspect-square"
        >
          <img src={src} alt={`Iconic frame ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  </section>
);
