import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

let ID = 100;

const EmployeeForm = ({ entries, saveCallback }) => {
  const initState = { fname: '', lname: '', email: '', tel: 0, city: '' };
  const [formData, setFormData] = useState(initState);

  const changeCallback = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitCallback = (e) => {
    const computedState = {
      ...entries,
      employees: entries.employees.concat([{ id: ID++, ...formData }]),
    };
    saveCallback(computedState);
    setFormData(initState);
    e.preventDefault();
  };

  return (
    <div>

    <Container>

      <h2 className="my-2">Enter Employee Details</h2>

      <Form className="p-5" onSubmit={submitCallback}>
        <Form.Group controlId="formFirstName">
          <Form.Label >FirstName</Form.Label>
          {/* <p className="text-left lead">FirstName</p> */}
          <Form.Control 
            type="text"
            name="fname"
            placeholder="FirstName"
            onChange={changeCallback}
            value={formData.fname}
            required 
            />
        </Form.Group>

        <Form.Group>
          <p className="text-left lead">LastName</p>
          <Form.Control 
            type="text"
            name="lname"
            placeholder="LastName"
            onChange={changeCallback}
            value={formData.lname}
            required
          />
        </Form.Group>

        <Form.Group>
          <p className="text-left lead">Email</p>
          <Form.Control 
            type="email"
            name="email"
            placeholder="Email"
            onChange={changeCallback}
            value={formData.email}
            required
          />
        </Form.Group>

        <Form.Group>
          <p className="text-left lead">Telephone Number</p>
          <Form.Control 
            type="number"
            name="tel"
            placeholder="Phone Number"
            onChange={changeCallback}
            value={formData.tel}
            required
          />
        </Form.Group>
        
        <Form.Group>
          <p className="text-left lead">City</p>
          <Form.Control 
            type="text"
            name="city"
            placeholder="City"
            onChange={changeCallback}
            value={formData.city}
            reqiured
          />
        </Form.Group>

        <Button type="submit" variant="success">
          Submit
        </Button>

      </Form>
      
    </Container>


      {/* <form onSubmit={submitCallback}>
        <label>
          First Name
          <input
            type='text'
            name='fname'
            onChange={changeCallback}
            value={formData.fname}
          />
        </label>
        <label>
          Last Name
          <input
            type='text'
            name='lname'
            onChange={changeCallback}
            value={formData.lname}
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            onChange={changeCallback}
            value={formData.email}
          />
        </label>
        <label>
          Tel
          <input
            type='number'
            name='tel'
            onChange={changeCallback}
            value={formData.tel}
          />
        </label>
        <label>
          City
          <input
            type='text'
            name='city'
            onChange={changeCallback}
            value={formData.city}
          />
        </label>
        <button type='submit'>Submit</button>
      </form> */}
    </div>
  );
};

export { EmployeeForm };
