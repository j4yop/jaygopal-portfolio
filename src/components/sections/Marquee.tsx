export function Marquee() {
  const text = "/// VIT CHENNAI · AI & ROBOTICS /// PITWALLEAR /// RESCUEMESH /// D8FN FLOOD MAPPING /// OPEN TO RESEARCH & ENGINEERING ROLES /// MACHINE LEARNING /// COMPUTER VISION /// ON-DEVICE LLMs /// ";
  return (
    <div className="border-b-4 border-black bg-neo-blue py-3 relative z-20">
      <div className="marquee-container font-mono font-bold text-2xl text-white">
        <div className="marquee-content">
          <span>{text}{text}</span>
        </div>
      </div>
    </div>
  );
}