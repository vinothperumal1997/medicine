import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup } from 'react-bootstrap';
import { FaCartPlus, FaSearch  } from "react-icons/fa";
import './Navbarhead.css';
import { CiHeart } from 'react-icons/ci';

import { Link } from 'react-router-dom'; // Use Link to handle routing
import CartAction from './CartAction';
import { BiUser } from "react-icons/bi";
import WishAction from './Wishlist';

const NavScrollExample: React.FC = () => {
  const isMobile = window.innerWidth < 992;
  const isDesktop = window.innerWidth >= 992;
  


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <FaCartPlus className="icon-gradient" />
          <Navbar.Brand href="#" className="fs-1">Medicine</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Form className="main-search">
                <div className="ml-4">
                  <InputGroup>
                    <div className="d-flex align-items-center">
                      <div className="f-search d-inline-block">
                        <Form.Control
                          style={{ minWidth: '600px', maxWidth: '800px' }}
                          placeholder="Search for products"
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                        />
                        <FaSearch className="search-icon" />
                      </div>
                    </div>
                  </InputGroup>
                </div>
              </Form>
            </Nav>

            <div className="d-flex align-items-center">
              <div className="f-top d-inline-block">
              {/* <Nav.Link as={Link} to="/wishlistpage">

                <CiHeart className="nav-icon heart" />
                <span className="n-top cart-number">0</span>
              </Nav.Link>  */}
              <WishAction />

              </div>
              <BiUser  className="nav-icon profile" />
              <div className="f-top d-inline-block">
             <CartAction />

              </div>
            </div>

            {isMobile ? (
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link> 
                <Nav.Link as={Link} to="/about">About</Nav.Link> 
                <Nav.Link as={Link} to="/categories">Categories</Nav.Link> 
                <Nav.Link as={Link} to="/products">Products</Nav.Link> 
                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link> 




           
              </Nav>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isDesktop ? (
        <Navbar bg="light" expand="lg" >
              <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
      ) : null}

    </>
  );
};

export default NavScrollExample;
