import React, { useState } from 'react';
import {EmployeeList} from './components/employeeList'
import {EmployeeForm} from './components/employeeForm'
import {Selector} from './components/selector';
import Header from './components/Header';
// import logo from './logo.svg';
import './App.css';
//router imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import initData from './initialData';

function App() {
  // for some weird reasons, i put the initial app state here
  // im a jnr dev, pls bear with me and refactor it, tnks!.
  const [employeeData, setEmployeeData] = useState(initData);
  return (
    <div className='App'>
      <Router>
      <Header />
        <Switch>


          <Route path="/employeelist">
            <EmployeeList entries={employeeData} name='employeelist' />
          </Route>

          <Route path="/form">
            <EmployeeForm
              saveCallback={setEmployeeData}
              entries={employeeData}
              name='employeeform'
            />
          </Route>

          <Route path="/">
            <h1>Home page</h1>
            <p>I am still learning design, you can help design the home page Sire 😄</p>
          </Route>

        </Switch>
      </Router>    
    </div>
  );
}

export default App;
