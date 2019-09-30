import React from "react";
import UserCard from "../UserCard/UserCard";

import "./UserList.css";

function UserList(props) {
  if (!props.users) return null;

  const renderUsers = props.users.map(({ name, id, picture }) => {
    return <UserCard key={id} name={name} picture={picture} />;
  });

  return <ul className="user-list">{renderUsers}</ul>;
}

export default UserList;
