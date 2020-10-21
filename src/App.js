import React, { useState } from 'react';
import {EmployeeList} from './components/employeeList'
import {EmployeeForm} from './components/employeeForm'
import {Selector} from './components/selector'
// import logo from './logo.svg';
import './App.css';

import initData from './initialData';

function App() {
  // for some weird reasons, i put the initial app state here
  // im a jnr dev, pls bear with me and refactor it, tnks!.
  const [employeeData, setEmployeeData] = useState(initData);
  return (
    <div className='App'>
      <Selector>
        <EmployeeList entries={employeeData} name='employeelist' />
        <EmployeeForm
          saveCallback={setEmployeeData}
          entries={employeeData}
          name='employeeform'
        />
      </Selector>
    </div>
  );
}

export default App;
