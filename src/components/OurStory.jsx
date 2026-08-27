import { CalendarDays, Heart, Gem, Gift } from "lucide-react";

const storyItems = [
  {
    icon: CalendarDays,
    title: "We Met",
    date: "02 July 2026",
    description: "Annaniku andha app la accept panni Hi nu start panna neram",
  },

  {
    icon: Gem,
    title: "Love Started",
    date: "11 Aug 2026",
    description: "Appodhan unna konjam konjama pidika aarambichuthu ",
  },
  {
    icon: Heart,
    title: "First Date",
    date: "Soon",
    description: "Innnum andha naalukakadhan kaathutu irruken ",
  },
  {
    icon: Gift,
    title: "Many More to Come",
    date: "Forever",
    description:
      "Neeyse yanaku kidacha periya Gift . Andha gift yanaku mattum irrukanum",
  },
];

function OurStory() {
  return (
    <section id="our-story" className="story-section relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[20%] top-[15%] h-[300px] w-[300px] rounded-full bg-pink-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[15%] bottom-[5%] h-[250px] w-[250px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

      {/* Floating hearts */}
      <div className="story-heart left-[7%] top-[22%]">♥</div>

      <div className="story-heart right-[8%] top-[30%]">♥</div>

      <div className="story-heart left-[20%] bottom-[15%]">♥</div>

      <div className="story-heart right-[20%] bottom-[12%]">♥</div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="story-script">Our Journey</p>

          <h2 className="story-title">Our Story</h2>

          <div className="section-heart mt-2">
            <Heart size={19} className="fill-[#ff4f9b] text-[#ff4f9b]" />
          </div>
        </div>

        {/* Timeline */}
        <div className="story-timeline">
          {/* Connecting line */}
          <div className="timeline-line" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
            {storyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="story-item"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="story-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h3 className="story-item-title">{item.title}</h3>

                  <p className="story-date">{item.date}</p>

                  <p className="story-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
