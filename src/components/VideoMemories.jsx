import { useRef, useState } from "react";

const memories = [
  {
    id: 1,
    video: "/videos/memory-1.mp4",
    title: "Our First Beautiful Memory ❤️",
    description:
      "One of those little moments that became a beautiful memory for me.",
  },
  {
    id: 2,
    video: "/videos/memory-2.mp4",
    title: "That Beautiful Day ✨",
    description: "A simple day, but having you there made it so special.",
  },
  {
    id: 3,
    video: "/videos/memory-3.mp4",
    title: "Just You & Me 💕",
    description: "Some moments don't need words. They just need you and me.",
  },
  {
    id: 4,
    video: "/videos/memory-4.mp4",
    title: "Our Little Moments 🌸",
    description:
      "The little things we shared are some of my favorite memories.",
  },
  {
    id: 5,
    video: "/videos/memory-5.mp4",
    title: "A Moment To Remember 🥰",
    description: "Another memory that I would happily live again and again.",
  },
  {
    id: 6,
    video: "/videos/memory-6.mp4",
    title: "Forever My Favorite ❤️",
    description: "Every memory with you is something I want to keep forever.",
  },

  // More videos add pannalam
  {
    id: 7,
    video: "/videos/memory-7.mp4",
    title: "Another Beautiful Memory 💗",
    description: "Another little moment that I want to keep close to my heart.",
  },
  {
    id: 8,
    video: "/videos/memory-8.mp4",
    title: "With You ✨",
    description: "Everything feels a little more beautiful when I'm with you.",
  },
  {
    id: 9,
    video: "/videos/memory-9.mp4",
    title: "One More Memory ❤️",
    description: "A memory that will always have a special place in my heart.",
  },
];

function VideoMemories() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, memories.length));
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  const visibleMemories = memories.slice(0, visibleCount);

  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-[#080316] px-5 py-24 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-[350px] w-[350px] rounded-full bg-pink-600/10 blur-[130px]" />

        <div className="absolute bottom-[5%] right-[10%] h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      {/* Heading */}
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

        {/* Divider */}
        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff4f9b]" />

          <span className="text-lg text-[#ff5b9f]">♥</span>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff4f9b]" />
        </div>
      </div>

      {/* Video Grid */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visibleMemories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>

      {/* Show More / Show Less */}
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

function MemoryCard({ memory }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="group overflow-hidden rounded-3xl border border-pink-400/15 bg-[#10051f]/80 shadow-[0_0_40px_rgba(255,50,140,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_50px_rgba(255,50,140,0.22)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={memory.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10051f] via-transparent to-transparent opacity-80" />

        {/* Heart */}
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-pink-300/20 bg-black/30 text-lg backdrop-blur-md">
          ❤️
        </div>
      </div>

      {/* Text */}
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
