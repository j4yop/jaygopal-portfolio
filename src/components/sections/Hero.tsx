import type { ComponentType } from "react";

export function Hero({ glitch: Glitch }: { glitch: ComponentType<any> }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black">
      <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12"></div>
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse"></div>
      <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">AI</div>

      <div className="relative z-10 text-center max-w-5xl">
        <div className="inline-block bg-neo-white border-2 border-black px-4 py-1 mb-6 shadow-hard rotate-[-2deg] reveal">
          <span className="font-mono font-bold text-neo-green bg-black px-2 mr-2">●</span>
          <span className="font-mono font-bold">SYSTEM STATUS: SHIPPING</span>
        </div>

        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] font-black uppercase tracking-tighter mb-6 reveal mix-blend-darken">
          JAY GOPAL<br />
          <span className="text-white text-stroke-black">TRIPATHY</span>
        </h1>

        <p className="font-mono text-lg md:text-2xl max-w-3xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard reveal rotate-1">
          AI engineer building systems that work in the wild —{" "}
          <br />
          <Glitch className="font-bold text-neo-black" dur={1200}>
            multi-agent reasoning · on-device LLMs · physics-informed DL
          </Glitch>
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 reveal">
          <a
            href="#projects"
            className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="bg-neo-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-pink hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}