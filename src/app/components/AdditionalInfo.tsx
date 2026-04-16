import { DollarSign, ShoppingBag, Utensils, Truck, Heart, Sun, Eye } from "lucide-react";

const infoCards = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Price Range",
    value: "$20 – $30",
    subtitle: "per person",
    detail: "Great value for fresh Atlantic seafood. Price may vary with seasonal specials.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Dine In",
    value: "Available",
    subtitle: "Indoor & Patio",
    detail: "Enjoy your meal inside our cozy restaurant or on the scenic harbour-view patio.",
    color: "from-[#1B4F72] to-[#154060]",
    bg: "bg-blue-50",
    textColor: "text-[#1B4F72]",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Takeaway",
    value: "Available",
    subtitle: "Pick-up only",
    detail: "Order your favourites to go. Call ahead for faster pickup service.",
    color: "from-[#C8834A] to-[#b87340]",
    bg: "bg-orange-50",
    textColor: "text-[#C8834A]",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Delivery",
    value: "Not Available",
    subtitle: "Dine-in & takeout only",
    detail: "We currently do not offer delivery. Visit us or call ahead to order for pickup.",
    color: "from-gray-400 to-gray-500",
    bg: "bg-gray-50",
    textColor: "text-gray-500",
  },
];

const features = [
  { icon: <Heart className="w-5 h-5" />, label: "LGBTQ+ Friendly", desc: "A welcoming space for everyone" },
  { icon: <Sun className="w-5 h-5" />, label: "Outdoor Patio", desc: "Relaxing al fresco dining" },
  { icon: <Eye className="w-5 h-5" />, label: "Harbour View Seating", desc: "Stunning waterfront vistas" },
  { icon: "🦞", label: "Fresh Seafood Daily", desc: "Sourced from local fishermen" },
  { icon: "♿", label: "Accessible", desc: "Wheelchair accessible venue" },
  { icon: "🐾", label: "Patio Pet Friendly", desc: "Well-behaved pets welcome on patio" },
];

export function AdditionalInfo() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8834A]" />
            <span
              className="text-[#C8834A] text-xs tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Good to Know
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
            Plan Your Visit
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          >
            Everything you need to know before your visit to Tipsy Tails Restaurant.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`bg-gradient-to-r ${card.color} p-5 text-white`}>
                <div className="flex items-center gap-3">
                  {card.icon}
                  <span
                    className="font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {card.title}
                  </span>
                </div>
                <div className="mt-3">
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {card.value}
                  </div>
                  <div
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {card.subtitle}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}
                >
                  {card.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features / Amenities */}
        <div>
          <h3
            className="text-center text-[#1A252F] mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600 }}
          >
            Restaurant Features & Amenities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#1B4F72]/30 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] flex items-center justify-center mb-3 group-hover:bg-[#1B4F72] group-hover:text-white transition-colors">
                  {typeof feature.icon === "string" ? (
                    <span className="text-xl">{feature.icon}</span>
                  ) : (
                    <span className="text-[#1B4F72] group-hover:text-white transition-colors">
                      {feature.icon}
                    </span>
                  )}
                </div>
                <span
                  className="text-[#1A252F] text-sm font-semibold mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.label}
                </span>
                <span
                  className="text-gray-400 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feature.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action banner */}
        <div className="mt-14 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4F72] via-[#1a4a6b] to-[#C8834A]/80" />
          <div className="relative z-10 px-8 py-10 sm:py-12 text-center text-white">
            <h3
              className="text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700 }}
            >
              Ready for a Harbour View Dining Experience?
            </h3>
            <p
              className="text-blue-100 mb-6 max-w-xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
            >
              Join us for fresh Atlantic seafood, stunning views, and memories that last a lifetime. 
              Walk in or call ahead — we'd love to welcome you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15068872190"
                className="px-8 py-3 rounded-full bg-white text-[#1B4F72] font-bold hover:bg-blue-50 transition-colors shadow-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                📞 +1 (506) 887-2190
              </a>
              <a
                href="https://www.google.com/maps/search/8607+Main+St,+Alma,+NB,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#C8834A] text-white font-bold hover:bg-[#b87340] transition-colors shadow-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                📍 8607 Main St, Alma, NB
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
