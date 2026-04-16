import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { MenuHighlights } from "./components/MenuHighlights";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Reviews />
        <Gallery />
        <Contact />
        <AdditionalInfo />
      </main>
      <Footer />
    </div>
  );
}