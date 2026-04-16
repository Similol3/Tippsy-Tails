import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Moncton, NB",
    rating: 5,
    review:
      "Great location, tasty food, and friendly service. The seafood chowder was rich and full of flavor — absolutely amazing. We sat on the patio with a stunning harbour view and it was truly unforgettable.",
    avatar: "SM",
    avatarColor: "bg-[#1B4F72]",
    date: "March 2025",
  },
  {
    name: "James T.",
    location: "Halifax, NS",
    rating: 5,
    review:
      "We loved the lobster roll and fish & chips. Portions were generous and everything tasted incredibly fresh. You can really tell they care about quality. Will definitely be back next summer!",
    avatar: "JT",
    avatarColor: "bg-[#C8834A]",
    date: "July 2024",
  },
  {
    name: "Emily R.",
    location: "Toronto, ON",
    rating: 5,
    review:
      "Amazing patio with a beautiful harbour view. Perfect place to relax and enjoy fresh seafood. The lobster mac & cheese was out of this world. Friendly staff and a truly coastal vibe.",
    avatar: "ER",
    avatarColor: "bg-emerald-600",
    date: "August 2024",
  },
  {
    name: "Michael L.",
    location: "Fredericton, NB",
    rating: 5,
    review:
      "The mussels and scallops were cooked to perfection. Service was warm and attentive. The restaurant has a relaxed coastal atmosphere that makes you want to stay all afternoon. Highly recommend!",
    avatar: "ML",
    avatarColor: "bg-purple-600",
    date: "September 2024",
  },
  {
    name: "Anna K.",
    location: "Charlottetown, PEI",
    rating: 5,
    review:
      "Stopped here on a road trip through NB and it was the highlight of the whole trip! Lobster poutine was absolutely incredible — never had anything like it. The harbour view is stunning too.",
    avatar: "AK",
    avatarColor: "bg-rose-600",
    date: "October 2024",
  },
  {
    name: "David P.",
    location: "Saint John, NB",
    rating: 5,
    review:
      "We come here every summer and it never disappoints. Fresh seafood, huge portions, great prices and the staff always remembers us. Tipsy Tails is a true New Brunswick gem!",
    avatar: "DP",
    avatarColor: "bg-amber-600",
    date: "June 2024",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-200"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

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

export function Reviews() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8834A]" />
            <span
              className="text-[#C8834A] text-xs tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Guest Reviews
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
            What Our Guests Are Saying
          </h2>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-4 mt-4 px-8 py-4 rounded-2xl bg-[#EBF5FB]">
            <div>
              <div
                className="text-5xl font-bold text-[#1B4F72]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                4.8
              </div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-blue-200" />
            <div className="text-left">
              <div
                className="text-[#1A252F] font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Exceptional
              </div>
              <div
                className="text-gray-500 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Based on 200+ reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-[#EBF5FB]">
                <Quote className="w-8 h-8" fill="currentColor" />
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p
                className="text-gray-600 mt-3 mb-5 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.75, fontSize: "0.95rem" }}
              >
                "{review.review}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div
                  className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div
                    className="text-[#1A252F] font-semibold text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {review.name}
                  </div>
                  <div
                    className="text-gray-400 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {review.location} · {review.date}
                  </div>
                </div>
                <div className="ml-auto">
                  <div
                    className="text-xs text-[#1B4F72] bg-[#EBF5FB] px-2 py-1 rounded-full"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review CTA */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#1B4F72] to-[#154060] text-white">
          <h3
            className="text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600 }}
          >
            Join Hundreds of Happy Diners
          </h3>
          <p
            className="text-blue-200 mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience fresh Atlantic seafood with a breathtaking harbour view
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15068872190"
              className="px-8 py-3 rounded-full bg-[#C8834A] text-white font-semibold hover:bg-[#b87340] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Make a Reservation
            </a>
            <a
              href="https://www.google.com/maps/search/Tipsy+Tails+Restaurant+Alma+NB"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
