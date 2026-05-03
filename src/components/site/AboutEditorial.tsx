import modernText from "@/assets/ModerntextCropped.png";

/**
 * Editorial "About" section — simplified version without images.
 */
export const AboutEditorial = () => {
  return (
    <section className="about-ed py-[calc(2.5rem-2vh)] md:py-[calc(4rem-2vh)] bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* ── Heading image ── */}
        <div className="mb-0 md:mb-2 w-full md:w-[70%]">
          <img
            src={modernText}
            alt="A Modern Approach to an Age Old Tradition"
            className="w-full h-auto"
            decoding="async"
          />
        </div>

        {/* ── Body copy ── */}
        <div className="max-w-3xl text-center">
          <p className="font-sans text-[13px] md:text-base leading-[1.8] text-neutral-600 mb-8 font-normal">
            Capturing timeless love stories through elegant, cinematic wedding photography — where every glance, every tear, every unscripted laugh is preserved with soul and artistry.
          </p>
        </div>
      </div>
    </section>
  );
};
