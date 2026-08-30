export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute -top-4 -left-4 bg-neo-yellow border-4 border-black px-4 py-2 font-black transform -rotate-2 z-10">SAY HELLO</div>
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-hard-xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-none">LET'S<br />TALK<br />AI.</h2>
              <p className="font-mono text-xl mb-12 text-gray-700">Open to research collaborations, internships, and engineering roles.</p>
              <div className="space-y-6 font-mono font-bold">
                <a href="mailto:jay20gopal@gmail.com" className="flex items-center gap-4 hover:text-neo-blue transition-colors group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-neo-blue group-hover:text-black transition-colors"><i className="ri-mail-send-line text-xl"></i></div>
                  <span>jay20gopal@gmail.com</span>
                </a>
                <a href="tel:+919437342042" className="flex items-center gap-4 hover:text-neo-green transition-colors group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-neo-green group-hover:text-black transition-colors"><i className="ri-phone-line text-xl"></i></div>
                  <span>+91-9437342042</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></div>
                  <span>Chennai, India · Open to remote</span>
                </div>
              </div>
            </div>
            <div className="border-4 border-black p-6 bg-white shadow-hard relative">
              <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-6">
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <div>
                  <label className="block font-mono font-bold mb-2 uppercase text-xs tracking-wider">Identity</label>
                  <input type="text" name="name" placeholder="NAME / COMPANY" required className="w-full bg-white border-2 border-black p-4 font-mono focus:outline-none focus:bg-neo-yellow focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="block font-mono font-bold mb-2 uppercase text-xs tracking-wider">Coordinates</label>
                  <input type="email" name="email" placeholder="EMAIL ADDRESS" required className="w-full bg-white border-2 border-black p-4 font-mono focus:outline-none focus:bg-neo-yellow focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="block font-mono font-bold mb-2 uppercase text-xs tracking-wider">Transmission</label>
                  <textarea name="message" rows={4} placeholder="WHAT ARE WE BUILDING..." required className="w-full bg-white hover:bg-neo-yellow border-2 border-black p-4 font-mono focus:outline-none focus:bg-neo-yellow focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-600 font-bold"></textarea>
                </div>
                <button type="submit" className="w-full bg-neo-blue text-white font-black uppercase py-4 border-2 border-black shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">Transmit Data</button>
              </form>
              <div className="absolute -right-3 bottom-12 w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}