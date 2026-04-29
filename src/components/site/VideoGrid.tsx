import { useEffect, useRef, useState } from "react";

const cells = [
  { label: "BRIDAL", url: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-kissing-during-the-wedding-4600-large.mp4" },
  { label: "CANDID", url: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-in-the-countryside-4626-large.mp4" },
  { label: "PRE-WEDDING", url: "https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-in-a-park-4628-large.mp4" },
  { label: "DESTINATION", url: "https://assets.mixkit.co/videos/preview/mixkit-wedding-ceremony-at-an-outdoor-venue-4616-large.mp4" },
];

export const VideoGrid = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActive(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-screen overflow-hidden bg-black">
      {/* Desktop 2x2 */}
      <div className="hidden md:grid w-screen h-screen grid-cols-2 grid-rows-2 gap-0">
        {cells.map((c) => (
          <div key={c.label} className="relative overflow-hidden group">
            <video src={c.url} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 z-10 text-white transition-transform duration-300 group-hover:-translate-y-1">
              <p className="text-[0.65rem] tracking-[0.2em]">{c.label}</p>
              <a href="#photography" className="text-[0.7rem] tracking-[0.1em] hover:underline mt-1 inline-block">Explore →</a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", height: "85vw" }}
        >
          {cells.map((c) => (
            <div key={c.label} className="relative overflow-hidden flex-shrink-0" style={{ flex: "0 0 85vw", height: "85vw", scrollSnapAlign: "start" }}>
              <video src={c.url} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <p className="text-[0.65rem] tracking-[0.2em]">{c.label}</p>
                <a href="#photography" className="text-[0.7rem] tracking-[0.1em] mt-1 inline-block underline">Explore →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 py-4 bg-white">
          {cells.map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-[#cccccc]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
