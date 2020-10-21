// emplyee display component
import React from 'react';
const EmployeeList = ({ entries }) => {
  return (
    <div>
      <h1>Employees Details</h1>
      <div>
        <table cellpadding='0' cellspacing='0' border='0'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {entries.employees.map((entry) => (
              <tr>
                <td>{entry.id}</td>
                <td>{entry.fname}</td>
                <td>{entry.lname}</td>
                <td>{entry.email}</td>
                <td>{entry.tel}</td>
                <td>{entry.city}</td>
                <td className='action-btn'>
                  <button>Edit</button> :<button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { EmployeeList };
