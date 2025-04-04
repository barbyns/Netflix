import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../img/logo.png'
const MyNav = function (props){
    return (
        <Navbar collapseOnSelect expand="lg"  bg={props.tema} data-bs-theme={props.tema}>
      <Container fluid = {true}>
        <Navbar.Brand href="#home"><img src={logo}
        height="30"
            alt="Netflix Logo"
            className="d-inline-block align-top"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">TV Show</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link href="#features"></Nav.Link>
          <NavDropdown title="KIDS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Profile </NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default MyNav