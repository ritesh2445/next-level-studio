import { useEffect, useRef, useState } from "react";

const cells = [
  { label: "BRIDAL", url: "https://shop.taruntahiliani.com/cdn/shop/videos/c/vp/f65a13ca2da64884b86ebdff1bbf00ff/f65a13ca2da64884b86ebdff1bbf00ff.HD-1080p-7.2Mbps-54392494.mp4?v=0" },
  { label: "CANDID", url: "https://shop.taruntahiliani.com/cdn/shop/videos/c/vp/62727adf548f417aaef9607f0fea87dc/62727adf548f417aaef9607f0fea87dc.HD-1080p-7.2Mbps-54392496.mp4?v=0" },
  { label: "PRE-WEDDING", url: "https://shop.taruntahiliani.com/cdn/shop/videos/c/vp/3e2b7319a7744e0eadd36e1b5d9d4c6d/3e2b7319a7744e0eadd36e1b5d9d4c6d.HD-1080p-7.2Mbps-54392495.mp4?v=0" },
  { label: "DESTINATION", url: "https://shop.taruntahiliani.com/cdn/shop/videos/c/vp/a655a5a8a06345a28d5fe3b66e561910/a655a5a8a06345a28d5fe3b66e561910.HD-1080p-7.2Mbps-54392493.mp4?v=0" },
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
