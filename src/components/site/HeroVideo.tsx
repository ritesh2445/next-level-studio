import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HERO_DESKTOP = "https://shop.taruntahiliani.com/cdn/shop/videos/c/vp/80628b2742e94c608478c9aa8fdc6a56/80628b2742e94c608478c9aa8fdc6a56.HD-720p-3.0Mbps-81761231.mp4?v=0";
const HERO_MOBILE = "https://shop.taruntahiliani.com/cdn/shop/videos/c/vp/d1f0ed5fda3a4871aff35fd320d663f1/d1f0ed5fda3a4871aff35fd320d663f1.HD-1080p-4.8Mbps-81761232.mp4?v=0";
const HERO_DESKTOP_POSTER = "https://shop.taruntahiliani.com/cdn/shop/files/preview_images/80628b2742e94c608478c9aa8fdc6a56.thumbnail.0000000000_400x.jpg?v=1776329589";
const HERO_MOBILE_POSTER = "https://shop.taruntahiliani.com/cdn/shop/files/preview_images/d1f0ed5fda3a4871aff35fd320d663f1.thumbnail.0000000000_400x.jpg?v=1776329606";

export const HeroVideo = () => {
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (desktopRef.current) desktopRef.current.muted = next;
      if (mobileRef.current) mobileRef.current.muted = next;
      return next;
    });
  };

  return (
    <section id="top" className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-black">
      {/* Desktop video */}
      <video
        ref={desktopRef}
        src={HERO_DESKTOP}
        poster={HERO_DESKTOP_POSTER}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="hidden sm:block absolute inset-0 w-full h-full object-cover"
      />
      {/* Mobile video */}
      <video
        ref={mobileRef}
        src={HERO_MOBILE}
        poster={HERO_MOBILE_POSTER}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="sm:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered overlay text — mimics Tarun Tahiliani hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 text-white text-center pointer-events-none">
        <p className="font-sans text-[0.7rem] md:text-[0.78rem] tracking-[0.35em] font-semibold">
          EVER&middot;BLOOM
        </p>
        <h1 className="font-display text-[2rem] md:text-[2.6rem] font-normal mt-3 md:mt-4 tracking-wide">
          Spring Summer&apos;26
        </h1>
        <a
          href="#photography"
          className="pointer-events-auto mt-6 md:mt-7 inline-flex items-center justify-center px-8 py-3 text-[0.7rem] tracking-[0.2em] uppercase border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors"
        >
          Discover
        </a>
      </div>

      {/* Mute toggle (bottom-left like reference) */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity z-10"
      >
        {muted ? <VolumeX size={22} strokeWidth={1.5} /> : <Volume2 size={22} strokeWidth={1.5} />}
      </button>
    </section>
  );
};
