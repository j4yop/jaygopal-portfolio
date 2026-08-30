export function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 reveal">
          <div className="aspect-square bg-gray-200 border-4 border-black relative shadow-hard overflow-hidden group">
            <img src="/images/avatar.svg" alt="Jay Gopal Tripathy" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" />
            <span className="absolute top-2 left-2 bg-neo-red text-white px-2 font-mono text-xs border border-black z-10">AVATAR.JPG</span>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col justify-center reveal">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-none">WHO AM I?</h2>
          <div className="space-y-6 font-mono text-xl md:text-2xl leading-relaxed mb-8">
            <p>
              I'm <span className="bg-neo-yellow font-bold px-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Jay Gopal Tripathy</span>,
              a CS undergrad (AI & Robotics) at VIT Chennai.
            </p>
            <p>
              I work at the intersection of <span className="bg-neo-red text-white px-1 font-bold">applied machine learning</span>
              and <span className="bg-neo-green px-1 font-bold">engineering reality</span> — multi-agent systems for motorsport analytics,
              on-device LLMs for disaster response, physics-informed segmentation for satellite flood mapping.
            </p>
          </div>

          <div className="bg-black text-white p-6 border-4 border-neo-green shadow-hard mb-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="font-bold font-mono text-neo-green mb-2">/// CURRENT_FOCUS</p>
            <p className="text-lg">
              Multi-agent AI · On-device LLMs (Gemma) · Computer Vision · Speech Emotion Analysis · Causal Inference · UNet · D8 flow routing · DEM · HAND.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm font-bold">
            <div className="bg-white border-2 border-black p-3 hover:bg-neo-blue hover:text-white transition-colors">{">"}AI_RESEARCHER</div>
            <div className="bg-white border-2 border-black p-3 hover:bg-neo-pink hover:text-white transition-colors">{">"}ML_LEARNER</div>
            <div className="bg-white border-2 border-black p-3 hover:bg-neo-yellow hover:text-black transition-colors">{">"}ROBOTICS_TRACK</div>
            <div className="bg-white border-2 border-black p-3 hover:bg-neo-green hover:text-black transition-colors">{">"}3RD_YEAR_UNDERGRAD</div>
          </div>
        </div>
      </div>
    </section>
  );
}