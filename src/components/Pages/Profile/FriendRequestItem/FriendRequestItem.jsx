import React from "react";
import Button from "../../../Shared/Button/Button";

export default function FriendRequestItem({ name }) {
  return (
    <div className="px-6 py-3 bg-[var(--secondary)] rounded-md flex justify-between items-center">
      <span>{name}</span>{" "}
      <span className="flex gap-3">
        <Button>Accept</Button>
        <Button variant="red">Decline</Button>
      </span>
    </div>
  );
}
