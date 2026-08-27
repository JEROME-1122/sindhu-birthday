import { ChevronDown, Heart } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import Stars from "./Stars";
import heroImage from "../assets/hero-couple.png";

function Hero() {
  const scrollToReasons = () => {
    document.getElementById("reasons")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Stars */}
      <Stars />

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* ================================
          BACKGROUND GLOW
      ================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Right pink glow */}
        <div className="absolute right-[8%] top-[12%] h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[150px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-[25%] h-[300px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />

        {/* Small left glow */}
        <div className="absolute left-[-150px] top-[35%] h-[350px] w-[350px] rounded-full bg-pink-600/10 blur-[130px]" />
      </div>

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-6 pt-24 lg:grid-cols-2 lg:px-16">
        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="max-w-[600px]">
          {/* Script text */}
          <p className="script-font mb-4 text-2xl text-[#ff5b9f]">
            To the love of my life,
          </p>

          {/* Main heading */}
          <h1 className="hero-title">
            Happy Birthday
            <br />
            <span>My Love</span>{" "}
            <span className="inline-block animate-pulse">❤️</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[520px] text-base leading-7 text-white/90 md:text-lg">
            Every moment with you is precious. Today is all about celebrating
            the most amazing person in my life – You!
          </p>

          {/* Button */}
          <button
            onClick={scrollToReasons}
            className="mt-8 rounded-xl bg-gradient-to-r from-[#ff3f86] to-[#ff619f] px-7 py-4 font-bold text-white shadow-[0_0_30px_rgba(255,63,134,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(255,63,134,0.6)]"
          >
            Let's Celebrate 🎉
          </button>
        </div>

        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="relative flex min-h-[520px] items-end justify-center lg:min-h-[680px]">
          {/* ================================
              BIG GLOWING HEART
          ================================= */}

          <div className="hero-glow-heart">
            <div className="heart-shape" />
          </div>

          {/* ================================
              COUPLE IMAGE GLOW
          ================================= */}

          <div className="couple-image-glow" />

          {/* ================================
              COUPLE DARK SHADOW
          ================================= */}

          <div className="couple-shadow" />

          {/* ================================
              COUPLE IMAGE
          ================================= */}

          <div className="couple-image-wrapper">
            <img src={heroImage} alt="Couple" className="couple-image" />

            {/* Dark bottom fade */}
            <div className="couple-bottom-fade" />
          </div>

          {/* ================================
              SMALL FLOATING HEARTS
          ================================= */}

          <div className="absolute left-[10%] top-[28%] z-20 animate-bounce text-xl text-pink-400/60">
            ♥
          </div>

          <div className="absolute right-[12%] top-[22%] z-20 text-2xl text-pink-400/50 animate-pulse">
            ♥
          </div>

          <div className="absolute bottom-[30%] left-[15%] z-20 text-sm text-pink-300/50">
            ♥
          </div>

          <div className="absolute bottom-[35%] right-[15%] z-20 text-lg text-pink-400/50 animate-pulse">
            ♥
          </div>
        </div>
      </div>

      {/* ================================
          SCROLL INDICATOR
      ================================= */}

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <button
          onClick={scrollToReasons}
          className="scroll-indicator cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
