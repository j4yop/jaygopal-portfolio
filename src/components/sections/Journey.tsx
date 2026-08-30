type Entry = {
  title: string;
  year?: string;
  org: string;
  orgColor: string;
  dot: string;
  pulse?: boolean;
  bullets?: string[];
  paragraph?: string;
};

const entries: Entry[] = [
  {
    title: "Researching",
    year: "NOW — PRESENT",
    org: "CSE DEPT, VIT CHENNAI",
    orgColor: "text-neo-pink",
    dot: "bg-neo-pink",
    pulse: true,
    bullets: [
      "Developing D8FN — a physics-informed deep learning framework combining CNN-based segmentation with terrain-aware routing for SAR flood mapping.",
      "Designed a UNet-based architecture with D8 flow routing, DEM, HAND, and terrain features to improve hydrological consistency on multi-event flood datasets.",
    ],
  },
  {
    title: "Lead Architect — Smart Community Health Monitoring",
    year: "2025",
    org: "SMART INDIA HACKATHON",
    orgColor: "text-neo-red",
    dot: "bg-neo-red",
    bullets: [
      "Led a team of 6 to build an AI-based healthcare monitoring system for early detection of water-borne diseases",
      "Designed backend with Node.js + Firebase for real-time health data processing and analytics",
      "Shipped dashboards + sensor integrations",
    ],
  },
  {
    title: "Eureka! Junior Finalist",
    year: "2022",
    org: "E-CELL IIT BOMBAY",
    orgColor: "text-neo-blue",
    dot: "bg-neo-yellow",
    paragraph: "Top-10 finalist at Eureka! Junior 2022 — one of India's premier student entrepreneurship competitions for school-level innovators.",
  },
  {
    title: "Atal Innovation Marathon — Top 250",
    year: "2019",
    org: "ATAL INNOVATION MISSION",
    orgColor: "text-neo-purple",
    dot: "bg-neo-purple",
    paragraph: "Selected among the Top-250 projects in the Healthcare Category at the Atal Innovation Marathon — a national hunt for school and college innovators.",
  },
];

export function Journey() {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center">Journey<span className="text-neo-green">_Log</span></h2>
      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
        {entries.map((e) => (
          <div key={e.title} className="reveal relative pl-8 md:pl-16">
            <div className={`absolute -left-[14px] top-2 w-6 h-6 ${e.dot} border-4 border-black ${e.pulse ? "animate-pulse" : ""}`}></div>
            <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                <h3 className="text-3xl font-black uppercase">{e.title}</h3>
                {e.year && <span className={`font-mono font-bold ${e.year.includes("NOW") ? "bg-neo-green text-black" : "bg-neo-black text-white"} px-2 py-1`}>{e.year}</span>}
              </div>
              <p className={`font-mono text-xl mb-2 ${e.orgColor} font-bold`}>@ {e.org}</p>
              {e.paragraph ? (
                <p className="font-mono text-gray-700">{e.paragraph}</p>
              ) : (
                <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                  {e.bullets!.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}