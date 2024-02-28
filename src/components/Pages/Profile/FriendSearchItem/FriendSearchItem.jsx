import React from "react";
import Button from "../../../Shared/Button/Button";

export default function FriendSearchItem({ name }) {
  return (
    <div className="px-6 py-3 bg-[var(--secondary)] rounded-md flex justify-between items-center">
      <span>{name}</span>{" "}
      <span className="flex gap-3">
        <Button>Send Request</Button>
      </span>
    </div>
  );
}
