import React from "react";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";

export default function PageHeaderTasks() {
  return (
    <div className="hidden sm:flex gap-4 flex-shrink-0 items-center border-2 p-2 rounded-xl border-[#737373]">
      <CircleProgressBar percentage={35} circleWidth={30} strokeWidth={3} />
      <div className="hidden lg:block">7 / 20 Today Tasks</div>
    </div>
  );
}
