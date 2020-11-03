import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

let ID = 100;

const EmployeeForm = ({ employee, entries, saveCallback }) => {
  const initState = {fname: '', lname: '', email: '', tel: 0, city: '' };
  const [formData, setFormData] = useState(employee || initState);
  
  const changeCallback = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //
  const submitCallback = (e) => {
    e.preventDefault();
    let computedState;
    if(formData.id) {   // for editing
      computedState = {
        ...entries,
        employees: entries.employees.map((entry) =>
          entry.id === formData.id ? formData : entry
        ),
      };
      saveCallback(computedState);
    }else {
      computedState = {
        ...entries,
        employees: entries.employees.concat({id:ID++, ...formData})
      }
      saveCallback(computedState);
    }
    setFormData(initState);
  };

  return (
    <div>
      <Container>
        <h2 className='my-2'>Enter Employee Details</h2>

        <Form className='p-5' onSubmit={submitCallback}>
          <Form.Group controlId='formFirstName'>
            <p className='text-left lead'>FirstName</p>
            <Form.Control
              type='text'
              name='fname'
              placeholder='FirstName'
              onChange={changeCallback}
              value={formData.fname}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <p className='text-left lead'>LastName</p>
            <Form.Control
              type='text'
              name='lname'
              placeholder='LastName'
              onChange={changeCallback}
              value={formData.lname}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <p className='text-left lead'>Email</p>
            <Form.Control
              type='email'
              name='email'
              placeholder='Email'
              onChange={changeCallback}
              value={formData.email}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <p className='text-left lead'>Telephone Number</p>
            <Form.Control
              type='number'
              name='tel'
              placeholder='Phone Number'
              onChange={changeCallback}
              value={formData.tel}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <p className='text-left lead'>City</p>
            <Form.Control
              type='text'
              name='city'
              placeholder='City'
              onChange={changeCallback}
              value={formData.city}
              reqiured
            />
          </Form.Group>

          <Button type='submit' variant='success'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export { EmployeeForm };
