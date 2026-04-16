import { useState, useEffect } from "react";
import { Menu, X, Fish } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#1B4F72] flex items-center justify-center shadow-md group-hover:bg-[#C8834A] transition-colors duration-300">
              <Fish className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span
                className={`block font-bold leading-none transition-colors duration-300 ${
                  scrolled ? "text-[#1B4F72]" : "text-white"
                }`}
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
              >
                Tipsy Tails
              </span>
              <span
                className={`block text-xs leading-none transition-colors duration-300 ${
                  scrolled ? "text-[#C8834A]" : "text-blue-200"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em" }}
              >
                RESTAURANT
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20 ${
                  scrolled
                    ? "text-[#1A252F] hover:text-[#1B4F72] hover:bg-blue-50"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+15068872190"
              className="ml-3 px-5 py-2 rounded-full bg-[#C8834A] text-white text-sm font-semibold hover:bg-[#b87340] transition-colors duration-300 shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1B4F72]" : "text-white"
            }`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/97 backdrop-blur-md border-t border-blue-100 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-[#1A252F] font-medium hover:bg-blue-50 hover:text-[#1B4F72] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+15068872190"
            className="block w-full text-center mt-3 px-5 py-3 rounded-xl bg-[#C8834A] text-white font-semibold hover:bg-[#b87340] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            📞 Call Now: +1 506-887-2190
          </a>
        </div>
      </div>
    </header>
  );
}
