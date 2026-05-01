import { Play } from "lucide-react";
import mosaic from "@/assets/mosaic-couple.jpg";
import prewed from "@/assets/prewedding.jpg";
import fashion from "@/assets/fashion.jpg";
import films from "@/assets/films.jpg";

const cards = [
  { img: mosaic, couple: "TAMANNA&DAN", location: "Singapore" },
  { img: prewed, couple: "ALISHA&RAHUL", location: "Amalfi Coast, Italy" },
  { img: fashion, couple: "SALONI&SID", location: "Bangkok" },
  { img: films, couple: "ZINA&ZAIN", location: "Mumbai, Maharashtra" },
];

export const FilmsSection = () => (
  <section id="films" className="bg-background">
    {/* Section header */}
    <div className="px-4 md:px-[8%] pt-4 pb-8 flex items-end justify-between flex-wrap gap-4">
      <div>
        <div className="label-row mb-3">
          <span className="label-dash" />
          <span className="label-text">Films &amp; Videos</span>
        </div>
        <h2 className="font-display text-[2.2rem] font-normal text-ink leading-tight">Wedding Films</h2>
      </div>
      <a href="#films" className="font-sans text-[0.75rem] text-ink hover:text-primary tracking-[0.05em]">View All →</a>
    </div>

    {/* 2×2 video grid — HOTC style */}
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-3 md:gap-y-[48px] px-3 md:px-[8%] pb-4">
      {cards.map((c, i) => (
        <a key={i} href="#" className="relative block group overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          {/* Thumbnail image */}
          <img
            src={c.img}
            alt={`${c.couple} - ${c.location}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

          {/* Text overlay — centered in card */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
            {/* Eyebrow */}
            <p
              className="uppercase text-white/80 mb-1 md:mb-3"
              style={{ fontSize: "10px", letterSpacing: "0.4em", fontFamily: "var(--font-sans)" }}
            >
              Next Level Photography
            </p>

            {/* Couple name — huge Didot serif */}
            <h3
              className="font-didot font-normal uppercase text-white leading-[1] tracking-tight"
              style={{ fontSize: "clamp(1.4rem, 6vw, 5.5rem)" }}
            >
              {c.couple}
            </h3>

            {/* Location */}
            <p
              className="uppercase text-white/80 mt-1 md:mt-3 font-didot"
              style={{ fontSize: "clamp(0.5rem, 1.2vw, 0.9rem)", letterSpacing: "0.3em" }}
            >
              {c.location}
            </p>
          </div>

          {/* Play button — simple white triangle, centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-90 group-hover:opacity-100 transition-opacity">
            <Play size={28} fill="white" stroke="white" className="md:w-9 md:h-9 drop-shadow-lg" />
          </div>
        </a>
      ))}
    </div>
  </section>
);
