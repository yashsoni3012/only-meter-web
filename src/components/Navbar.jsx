import { useState } from "react";
import logo from "../assets/logo.jpg";
// import { href } from "react-router-dom";

const navLinks = [
  { label: "HOME", href: "home" },
  { label: "ABOUT", href: "about" },
  { label: "SERVICES", href: "services" },
  { label: "CONTACT", href: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIXED SCROLL WITH OFFSET
  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const yOffset = -100; // navbar height
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#141414] flex justify-center">

  <div className="w-full max-w-[1728px] h-[90px] sm:h-[100px] px-5 lg:px-20 flex items-center justify-between">

    {/* LOGO */}
    <button onClick={() => scrollTo("home")} className="flex items-center gap-3">

      {/* LOGO FIX */}
      <div className="h-[60px] sm:h-[99px] flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-sm sm:text-base">
          Only Meter
        </span>
        <span className="text-[#FFEE02] text-[10px] tracking-widest">
          INDIA
        </span>
      </div>

    </button>

    {/* DESKTOP MENU */}
    <ul className="hidden lg:flex gap-10">
      {navLinks.map((link) => (
        <li key={link.href}>
          <button
            onClick={() => scrollTo(link.href)}
            className="text-white text-sm tracking-widest hover:text-[#FFEE02] transition"
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <button
      onClick={() => scrollTo("download")}
      className="hidden lg:block bg-[#FFEE02] text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300"
    >
      Download App
    </button>

    {/* MOBILE MENU BUTTON */}
    <button
      className="lg:hidden flex flex-col gap-1"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className={`w-6 h-[2px] bg-white transition ${menuOpen && "rotate-45 translate-y-1.5"}`} />
      <span className={`w-6 h-[2px] bg-white transition ${menuOpen && "opacity-0"}`} />
      <span className={`w-6 h-[2px] bg-white transition ${menuOpen && "-rotate-45 -translate-y-1.5"}`} />
    </button>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="absolute top-[90px] sm:top-[100px] left-0 w-full bg-[#141414] flex flex-col px-6 py-6 gap-4 lg:hidden">
      {navLinks.map((link) => (
        <button
          key={link.href}
          onClick={() => scrollTo(link.href)}
          className="text-white text-left border-b border-gray-700 pb-3"
        >
          {link.label}
        </button>
      ))}

      <button
        onClick={() => scrollTo("download")}
        className="bg-[#FFEE02] text-black py-3 rounded-lg font-bold"
      >
        Download App
      </button>
    </div>
  )}
</nav>

  );
}
