import { Fish, MapPin, Phone, Clock, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D1F2D] text-white">
      {/* Wave top */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 50" className="w-full" preserveAspectRatio="none" style={{ height: "50px" }}>
          <path
            d="M0,25 C480,60 960,0 1440,25 L1440,0 L0,0 Z"
            fill="#F8FBFF"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C8834A] flex items-center justify-center">
                <Fish className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <span
                  className="block text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700 }}
                >
                  Tipsy Tails
                </span>
                <span
                  className="block text-[#C8834A]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  RESTAURANT
                </span>
              </div>
            </div>
            <p
              className="text-gray-400 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.75 }}
            >
              Fresh Atlantic Seafood with a Harbour View Experience. Alma's premier seafood destination since day one.
            </p>
            <div className="flex gap-2">
              {["🦞", "🐟", "🌊", "🍽️"].map((emoji) => (
                <span
                  key={emoji}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-lg hover:bg-[#C8834A]/20 transition-colors cursor-default"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-5 pb-2 border-b border-white/10"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-[#C8834A] transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8834A] group-hover:scale-150 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-white mb-5 pb-2 border-b border-white/10"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#C8834A] shrink-0 mt-0.5" />
                <div>
                  <p
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    8607 Main St, Alma, NB
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    New Brunswick, Canada
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-[#C8834A] shrink-0" />
                <a
                  href="tel:+15068872190"
                  className="text-gray-300 text-sm hover:text-[#C8834A] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  +1 (506) 887-2190
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-[#C8834A] shrink-0 mt-0.5" />
                <div>
                  <p
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Opens Daily at 12:00 PM
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Mon–Sat until 9–10 PM · Sun until 8 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4
              className="text-white mb-5 pb-2 border-b border-white/10"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Good to Know
            </h4>
            <div className="space-y-2.5">
              {[
                { icon: "💰", text: "Price: $20–$30 per person" },
                { icon: "🍽️", text: "Dine-in & Takeaway" },
                { icon: "🚗", text: "No delivery service" },
                { icon: "🌈", text: "LGBTQ+ friendly" },
                { icon: "🌅", text: "Outdoor harbour patio" },
                { icon: "🎣", text: "Fresh local catch daily" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex gap-2 items-center"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Tipsy Tails Restaurant. All rights reserved.
          </p>
          <p
            className="text-gray-600 text-sm flex items-center gap-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Made with <Heart className="w-3 h-3 text-[#C8834A] fill-[#C8834A]" /> in Alma, New Brunswick
          </p>
        </div>
      </div>
    </footer>
  );
}
