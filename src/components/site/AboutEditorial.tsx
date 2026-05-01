import modernText from "@/assets/ModerntextCropped.png";

/**
 * Editorial "About" section — simplified version without images.
 */
export const AboutEditorial = () => {
  return (
    <section className="about-ed py-10 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* ── Heading image ── */}
        <div className="mb-8 md:mb-14 w-full md:w-[70%]">
          <img
            src={modernText}
            alt="A Modern Approach to an Age Old Tradition"
            className="w-full h-auto"
          />
        </div>

        {/* ── Body copy ── */}
        <div className="max-w-3xl text-center">
          <p className="font-didot text-[13px] leading-[1.8] text-neutral-600 mb-8 font-normal max-w-2xl mx-auto">
            Capturing timeless love stories through elegant, cinematic wedding photography — where every glance, every tear, every unscripted laugh is preserved with soul and artistry.
          </p>
          <p className="font-didot text-[13px] leading-[1.8] text-neutral-600 font-normal italic max-w-2xl mx-auto">
            "We don’t just take photos. We craft heirlooms of emotion, woven in light and shadow, designed to be felt for generations."
          </p>
        </div>
      </div>
    </section>
  );
};
