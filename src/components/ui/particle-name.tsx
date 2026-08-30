import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticleNameProps {
  src: string;
  className?: string;
  color?: string;
}

interface Particle {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  grey: number;
}

export function ParticleName({ src, className, color = "#121212" }: ParticleNameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let rafId = 0;
    let disposed = false;

    const resize = () => {
      const w = wrap.clientWidth || 800;
      const h = wrap.clientHeight || 400;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const BUILD_ANIM_DURATION = 1500; // ms for particles to assemble
const BUILD_ANIM_START = Date.now();

const buildParticlesFromImage = (img: HTMLImageElement) => {
      // Sample image at a low resolution into particles
      const sampleW = 220;
      const ratio = img.height / img.width;
      const sampleH = Math.round(sampleW * ratio);
      const off = document.createElement("canvas");
      off.width = sampleW;
      off.height = sampleH;
      const octx = off.getContext("2d")!;
      octx.drawImage(img, 0, 0, sampleW, sampleH);
      const data = octx.getImageData(0, 0, sampleW, sampleH).data;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const scale = Math.min((w * 0.85) / sampleW, (h * 0.85) / sampleH);
      const offsetX = (w - sampleW * scale) / 2;
      const offsetY = (h - sampleH * scale) / 2;

      particles = [];
      for (let py = 0; py < sampleH; py += 1) {
        for (let px = 0; px < sampleW; px += 1) {
          const i = (py * sampleW + px) * 4;
          const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
          if (grey > 100) {
            const homeX = offsetX + px * scale;
            const homeY = offsetY + py * scale;
            // Start particles in a tight cloud around home, then they settle
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 40;
            particles.push({
              homeX,
              homeY,
              x: homeX + Math.cos(angle) * dist,
              y: homeY + Math.sin(angle) * dist,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: 1.5 + grey / 255 * 2,
              grey,
            });
          }
        }
      }
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const pushRadius = 120;
      const pushStrength = 18;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Spring back to home
        const dx = p.homeX - p.x;
        const dy = p.homeY - p.y;
        p.vx += dx * 0.05;
        p.vy += dy * 0.05;

        // Mouse push
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < pushRadius && md > 0.001) {
          const force = (1 - md / pushRadius) * pushStrength;
          p.vx += (mdx / md) * force;
          p.vy += (mdy / md) * force;
        }

        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx;
        p.y += p.vy;

        const alpha = p.grey / 255;
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    resize();

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (disposed) return;
      buildParticlesFromImage(img);
      rafId = requestAnimationFrame(draw);
    };
    img.onerror = (e) => {
      console.warn("ParticleName: image load failed", e);
    };
    img.src = src;

    const ro = new ResizeObserver(() => {
      resize();
      // Re-layout particles to new bounds
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      if (img.complete && particles.length) {
        const scale = Math.min((w * 0.85) / img.width, (h * 0.85) / img.height);
        const offsetX = (w - img.width * scale) / 2;
        const offsetY = (h - img.height * scale) / 2;
        for (const p of particles) {
          const px = (p.homeX - (w - img.width * scale) / 2) / scale;
          const py = (p.homeY - (h - img.height * scale) / 2) / scale;
          p.homeX = offsetX + px * scale;
          p.homeY = offsetY + py * scale;
        }
      }
    });
    ro.observe(wrap);

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [src, color]);

  return (
    <div ref={wrapRef} className={cn("absolute inset-0 h-full w-full pointer-events-auto", className)}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

export default ParticleName;