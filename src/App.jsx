import React, { useState, useEffect } from "react";
import data from "./components/constants/index";

import { Header, Footer, Employees } from "./components";
import "./App.css";

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse[localStorage.getItem("selectedTeam")] || "TeamB");
  
  const [employees, setEmployees] = useState(
    JSON.parse[localStorage.getItem("employeeList")] || data
  );

  useEffect(() => {
      localStorage.setItem('employeeList', JSON.stringify(employees));
   },[employees]);

     useEffect(() => {
       localStorage.setItem("selectedTeam", JSON.stringify(employees));
     }, [selectedTeam]);

  // useEffect(() => {
  //     setEmployees(data);
  // })

 // {
    /* {employees && employees !== undefined
  ? employees.map((employee) => (
      <p className="capitalize text-black">{employee.fullName}</p>
    ))
  : "not found"} */
//  }
  // the above logic is also working

  const handleTeamChange = (e) => {
    console.log(e.target.value);
    setSelectedTeam(e.target.value);
  };

  const handleCardClick = (e) => {
    const transformedEmployee = employees.map((employee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployee);
  };

  return (
    <div>
      <Header 
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => 
        employee.teamName === selectedTeam).length} />
      <Employees 
        employees={employees} 
        selectedTeam={selectedTeam} 
        handleCardClick={handleCardClick} 
        handleTeamChange={handleTeamChange} />
      <Footer />
    </div>
  );
};
export default App;
