export function Cursor({ x, y, hover }: { x: number; y: number; hover: boolean }) {
  return (
    <div
      id="cursor"
      className="hidden lg:block rounded-full"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        width: hover ? 60 : 24,
        height: hover ? 60 : 24,
        backgroundColor: hover ? "#FBFF48" : "#fff",
        border: hover ? "2px solid black" : "none",
        mixBlendMode: hover ? "normal" : "difference",
      }}
    />
  );
}