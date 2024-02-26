import React from "react";
import style from "./Button.module.css";
export default function Button({ name }) {
  return <button class={`${style.btn}`}>{name}</button>;
}
