import { useRef, useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1776000513887-1b356a9ec301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Fresh Atlantic seafood at Tipsy Tails",
    label: "Fresh Catch",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1666380510734-c81855f0afdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Signature Lobster Roll",
    label: "Lobster Roll",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1773609359038-80282b8ca318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Harbour patio view",
    label: "Harbour View",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1758561087076-e647b2e2485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Restaurant interior",
    label: "Our Interior",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1623547307792-88834597b794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Alma harbour dock",
    label: "Alma Harbour",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1766547325390-44833aa5675b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Ocean view dining",
    label: "Ocean Dining",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1775498011193-be0746a0e2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Fresh mussels",
    label: "Fresh Mussels",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581073759002-70a0a2044072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Pan-seared scallops",
    label: "Scallops",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1560684352-8497838a2229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Rich seafood chowder",
    label: "Seafood Chowder",
    span: "",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Gallery() {
  const { ref, inView } = useInView(0.05);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#EBF5FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8834A]" />
            <span
              className="text-[#C8834A] text-xs tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Gallery
            </span>
            <div className="h-px w-10 bg-[#C8834A]" />
          </div>
          <h2
            className="text-[#1A252F] mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            A Feast for the Eyes
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          >
            From stunning harbour views to beautifully plated dishes — taste the Tipsy Tails experience.
          </p>
        </div>

        {/* Masonry-style Grid (Desktop) */}
        <div ref={ref} className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 auto-rows-[200px]">
          {galleryImages.slice(0, 9).map((img, i) => (
            <div
              key={img.alt}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span || ""} ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } transition-all duration-700`}
              style={{ transitionDelay: `${i * 70}ms` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f35]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {img.label}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.alt}
              className={`relative overflow-hidden rounded-xl cursor-pointer group aspect-square ${
                i === 0 ? "col-span-2 aspect-video" : ""
              } ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"} transition-all duration-500`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span
                className="absolute bottom-2 left-2 text-white text-xs font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox.replace("w=600", "w=1200")}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
