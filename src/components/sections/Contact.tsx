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
            <div className="md:col-span-4 md:-ml-4 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-3 leading-tight">
                Let's<br />build<br />something.
              </h3>
              <p className="font-mono text-sm mb-6 text-gray-700">
                Open to research collaborations, internships, and engineering roles.
              </p>
              <div className="space-y-3 font-mono text-sm font-bold inline-block text-left">
                <a
                  href="mailto:jay20gopal@gmail.com"
                  className="flex items-center gap-3 hover:text-neo-blue transition-colors group"
                >
                  <div className="w-9 h-9 bg-black text-white flex items-center justify-center group-hover:bg-neo-blue group-hover:text-black transition-colors shrink-0">
                    <i className="ri-mail-send-line" />
                  </div>
                  <span className="truncate">jay20gopal@gmail.com</span>
                </a>
                <a
                  href="tel:+919437342042"
                  className="flex items-center gap-3 hover:text-neo-green transition-colors group"
                >
                  <div className="w-9 h-9 bg-black text-white flex items-center justify-center group-hover:bg-neo-green group-hover:text-black transition-colors shrink-0">
                    <i className="ri-phone-line" />
                  </div>
                  <span>+91-9437342042</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-black text-white flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-line" />
                  </div>
                  <span>Chennai, IN · Remote</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 -mr-4 flex items-end justify-end" style={{ minHeight: "440px" }}>
              <div className="w-full max-w-[640px] translate-y-4" style={{ height: "420px" }}>
                <TypingKeyboard
                  autoTypeText="Hi Jay — open to research, internships, and engineering roles. Drop me a message.       "
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