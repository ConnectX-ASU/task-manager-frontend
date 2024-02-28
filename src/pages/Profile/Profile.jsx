import React from "react";
import ProfileInfo from "../../components/Pages/Profile/ProfileInfo/ProfileInfo";
import NavAndTabs from "../../components/Shared/NavsAndTabs/NavsAndTabs";
import FriendsList from "../../components/Pages/Profile/FriendsList/FriendsList";
import FirendsRequests from "../../components/Pages/Profile/FriendsRequests/FriendsRequests";
import FriendsSearch from "../../components/Pages/Profile/FriendSearch/FriendsSearch";

export default function Profile() {
  return (
    <div className="py-8 px-16 space-y-10">
      <ProfileInfo />
      <NavAndTabs
        defaultValue="friends-list"
        tabs={[
          {
            target: "friends-list",
            element: "Friends",
          },
          {
            target: "friends-requests",
            element: "Friends Requests",
          },
          {
            target: "friend-search",
            element: "Friend Search",
          },
        ]}
        tabsContent={[
          {
            id: "friends-list",
            element: <FriendsList />,
          },
          {
            id: "friends-requests",
            element: <FirendsRequests />,
          },
          {
            id: "friend-search",
            element: <FriendsSearch />,
          },
        ]}
      />
    </div>
  );
}
