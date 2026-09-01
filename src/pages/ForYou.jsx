import { useState } from "react";
import { ChevronDown, Heart, Play } from "lucide-react";

import FloatingHearts from "../components/FloatingHearts";
import Stars from "../components/Stars";
import ProposalAnimation from "../components/ProposalAnimation";

import heroImage from "../assets/couple-img.png";

import birthdayVideo from "../assets/videos/birthday-video.mp4";

function ForYou() {
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  // Scroll from banner to video
  const scrollToVideo = () => {
    document.getElementById("special-video")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Start video
  const startVideo = () => {
    setVideoStarted(true);
  };

  // When video finishes
  const handleVideoEnd = () => {
    setVideoEnded(true);

    // Give the proposal section a small delay
    // before scrolling to it
    setTimeout(() => {
      document.getElementById("proposal")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 800);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080316] text-white">
      {/* =====================================================
          HERO / SPECIAL BANNER
      ===================================================== */}

      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          {/* Pink glow */}
          <div className="absolute left-[10%] top-[15%] h-[350px] w-[350px] rounded-full bg-pink-600/10 blur-[130px]" />

          {/* Purple glow */}
          <div className="absolute right-[10%] top-[25%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[140px]" />

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-[30%] h-[300px] w-[500px] rounded-full bg-pink-600/10 blur-[150px]" />
        </div>

        <Stars />
        <FloatingHearts />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-20 text-center">
          {/* Small script text */}
          <p className="script-font mb-4 text-3xl text-[#ff5b9f]">
            From my heart to yours...
          </p>

          {/* Main heading */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            For The Most
            <br />
            <span className="bg-gradient-to-r from-[#ff4b91] via-[#ff78b0] to-[#ff4b91] bg-clip-text text-transparent">
              Beautiful Person
            </span>
            <span className="ml-3 inline-block animate-pulse">❤️</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            There is something special I have prepared just for you. Take a
            little time, sit back, and enjoy this moment with me.
          </p>

          {/* Heart divider */}
          <div className="my-8 flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff4f9b]" />

            <Heart size={22} className="fill-[#ff4f9b] text-[#ff4f9b]" />

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff4f9b]" />
          </div>

          {/* =================================================
              COUPLE IMAGE
          ================================================= */}

          <div className="relative w-full max-w-[1050px] overflow-hidden rounded-3xl border border-pink-400/20 bg-[#12051f] shadow-[0_0_80px_rgba(255,50,140,0.15)]">
            <img
              src={heroImage}
              alt="Our special moment"
              className="h-[300px] w-full object-cover object-center md:h-[480px]"
            />

            {/* Bottom dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080316] via-transparent to-transparent" />

            {/* Pink overlay */}
            <div className="absolute inset-0 bg-pink-500/5 mix-blend-screen" />

            {/* Image text */}
            <div className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 px-6">
              <p className="script-font text-2xl text-[#ff72a9] md:text-3xl">
                Every love story is beautiful...
              </p>

              <p className="mt-2 text-sm text-white/80 md:text-base">
                But ours will always be my favorite. ❤️
              </p>
            </div>
          </div>

          {/* Continue button */}
          <button
            onClick={scrollToVideo}
            className="mt-8 flex items-center gap-3 rounded-full border border-pink-400/30 bg-pink-500/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-pink-400/60 hover:bg-pink-500/20"
          >
            Something Special Awaits
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* =====================================================
          VIDEO SECTION
      ===================================================== */}

      <section
        id="special-video"
        className="relative flex min-h-screen items-center justify-center bg-[#09031b] px-6 py-24"
      >
        <div className="w-full max-w-[1000px] text-center">
          {/* Small title */}
          <p className="script-font text-3xl text-[#ff5b9f]">
            A little something for you...
          </p>

          {/* Main title */}
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Watch This ❤️</h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/50 md:text-base">
            I made this little video just for you. Take a moment and watch it
            till the end. ❤️
          </p>

          {/* =================================================
              VIDEO CONTAINER
          ================================================= */}

          <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl border border-pink-400/20 bg-black shadow-[0_0_60px_rgba(255,60,145,0.2)]">
            {/* =============================================
                BEFORE VIDEO START
            ============================================= */}

            {!videoStarted && !videoEnded && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-[#12051f]/60 to-black/90">
                {/* Play button */}
                <button
                  onClick={startVideo}
                  aria-label="Play birthday video"
                  className="group flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#ff5798] bg-pink-500/10 shadow-[0_0_45px_rgba(255,60,145,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-pink-500/20 hover:shadow-[0_0_65px_rgba(255,60,145,0.65)]"
                >
                  <Play
                    size={38}
                    className="ml-1 fill-white text-white transition-transform duration-300 group-hover:scale-110"
                  />
                </button>

                <p className="mt-5 text-sm text-white/60">Click to Play ❤️</p>
              </div>
            )}

            {/* =============================================
                ACTUAL VIDEO
            ============================================= */}

            {videoStarted && !videoEnded && (
              <video
                autoPlay
                controls
                playsInline
                onEnded={handleVideoEnd}
                className="h-full w-full object-contain object-center"
              >
                <source src={birthdayVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* =============================================
                VIDEO FINISHED MESSAGE
            ============================================= */}

            {videoEnded && (
              <div className="flex h-full flex-col items-center justify-center bg-[#09031b]">
                <Heart
                  size={45}
                  className="animate-pulse fill-[#ff4f9b] text-[#ff4f9b]"
                />

                <p className="script-font mt-5 text-3xl text-[#ff72a9]">
                  Something special is coming...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROPOSAL ANIMATION
      ===================================================== */}

      {videoEnded && (
        <section id="proposal" className="relative">
          <ProposalAnimation />
        </section>
      )}
    </main>
  );
}

export default ForYou;
