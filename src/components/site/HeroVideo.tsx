import { useRef, useState } from "react";

const HERO_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-couple-holding-hands-at-their-reception-4622-large.mp4";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <section id="top" className="relative w-screen h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={HERO_VIDEO_URL}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* Mute toggle */}
      <button
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-10 right-10 px-4 py-2 text-[0.65rem] tracking-[0.12em] text-white border border-white/40 bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors uppercase"
      >
        {muted ? "Unmute" : "Mute"}
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white text-[0.6rem] uppercase tracking-[0.2em]">Scroll</span>
        <span className="scroll-line block" />
      </div>
    </section>
  );
};
