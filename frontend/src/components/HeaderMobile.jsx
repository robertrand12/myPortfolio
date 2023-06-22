import { useState } from "react";
import { NavLink } from "react-router-dom";
import sunIcon from "../assets/icons/sun.png";

export default function HeaderMobile() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const handleVisibleMenu = () => {
    return setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <header className={`${isVisibleMenu ? " h-56" : " h-16"} duration-700`}>
      <div className="flex h-16 bg-[#1D1D1D] flex-row-reverse gap-4 items-center px-4 md:hidden fixed w-full z-30">
        <button
          type="button"
          className="w-7 h-7 py-5"
          onTouchEnd={handleVisibleMenu}
          onClick={handleVisibleMenu}
        >
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="toggle">
            <div className="bar bar--top" />
            <div className="bar bar--middle" />
            <div className="bar bar--bottom" />
          </label>
        </button>
        <img className="w-7 h-7" src={sunIcon} alt="sun" />
      </div>
      <ul
        className={`md:hidden flex flex-col justify-evenly items-center mt-16 fixed duration-700 ease-in-out bg-[#3F3F3F] w-full rounded-b-lg z-30  ${
          isVisibleMenu ? "top-0 opacity-95 h-40" : "-top-56 h-0"
        }  `}
      >
        <NavLink
          to="/"
          onTouchEnd={handleVisibleMenu}
          onClick={handleVisibleMenu}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-white/60"
          }
        >
          <li>Accueil</li>
        </NavLink>
        <div className="border-t-[0.5px] w-6/12 border-white/50" />
        <NavLink
          to="/resume"
          onTouchEnd={handleVisibleMenu}
          onClick={handleVisibleMenu}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-white/60"
          }
        >
          <li>Mon parcours</li>
        </NavLink>
        <div className="border-t-[0.5px] w-6/12 border-white/50" />
        <NavLink
          to="/my-works"
          onTouchEnd={handleVisibleMenu}
          onClick={handleVisibleMenu}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-white/60"
          }
        >
          <li>Mes réalisations</li>
        </NavLink>
        <div className="border-t-[0.5px] w-6/12 border-white/50" />
        <NavLink
          to="/contact"
          onTouchEnd={handleVisibleMenu}
          onClick={handleVisibleMenu}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-white/60"
          }
        >
          <li>Me contacter</li>
        </NavLink>
      </ul>
    </header>
  );
}
