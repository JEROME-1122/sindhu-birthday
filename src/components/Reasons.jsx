import { Heart, Star, Infinity, Sparkles, Flower2, Gift } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Your Smile",
    description: "Your smile lights up my world.",
  },
  {
    icon: Star,
    title: "Your Heart",
    description: "You have the kindest heart ever.",
  },
  {
    icon: Infinity,
    title: "Our Bond",
    description: "Our bond is unbreakable.",
  },
  {
    icon: Sparkles,
    title: "Your Support",
    description: "You stand by me in every situation.",
  },
  {
    icon: Flower2,
    title: "Your Love",
    description: "Your love is pure and true.",
  },
  {
    icon: Gift,
    title: "You, Always",
    description: "Being with you feels like home.",
  },
];

function Reasons() {
  return (
    <section id="reasons" className="reasons-section relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[15%] top-[20%] h-[250px] w-[250px] rounded-full bg-pink-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1250px] px-6 py-20">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="section-script">You are so special because...</p>

          <h2 className="section-title">Reasons Why I Love You</h2>

          <div className="section-heart">
            <Heart size={18} className="fill-[#ff4f9b] text-[#ff4f9b]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="reason-card group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="reason-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#ff4f9b]"
                  />
                </div>

                <h3 className="reason-title">{reason.title}</h3>

                <p className="reason-description">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Reasons;
