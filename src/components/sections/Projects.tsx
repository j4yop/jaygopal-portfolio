type Project = {
  name: string;
  desc: string;
  tags: string[];
  img: string;
  imgAlt: string;
  live?: string;
  repo?: string;
  hover: string;
  delay?: boolean;
  badge?: string;
  badgeColor?: string;
  badgeIcon?: string;
};

const projects: Project[] = [
  {
    name: "PitwallEar",
    desc: "Multi-agent AI that analyzes F1 radio comms to surface driver emotional state & early performance-degradation signals. Speech-emotion + causal inference.",
    tags: ["Multi-Agent AI", "Speech Emotion", "Causal Inference", "TypeScript"],
    img: `${import.meta.env.BASE_URL}images/pitwallear.svg`,
    imgAlt: "PitwallEar — F1 radio driver stress analysis",
    live: "https://pitwallear.onrender.com",
    repo: "https://github.com/j4yop/PitwallEar",
    hover: "group-hover:text-neo-red",
  },
  {
    name: "RescueMesh",
    desc: "Offline AI disaster-response platform: P2P mesh networking + on-device Gemma 4 with multimodal (text/voice/image) + offline RAG for emergency knowledge.",
    tags: ["Gemma 4", "Flutter", "Mesh P2P", "Offline RAG"],
    img: `${import.meta.env.BASE_URL}images/rescuemesh.svg`,
    imgAlt: "RescueMesh — Offline AI disaster response mesh",
    repo: "https://github.com/j4yop/RescueMesh",
    hover: "group-hover:text-neo-green",
    delay: true,
  },
  {
    name: "D8FN",
    desc: "Differentiable D8 flow routing with physics constraints for SAR flood mapping. UNet + DEM/HAND/terrain features for hydrologically consistent segmentation.",
    tags: ["UNet", "D8 Routing", "DEM / HAND", "SAR"],
    img: `${import.meta.env.BASE_URL}images/d8fn.svg`,
    imgAlt: "D8FN — Physics-informed SAR flood mapping",
    hover: "group-hover:text-neo-purple",
    badge: "ONGOING",
    badgeColor: "bg-neo-purple",
    badgeIcon: "ri-flask-line",
  },
  {
    name: "SCHM · SIH'25",
    desc: "AI-based community health monitoring for early detection of water-borne diseases. Sprint, team of 6, end-to-end dashboards + sensor integrations.",
    tags: ["Node.js", "Firebase", "Healthcare AI"],
    img: `${import.meta.env.BASE_URL}images/sih.svg`,
    imgAlt: "SIH 2025 — Smart Community Health Monitoring",
    hover: "group-hover:text-neo-blue",
    delay: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p) => (
            <article key={p.name} className={`reveal group bg-white border-4 border-black p-4 shadow-hard ${p.delay ? "mt-0 md:mt-20" : ""}`}>
              <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
                <img src={p.img} alt={p.imgAlt} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-3xl font-black uppercase mb-2 transition-colors glitch-hover ${p.hover}`}>
                    {p.name}{p.badge && <span className="font-mono text-sm text-gray-500 ml-2">[{p.badge}]</span>}
                  </h3>
                  <p className="font-mono text-sm mb-4 max-w-xs">{p.desc}</p>
                  <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                    {p.tags.map((t) => <span key={t} className="bg-neo-black text-white px-2 py-1">{t}</span>)}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="w-12 h-12 border-2 border-black bg-neo-black text-white flex items-center justify-center hover:bg-neo-white hover:text-black transition-all cursor-hover shadow-hard-sm" title="Live Demo">
                      <i className="ri-eye-line text-2xl"></i>
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="w-12 h-12 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm" title="View Code">
                      <i className="ri-github-fill text-2xl"></i>
                    </a>
                  )}
                  {p.badgeIcon && (
                    <a href="#projects" className={`w-12 h-12 border-2 border-black ${p.badgeColor} text-white flex items-center justify-center hover:bg-neo-black transition-all cursor-hover shadow-hard-sm`} title="Research in progress">
                      <i className={`${p.badgeIcon} text-2xl`}></i>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-24">
          <a href="https://github.com/j4yop?tab=repositories" className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-mono text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none cursor-hover">VIEW ALL REPOS ON GITHUB</a>
        </div>
      </div>
    </section>
  );
}