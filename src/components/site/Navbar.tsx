import { useEffect, useRef, useState } from "react";
import { Instagram, Facebook, Menu, X } from "lucide-react";
import logo from "@/assets/logonl2.png";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const hovering = useRef(false);

  useEffect(() => {
    const update = () => {
      const header = headerRef.current;
      if (!header) return;
      
      // On non-home pages, keep navbar revealed if background is light
      const isNotHome = location.pathname !== "/";
      const y = window.scrollY;
      const past = y > 50 || isNotHome;

      if (past || hovering.current) {
        header.classList.add("nav-revealed");
      } else {
        header.classList.remove("nav-revealed");
      }
      header.classList.remove("nav-hidden");
      lastY.current = y;
    };
    window.addEventListener("scroll", update, { passive: true });
    update(); // Run on mount to check path
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
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { href: "/#photography", label: "Photography" },
    { href: "/#films", label: "Films" },
    { href: "/#contact", label: "Contact Us" },
    { href: "/#about", label: "About" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  return (
    <>
      <header ref={headerRef} className="site-header">
        <nav className="flex items-center px-6 md:px-10 h-[70px]">
          {/* Left: Desktop links */}
          <div className="flex-1 flex items-center">
            <div className="md:hidden w-[22px]"></div> {/* Spacer to balance mobile menu button */}
            <ul className="hidden md:flex items-center gap-8">
              {links.slice(0, 2).map((l) => (
                <li key={l.href}>
                  <Link 
                    to={l.href} 
                    className="nav-link"
                    onClick={(e) => handleLinkClick(e, l.href)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Logo */}
          <div className="flex-none">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Next Level" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
          </div>

          {/* Right: Desktop links + Socials + Button / Mobile Menu */}
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-8">
            <ul className="hidden md:flex items-center gap-8">
              {links.slice(2).map((l) => (
                <li key={l.href}>
                  <Link 
                    to={l.href} 
                    className="nav-link"
                    onClick={(e) => handleLinkClick(e, l.href)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-primary transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              <Link to="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")} className="btn-gold">Get In Touch</Link>
            </div>

            <button onClick={() => setOpen(true)} aria-label="Open menu" className="md:hidden text-white">
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[1100] bg-[#0a0a0a] transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setOpen(false)} aria-label="Close menu" className="absolute top-6 right-6 text-white"><X size={24} /></button>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l) => (
            <Link 
              key={l.href} 
              to={l.href} 
              onClick={(e) => handleLinkClick(e, l.href)} 
              className="nav-link text-base"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-6 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white"><Facebook size={20} strokeWidth={1.5} /></a>
          </div>
          <Link 
            to="/#contact" 
            onClick={(e) => handleLinkClick(e, "/#contact")} 
            className="btn-gold mt-2"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
};
