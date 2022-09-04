import React from "react";
import "./header.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand href="/">
          <embed src="/logo.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse aria-controls="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#main">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Code</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Music</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link className="contact" href="#pricing">
            Contact Me!
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
