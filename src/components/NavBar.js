import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import logo from "../imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="p-auto position-fixed">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto gap-2">
            <Link to="/React-Health-Care-" className="link nav-active">
              Home
            </Link>
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="link "
            >
              <NavDropdown.Item as={Link} to="/about">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Login/Register
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="link"
            >
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Service Details
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown" className="link">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/contact" className="link">
              Contact us
            </Link>
            <Nav.Link href="#home" className="link">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Link href="/contact">
              <button className="main-btn">
                Contact Us <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
