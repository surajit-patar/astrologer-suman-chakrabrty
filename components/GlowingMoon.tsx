export default function GlowingMoon({ size = 130 }: { size?: number }) {
  return (
    <div
      className="relative rounded-full animate-pulse-glow"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 35% 30%, #FFFBEF 0%, #FDF6E3 35%, #E8D9A8 70%, #C9A24A 100%)",
        boxShadow:
          "0 0 40px 10px rgba(253,246,227,0.55), 0 0 100px 40px rgba(212,175,55,0.25)",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full bg-black/10"
        style={{ width: 18, height: 18, top: "22%", left: "28%" }}
      />
      <div
        className="absolute rounded-full bg-black/10"
        style={{ width: 10, height: 10, top: "55%", left: "60%" }}
      />
      <div
        className="absolute rounded-full bg-black/5"
        style={{ width: 14, height: 14, top: "68%", left: "35%" }}
      />
    </div>
  );
}
