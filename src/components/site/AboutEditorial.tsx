import modernText from "@/assets/ModerntextCropped.png";
import aboutPortrait from "@/assets/about-portrait.png";
import aboutDestination from "@/assets/about-destination.png";

/**
 * Editorial "About" section — pixel-perfect recreation of the
 * House On The Clouds layout.
 *
 * Key layout traits:
 *  – White background
 *  – "A MODERN APPROACH to an AGE OLD TRADITION" rendered via Moderntext.png image
 *  – Heading image overlaps the top of the left portrait image
 *  – Right destination image sits top-right
 *  – Body text positioned between images
 *  – No press logos
 */
export const AboutEditorial = () => {
  return (
    <section className="about-ed">
      {/* ── Heading image — overlaps the top of the left image ── */}
      <div className="about-ed__title">
        <img
          src={modernText}
          alt="A Modern Approach to an Age Old Tradition"
          className="about-ed__title-img"
        />
      </div>

      {/* ── Left portrait (bottom-left, behind heading) ── */}
      <div className="about-ed__left">
        <img
          src={aboutPortrait}
          alt="Elegant bridal portrait — fine art close-up"
          loading="lazy"
        />
      </div>

      {/* ── Right destination image (top-right) ── */}
      <div className="about-ed__right">
        <img
          src={aboutDestination}
          alt="Destination wedding — Italian lakeside ceremony"
          loading="lazy"
        />
      </div>

      {/* ── Body copy (center, overlapping left image edge) ── */}
      <div className="about-ed__copy">
        <p>
          Considered to be the epitome of Modern Photography and Filmmaking,
          HOTC has transformed the Indian Wedding landscape on a regular basis.
          For almost a decade House On The Clouds has been creating photographs
          and films which are timeless and have been etched in memories of
          thousands of people forever.
        </p>
        <p>
          Awarded as the Wedding Filmmaker of the year for four consecutive
          years at the Weddingsutra awards along with numerous other awards
          HOTC is the only company listed on IMDB for its award winning films.
        </p>
      </div>
    </section>
  );
};
