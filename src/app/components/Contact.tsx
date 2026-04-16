import { useRef, useEffect, useState } from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

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

const hours = [
  { day: "Monday – Thursday", time: "12:00 PM – 9:00 PM" },
  { day: "Friday – Saturday", time: "12:00 PM – 10:00 PM" },
  { day: "Sunday", time: "12:00 PM – 8:00 PM" },
];

export function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-10 bg-[#C8834A]" />
            <span
              className="text-[#C8834A] text-xs tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Find Us
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
            Visit Us in Alma
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          >
            Located on the waterfront in the charming village of Alma, New Brunswick — just steps from Fundy National Park.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Address */}
            <div className="flex gap-4 p-6 rounded-2xl bg-[#EBF5FB] mb-4 group hover:bg-[#daeaf5] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#1B4F72] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4
                  className="text-[#1A252F] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem" }}
                >
                  Our Location
                </h4>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  8607 Main St, Alma, NB E4H 1N1<br />
                  <span className="text-gray-400 text-sm">New Brunswick, Canada</span>
                </p>
                <a
                  href="https://www.google.com/maps/search/8607+Main+St,+Alma,+NB,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#1B4F72] text-sm font-medium mt-2 hover:text-[#C8834A] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Get Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-6 rounded-2xl bg-[#EBF5FB] mb-4 group hover:bg-[#daeaf5] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C8834A] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4
                  className="text-[#1A252F] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem" }}
                >
                  Call Us
                </h4>
                <a
                  href="tel:+15068872190"
                  className="text-gray-600 hover:text-[#C8834A] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  +1 (506) 887-2190
                </a>
                <p
                  className="text-gray-400 text-sm mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Call to reserve a table or inquire
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 p-6 rounded-2xl bg-[#EBF5FB] group hover:bg-[#daeaf5] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="w-full">
                <h4
                  className="text-[#1A252F] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem" }}
                >
                  Opening Hours
                </h4>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between gap-4">
                      <span
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {h.day}
                      </span>
                      <span
                        className="text-[#1B4F72] text-sm font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span
                    className="text-emerald-700 text-xs font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Opens at 12:00 PM daily
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                title="Tipsy Tails Restaurant Location"
                src="https://maps.google.com/maps?q=8607+Main+St,+Alma,+NB,+Canada&output=embed&z=15"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.google.com/maps/search/8607+Main+St,+Alma,+NB,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-5 py-3 rounded-xl bg-[#1B4F72] text-white font-semibold hover:bg-[#154060] transition-colors shadow-md"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                📍 Open in Google Maps
              </a>
              <a
                href="tel:+15068872190"
                className="flex-1 text-center px-5 py-3 rounded-xl bg-[#C8834A] text-white font-semibold hover:bg-[#b87340] transition-colors shadow-md"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
