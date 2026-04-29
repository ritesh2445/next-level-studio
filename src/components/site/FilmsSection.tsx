import { Play } from "lucide-react";
import mosaic from "@/assets/mosaic-couple.jpg";
import prewed from "@/assets/prewedding.jpg";
import fashion from "@/assets/fashion.jpg";
import films from "@/assets/films.jpg";

const cards = [
  { img: mosaic, couple: "An Evening of Love", location: "Singapore" },
  { img: prewed, couple: "Reva & Zach", location: "Udaipur, Rajasthan" },
  { img: fashion, couple: "Kiara & Siddharth", location: "Suryagarh, Jaisalmer" },
  { img: films, couple: "Alia & Ranbir", location: "Mumbai, Maharashtra" },
];

export const FilmsSection = () => (
  <section id="films" className="bg-background">
    <div className="px-[5%] pt-16 pb-10 flex items-end justify-between flex-wrap gap-4">
      <div>
        <div className="label-row mb-3">
          <span className="label-dash" />
          <span className="label-text">Films &amp; Videos</span>
        </div>
        <h2 className="font-display text-[2.2rem] font-normal text-ink leading-tight">Wedding Films</h2>
      </div>
      <a href="#films" className="font-sans text-[0.75rem] text-ink hover:text-primary tracking-[0.05em]">View All →</a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[5%] pb-16">
      {cards.map((c, i) => (
        <a key={i} href="#" className="relative block group">
          <div className="img-zoom relative" style={{ aspectRatio: "16 / 10" }}>
            <img src={c.img} alt={`${c.couple} - ${c.location}`} loading="lazy" />
          </div>
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-6 left-6 text-white z-10">
            <p className="font-sans text-[0.55rem] tracking-[0.2em] opacity-80">NEXT LEVEL PHOTOGRAPHY</p>
            <h3 className="font-display italic text-[1.4rem] font-normal mt-1">{c.couple}</h3>
            <p className="font-sans text-[0.65rem] tracking-[0.1em] opacity-80 mt-1">{c.location}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full border-2 border-white/80 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white transition-all">
            <Play size={20} fill="white" stroke="white" />
          </div>
        </a>
      ))}
    </div>
  </section>
);
