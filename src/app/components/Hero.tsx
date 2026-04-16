import { useEffect, useRef } from "react";
import { ChevronDown, Phone, Map, UtensilsCrossed } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1776000513887-1b356a9ec301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGxhbnRpYyUyMHNlYWZvb2QlMjBoYXJib3VyJTIwcmVzdGF1cmFudCUyMGNvYXN0YWx8ZW58MXx8fHwxNzc2Mjg4MzM3fDA&ixlib=rb-4.1.0&q=80&w=1920";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleParallax, { passive: true });
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <img
          src={HERO_IMAGE}
          alt="Tipsy Tails Restaurant harbour view"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f35]/75 via-[#0a1f35]/55 to-[#0a1f35]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f35]/30 via-transparent to-[#0a1f35]/20" />
      </div>

      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" style={{ height: "80px" }}>
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
            fill="white"
            opacity="0.12"
          />
          <path
            d="M0,55 C300,20 600,75 900,50 C1100,35 1300,65 1440,55 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#C8834A] animate-pulse" />
          <span
            className="text-xs tracking-widest uppercase text-blue-100"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Alma, New Brunswick · Canada
          </span>
        </div>

        {/* Title */}
        <h1
          className="mb-4 text-white drop-shadow-2xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Tipsy Tails
          <br />
          <span style={{ color: "#F5CBA7" }}>Restaurant</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8834A]" />
          <span className="text-[#F5CBA7] text-xl">🦞</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8834A]" />
        </div>

        {/* Tagline */}
        <p
          className="mb-10 text-blue-100 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
          Fresh Atlantic Seafood with a Harbour View Experience
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll("#menu")}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8834A] text-white font-semibold hover:bg-[#b87340] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <UtensilsCrossed className="w-4 h-4" />
            View Menu
          </button>
          <a
            href="tel:+15068872190"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold hover:bg-white/25 transition-all duration-300 w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="https://www.google.com/maps/search/8607+Main+St,+Alma,+NB,+Canada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold hover:bg-white/25 transition-all duration-300 w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Map className="w-4 h-4" />
            Get Directions
          </a>
        </div>

        {/* Rating badges */}
        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <span className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Highly Rated
            </span>
          </div>
          <div className="w-px h-4 bg-white/30" />
          <span className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            🌊 Harbour View Seating
          </span>
          <div className="w-px h-4 bg-white/30" />
          <span className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            🦞 Fresh Atlantic Seafood
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
