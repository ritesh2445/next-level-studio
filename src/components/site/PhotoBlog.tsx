import b1 from "@/assets/b1.jpg";
import mosaic from "@/assets/mosaic-couple.jpg";
import wedding from "@/assets/wedding-ceremony.jpg";
import fashion from "@/assets/fashion.jpg";
import { Link } from "react-router-dom";

const cards = [
  { img: b1, couple: "Reva & Zach", date: "Oct 7, 2024", slug: "reva-zach" },
  { img: mosaic, couple: "An Evening of Love", date: "Aug 25, 2024", slug: "evening-of-love" },
  { img: wedding, couple: "Alia & Ranbir, Mumbai", date: "Aug 8, 2024", slug: "alia-ranbir-mumbai" },
  { img: fashion, couple: "Kiara & Siddharth", date: "Apr 24, 2024", slug: "kiara-siddharth" },
];

export const PhotoBlog = () => (
  <section id="photography" className="bg-background">
    <div className="px-[5%] pt-16 pb-10 flex items-end justify-between flex-wrap gap-4">
      <div>
        <div className="label-row mb-3">
          <span className="label-dash" />
          <span className="label-text">Photography</span>
        </div>
        <h2 className="font-display text-[2.2rem] font-normal text-ink leading-tight">Our Work</h2>
      </div>
      <a href="#photography" className="font-sans text-[0.75rem] text-ink hover:text-primary tracking-[0.05em]">View All →</a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-[5%] pb-8">
      {cards.map((c, i) => (
        <Link key={i} to={`/photography/${c.slug}`} className="block text-ink">
          <div className="img-zoom mb-3" style={{ aspectRatio: "3 / 4" }}>
            <img src={c.img} alt={c.couple} loading="lazy" />
          </div>
          <h3 className="font-display italic text-base mt-1">{c.couple}</h3>
          <p className="font-sans text-[0.65rem] tracking-[0.12em] text-ink-mute mt-1">{c.date}</p>
        </Link>
      ))}
    </div>

    <div className="flex justify-center pb-4">
      <Link to="/photography/reva-zach" className="inline-block border border-ink px-10 py-3 font-sans text-[0.72rem] tracking-[0.18em] uppercase text-ink hover:bg-ink hover:text-white transition-colors">
        Photography Blog
      </Link>
    </div>
  </section>
);
