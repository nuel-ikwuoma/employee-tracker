import React, { useState } from 'react';

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
      <form onSubmit={submitCallback}>
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
      </form>
    </div>
  );
};

export { EmployeeForm };
