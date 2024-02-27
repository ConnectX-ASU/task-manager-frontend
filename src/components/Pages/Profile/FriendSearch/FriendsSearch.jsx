import React from "react";
import FriendSearchItem from "../FriendSearchItem/FriendSearchItem";
import Button from "../../../Shared/Button/Button";

const friendList = [
  { name: "Hassan Mohammed", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Moamen Sherif", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Moamen Sherif", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Hassan Mohammed", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Moamen Sherif", count: 2 },
];

export default function FriendsSearch() {
  return (
    <div>
      <div className="flex gap-2 mb-5">
        <input type="text" className="w-full rounded-md bg-[var(--secondary)] px-5 py-3" placeholder="Search..." />
        <Button>Search</Button>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        {friendList.map((friend) => (
          <FriendSearchItem name={friend.name} />
        ))}
      </div>
    </div>
  );
}
