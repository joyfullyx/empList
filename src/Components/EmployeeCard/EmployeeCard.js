import React from "react";
import "./EmployeeCard.css";

export default function EmployeeCard({
  pic,
  name,
  jobTitle,
  about,
  email,
  _id,
  color,
}) {
  const colors = {
    favoriteColor: { color },
  };

  return (
    <>
      <div className="employeeCard">
        <div className="image">
          <img
            className="profilePicture"
            alt="employee headshot"
            src={pic}
            id={_id}
          ></img>
        </div>
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="title">
          <p>{jobTitle}</p>
        </div>
        <div className="aboutQuote" id="quoteDiv">
          <p>{about}</p>
        </div>
        <div className="contactButton">
          <button
            className="button"
            onClick={() => (window.location = `mailto:${email}`)}
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </>
  );
}
