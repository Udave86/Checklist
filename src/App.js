import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainSection from './Components/MainSection/MainSection';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import checklistData from './Components/checklistData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
   // You can implement logic to check if all questions are checked
   const allQuestionsChecked = true; // Replace with your logic
   const [progress, setProgress] = useState({ completed: 0, total: 2 });


   const sendReport = () => {
     // Implement the logic to send the report
     alert('Report sent to email');
   };

  return (
    <div className="body_wrapper">
     <Header progress={progress}/>
     <Container>
      <Row className='my-30'>
        <Col className='bg-white rounded20 shadow_custom '>
     <MainSection checklistData={checklistData}  />
        </Col>
      </Row>
      <Row>
      <Col>
      <Footer disabled={progress.completed !== progress.total} sendReport={sendReport} />
      </Col>
      </Row>  
     </Container>
    </div>
  );
}

export default App;
