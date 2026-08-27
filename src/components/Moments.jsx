import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const moments = [
  {
    center:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85",
    leftTop:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=600&q=85",
    leftBottom:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=85",
    rightTop:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=85",
    rightBottom:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=85",
  },
  {
    center:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    leftTop:
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=600&q=85",
    leftBottom:
      "https://images.unsplash.com/photo-1460364157752-926555421a7e?auto=format&fit=crop&w=600&q=85",
    rightTop:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=85",
    rightBottom:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=85",
  },
];

function Moments() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % moments.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + moments.length) % moments.length);
  };

  const slide = moments[current];

  return (
    <section id="moments" className="moments-section relative overflow-hidden">
      {/* Floating hearts */}
      <div className="moment-heart left-[5%] top-[20%]">♥</div>
      <div className="moment-heart right-[7%] top-[25%]">♥</div>
      <div className="moment-heart left-[12%] bottom-[15%]">♥</div>
      <div className="moment-heart right-[12%] bottom-[12%]">♥</div>

      <div className="relative z-10 mx-auto max-w-[1250px] px-6 py-20">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="moment-script">Beautiful Memories</p>

          <h2 className="moment-title">Moments We Cherish</h2>

          <div className="section-heart">
            <Heart size={18} className="fill-[#ff4f9b] text-[#ff4f9b]" />
          </div>
        </div>

        {/* Gallery */}
        <div className="relative mx-auto max-w-[1100px]">
          {/* Left arrow */}
          <button
            onClick={previousSlide}
            className="gallery-arrow gallery-arrow-left"
            aria-label="Previous memory"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="gallery-arrow gallery-arrow-right"
            aria-label="Next memory"
          >
            <ChevronRight size={28} />
          </button>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1.35fr_1fr]">
            {/* LEFT */}
            <div className="hidden flex-col gap-2 md:flex">
              <MemoryImage src={slide.leftTop} alt="Beautiful memory" />

              <MemoryImage src={slide.leftBottom} alt="Beautiful memory" />
            </div>

            {/* CENTER */}
            <div className="memory-center">
              <img src={slide.center} alt="Our special memory" />
            </div>

            {/* RIGHT */}
            <div className="hidden flex-col gap-2 md:flex">
              <MemoryImage src={slide.rightTop} alt="Beautiful memory" />

              <MemoryImage src={slide.rightBottom} alt="Beautiful memory" />
            </div>
          </div>

          {/* Mobile image */}
          <div className="mt-2 md:hidden">
            <MemoryImage src={slide.leftTop} alt="Beautiful memory" />
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {moments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to memory ${index + 1}`}
                className={`memory-dot ${current === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MemoryImage({ src, alt }) {
  return (
    <div className="memory-image">
      <img src={src} alt={alt} />
    </div>
  );
}

export default Moments;
