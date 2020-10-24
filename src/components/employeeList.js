// emplyee display component
import React from 'react';
import {Table, Container, Button} from 'react-bootstrap';

const EmployeeList = ({ entries }) => {
  return (
    <div>
      <h1 className="my-4">Employees Details</h1>
      <div>
        <Container>

          <Table striped bordered hover responsive variant="dark">
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
                    <Button variant="primary">Edit</Button> <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export { EmployeeList };
