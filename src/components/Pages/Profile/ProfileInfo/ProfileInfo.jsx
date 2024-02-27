import React from "react";
import CircleProgressBar from "../../../Shared/CircleProgressBar/CircleProgressBar";

export default function ProfileInfo() {
  return (
    <div className="bg-[var(--primary)] p-6 rounded-md text-left flex justify-between items-center">
      <div className="flex flex-col gap-3 text-left w-fit flex-shrink-0">
        <div className="font-bold text-3xl">Moamen Sherif</div>
        <div>moamenyt@gmail.com</div>
        <div>01020285982</div>
        <button className="w-fit bg-[var(--main)] px-6 py-2 rounded-lg">
          Edit Profile
        </button>
      </div>
      <div className="flex gap-20 w-full justify-center text-xl">
        <CircleProgressBar
          percentage={80}
          circleWidth={150}
          strokeWidth={10}
          center
          label="Overall Tasks"
        />
        <CircleProgressBar
          percentage={35}
          circleWidth={150}
          strokeWidth={10}
          center
          label="Today Tasks"
        />
        <CircleProgressBar
          percentage={15}
          circleWidth={150}
          strokeWidth={10}
          center
          label="Tasks Failed"
        />
      </div>
    </div>
  );
}
