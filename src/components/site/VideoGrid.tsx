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
    <section className="relative w-full overflow-hidden bg-black">
      {/* Desktop: 2-column grid, flush edge-to-edge, no gaps — Tarun Tahiliani pattern */}
      <div className="hidden md:grid w-full grid-cols-2 gap-0">
        {cells.map((c) => (
          <div
            key={c.label}
            className="relative overflow-hidden group border-0"
            style={{ aspectRatio: "4 / 5" }}
          >
            <video
              src={c.url}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay — lifts on hover */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            {/* Bottom label + CTA */}
            <div className="absolute bottom-10 left-0 right-0 z-10 text-white text-center transition-transform duration-300 group-hover:-translate-y-1">
              <p className="font-didot text-[1rem] md:text-[1.15rem] tracking-[0.25em] uppercase">
                {c.label}
              </p>
              <a
                href="#photography"
                className="inline-block mt-4 text-[0.65rem] tracking-[0.18em] uppercase border border-white/70 px-6 py-2.5 text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Discover
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: full-width snap carousel, tall vertical frames */}
      <div className="md:hidden">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cells.map((c) => (
            <div
              key={c.label}
              className="relative overflow-hidden flex-shrink-0"
              style={{
                flex: "0 0 100vw",
                aspectRatio: "4 / 5",
                scrollSnapAlign: "start",
              }}
            >
              <video
                src={c.url}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-8 left-0 right-0 z-10 text-white text-center">
                <p className="font-didot text-[1rem] tracking-[0.25em] uppercase">
                  {c.label}
                </p>
                <a
                  href="#photography"
                  className="inline-block mt-3 text-[0.6rem] tracking-[0.18em] uppercase border border-white/70 px-5 py-2 text-white"
                >
                  Discover
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 py-4 bg-black">
          {cells.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
