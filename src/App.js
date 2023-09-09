import React from 'react';
import './App.css';
import MainSection from './Components/MainSection/MainSection';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import checklistData from './Components/checklistData';

const App = () => {
   // You can implement logic to check if all questions are checked
   const allQuestionsChecked = true; // Replace with your logic

   const sendReport = () => {
     // Implement the logic to send the report
   };

  return (
    <div className="">
     <Header />
     <MainSection checklistData={checklistData} />
     <Footer allQuestionsChecked={allQuestionsChecked} sendReport={sendReport}/>
    </div>
  );
}

export default App;
