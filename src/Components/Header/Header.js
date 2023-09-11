import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Logo from '../../assets/logo.svg';

const Header = () => {
  
    return (
      <Navbar className='bg-transparent mb-30'>
        <Container fluid>
          {/* Add your logo */}
          <Navbar.Brand className='d-flex justify-content-center w-100'>
            <img src={Logo} alt='Tridhya Tech logo'
            style={{width: '270px', height:'50px'}}
            />
          </Navbar.Brand>
         
        </Container>
      </Navbar>
    );
  
}

export default Header