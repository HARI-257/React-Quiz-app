import React, { useState } from "react";
import Question from "./Question";
const Quiz = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div className="Quiz-container">
      
      {!isQuizStarted && (
        <button onClick={() => setIsQuizStarted(true)} className="btn-start" >Start Quiz</button>
      )}
      {
        isQuizStarted && (
          <Question />
        )
      }
    </div>
  );
};

export default Quiz;
