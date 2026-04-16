import { useRef, useEffect, useState } from "react";
import { Waves, Star, Clock, Users } from "lucide-react";

const INTERIOR_IMAGE =
  "https://images.unsplash.com/photo-1758561087076-e647b2e2485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwY296eSUyMHdvb2RlbnxlbnwxfHx8fDE3NzYyODgzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const PATIO_IMAGE =
  "https://images.unsplash.com/photo-1773609359038-80282b8ca318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJib3VyJTIwdmlldyUyMHJlc3RhdXJhbnQlMjBwYXRpbyUyMG9jZWFufGVufDF8fHx8MTc3NjI4ODMzOHww&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  {
    icon: "🦞",
    title: "Fresh Atlantic Seafood",
    desc: "Sourced daily from local fishermen — lobster, scallops, mussels, and more, as fresh as the ocean breeze.",
  },
  {
    icon: "🌊",
    title: "Scenic Harbour Views",
    desc: "Dine on our relaxing patio or inside while soaking in breathtaking views of Alma's picturesque harbour.",
  },
  {
    icon: "😊",
    title: "Warm Friendly Service",
    desc: "Our team treats every guest like family, ensuring a welcoming, memorable experience from first bite to last.",
  },
  {
    icon: "🍽️",
    title: "Generous Portions",
    desc: "Big, bold flavors and hearty portions that keep locals coming back and tourists raving about the food.",
  },
];

const stats = [
  { icon: <Star className="w-5 h-5" />, value: "4.8★", label: "Rating" },
  { icon: <Clock className="w-5 h-5" />, value: "12PM+", label: "Open Daily" },
  { icon: <Users className="w-5 h-5" />, value: "1000s", label: "Happy Guests" },
  { icon: <Waves className="w-5 h-5" />, value: "100%", label: "Fresh Catch" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8834A]" />
            <span
              className="text-[#C8834A] text-xs tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Story
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
            A Taste of the Atlantic,<br />
            <span style={{ color: "#1B4F72" }}>Right on the Harbour</span>
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          >
            Where every dish tells the story of the sea and every seat has a view worth remembering.
          </p>
        </div>

        {/* Main Content Grid */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Images */}
          <div
            className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/15 aspect-[4/3]">
                <img
                  src={INTERIOR_IMAGE}
                  alt="Tipsy Tails Restaurant interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating secondary image */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-48 aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={PATIO_IMAGE}
                  alt="Harbour view patio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#EBF5FB] -z-10" />
              <div className="absolute -bottom-10 left-1/4 w-16 h-16 rounded-full bg-[#F5CBA7]/40 -z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <p
              className="text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Nestled in the charming coastal village of Alma, New Brunswick, <strong className="text-[#1B4F72]">Tipsy Tails Restaurant</strong> is a celebrated seafood destination where the catch of the day meets coastal hospitality at its finest.
            </p>
            <p
              className="text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Whether you're savoring our legendary lobster rolls, warming up with a rich seafood chowder, or sharing a bucket of mussels on the patio overlooking the water — every meal here is an experience. We pride ourselves on generous portions, bold flavors, and a vibe that feels like home by the sea.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-xl bg-[#EBF5FB] hover:bg-[#d4eaf7] transition-colors group"
                >
                  <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <h4
                      className="text-[#1A252F] mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#1B4F72] to-[#154060] text-white shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-2 text-[#F5CBA7]">{stat.icon}</div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-blue-200 text-xs tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
