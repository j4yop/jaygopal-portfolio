import { TypingKeyboard } from "../ui/typing-keyboard";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute -top-4 -left-4 bg-neo-yellow border-4 border-black px-4 py-2 font-black transform -rotate-2 z-10">
          SAY HELLO
        </div>

        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-hard-xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-none">
                LET'S<br />TALK<br />AI.
              </h2>
              <p className="font-mono text-lg mb-8 text-gray-700">
                Open to research collaborations, internships, and engineering roles.
              </p>
              <div className="space-y-4 font-mono font-bold">
                <a
                  href="mailto:jay20gopal@gmail.com"
                  className="flex items-center gap-3 hover:text-neo-blue transition-colors group"
                >
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center group-hover:bg-neo-blue group-hover:text-black transition-colors">
                    <i className="ri-mail-send-line text-lg" />
                  </div>
                  <span className="text-sm md:text-base">jay20gopal@gmail.com</span>
                </a>
                <a
                  href="tel:+919437342042"
                  className="flex items-center gap-3 hover:text-neo-green transition-colors group"
                >
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center group-hover:bg-neo-green group-hover:text-black transition-colors">
                    <i className="ri-phone-line text-lg" />
                  </div>
                  <span className="text-sm md:text-base">+91-9437342042</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                    <i className="ri-map-pin-line text-lg" />
                  </div>
                  <span className="text-sm md:text-base">Chennai, India · Open to remote</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 relative">
              <div
                className="border-4 border-black p-4 bg-neo-yellow shadow-hard relative overflow-hidden"
                style={{ minHeight: "460px" }}
              >
                <div className="flex items-center gap-2 mb-3 border-b-2 border-black pb-2">
                  <span className="font-mono font-bold text-xs">/// TYPE_TO_TRANSMIT</span>
                  <span className="ml-auto font-mono text-xs text-gray-700 animate-pulse">● LIVE</span>
                </div>
                <div className="w-full h-[420px]">
                  <TypingKeyboard />
                </div>
              </div>
              <div className="absolute -right-3 bottom-12 w-3 h-3 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}