import React from 'react'

// import data from './constants/index.js'

// JSON.parse(localStorage.getItem("employeeList")) ||
const Employees = ({employees, selectedTeam, handleCardClick, handleTeamChange}) => {

  return (
    <main className="container px-4 py-6 mx-auto">
      <div className="flex flex-row justify-center mb-7 my-3">
        <div className="col-span-8">
          <select
            value={selectedTeam}
            onChange={handleTeamChange}
            className="w-[240px] outline-none md:max-w-[360px] p-2 border-y-2 border-sky-400"
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div className="flex flex-row">
        <div className=" columns-1 sm:columns-2">
          {employees.map((employee) => (
            <div
              key={employee.id}
              id={employee.id}
              onClick={handleCardClick}
              className={`${
                employee.teamName === selectedTeam
                  ? "border-2 border-sky-600/80"
                  : "shadow-lg shadow-stone-400/80"
              } p-5 cursor-pointer bg-sky-300 mb-5 rounded-[6px]`}
            >
              {/* logic for gender can be omitted, the images are in constant folder */}
              {employee.gender === "male" ? (
                <img src={employee.img} className="img-responsive" />
              ) : (
                <img src={employee.img} className="img-responsive" />
              )}
              <div className="card-body">
                <h5 className="card-title mt-5">
                  <b>Full Name:</b> {employee.fullName}
                </h5>
                <p className="card-text">
                  <b>Designation:</b> {employee.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Employees