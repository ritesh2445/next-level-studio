import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[hsl(var(--dark-bg))] text-white px-[5%] pt-16 md:pt-32 pb-8 md:pb-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start max-w-7xl mx-auto">
      {/* Left: logo + wordmark + socials */}
      <div className="flex flex-col items-start text-left">
        <img
          src="/nl-logo-real.png"
          alt="NEXT LEVEL Photography"
          className="w-10 h-10 md:w-16 md:h-16 object-contain mb-2 md:mb-5"
        />
        <div className="font-century leading-[1.05] tracking-[0.1em] md:tracking-[0.15em] text-white">
          <div className="text-base md:text-4xl">NEXT</div>
          <div className="text-base md:text-4xl">LEVEL</div>
          <div className="text-base md:text-4xl">PHOTOGRAPHY</div>
        </div>
        <div className="flex gap-4 mt-2 md:mt-6">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram size={20} strokeWidth={1.75} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary transition-colors">
            <Facebook size={20} strokeWidth={1.75} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-primary transition-colors">
            <Twitter size={20} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      {/* Middle: locations + privacy */}
      <div className="text-left md:pt-2">
        <p className="font-sans text-sm tracking-[0.04em] text-white">Amravati . Nagpur . Pune</p>
        <p className="font-sans text-xs md:text-sm tracking-[0.04em] text-white mt-2 md:mt-8 cursor-pointer hover:text-primary transition-colors">
          Privacy Policy
        </p>
      </div>

      {/* Right: contact */}
      <div className="text-left md:pt-2">
        <p className="font-sans text-sm text-white">+91 95451 36425</p>
        <a
          href="mailto:nextlevelphotography.in@gmail.com"
          className="font-sans text-xs md:text-sm text-white hover:text-primary block mt-2 md:mt-8 transition-colors"
        >
          nextlevelphotography.in@gmail.com
        </a>
      </div>
    </div>

    <div className="border-t border-white/10 mt-12 md:mt-24 pt-4 md:pt-8 text-center md:flex md:justify-between md:text-left items-center max-w-7xl mx-auto">
      <p className="font-sans text-[0.6rem] tracking-[0.1em] text-white/40">
        © 2025 NEXT LEVEL Photography. All rights reserved.
      </p>
      <p className="font-sans text-[0.6rem] tracking-[0.1em] text-white/40 hidden md:block">
        Crafted with ♥ in Amravati
      </p>
    </div>
  </footer>
);
