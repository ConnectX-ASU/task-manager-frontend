import React from "react";
import style from "./Border.module.css";
export default function Border({ children }) {
  return (
    <div
      className={`text-white ${style.Border} px-16 py-24 flex flex-col justify-center text-center items-center  `}
    >
      {children}
    </div>
  );
}
