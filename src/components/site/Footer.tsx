import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/nl-logo.png";

export const Footer = () => (
  <footer className="bg-[hsl(var(--dark-bg))] text-white px-[5%] pt-16 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 items-start max-w-7xl mx-auto">
      <div>
        <img src={logo} alt="NEXT LEVEL Photography" className="w-11 mb-3 brightness-0 invert opacity-90" />
        <div className="font-sans text-[0.65rem] tracking-[0.25em] font-semibold leading-[1.8]">
          NEXT<br />LEVEL<br />PHOTOGRAPHY
        </div>
        <div className="flex gap-4 mt-5">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
        </div>
      </div>

      <div>
        <p className="font-sans text-[0.8rem] tracking-[0.08em] text-white/80">Amravati . Nagpur . Pune</p>
        <p className="font-sans text-[0.8rem] tracking-[0.08em] text-white/80 mt-6 cursor-pointer hover:text-primary transition-colors">Privacy Policy</p>
      </div>

      <div>
        <p className="font-sans text-[0.85rem] font-medium">+91 95451 36425</p>
        <a href="mailto:nextlevelphotography.in@gmail.com" className="font-sans text-[0.8rem] text-white/70 hover:text-white block mt-6 transition-colors">
          nextlevelphotography.in@gmail.com
        </a>
      </div>
    </div>

    <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 max-w-7xl mx-auto">
      <p className="font-sans text-[0.6rem] tracking-[0.1em] text-white/40">© 2025 NEXT LEVEL Photography. All rights reserved.</p>
      <p className="font-sans text-[0.6rem] tracking-[0.1em] text-white/40">Crafted with ♥ in Amravati</p>
    </div>
  </footer>
);
