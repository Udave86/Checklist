import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import checklistData from '../checklistData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DownArrow from '../../assets/down.svg';

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

  const calculateProgress = () => {
    let total = 0;
    let completed = 0;

    checklistData.forEach(section => {
      total += section.questions.length;
      section.questions.forEach(question => {
        if (selectedOptions[section.title]?.[question]) {
          completed += 1;
        }
      });
    });

    return { total, completed };
  };

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
      <div className='d-flex justify-content-end align-items-center'>
      <span className=' fst-italic'>
                {progressTitle} :
                
              </span>
              <div className='ms-3 rounded_corner'>
              <span style={{fontSize: '16px',fontWeight: 'bold', color: '#00517C'}}>
              {calculateProgress().completed}
              </span>
              <span style={{fontSize: '14px', color: '#06B6E8'}}>
              /{calculateProgress().total} 
              </span>
                
              </div>
              
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
    <Row>
    <div className="scroll-down-text d-flex justify-content-end" >
      <span style={{fontSize: '14px', color: '#d5d5d5', }}>
            Scroll
      </span>
      <img src={DownArrow} alt='down arrow' />
    </div>
    </Row>
    </div>
    
    </>
  )
}

export default MainSection