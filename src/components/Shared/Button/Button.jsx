import React from "react";

export default function Button({ children, variant }) {
  return (
    <button
      className={`${
        variant === "primary" || !variant
          ? "bg-[var(--main)]"
          : variant === "secondary"
          ? "border border-[var(--main)]"
          : variant === "red"
          ? "bg-[red]"
          : ""
      } rounded-md px-3 py-2`}
    >
      {children}
    </button>
  );
}
