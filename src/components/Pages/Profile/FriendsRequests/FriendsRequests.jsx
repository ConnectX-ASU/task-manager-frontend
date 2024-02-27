import React from 'react'
import FriendRequestItem from '../FriendRequestItem/FriendRequestItem'

const friendRequestsList = [
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Moamen Sherif", count: 2 },
  { name: "Hassan Mohammed", count: 2 },
  { name: "Moamen Sherif", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
  { name: "Hassan Mohammed", count: 2 },
  { name: "Mohammed Ahmed", count: 2 },
];

export default function FriendsRequests() {
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-4">
      {friendRequestsList.map(request => (
        <FriendRequestItem name={request.name}/>
      ))}
    </div>
  )
}
