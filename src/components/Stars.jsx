const stars = [
  { left: "5%", top: "18%", delay: "0s" },
  { left: "13%", top: "32%", delay: "1s" },
  { left: "22%", top: "12%", delay: "2s" },
  { left: "35%", top: "28%", delay: "0.5s" },
  { left: "48%", top: "14%", delay: "3s" },
  { left: "58%", top: "35%", delay: "1.5s" },
  { left: "67%", top: "8%", delay: "2.5s" },
  { left: "76%", top: "30%", delay: "0.8s" },
  { left: "85%", top: "20%", delay: "3.5s" },
  { left: "94%", top: "58%", delay: "1.2s" },
  { left: "15%", top: "82%", delay: "2.8s" },
  { left: "40%", top: "72%", delay: "0.7s" },
  { left: "61%", top: "84%", delay: "2.2s" },
  { left: "80%", top: "78%", delay: "3.2s" },
];

function Stars() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((star, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;
