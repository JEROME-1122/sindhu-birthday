const hearts = [
  { left: "8%", top: "12%", size: "text-3xl", delay: "0s", duration: "6s" },
  { left: "18%", top: "55%", size: "text-xl", delay: "1.5s", duration: "7s" },
  { left: "29%", top: "23%", size: "text-2xl", delay: "2.5s", duration: "5s" },
  { left: "72%", top: "18%", size: "text-xl", delay: "1s", duration: "6s" },
  { left: "87%", top: "10%", size: "text-3xl", delay: "3s", duration: "7s" },
  { left: "91%", top: "42%", size: "text-2xl", delay: "2s", duration: "5s" },
  { left: "78%", top: "70%", size: "text-xl", delay: "4s", duration: "6s" },
  { left: "8%", top: "76%", size: "text-2xl", delay: "2s", duration: "7s" },
  { left: "43%", top: "8%", size: "text-lg", delay: "3s", duration: "5s" },
];

function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`floating-heart absolute ${heart.size}`}
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
