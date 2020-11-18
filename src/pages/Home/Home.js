import React, { Component } from 'react';
import { Navbar, Nav, FormControl  } from 'react-bootstrap';

import './Home.css'
import { Form } from 'formik';

const Home = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Accountico Logo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>

            
        </>
    )
}

export default Home;

