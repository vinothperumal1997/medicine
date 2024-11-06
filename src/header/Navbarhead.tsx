import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup } from 'react-bootstrap';
import { FaCartPlus, FaSearch } from "react-icons/fa";
import './Navbarhead.css'
import { CiHeart, CiUser } from 'react-icons/ci';
import { MdAddShoppingCart } from 'react-icons/md';



function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        
      <FaCartPlus className="icon-gradient"/>

        <Navbar.Brand href="#" className='fs-1'>Medicine</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'  }}
            navbarScroll
          >
           
           <Form className='main-search'>
           <div className="ml-4" >

        <InputGroup >
        <div className="d-flex align-items-center">
        <div className="f-search d-inline-block">
          <Form.Control
          style={{minWidth: '600px', maxWidth: '800px' }}
            placeholder="Search for products"
            aria-label="Search"
            aria-describedby="basic-addon1"
            
          />
          <FaSearch className="search-icon"/>
          </div></div>
          

        </InputGroup>
        </div>
      </Form>
           
          </Nav>
          <div className="d-flex align-items-center">
          <div className="f-top d-inline-block">

          <CiHeart  className="nav-icon heart" />
          <span className="n-top cart-number">99</span>

          </div>
          <CiUser  className="nav-icon profile"/>
          <div className="f-top d-inline-block">

          <MdAddShoppingCart className="nav-icon cart" />
          <span className="n-top cart-number">5</span>
          </div>
          </div>
          {window.innerWidth < 992 ? 
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Categories</Nav.Link>
          <Nav.Link href="#pricing">Products</Nav.Link>
          <Nav.Link href="#pricing">Contacts</Nav.Link>

        </Nav>
       : null }

          
        </Navbar.Collapse>
      
        
        
      </Container>
      

    </Navbar>
    {window.innerWidth > 992 ?  <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Categories</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>

          </Nav>
        </Container>: null}
   
   
  

  </>
  );
}

export default NavScrollExample;