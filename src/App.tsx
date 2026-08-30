import { useEffect, useState } from "react";
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
import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { ProgressBar } from "./components/ProgressBar";

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, input, textarea, .cursor-hover")) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, input, textarea, .cursor-hover")) setHover(false);
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

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
    <div className="text-neo-black font-display antialiased selection:bg-neo-black selection:text-neo-yellow">
      <Cursor x={cursorPos.x} y={cursorPos.y} hover={hover} />
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
  );
}