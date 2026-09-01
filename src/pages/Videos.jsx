import React from "react";
import VideoMemories from "../components/VideoMemories";
import { ChevronDown, Heart, Play } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Videos() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <NavLink to="/" className="logo-font text-3xl text-white">
            For You <span className="text-[#ff4f9b]">♥</span>
          </NavLink>

          <div className="hidden items-center gap-10 md:flex">
            <NavLink
              to="/"
              className="text-sm font-semibold text-white/90 transition-colors duration-300 hover:text-[#ff5b9f]"
            >
              Home
            </NavLink>

            <button
              onClick={() => navigate("/for-you")}
              className="rounded-full bg-gradient-to-r from-[#ff4a91] to-[#ff619f] px-7 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,75,150,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,75,150,0.55)]"
            >
              For You ❤️
            </button>
          </div>
        </nav>
      </header>
      <VideoMemories />
    </div>
  );
}

export default Videos;
