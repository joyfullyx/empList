import React, { useState } from "react";
import API from "./utils/API";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";
import { useEffect } from "react/cjs/react.development";

export default function App() {
  const [employees, setEmployees] = useState({
    allEmployees: [],
  });

  const getEmployees = () => {
    API.employees()
      .then((res) => {
        console.log("=== res.data ===", res.data);
        setEmployees({
          allEmployees: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="employeeList" style={styles.employeeListStyle}>
        {employees.allEmployees.map((allEmployees, id) => (
          <EmployeeCard
            pic={allEmployees.image}
            name={`${allEmployees.firstName} ${allEmployees.lastName}`}
            jobTitle={allEmployees.jobTitle}
            about={`"${allEmployees.about}"`}
            key={allEmployees._id}
            email={allEmployees.email}
            color={allEmployees.favoriteColor}
          />
        ))}
      </div>
    </>
  );
}

const styles = {
  employeeListStyle: {
    backgroundColor: "#f2f3f5",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
};

// Product Requirements
// -----------------------------

// - Use React to build a page that lists employees.
// - comp.png is provided for visual reference (UX info below)
// - index.js is your starting point.
// - employees.json includes the data, and is already imported into index.js
// - Build components with reusability in mind.

// UX Requirements
// ------------------------------
// - background color: #f2f3f5
// - card color: #ffffff
// - text color: #60646d
// - quote banner color: #dce0e8
// - profile pics are 150px circle
// - profile pics have 5px border of employee's favorite color
// - "Contact Me" button will initiate an email to employee's email address when clicked
// - "Contact Me" button is the employee's favorite color
// - (extra credit - styling) the "Contact Me" button color lightens 5% on hover
// - (extra credit - styling) the quote banner extends beyond the card horizontally

// Extra
// -------------------------------
// - you can fetch data from the following link instead of using data https://run.mocky.io/v3/ce160a84-83a8-45cf-9cf7-755d61acef54
