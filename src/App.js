import React, { useState } from "react";
import API from "./utils/API";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";
import { useEffect } from "react/cjs/react.development";

export default function App() {
  const [employees, setEmployees] = useState({
    allEmployees: [],
  });

  // fetch data
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
