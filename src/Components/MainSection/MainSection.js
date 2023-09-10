import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import checklistData from '../checklistData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainSection = ({progress}) => {
  //Module name
  const titleModuleName = 'Responsive Checklist';
  const progressTitle = 'Progress';

  // Use state to manage checkbox selections
  const [selectedOptions, setSelectedOptions] = useState({});

    // Load checkbox selections from localStorage on component mount
  useEffect(() => {
    const storedSelections = JSON.parse(localStorage.getItem('selectedOptions')) || {};
    setSelectedOptions(storedSelections);
  }, []);

  const handleOptionChange = (title, question) => {
    const updatedSelections = {
      ...selectedOptions,
      [title]: {
        ...selectedOptions[title],
        [question]: !selectedOptions[title]?.[question] || false,
      },
    };

    // Save checkbox selections to localStorage
    localStorage.setItem('selectedOptions', JSON.stringify(updatedSelections));

    setSelectedOptions(updatedSelections);
  };


  return (
    <>
    
    <div className='p-30'>
    {/* title about page */}
    <Row>
      <Col>
        <span className='fs-5 fw-bold'>
          {titleModuleName}
        </span>
      </Col>
      <Col>
      <div className='d-flex justify-content-end'>
        <span className=' fst-italic'>
          {progressTitle} :
          {progress?.completed}/{progress?.total} Completed
        </span>
        </div>
      </Col>
    </Row>
    
    <Row >
      <Col >
      <hr style={{borderColor: '#c5c5c5'}}/>
       <div className='mt-30 scrollbar'>
      {checklistData.map((section) => (
        <div key={section.title} className='mb-4'>
          <h2 className='fs-18 fw-bold'>{section.title}</h2>
          {section.questions.map((question) => (
            <Question
              key={question}
              text={question}
              selected={selectedOptions[section.title]?.[question] || false}
              onChange={() => handleOptionChange(section.title, question)}
            />
          ))}
        </div>
      ))}
      </div>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default MainSection