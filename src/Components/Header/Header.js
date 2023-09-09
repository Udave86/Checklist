import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  
    return (
      <Navbar bg="light">
        <Container>
          {/* Add your logo */}
          <Navbar.Brand>Logo</Navbar.Brand>
          {/* "Require Checklist" text */}
          <Navbar.Text>Require Checklist</Navbar.Text>
          {/* Progress indicator */}
          <Navbar.Text className="ml-auto">Progress: 0/3</Navbar.Text>
        </Container>
      </Navbar>
    );
  
}

export default Header