import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function CommonHeader() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-sm-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/meet">Meet</Nav.Link>
            <Nav.Link href="/meet/detail">Meet Detail</Nav.Link>
            <Nav.Link href="/meet/open">Meet Open</Nav.Link>
            <NavDropdown
              title="Login"
              id="basic-nav-dropdown"
              className="mr-sm-2"
            >
              <NavDropdown.Item href="/user/signin">Sign In</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/user/signup">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
