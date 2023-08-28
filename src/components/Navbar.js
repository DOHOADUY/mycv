import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./style.css"
import logo from "../assets/image/logo.jpg"
function NavScrollExample() {
  return (

      <Container fluid className='header'>
          <Nav
            className="me-auto my-2 my-lg-0"
            >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action3">Project</Nav.Link>
            <Nav.Link href="#action4">About</Nav.Link>
            <Nav.Link href="#action5">Contact</Nav.Link>
            
            
          </Nav>
          
      </Container>


   
  );
}

export default NavScrollExample;