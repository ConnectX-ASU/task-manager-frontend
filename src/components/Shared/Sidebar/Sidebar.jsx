import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

export default function Sidebar() {
  function linkActiveClass({ isActive }) {
    let className = "p-3 rounded-lg block transition-all duration-500 hover:bg-[var(--main)]";
    if (isActive) className += " bg-[var(--main)]";

    return className;
  }

  return (
    <div className="w-[70px] py-7 px-4 h-screen sticky top-0 overflow-auto flex-shrink-0 bg-[var(--primary)] flex flex-col gap-6">
      <div className="w-100 flex-shrink-0">
        <img className="w-100" src="/assets/images/logo.png" alt="connect-x" />
      </div>
      <ul className="list-none p-0 h-full flex flex-col justify-center items-center text-center text-2xl gap-7">
        <li>
          <NavLink to="/" className={linkActiveClass}>
            <MdSpaceDashboard />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className={linkActiveClass}>
            <FaTasks />
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={linkActiveClass}>
            <ImStatsDots />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
