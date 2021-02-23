import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Shcommerce</Navbar.Brand>
          </LinkContainer>

          <Nav className='mr-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i>Login
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
