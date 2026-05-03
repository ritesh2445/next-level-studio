import i01 from "@/assets/01.jpg";
import i02 from "@/assets/02.jpg";
import i03 from "@/assets/03.jpg";
import i04 from "@/assets/04.jpg";
import i05 from "@/assets/05.jpg";
import i06 from "@/assets/06.jpg";
import i07 from "@/assets/07.jpg";
import i08 from "@/assets/08.jpg";
import i09 from "@/assets/09.jpg";
import i10 from "@/assets/10.jpg";

const grid = [
  i01, i02, i03, i04, i05,
  i06, i07, i08, i09, i10,
];

export const IconicGrid = () => (
  <section className="bg-background">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-0 w-full">
      {grid.map((src, i) => (
        <div 
          key={i} 
          className="img-zoom relative aspect-square"
        >
          <img 
            src={src} 
            alt={`Iconic frame ${i + 1}`} 
            loading="lazy" 
            decoding="async"
          />
        </div>
      ))}
    </div>
  </section>
);
