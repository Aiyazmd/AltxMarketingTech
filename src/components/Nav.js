import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar bg="brown" data-bs-theme="dark" style={{ "backgroundColor": "#023b6d" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <div style={{ "display": "flex", "paddingTop": "11px" }}>
                            <p style={{ "paddingTop": "5px", "paddingLeft": "5px" }}>altxmarketing</p>
                        </div>
                    </Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} exact to="/" className='NavLink'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='NavLink'>About</Nav.Link>
                        <Nav.Link as={Link} to="/service" className='NavLink'>Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className='NavLink'>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header