import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../context/authContext";

function NavBar() {
  const auth = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/schools">School Management System</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#" onClick={() => auth.logout()}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
