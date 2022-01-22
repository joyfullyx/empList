import React from "react";

export default function EmployeeCard({ pic, id, name, jobTitle, about }) {
  return (
    <>
      <div className="employeeCard">
        <img
          className="profilePicture"
          alt="employee profile picture"
          src={pic}
          key={id}
        ></img>
        <div clasName="nameTitle">
          <p>{name}</p>
          <p>{jobTitle}</p>
        </div>
        <div className="aboutQuote">
          <p>{about}</p>
        </div>
        <div className="contactButton">
          <button>CONTACT ME</button>
        </div>
      </div>
    </>
  );
}
