import React from 'react';
import Button from 'react-bootstrap/Button';

const Footer = ({  disabled, sendReport  }) => {
  return (
    <div className='d-flex justify-content-center'>
      <Button
      className=''
        variant="outline-primary"
        disabled={disabled} onClick={sendReport}
      >
        Save
      </Button>
      
    </div>
  )
}

export default Footer