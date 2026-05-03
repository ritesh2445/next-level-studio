import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[hsl(var(--dark-bg))] text-white px-[5%] pt-[calc(4rem-4vh)] md:pt-[calc(8rem-7vh)] pb-[calc(1rem-2vh)] md:pb-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start max-w-7xl mx-auto">
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

      {/* Middle: locations + privacy + Visit Us (Desktop) */}
      <div className="text-left md:pt-2">
        <p className="font-sans text-sm tracking-[0.04em] text-white">Amravati . Nagpur . Pune</p>
        <p className="font-sans text-xs md:text-sm tracking-[0.04em] text-white mt-2 md:mt-8 cursor-pointer hover:text-primary transition-colors">
          Privacy Policy
        </p>
        <div className="hidden md:block mt-6">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Next+Level+Photography+Amravati" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative border border-white px-10 py-3 text-[0.7rem] tracking-[0.2em] uppercase overflow-hidden transition-colors duration-300 hover:text-black inline-block w-60 text-center bg-transparent"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Visit Us</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        </div>
      </div>

      {/* Right: contact + Appointment (Desktop) */}
      <div className="text-left md:pt-2">
        <p className="font-sans text-sm text-white">+91 95451 36425</p>
        <a
          href="mailto:nextlevelphotography.in@gmail.com"
          className="font-sans text-xs md:text-sm text-white hover:text-primary block mt-2 md:mt-8 transition-colors"
        >
          nextlevelphotography.in@gmail.com
        </a>
        <div className="hidden md:block mt-6">
          <a 
            href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography,%20can%20we%20schedule%20a%20meeting%20anysoon?" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative border border-white px-10 py-3 text-[0.7rem] tracking-[0.2em] uppercase overflow-hidden transition-colors duration-300 hover:text-black inline-block w-60 text-center bg-transparent"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Appointment</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        </div>
      </div>

      {/* Mobile Buttons: Stacked and centered, directly below email */}
      <div className="md:hidden flex flex-col gap-4 mt-2 items-center justify-center">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Next+Level+Photography+Amravati" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative border border-white px-10 py-3 text-[0.7rem] tracking-[0.2em] uppercase overflow-hidden transition-colors duration-300 hover:text-black w-full text-center bg-transparent"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Visit Us</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </a>
        <a 
          href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography,%20can%20we%20schedule%20a%20meeting%20anysoon?" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative border border-white px-10 py-3 text-[0.7rem] tracking-[0.2em] uppercase overflow-hidden transition-colors duration-300 hover:text-black w-full text-center bg-transparent"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Appointment</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </a>
      </div>
    </div>

    <div className="border-t border-white/10 mt-8 md:mt-12 pt-3 md:pt-4 text-center md:flex md:justify-between md:text-left items-center max-w-7xl mx-auto">
      <p className="font-sans text-[0.6rem] tracking-[0.1em] text-white/40">
        © 2026 NEXT LEVEL Photography. All rights reserved.
      </p>
      <p className="font-sans text-[0.6rem] tracking-[0.1em] text-white/40 hidden md:block">
        Crafted with ♥ in Amravati
      </p>
    </div>
  </footer>
);
