import React from "react";
import FriendsItem from "../FriendsItem/FriendsItem";

const friendList = [
  { name: "Moamen Sherif", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Hassan Mohammed", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Moamen Sherif", count: 2 },
  { name: "Moamen Sherif", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Hassan Mohammed", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
];

export default function FriendsList() {
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-4">
      {friendList.map((friend) => (
        <FriendsItem name={friend.name} tasksCount={friend.count} />
      ))}
    </div>
  );
}
