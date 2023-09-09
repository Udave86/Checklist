import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import checklistData from '../checklistData';

const MainSection = () => {
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
    <div>
      {checklistData.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
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
  )
}

export default MainSection