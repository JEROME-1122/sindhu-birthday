import { ChevronDown, Heart } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import Stars from "./Stars";
import heroImage from "../assets/hero-couple.png";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
function Hero() {
  const [showStory, setShowStory] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const storyText = `Namma first eppadi pesinom,

July 02 annaiku naa requst kuduthen andha app la appo start pannanudhan

Vanakampa nu naa msg la panna aarambichen unnoda andha Hi Message innum yanaku niyabagam irruku

But yanaku appo ethuvum thonala nama ippo ippadi close ah lova and care ooda irrupomnu .. solluvangala better ah oru person sudden ah varuvanga but adhu late ah kooda aagalam

First name stranger ah Hi message la start pannom nama just normal ah pesitu irrunthom enna panuringa eppadi irrukinganu appadiyae summa nama pesitu irrunthom but oru stage appuram nama konjam time adhikama spend panna aarabichom

Munnadi lam andha app varathe sometimes unta pesathan varuven but unna munnadi romba kalaichuruken adhuvum oru mathiri fun ah pochu appuram naa unna paakanumnu sonnen neee appuram email chat pesalamnu sonna adhu konja naal appuram July 9 pola kudutha annaiku nama anga irrunthu google chat la unnakaka install panni vanthu pesa aarambichom.

Niraya pesirupom but appo yanaku theriyala nama eppadi irrupomnu aana day by day nama appadiyae pesa start panni panni konjam close aaga aarabichom voice call dhan adhikama panna aarambichom adhu naa un call ku wait pannurathu  nee call pannurathunu oru happy ah poyitu irrunthu

Appuram Aug 11 pola un mela love vara aarambichathu adhu yennu solla niraya kaaranam irrunthu unnoda care love yanaku pidichurunthu  appuram nee kudutha paasam yanaku different ah irrunthu idhu varaikum ippadi yaarum anbu kaamikala first time unta irrunthu vanthu adhuvae enna romba un kooda attach aaga vachudichu

Actually nee mattum MARRAIGE aagurathuku munnadi VANTHURUPANA UNNA APPDIYAE EN KOODA KONDU VANTHURUPEN  unna romba pidika aarambichathu appuram unta pesite irrukanumnu thona aarambichathu un calls kaka wait pannurathu un text kaka wait pannurathu appadinu puthu feel kudutha

Ennoda life etho oru track la illatha maari etho valinthom poromnu irrunthu but nee vanthu en life ah totoal ah change pannita IPPO UNNAKAKAVAE VAALANUMNU THONU UN KOODAVAE VAALANUM UNNAKAKA MATTUM VAALANUM UNNODA MATTUM VAALANUMNU THONUTHU

Ippolam naa happy ah irrukurathuku reason ah needhan un voice appuram un text un love care ellamae enna total ah maathitu ippo happy ah irruken nee en kooda irrupanu

Nee vanthu yanaku kidachathulayae periya gift unna yaarukitayum kudutha thonalama thnagmae unnoda motha LOVE NA VANGIKANUM EN MOTHA LOVE UNNAKU MATTUM KUDUKANUMNU THONUTHU

Nee ennoda life la miss pannida mudiyatha santhosam en thangamae en kooda vanthu en last breath varaikum irrupiya yanaku nee matttum podhum nee mattum en kooda irrunthaana naa enna kastam vanthalum cross pannitu poyiduven unna naa oru kolantha pola paathukanumnu aasaya irruku

Appuram niyabagam irruka sindhu nama first romance call yanaku adha maraka mudiyala yanaku un kooda romance pannanumnu thonum un mela eppayum feel ah irrukum unna naa en kooda vachu paathu yanaku epapdilam love panni care panni chinna chinna visayathulayum un kooda romance panni unna nalla paathukanumnu thonuthu

Munnadilam eppadiyo pesitu irrunthu but ippo nee illadha sec romba hard ha irruku avulavu unna love pannuren ma thangamae

Yanaku ellathayum vida unna romba pidichuruku en life un kooda irrukanumnu irruku thnagmae  unkoda senthu vaalanum unna konjamnum un kooda happy sad ellathulayum un koodavae irrukanum naa unna mattum suthi suthi varanum unna thavara vera ethuvum en mind la vara koodathu nee mattum en ulagam aah aagidanum  Ennoda LIFE LA EN OWNER AH VAARIYA THANGAGAMAE

Idhu varaikum en life la nee kudutha evulavu love care enna innum unna love mela love panni vaikuthu enga ethachum oru nadantha un niyabagamadhan irruku ma eppo unkooda idhai pola vaala mudiyumnu orae ekama irruku 

Unnoda chinna chinna visayangal innum unna adhigama love panna vaikudhu yanaku en life full ah idha vida unna innum adhigama love panni unna care pannanum thangame

Ippo kooda idha nee paathutu irrukum po kooda unna love pannite irrupen thangamae unna en uyria eduthuka thonuthuma yanaku ippo periya aasa ethuvumae illa but aana un kooda vaalayanum aasa vanthuruku chellamae 

Ennoda love care enna ellathayum nee eduthukanum unnoda motha love um care um yanaku mattum venum thangamae idhuvara en life la yaarayum ninachu paakala but nee ennoda life partner ah irruka yanaku thonuthu en kooda en partner ah irrupiya ma thangamae naaa niraya aasa paduren unna appadi ippadi eppadilamo unna paathukanumnu thonuthu

Unna ego illama enna vanthalum unna vitu kodukama enna aalam un kai pidichu un koodavae travel pannanumnu aasaya irruku

Ippo solla pona yanaku ethuvum theva illa nee mattum yanaku podhum ennoda life nee mattum en kooda ennoda happiness sad ellathullayum

Enkoodavae irrunthu enna support panni ennoda ella situation layum nee venum

Appuram enna innumae unna yaarukum vitutu kuduka mudiyathu

Unna kandu pidikavae yanaku 27 years aachu innum unna vida mudiyathu en ivulavu love care pannura unna en kooda vachu unna avulavy love vare kudukanum

Ennoda life nee mattum podhu en life partner ah nee irrupiya thangamae unna thavara ippo yaarayum ennoda life ah ethuka mudiyala

Yanaku unna avulavu pidichuruku ma thangamae

Indha ulagathula ethuvum vendam nee mattum va thanagmae nama senthu irrunthu nama puthu life start pannalam 

Thanagmaeeeeeeee NAMA KALYANAM PANNIKALAMAAA   💞💞💞💞💞  NEEE yanakum naa UNNAKAKAVUM irrukalam


  `;

  useEffect(() => {
    if (!showStory) {
      setDisplayText("");
      return;
    }

    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(storyText.slice(0, index + 1));

      index++;

      if (index >= storyText.length) {
        clearInterval(typingInterval);
      }
    }, 35);

    return () => clearInterval(typingInterval);
  }, [showStory]);

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
            En vaalnal la yanaku kidacha best love needhan but nama late ah meet
            pannitom irrunthaalum kadaisi varaikum senthu irrukanumnu pola
            irruku
          </p>

          {/* Button */}
          <button
            onClick={() => setShowStory(true)}
            className="mt-8 rounded-xl bg-gradient-to-r from-[#ff3f86] to-[#ff619f] px-7 py-4 font-bold text-white shadow-[0_0_30px_rgba(255,63,134,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(255,63,134,0.6)]"
          >
            Enga Start pannomnu paakuriya 🎉
          </button>
        </div>

        {showStory && (
          <div
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 px-5 backdrop-blur-md"
            onClick={() => setShowStory(false)}
          >
            {/* Popup */}
            <div
              className="relative z-10 w-full max-w-[700px] max-h-[85vh] overflow-hidden rounded-[28px] border border-pink-400/30 bg-[#10051f] p-7 shadow-[0_0_80px_rgba(255,50,140,0.5)] sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[400px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[100px]" />

              {/* Close button */}
              <button
                onClick={() => setShowStory(false)}
                className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-pink-400/20 bg-white/5 text-white/70 transition hover:bg-pink-500/20 hover:text-white"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="relative z-10 text-center">
                <div className="mb-4 text-4xl">💕</div>

                <p className="script-font text-2xl text-[#ff5b9f]">
                  Our Beginning
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Enga Start Pannom? ❤️{" "}
                  <span> but kadaisi varaikum read pannu </span>
                </h2>

                <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#ff4f9b] to-transparent" />
              </div>

              {/* Typing text */}
              <div className="relative z-10 mt-7 max-h-[50vh] overflow-y-auto rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-left">
                <p className="whitespace-pre-line text-[15px] leading-8 text-white/85 sm:text-base">
                  {displayText}

                  <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-[#ff5b9f]" />
                </p>
              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-6 text-center">
                <p className="script-font text-xl text-[#ff72a9]">
                  And our story is still being written... ❤️
                </p>
              </div>
            </div>
          </div>
        )}
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
