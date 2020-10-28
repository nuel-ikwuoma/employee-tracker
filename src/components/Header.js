import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand >
                    <Link style={{color: "white", textDecoration:"none"}} to="/">
                        Employee Register
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            <Nav.Link  >
                                <Link style={{textDecoration: "none"}} to="/form">
                                    Add Employee
                                </Link>
                            </Nav.Link>

                            <Nav.Link >
                                <Link style={{textDecoration: "none"}} to="/employeelist">
                                    Employee List
                                </Link>
                            </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
     );
}
 
export default Header;