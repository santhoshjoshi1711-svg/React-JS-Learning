import React from "react";
function ProfileCard({ name, role }) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  );
}

export default ProfileCard;
