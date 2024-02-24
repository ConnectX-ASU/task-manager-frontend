import React from "react";
import { useLocation } from "react-router";
import PageHeaderProfile from "./PageHeaderProfile";
import { FiLogOut } from "react-icons/fi";
import PageHeaderTasks from "./PageHeaderTasks";
import PageHeaderThemeSwitch from "./PageHeaderThemeSwitch";

const pageTitles = {
  "/"          : "Home",
  "/profile"   : "Profile",
  "/tasks"     : "Tasks",
  "/statistics": "Statistics",
};

export default function PageHeader() {
  const location = useLocation();

  return (
    <div className="bg-[var(--primary)] px-6 py-3 flex justify-between items-center gap-10">
      <div className="text-center w-full font-bold text-lg">
        {pageTitles[location.pathname]}
      </div>
      <PageHeaderTasks />
      <PageHeaderThemeSwitch />
      <div className="flex-shrink-0 flex gap-6 items-center">
        <PageHeaderProfile />
        <span className="text-3xl cursor-pointer">
          <FiLogOut />
        </span>
      </div>
    </div>
  );
}
