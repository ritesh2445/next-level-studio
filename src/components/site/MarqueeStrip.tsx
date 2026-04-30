interface MarqueeStripProps {
  /** Small eyebrow line (optional) */
  eyebrow?: string;
  /** Main heading text */
  text: string;
  /** Supporting paragraph below the heading */
  description?: string;
  /** @deprecated kept for backwards compatibility */
  duration?: number;
}

/**
 * Static white "band" section used between visual blocks.
 * Inspired by the Tarun Tahiliani "Signature Realms of Style" band:
 * white background, centered serif heading, soft body copy.
 */
export const MarqueeStrip = ({ eyebrow, text, description }: MarqueeStripProps) => {
  // Use the first segment as the heading; remaining segments become the description
  // when no explicit description is supplied.
  const segments = text.split("•").map((s) => s.trim()).filter(Boolean);
  const heading = segments[0] ?? text;
  const fallbackDescription =
    description ?? segments.slice(1).join(" · ");

  return (
    <section className="w-full bg-white py-10 px-5 md:py-24 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] uppercase text-neutral-500 mb-3 md:mb-4 font-sans">
            {eyebrow}
          </p>
        )}
        <h2 className="font-didot font-normal text-[1.05rem] leading-snug md:text-4xl tracking-[0.12em] md:tracking-[0.18em] uppercase text-neutral-900">
          {heading}
        </h2>
        {fallbackDescription && (
          <p className="mt-3 md:mt-6 text-[12px] md:text-base leading-relaxed text-neutral-600 font-sans px-2 md:px-0">
            {fallbackDescription}
          </p>
        )}
      </div>
    </section>
  );
};
