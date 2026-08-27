import { useState } from "react";
import { Gift, Heart, Sparkles } from "lucide-react";

function FinalBirthday() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section id="messages" className="final-birthday relative overflow-hidden">
      {/* Background decoration */}
      <div className="birthday-glow birthday-glow-left" />
      <div className="birthday-glow birthday-glow-right" />

      {/* Floating hearts */}
      <span className="birthday-float-heart heart-one">♥</span>
      <span className="birthday-float-heart heart-two">♥</span>
      <span className="birthday-float-heart heart-three">♥</span>
      <span className="birthday-float-heart heart-four">♥</span>

      {/* Confetti */}
      <span className="confetti confetti-one">◆</span>
      <span className="confetti confetti-two">●</span>
      <span className="confetti confetti-three">◆</span>
      <span className="confetti confetti-four">●</span>
      <span className="confetti confetti-five">◆</span>

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1250px] items-center justify-center px-6 py-20">
        {/* Balloons */}
        <div className="balloons balloons-left">
          <div className="balloon balloon-pink" />
          <div className="balloon balloon-light" />
          <div className="balloon balloon-red" />
          <div className="balloon balloon-small" />
        </div>

        {/* Main Content */}
        <div className="birthday-content">
          <div className="birthday-small-icon">
            <Sparkles size={18} />
          </div>

          <h2 className="birthday-heading">Happy Birthday, My Love! 🎉</h2>

          <div className="birthday-heart">
            <Heart size={20} className="fill-[#ef568c] text-[#ef568c]" />
          </div>

          <p className="birthday-message">
            On your special day, I just want you to know how much you mean to
            me. You are my today, my tomorrow, and my forever.
            <br />I love you endlessly! 💕
          </p>

          <button
            onClick={() => setShowMessage(true)}
            className="surprise-button"
          >
            <Gift size={18} />
            <span>A Special Surprise For You</span>
            <span>💌</span>
          </button>

          {/* Surprise message */}
          {showMessage && (
            <div className="surprise-message">
              <div className="surprise-icon">❤️</div>

              <p>
                You are the most beautiful part of my life.
                <br />
                Happy Birthday, my love! 🥰
              </p>

              <button
                onClick={() => setShowMessage(false)}
                className="close-surprise"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Cake */}
        <div className="birthday-cake-wrapper">
          <div className="cake-candles">
            <div className="candle">
              <span className="flame" />
            </div>

            <div className="candle">
              <span className="flame" />
            </div>

            <div className="candle">
              <span className="flame" />
            </div>
          </div>

          <div className="cake">
            <div className="cake-top">
              <span className="cake-drip drip-one" />
              <span className="cake-drip drip-two" />
              <span className="cake-drip drip-three" />
            </div>

            <div className="cake-middle">
              <span>♥</span>
              <span>♥</span>
              <span>♥</span>
            </div>

            <div className="cake-bottom">
              <span>♥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalBirthday;
