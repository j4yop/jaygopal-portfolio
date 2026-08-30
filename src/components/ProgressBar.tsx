import { useEffect } from "react";

export function ProgressBar() {
  useEffect(() => {
    const onScroll = () => {
      const win = document.body.scrollTop || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = (win / h) * 100;
      const bar = document.getElementById("progressBar");
      if (bar) bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-2 bg-neo-green z-[60] border-b-2 border-black"
      id="progressBar"
      style={{ width: "0%" }}
    />
  );
}