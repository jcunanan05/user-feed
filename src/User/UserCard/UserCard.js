import React from "react";
import "./UserCard.css";

function UserCard({ name, picture }) {
  const fullName = `${name.first} ${name.last}`;

  return (
    <li className="user-card">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={picture.large} alt={fullName} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{fullName}</p>
            <p className="subtitle is-6">{`@${name.last}`}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default UserCard;
