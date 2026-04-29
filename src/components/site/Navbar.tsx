import { useEffect, useRef, useState } from "react";
import { Instagram, Facebook, Menu, X } from "lucide-react";

export const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const hovering = useRef(false);

  useEffect(() => {
    const update = () => {
      const header = headerRef.current;
      if (!header) return;
      const y = window.scrollY;
      const scrollingUp = y < lastY.current;
      const past = y > 80;

      if (!past || scrollingUp || hovering.current) {
        header.classList.remove("nav-hidden");
        if (past || hovering.current) header.classList.add("nav-revealed");
        else header.classList.remove("nav-revealed");
      } else {
        header.classList.add("nav-hidden");
        header.classList.remove("nav-revealed");
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", update, { passive: true });
    const header = headerRef.current;
    const enter = () => { hovering.current = true; update(); };
    const leave = () => { hovering.current = false; update(); };
    header?.addEventListener("mouseenter", enter);
    header?.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("scroll", update);
      header?.removeEventListener("mouseenter", enter);
      header?.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "#photography", label: "Photography" },
    { href: "#films", label: "Films" },
    { href: "#contact", label: "Contact Us" },
    { href: "#about", label: "About" },
  ];

  return (
    <>
      <header ref={headerRef} className="site-header">
        <nav className="flex items-center px-6 md:px-10 h-[70px]">
          <a href="#top" className="flex items-center mr-auto">
            <span className="text-white logo-font text-[1.8rem] tracking-[0.05em]">Next Level</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 ml-auto">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="nav-link">{l.label}</a></li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4 ml-8">
            <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-primary transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-primary transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
            <a href="#contact" className="btn-gold">Get In Touch</a>
          </div>

          <button onClick={() => setOpen(true)} aria-label="Open menu" className="md:hidden text-white">
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[1100] bg-[#0a0a0a] transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setOpen(false)} aria-label="Close menu" className="absolute top-6 right-6 text-white"><X size={24} /></button>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link text-base">{l.label}</a>
          ))}
          <div className="flex gap-6 mt-4">
            <a href="https://instagram.com" aria-label="Instagram" className="text-white"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="text-white"><Facebook size={20} strokeWidth={1.5} /></a>
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2">Get In Touch</a>
        </div>
      </div>
    </>
  );
};
