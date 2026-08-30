import { useEffect, useRef, useState, type ReactNode, type FC } from "react";
import { cn } from "@/lib/utils";

interface MagneticCursorProps {
  children: ReactNode;
  cursorSize?: number;
  cursorColor?: string;
  cursorClassName?: string;
  disableOnTouch?: boolean;
}

export const MagneticCursor: FC<MagneticCursorProps> = ({
  children,
  cursorSize = 24,
  cursorColor = "#FFFDF5",
  cursorClassName = "",
  disableOnTouch = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    setIsTouchDevice(typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0));
  }, []);

  useEffect(() => {
    if (disableOnTouch && isTouchDevice) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    let raf = 0;
    let mx = -100;
    let my = -100;
    let cx = -100;
    let cy = -100;
    let alive = true;

    const tick = () => {
      if (!alive) return;
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      cursorEl.style.transform = `translate3d(${cx - cursorSize / 2}px, ${cy - cursorSize / 2}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onEnter = () => (cursorEl.style.opacity = "1");
    const onLeave = () => (cursorEl.style.opacity = "0");

    window.addEventListener("pointermove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [disableOnTouch, isTouchDevice, cursorSize]);

  if (disableOnTouch && isTouchDevice) return <>{children}</>;

  return (
    <>
      <div
        ref={cursorRef}
        className={cn("magnetic-cursor", cursorClassName)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          width: cursorSize,
          height: cursorSize,
          backgroundColor: cursorColor,
          borderRadius: "50%",
          mixBlendMode: "exclusion",
          opacity: 0,
        }}
      />
      {children}
    </>
  );
};

export default MagneticCursor;