import { useState } from "react";
import { Heart, Sparkles, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FloatingHearts from "./FloatingHearts";
import Stars from "./Stars";

function LoveQuestion() {
  const navigate = useNavigate();

  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveNoButton = () => {
    const positions = [
      { x: -110, y: -65 },
      { x: 100, y: -65 },
      { x: -120, y: 60 },
      { x: 110, y: 55 },
      { x: 0, y: -75 },
      { x: 0, y: 70 },
    ];

    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)];

    setNoPosition(randomPosition);
  };

  const handleYes = () => {
    navigate("/home");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080316]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-[300px] w-[300px] rounded-full bg-pink-600/10 blur-[120px]" />

        <div className="absolute right-[8%] top-[20%] h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[130px]" />

        <div className="absolute bottom-[5%] left-[40%] h-[300px] w-[300px] rounded-full bg-purple-700/10 blur-[130px]" />
      </div>

      {/* Floating elements */}
      <Stars />
      <FloatingHearts />

      {/* Main content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="question-card relative w-full max-w-[670px] rounded-[25px] border border-[#ff4f9b] bg-[#0d061c]/80 px-6 py-10 shadow-[0_0_45px_rgba(255,55,145,0.15)] backdrop-blur-xl sm:px-14 sm:py-12">
          {/* Top glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[25px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,75,160,0.12),transparent_45%)]" />

          {/* Heart icon */}
          <div className="relative mb-6 flex justify-center">
            <div className="question-heart">
              <Heart size={43} strokeWidth={1.8} className="text-[#ff6cae]" />

              <Sparkles
                size={15}
                className="absolute -left-5 top-2 text-[#ff6cae]"
              />

              <Sparkles
                size={17}
                className="absolute -right-5 top-0 text-[#ff6cae]"
              />
            </div>
          </div>

          {/* Question */}
          <div className="relative text-center text-white">
            <h1 className="love-question">
              Do you love me
              <br />
              as much as I love you?
            </h1>

            <p className="question-subtitle">
              This is the most important question ❤️
            </p>
          </div>

          {/* Buttons */}
          <div className="relative mt-8 flex min-h-[90px] items-center justify-center gap-8 sm:gap-14">
            {/* YES */}
            <button
              onClick={handleYes}
              className="yes-button relative z-20 h-[54px] min-w-[185px] rounded-xl bg-gradient-to-r from-[#ff3d83] to-[#ff5a9d] px-8 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              Yes, I do ❤️
            </button>

            {/* NO */}
            <div className="relative h-[60px] w-[145px] text-white">
              <button
                type="button"
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                style={{
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                }}
                className="no-button absolute left-0 top-1/2 z-30 h-[54px] w-[145px] -translate-y-1/2 rounded-xl border border-[#ff4f9b]/70 bg-transparent font-medium text-white"
              >
                No
              </button>
            </div>
          </div>

          {/* Try catching */}
          <div className="pointer-events-none absolute bottom-[55px] right-[20px] hidden items-center gap-1 text-[#ff5b9f] sm:flex">
            <span className="try-text">Try catching me!</span>

            <span className="text-lg">😜</span>

            <ArrowUpRight size={32} className="rotate-[-35deg]" />
          </div>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-1/2 h-[2px] w-[30%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff4f9b] to-transparent" />
        </div>
      </section>
    </main>
  );
}

export default LoveQuestion;
