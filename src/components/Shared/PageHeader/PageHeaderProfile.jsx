import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function PageHeaderProfile() {
  return (
    <Link to="/profile" className="flex gap-3 items-center cursor-pointer">
      <span className="text-xl sm:text-3xl">
        <CgProfile />
      </span>
      <span className="hidden lg:block">Moamen Sherif</span>
    </Link>
  );
}
