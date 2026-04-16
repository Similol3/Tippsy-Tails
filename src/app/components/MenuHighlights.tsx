import { useRef, useEffect, useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Lobster Roll",
    description: "Generous chunks of fresh Atlantic lobster tossed in light mayo, nestled in a toasted brioche bun with crisp lettuce.",
    price: "$28",
    category: "Signatures",
    image: "https://images.unsplash.com/photo-1666380510734-c81855f0afdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "Fan Favourite",
  },
  {
    name: "Seafood Chowder",
    description: "Rich, creamy Atlantic chowder loaded with clams, shrimp, scallops, and fresh fish. Served with warm crusty bread.",
    price: "$22",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1560684352-8497838a2229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "Must Try",
  },
  {
    name: "Fish & Chips",
    description: "Classic golden-battered fresh fish fillet served with hand-cut fries, house tartar sauce, and a wedge of lemon.",
    price: "$24",
    category: "Classics",
    image: "https://images.unsplash.com/photo-1764397557799-258db31fe6a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Lobster Poutine",
    description: "A Maritime twist on a Canadian classic. Crispy fries topped with real cheese curds, rich gravy, and fresh lobster.",
    price: "$26",
    category: "Signatures",
    image: "https://images.unsplash.com/photo-1585460379355-de1c92466a17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "House Special",
  },
  {
    name: "Lobster Mac & Cheese",
    description: "Comfort food elevated — creamy, rich mac & cheese loaded with fresh lobster and topped with a golden breadcrumb crust.",
    price: "$27",
    category: "Signatures",
    image: "https://images.unsplash.com/photo-1770351203577-501cf0b074f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Fried Green Tomatoes",
    description: "Southern-inspired crispy fried green tomatoes served with a zesty remoulade dipping sauce — a delightful starter.",
    price: "$16",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1767974963436-2208b3553561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Steamed Mussels",
    description: "Fresh PEI mussels steamed in white wine, garlic, and herbs, served with grilled bread to soak up the delicious broth.",
    price: "$23",
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1775498011193-be0746a0e2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "Chef's Pick",
  },
  {
    name: "Pan-Seared Scallops",
    description: "Beautifully seared Atlantic scallops on a bed of butternut squash purée, finished with crispy capers and herb oil.",
    price: "$29",
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1581073759002-70a0a2044072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    badge: "Premium",
  },
  {
    name: "Local Craft Beer & Drinks",
    description: "A curated selection of New Brunswick craft beers, local wines, refreshing ciders, and non-alcoholic options.",
    price: "From $7",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1690483708358-644b6c20d5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

const categories = ["All", "Signatures", "Seafood", "Starters", "Classics", "Drinks"];

const badgeColors: Record<string, string> = {
  "Fan Favourite": "bg-[#C8834A] text-white",
  "Must Try": "bg-[#1B4F72] text-white",
  "House Special": "bg-emerald-600 text-white",
  "Chef's Pick": "bg-purple-600 text-white",
  "Premium": "bg-amber-500 text-white",
};

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

export function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView(0.05);

  const filtered = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#F0F8FF]" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #e8f4f8 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8834A]" />
            <span
              className="text-[#C8834A] text-xs tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Menu
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
            Menu Highlights
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          >
            Crafted with the freshest Atlantic ingredients — every dish a celebration of the sea.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1B4F72] text-white shadow-lg shadow-blue-900/20"
                  : "bg-white text-gray-600 hover:bg-[#EBF5FB] hover:text-[#1B4F72] border border-gray-100"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category pill */}
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#1B4F72] text-xs font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.category}
                </span>
                {/* Badge */}
                {item.badge && (
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[item.badge] || "bg-gray-600 text-white"}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-[#1A252F] flex-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-[#C8834A] font-bold shrink-0"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p
            className="text-gray-500 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore our full menu — seasonal specials available daily
          </p>
          <a
            href="tel:+15068872190"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#1B4F72] text-white font-semibold hover:bg-[#154060] transition-colors shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            📞 Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
