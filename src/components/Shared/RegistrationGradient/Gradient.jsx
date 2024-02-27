import React from "react";
import style from "./Gradient.module.css";
export default function Gradient() {
  return (
    <>
      <div className={`${style.top_gradient}`}></div>
      <div className={`${style.bottom_gradient}`}></div>
    </>
  );
}
