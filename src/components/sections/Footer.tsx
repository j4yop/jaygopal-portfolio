export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t-8 border-neo-green font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-6">jay.exe</h2>
          <p className="text-gray-400 max-w-sm">AI engineer & researcher. Building systems that have to work in the real world.</p>
        </div>
        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">SITEMAP</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover">Home</a></li>
            <li><a href="#projects" className="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover">Works</a></li>
            <li><a href="#about" className="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover">About</a></li>
            <li><a href="#contact" className="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">SOCIALS</h3>
          <div className="flex gap-4">
            <a href="https://github.com/j4yop" className="text-2xl hover:text-neo-yellow transition-colors cursor-hover" title="GitHub"><i className="ri-github-fill"></i></a>
            <a href="https://linkedin.com/in/jaygopaltripathy" className="text-2xl hover:text-neo-blue transition-colors cursor-hover" title="LinkedIn"><i className="ri-linkedin-fill"></i></a>
            <a href="mailto:jay20gopal@gmail.com" className="text-2xl hover:text-neo-pink transition-colors cursor-hover" title="Email"><i className="ri-mail-fill"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        <p>© 2026 jay.exe // SYSTEM_END</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-black text-white opacity-[0.03] leading-none select-none pointer-events-none text-center">SHIP</div>
    </footer>
  );
}