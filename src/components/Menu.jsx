
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <>
        <Navbar expand='lg' bg="danger" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Link className='nav-item nav-link' to='/'>Home</Link>
            <Link className='nav-item nav-link' to='/contacto'>Contacto</Link>
            
          </Nav>
          <Navbar.Brand className='' >
          <Link className='nav-item nav-link' to='/'>Happy Cake</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
    
      )

}

export default Menu