interface MarqueeStripProps {
  text: string;
  duration?: number; // seconds
}

export const MarqueeStrip = ({ text, duration = 28 }: MarqueeStripProps) => {
  // text is "A • B • C •" - we split on • to color separators
  const parts = text.split("•").map((p) => p.trim()).filter(Boolean);

  const Block = () => (
    <span className="inline-flex items-center pr-0">
      {parts.map((p, i) => (
        <span key={i} className="inline-flex items-center">
          {p}
          <span className="marquee-dot">•</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee-track"
        style={{ animation: `marqueeScroll ${duration}s linear infinite` }}
      >
        {/* Repeat blocks for seamless loop. Each Block renders the full set + trailing dot.
            Two copies + one extra to ensure -50% lands on a duplicate. */}
        <span className="inline-flex items-center"><Block /><Block /></span>
        <span className="inline-flex items-center"><Block /><Block /></span>
      </div>
    </div>
  );
};
