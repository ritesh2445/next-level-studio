interface MarqueeStripProps {
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
export const MarqueeStrip = ({ text, description }: MarqueeStripProps) => {
  // Use the first segment as the heading; remaining segments become the description
  // when no explicit description is supplied.
  const segments = text.split("•").map((s) => s.trim()).filter(Boolean);
  const heading = segments[0] ?? text;
  const fallbackDescription =
    description ?? segments.slice(1).join(" · ");

  return (
    <section className="w-full bg-white py-14 px-5 md:py-10 md:px-6 border-y border-hairline">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans font-bold text-[0.85rem] md:text-[1.1rem] tracking-[0.4em] md:tracking-[0.5em] uppercase text-neutral-800">
          {heading}
        </h2>
        {fallbackDescription && (
          <p className="mt-4 md:mt-8 text-[13px] md:text-base leading-[1.8] text-neutral-600 font-sans px-2 md:px-0 max-w-2xl mx-auto">
            {fallbackDescription}
          </p>
        )}
      </div>
    </section>
  );
};
