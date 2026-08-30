const groups = [
  { label: "// LANGUAGES", chips: [
    { t: "C / C++", h: "neo-blue" },
    { t: "Python", h: "neo-yellow" },
    { t: "Java", h: "neo-red" },
    { t: "JavaScript", h: "neo-orange" },
    { t: "SQL", h: "neo-purple" },
  ]},
  { label: "// AI / ML", chips: [
    { t: "Machine Learning", h: "neo-green" },
    { t: "Deep Learning", h: "neo-green" },
    { t: "Computer Vision", h: "neo-blue" },
    { t: "NLP", h: "neo-pink" },
    { t: "Generative AI", h: "neo-yellow" },
  ]},
  { label: "// FRAMEWORKS", chips: [
    { t: "TensorFlow", h: "neo-orange" },
    { t: "Keras", h: "neo-orange" },
    { t: "PyTorch", h: "neo-red" },
    { t: "ReactJS", h: "neo-blue" },
    { t: "Node.js", h: "neo-green" },
    { t: "Flutter", h: "neo-blue" },
  ]},
  { label: "// BACKEND / DATA", chips: [
    { t: "Firebase", h: "neo-orange" },
    { t: "SQL", h: "neo-blue" },
    { t: "REST APIs", h: "neo-pink" },
  ]},
  { label: "// TOOLS", chips: [
    { t: "Git", h: "white" },
    { t: "GitHub", h: "white" },
    { t: "VS Code", h: "neo-blue" },
    { t: "Google Colab", h: "neo-yellow" },
    { t: "Kaggle", h: "neo-blue" },
  ]},
];

const hoverClass: Record<string, string> = {
  "neo-blue": "hover:bg-neo-blue hover:text-black hover:border-black",
  "neo-yellow": "hover:bg-neo-yellow hover:text-black hover:border-black",
  "neo-green": "hover:bg-neo-green hover:text-black hover:border-black",
  "neo-red": "hover:bg-neo-red hover:text-black hover:border-black",
  "neo-pink": "hover:bg-neo-pink hover:text-black hover:border-black",
  "neo-purple": "hover:bg-neo-purple hover:text-black hover:border-black",
  "neo-orange": "hover:bg-neo-orange hover:text-black hover:border-black",
  "white": "hover:bg-white hover:text-black hover:border-black",
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter">TECH<span className="text-neo-green">_STACK</span></h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <p className="font-mono text-neo-green text-sm font-bold">/// SYSTEM_OPTIMIZED</p>
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.label} className="mb-8">
            <p className="font-mono text-neo-green text-xs font-bold tracking-widest uppercase mb-3">{g.label}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {g.chips.map((c) => (
                <div key={c.t} className={`bg-neo-black text-white px-4 py-2 border-2 border-white/20 font-mono font-bold ${hoverClass[c.h]} transition-all cursor-hover transform hover:-translate-y-1`}>{c.t}</div>
              ))}
            </div>
          </div>
        ))}

        <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-mono text-xs text-gray-500">
          <span>NODES: ACTIVE</span>
          <span>STATUS: ALL SYSTEMS GO</span>
        </div>
      </div>
    </section>
  );
}