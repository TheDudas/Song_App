import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// navbar functionality. simple and plain as links to the other pages and files. 

// sets NavBar functions for links to the Playlist, Songs and About pages. 
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Playlist</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/songs">Songs</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
