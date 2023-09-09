import React from 'react';
import Button from 'react-bootstrap/Button';

const Footer = ({ allQuestionsChecked, sendReport }) => {
  return (
    <div>
      <Button
        variant="primary"
        onClick={sendReport}
        disabled={!allQuestionsChecked}
      >
        Save
      </Button>
      
    </div>
  )
}

export default Footer