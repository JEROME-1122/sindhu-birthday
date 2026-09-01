
import { useRef, useState } from "react";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";
import video9 from "../assets/videos/video9.mp4";

// ==========================================
// MEMORY VIDEOS
// ==========================================
// assets/videos/ folder-la video files potu, mela import panni
// intha array-la add pannu

const memories = [
  {
    id: 1,
    video: video1,
    title: "Our First Beautiful Memory ❤️",
    description:
      "One of those little moments that became a beautiful memory for me.",
  },
  {
    id: 2,
    video: video2,
    title: "That Beautiful Day ✨",
    description: "A simple day, but having you there made it so special.",
  },
  {
    id: 3,
    video: video3,
    title: "Just You & Me 💕",
    description: "Some moments don't need words. They just need you and me.",
  },
  {
    id: 4,
    video: video4,
    title: "Our Little Moments 🌸",
    description:
      "The little things we shared are some of my favorite memories.",
  },
  {
    id: 5,
    video: video5,
    title: "A Moment To Remember 🥰",
    description: "Another memory that I would happily live again and again.",
  },
  {
    id: 6,
    video: video6,
    title: "Forever My Favorite ❤️",
    description: "Every memory with you is something I want to keep forever.",
  },
  {
    id: 7,
    video: video7,
    title: "Another Beautiful Memory 💗",
    description: "Another little moment that I want to keep close to my heart.",
  },
  {
    id: 8,
    video: video8,
    title: "With You ✨",
    description: "Everything feels a little more beautiful when I'm with you.",
  },
  {
    id: 9,
    video: video9,
    title: "One More Memory ❤️",
    description: "A memory that will always have a special place in my heart.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

function VideoMemories() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, memories.length));
  };

  const showLess = () => {
    setVisibleCount(3);
    setTimeout(() => {
      document.getElementById("memories")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const visibleMemories = memories.slice(0, visibleCount);

  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-[#080316] px-5 py-24 md:px-10 lg:px-16"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-[350px] w-[350px] rounded-full bg-pink-600/10 blur-[130px]" />
        <div className="absolute bottom-[5%] right-[10%] h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[150px]" />
      </div>

      {/* HEADING */}
      <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center">
        <p className="script-font text-2xl text-[#ff5b9f] md:text-3xl">
          Little moments, big memories...
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
          Our Memories <span className="text-[#ff4f9b]">❤️</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
          Every moment with you is a memory worth keeping forever.
        </p>
        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff4f9b]" />
          <span className="text-lg text-[#ff5b9f]">♥</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff4f9b]" />
        </div>
      </div>

      {/* VIDEO GRID */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visibleMemories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>

      {/* SHOW MORE / SHOW LESS */}
      {memories.length > 3 && (
        <div className="relative z-10 mt-12 flex justify-center">
          {visibleCount < memories.length ? (
            <button
              onClick={showMore}
              className="group flex items-center gap-3 rounded-full border border-pink-400/30 bg-pink-500/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-pink-400/60 hover:bg-pink-500/20 hover:shadow-[0_0_35px_rgba(255,60,145,0.25)]"
            >
              <span>Show More</span>
              <span className="text-[#ff5b9f] transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </button>
          ) : (
            <button
              onClick={showLess}
              className="group flex items-center gap-3 rounded-full border border-pink-400/30 bg-pink-500/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-pink-400/60 hover:bg-pink-500/20 hover:shadow-[0_0_35px_rgba(255,60,145,0.25)]"
            >
              <span>Show Less</span>
              <span className="text-[#ff5b9f] transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          )}
        </div>
      )}
    </section>
  );
}

// ==========================================
// MEMORY CARD
// ==========================================

function MemoryCard({ memory }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch((error) => {
      console.log("Video play failed:", error);
    });
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="group overflow-hidden rounded-3xl border border-pink-400/15 bg-[#10051f]/80 shadow-[0_0_40px_rgba(255,50,140,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_50px_rgba(255,50,140,0.22)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* VIDEO */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={memory.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            console.log("Video loading error:", memory.video, e);
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10051f] via-transparent to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Heart */}
        <div className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-pink-300/20 bg-black/30 text-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          ❤️
        </div>

        {/* Play hint */}
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          ▶ Hover to play
        </div>
      </div>

      {/* TEXT */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#ff6cae]">
          {memory.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/60">
          {memory.description}
        </p>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-[#ff4f9b]/40 via-[#ff4f9b]/10 to-transparent" />
        <p className="mt-4 text-xs font-medium tracking-wider text-[#ff5b9f]">
          A MEMORY TO KEEP FOREVER ❤️
        </p>
      </div>
    </div>
  );
}

export default VideoMemories;
