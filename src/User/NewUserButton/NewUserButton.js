import React from "react";

function NewUserButton({ onFetchUser }) {
  const handleOnClick = () => onFetchUser();

  return (
    <button className="button" onClick={handleOnClick}>
      Get New User
    </button>
  );
}

export default NewUserButton;
