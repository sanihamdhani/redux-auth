import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

class NavbarComponent extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="text-light">
              Redux Auth
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Login
                </Link>

                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
