import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  /** Main heading text */
  text: string;
  /** Supporting paragraph below the heading */
  description?: string;
  /** Optional additional classes */
  className?: string;
  /** @deprecated kept for backwards compatibility */
  duration?: number;
}

/**
 * Static white "band" section used between visual blocks.
 * Inspired by the Tarun Tahiliani "Signature Realms of Style" band:
 * white background, centered serif heading, soft body copy.
 */
export const MarqueeStrip = ({ text, description, className }: MarqueeStripProps) => {
  // Use the first segment as the heading; remaining segments become the description
  // when no explicit description is supplied.
  const segments = text.split("•").map((s) => s.trim()).filter(Boolean);
  const heading = segments[0] ?? text;
  const fallbackDescription =
    description ?? segments.slice(1).join(" · ");

  return (
    <section className={cn("w-full bg-white pt-10 pb-14 px-5 md:py-10 md:px-6 border-y border-hairline", className)}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-century font-bold text-[1.15rem] md:text-[1.6rem] tracking-[0.1em] md:tracking-[0.15em] uppercase text-neutral-600 m-0">
          {heading}
        </h2>
        {fallbackDescription && (
          <p className="mt-1 text-[13px] md:text-base leading-[1.8] text-neutral-600 font-sans px-2 md:px-0 max-w-2xl mx-auto">
            {fallbackDescription}
          </p>
        )}
      </div>
    </section>
  );
};
