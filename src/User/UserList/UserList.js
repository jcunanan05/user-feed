import React from "react";

function UserList(props) {
  if (!props.users) return null;

  const renderUsers = props.users.map(({ name }) => {
    return (
      <li key={`${name.first} ${name.last}`}>{`${name.first} ${name.last}`}</li>
    );
  });

  return <ul>{renderUsers}</ul>;
}

export default UserList;
