import { TypingKeyboard } from "../ui/typing-keyboard";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute -top-4 -left-4 bg-neo-yellow border-4 border-black px-4 py-2 font-black transform -rotate-2 z-10">
          SAY HELLO
        </div>

        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-hard-xl relative">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-black pb-3">
            <span className="font-mono font-bold text-xs uppercase tracking-wider">/// Type_to_Transmit</span>
            <span className="ml-auto font-mono text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 bg-neo-green rounded-full animate-pulse" />
              LIVE
            </span>
          </div>

          <div className="w-full" style={{ height: "520px" }}>
            <TypingKeyboard
              autoTypeText="Hi Jay — open to research, internships, and engineering roles. Drop me a message.       "
              accentColor="#3b82f6"
              secondaryAccent="#a855f7"
              scale={0.85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}