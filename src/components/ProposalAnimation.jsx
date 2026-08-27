import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Will You Marry Me?";

function ProposalAnimation() {
  const [showProposal, setShowProposal] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [showRing, setShowRing] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Start proposal scene
    const proposalTimer = setTimeout(() => {
      setShowProposal(true);
    }, 500);

    // Open ring box
    const boxTimer = setTimeout(() => {
      setBoxOpen(true);
    }, 3500);

    // Show ring
    const ringTimer = setTimeout(() => {
      setShowRing(true);
    }, 4300);

    // Final message
    const finalTimer = setTimeout(() => {
      setFinished(true);
    }, 6500);

    return () => {
      clearTimeout(proposalTimer);
      clearTimeout(boxTimer);
      clearTimeout(ringTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  return (
    <section className="proposal-section">
      {/* Background */}
      <div className="proposal-background" />

      {/* Floating particles */}
      <div className="proposal-particles">
        <span>♥</span>
        <span>♥</span>
        <span>✦</span>
        <span>♥</span>
        <span>✦</span>
        <span>♥</span>
        <span>✧</span>
        <span>♥</span>
      </div>

      {/* Roses / lights */}
      <div className="proposal-lights">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* =================================
          PROPOSAL TEXT
      ================================= */}

      {showProposal && (
        <div className="proposal-title">
          <motion.div
            className="proposal-script"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            A question from my heart...
          </motion.div>

          <div className="marry-text">
            {text.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 1 + index * 0.12,
                  duration: 0.5,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="proposal-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 3,
              duration: 0.8,
            }}
          >
            <span>♡</span>
          </motion.div>
        </div>
      )}

      {/* =================================
          COUPLE SCENE
      ================================= */}

      <div className="proposal-couple">
        {/* Girl */}
        <motion.div
          className="proposal-girl"
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
        >
          <div className="girl-hair" />

          <div className="girl-head">
            <div className="girl-face" />
          </div>

          <div className="girl-body">
            <div className="girl-dress" />
          </div>

          {/* surprised hands */}
          <div className="girl-hand girl-hand-left" />
          <div className="girl-hand girl-hand-right" />
        </motion.div>

        {/* Boy */}
        <motion.div
          className="proposal-boy"
          initial={{
            opacity: 0,
            x: -120,
            y: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <div className="boy-head">
            <div className="boy-hair" />
            <div className="boy-face" />
          </div>

          <div className="boy-body">
            {/* Jacket */}
            <div className="boy-jacket" />

            {/* Arm holding box */}
            <motion.div
              className="boy-arm"
              animate={{
                rotate: boxOpen ? -5 : 0,
              }}
              transition={{
                duration: 0.6,
              }}
            />
          </div>

          {/* Kneeling leg */}
          <div className="boy-knee" />

          {/* =================================
              RING BOX
          ================================= */}

          <motion.div
            className="ring-box-wrapper"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 3,
              duration: 0.6,
            }}
          >
            {/* Bottom box */}
            <div className="ring-box">
              <motion.div
                className="ring-box-lid"
                animate={{
                  rotateX: boxOpen ? -115 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />

              {/* Ring inside */}
              {showRing && (
                <motion.div
                  className="proposal-ring"
                  initial={{
                    opacity: 0,
                    scale: 0.2,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  💍
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =================================
          FINAL MESSAGE
      ================================= */}

      {finished && (
        <motion.div
          className="proposal-final"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p>Forever starts with you ❤️</p>

          <h3>I Love You</h3>

          <div className="final-hearts">❤️ 💕 💖 💗 ❤️</div>
        </motion.div>
      )}
    </section>
  );
}

export default ProposalAnimation;
