import React from "react";
import style from "./Border.module.css";
export default function Border({ children }) {
  return (
    <div
      className={`text-white  ${style.Border} px-24 py-40 flex flex-col justify-center text-center items-center  `}
    >
      {children}
    </div>
  );
}
