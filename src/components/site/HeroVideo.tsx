import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import heroVideo from "../../assets/hero video.mp4";

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
    <section id="top" className="relative w-full h-[73vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Responsive video */}
      <video
        ref={desktopRef}
        src={heroVideo}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        fetchPriority="high"
        // Use object-[percentage_center] to shift the video horizontally on mobile.
        // 50% is perfectly centered. Lower than 50% shifts it right, higher than 50% shifts it left.
        className="absolute inset-0 w-full h-full object-cover object-[50%_center] md:object-center"
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
