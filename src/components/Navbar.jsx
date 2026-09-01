import { Heart } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const links = ["Home", "Our Story", "Moments", "Reasons", "Messages"];

  const navigate = useNavigate();

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto md:flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <div className="logo-font text-3xl text-white">
          For You <span className="text-[#ff4f9b]">♥</span>
        </div>

        <div className=" items-center justify-between gap-10 mdflex flex-wrap">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm md:mr-0 mr-10 font-semibold text-white/90 transition-colors duration-300 hover:text-[#ff5b9f]"
            >
              {link}
            </a>
          ))}

          {/* <NavLink
            to="/videos"
            className="text-sm font-semibold text-white/90 transition-colors duration-300 hover:text-[#ff5b9f]"
          >
            Videos
          </NavLink> */}
          <button
            onClick={() => navigate("/for-you")}
            className="rounded-full bg-gradient-to-r from-[#ff4a91] to-[#ff619f] px-7 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,75,150,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,75,150,0.55)]"
          >
            For You ❤️
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
