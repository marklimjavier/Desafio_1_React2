import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navb = () => {
  return (
        <Navbar bg="danger" fixed="top" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Link to='/Casa' className='text-white text-decoration-none m-3' >🏠Home</Link>
            <Link to='/Contacto' className='text-white text-decoration-none m-3' >📙Contacto</Link>
          </Nav>
          <Link to='/' className='text-white text-decoration-none' >Happy Cake 🍰</Link>
        </Container>
      </Navbar>
  )
}

export default Navb