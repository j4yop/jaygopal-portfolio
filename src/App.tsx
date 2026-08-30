import { useEffect } from "react";
import { AsciiGlitchRipple } from "./components/ui/ascii-glitch-ripple";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Journey } from "./components/sections/Journey";
import { GitHubStats } from "./components/sections/GitHubStats";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Nav } from "./components/Nav";
import { ProgressBar } from "./components/ProgressBar";
import { MagneticCursor } from "./components/ui/magnetic-cursor";

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <MagneticCursor cursorSize={28} cursorColor="#FFFDF5">
      <div className="text-neo-black font-display antialiased selection:bg-neo-black selection:text-neo-yellow">
        <ProgressBar />
        <Nav />

        <Hero glitch={AsciiGlitchRipple} />
        <Marquee />
        <About />
        <Skills />
        <Journey />
        <GitHubStats />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </MagneticCursor>
  );
}