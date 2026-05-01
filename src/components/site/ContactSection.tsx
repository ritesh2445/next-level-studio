import { useState } from "react";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSubmitted(true), 700);
  };

  const inputCls = "w-full bg-transparent border-0 border-b border-[hsl(var(--input))] py-3 font-sans text-[0.85rem] text-ink placeholder:text-[#aaa] outline-none focus:border-ink transition-colors";

  return (
    <section id="contact" className="bg-background pt-12 pb-24 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start max-w-7xl mx-auto">
        <div>
          <div className="label-row mb-4">
            <span className="label-dash" />
            <span className="label-text">Get in Touch</span>
          </div>
          <h2 className="font-display text-[2.2rem] md:text-[2.8rem] font-normal text-ink leading-[1.15] mb-6">
            Let's Create<br />Together
          </h2>
          <p className="font-sans text-[0.9rem] leading-[1.8] text-ink-soft mb-10 max-w-md">
            We would love to hear about your vision. Drop us a message or call us directly.
          </p>

          {[
            { label: "Phone", values: ["+91 9545136425", "+91 8788113565"] },
            { label: "Email", values: ["nextlevelphotography.in@gmail.com"] },
            { label: "Studio", values: ["Dreamz Landmark, Amravati,", "Maharashtra 444601"] },
          ].map((info, i) => (
            <div key={info.label} className={i > 0 ? "border-t border-hairline pt-5 mt-5" : ""}>
              <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-ink-mute mb-2">{info.label}</p>
              {info.values.map((v) => (
                <p key={v} className="font-sans text-[0.9rem] text-ink leading-relaxed">{v}</p>
              ))}
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <input className={inputCls} type="text" placeholder="Your Name" required />
            <input className={inputCls} type="text" placeholder="Partner's Name" />
          </div>
          <input className={inputCls} type="email" placeholder="Email Address" required />
          <input className={inputCls} type="tel" placeholder="Phone Number" />
          <select className={inputCls + " appearance-none"} defaultValue="" required>
            <option value="" disabled>Select Service</option>
            <option>Wedding Photography</option>
            <option>Pre-Wedding Shoot</option>
            <option>Fashion Photography</option>
            <option>Wedding Films</option>
            <option>Music Videos / Short Films</option>
            <option>Other</option>
          </select>
          <input className={inputCls} type="date" placeholder="Event Date" />
          <textarea className={inputCls + " resize-none"} rows={4} placeholder="Tell us about your event..." />

          <div className="mt-4">
            {submitted ? (
              <p className="font-display italic text-primary text-lg py-4 text-center">
                Thank you! We'll be in touch soon.
              </p>
            ) : (
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-ink text-white font-sans text-[0.75rem] tracking-[0.2em] uppercase py-4 hover:bg-primary transition-colors disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
