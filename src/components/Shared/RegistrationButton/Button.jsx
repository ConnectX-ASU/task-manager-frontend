import React from "react";
import style from "./Button.module.css";
export default function Button({ name }) {
  return <button className={`${style.btn}`}>{name}</button>;
}
