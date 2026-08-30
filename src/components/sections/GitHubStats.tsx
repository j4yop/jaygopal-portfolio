import { useEffect, useState } from "react";

export function GitHubStats() {
  const [stats, setStats] = useState({ repos: "--", followers: "--", stars: "--", joined: "--" });

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("https://api.github.com/users/j4yop", { headers: { Accept: "application/vnd.github.v3+json" } });
        if (!r.ok) throw new Error("user");
        const d = await r.json();
        const reposRes = await fetch("https://api.github.com/users/j4yop/repos?per_page=100", { headers: { Accept: "application/vnd.github.v3+json" } });
        const repos = reposRes.ok ? await reposRes.json() : [];
        const stars = repos.reduce((acc: number, r: any) => acc + (r.stargazers_count || 0), 0);
        const date = new Date(d.created_at);
        setStats({
          repos: d.public_repos ?? "0",
          followers: d.followers ?? "0",
          stars: String(stars),
          joined: date.toLocaleDateString("en-US", { year: "numeric", month: "short" }),
        });
      } catch {
        setStats({ repos: "ERR", followers: "ERR", stars: "ERR", joined: "N/A" });
      }
    })();
  }, []);

  return (
    <section id="coding-stats" className="py-12 bg-neo-black text-white border-y-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-6 border-b-2 border-white pb-3">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">GITHUB<span className="text-neo-green">_STATS</span></h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="font-mono text-neo-green text-xs font-bold">LIVE</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="reveal lg:col-span-1 flex flex-col h-full">
            <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <i className="ri-github-fill text-3xl text-neo-green"></i>
                  <div>
                    <h4 className="text-xl font-black text-white leading-tight">j4yop</h4>
                    <p className="text-[10px] font-mono text-neo-green uppercase tracking-widest">AI Engineer</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8 uppercase">
                {[
                  ["Repositories", stats.repos],
                  ["Followers", stats.followers],
                  ["Stars", stats.stars],
                  ["Joined", stats.joined],
                ].map(([l, v]) => (
                  <div key={l} className="border-2 border-neo-green/30 bg-neo-black/60 p-4 shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                    <div className="text-[9px] font-mono text-neo-green mb-1 uppercase tracking-widest opacity-70">{l}</div>
                    <div className={`text-white font-black ${l === "Joined" ? "text-xl" : "text-3xl"} tracking-tighter`}>{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between text-neo-green p-3 border-2 border-white/10 bg-neo-black font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-neo-green">gh --stats</span>
                  <span className="animate-pulse">_</span>
                </div>
                <a href="https://github.com/j4yop" target="_blank" rel="noreferrer" className="text-neo-green px-3 py-1 font-black uppercase border border-neo-green hover:bg-neo-green hover:text-black transition-all">VIEW_GH →</a>
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-2 flex flex-col h-full">
            <div className="border-4 border-white/20 p-4 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-pulse-line text-neo-green"></i>
                <p className="text-[10px] font-mono text-neo-green/70 uppercase tracking-[0.2em]">Matrix_Output</p>
              </div>
              <div className="flex-1 flex items-center justify-center bg-black border-2 border-neo-green/30 p-2 overflow-hidden shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                <img src="https://ghchart.rshah.org/33FF57/j4yop" alt="GitHub Contribution Graph" className="w-full h-auto filter brightness-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}