import React from 'react'


const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header>
      <h1 className="text-3xl text-sky-900 text-center font-bold">
        Team Member Allocation
      </h1>
      <h3 className='font-poppins py-5 text-center' >
        {selectedTeam} has {teamMemberCount} members
      </h3>
    </header>
  );
}

export default Header