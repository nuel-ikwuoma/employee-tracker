// emplyee display component
import React, { useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { EmployeeEditor } from './employeeEditor';

const EmployeeList = ({ entries, saveCallback }) => {
  const [edit, setEdit] = useState(false);
  const [curEditing, setCurEditing] = useState({});
  //
  const startEditing = (employee) => {
    setEdit(true);
    setCurEditing(employee);
  };

  const endEditing = () => setEdit(false);

  const deleteCallback = (employee) => {
    const computedState = {
      ...entries,
      employees: entries.employees.filter((emp) => emp.id !== employee.id),
    };
    saveCallback(computedState);
  };
  if (edit) {
    return (
      <Container>
        <EmployeeEditor
          employee={curEditing}
          entries={entries}
          saveCallback={saveCallback}
          endEditing={endEditing}
        />
      </Container>
    );
  } else {
    return (
      <div>
        <h1 className='my-4'>Employees Details</h1>
        <div>
          <Container>
            <Table striped bordered hover responsive variant='dark'>
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
                  <tr key={entry.id}>
                    <td>{entry.id}</td>
                    <td>{entry.fname}</td>
                    <td>{entry.lname}</td>
                    <td>{entry.email}</td>
                    <td>{entry.tel}</td>
                    <td>{entry.city}</td>
                    <td className='action-btn'>
                      <Button
                        variant='primary'
                        onClick={() => startEditing(entry)}
                      >
                        Edit
                      </Button>{' '}
                      <Button
                        variant='danger'
                        onClick={() => deleteCallback(entry)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    );
  }
};

export { EmployeeList };
