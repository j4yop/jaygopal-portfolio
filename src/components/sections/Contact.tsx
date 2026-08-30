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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 md:-ml-4 text-left">
              <h3 className="text-5xl md:text-6xl font-black uppercase mb-5 leading-[1.05]">
                Let's<br />build<br />something.
              </h3>
              <p className="font-mono text-lg mb-10 text-gray-700 leading-relaxed">
                Open to research collaborations, internships, and engineering roles.
              </p>
              <div className="space-y-5 font-mono text-lg font-bold inline-block text-left">
                <a
                  href="mailto:jay20gopal@gmail.com"
                  className="flex items-center gap-4 hover:text-neo-blue transition-colors group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-neo-blue group-hover:text-black transition-colors shrink-0">
                    <i className="ri-mail-send-line text-xl" />
                  </div>
                  <span className="truncate">jay20gopal@gmail.com</span>
                </a>
                <a
                  href="tel:+919437342042"
                  className="flex items-center gap-4 hover:text-neo-green transition-colors group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-neo-green group-hover:text-black transition-colors shrink-0">
                    <i className="ri-phone-line text-xl" />
                  </div>
                  <span>+91-9437342042</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-line text-xl" />
                  </div>
                  <span>Chennai, IN · Remote</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 -mr-4 flex items-end justify-end pb-8" style={{ minHeight: "520px" }}>
              <div className="w-full max-w-[640px] translate-y-12" style={{ height: "440px" }}>
                <TypingKeyboard
                  autoTypeText="Hi  — open to research, internships, and engineering roles. Drop me a message.       "
                  accentColor="#3b82f6"
                  secondaryAccent="#a855f7"
                  scale={0.8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}