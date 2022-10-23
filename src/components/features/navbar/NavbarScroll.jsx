import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Connection from "../login/Login";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import Logout from "../Logout/Logout";
import "./NavbarScroll.css"

function NavbarScroll() {
  const { user, setUser } = useContext(UserContext);
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img id="logo_id" src="data:image/png;base64,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" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            {/* <Nav.Link as={Link} to={"About"}>
              About
            </Nav.Link> */}
            <Nav.Link as={Link} to={"ContactUs"}>
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to={"/Courses"}>
              Free Courses
            </Nav.Link>
            <Nav.Link as={Link} to={"/Teachers"}>
              Teachers
            </Nav.Link>
          </Nav>
          <div>
        {user ? (
          <Logout user={user} setUser={setUser} />
        ) : (
          <Connection user={user} setUser={setUser} />
        )}
      </div>
        </Navbar.Collapse>
      </Container>
  
    </Navbar>
  );
}

export default NavbarScroll;
