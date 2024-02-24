import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function PageHeaderProfile() {
  return (
    <Link to="/profile" className="flex gap-3 items-center cursor-pointer">
      <span className="text-3xl">
        <CgProfile />
      </span>
      <span>Moamen Sherif</span>
    </Link>
  );
}
