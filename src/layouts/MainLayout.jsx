import React from "react";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import { Outlet } from "react-router";
import PageHeader from "../components/Shared/PageHeader/PageHeader";

export default function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <PageHeader />
        <div className="py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
