import React, { useState } from "react";
import Question from "./Question";
const Quiz = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [reactTest, setReactTest] = useState(false);
  const [mysqlTest, setMysqlTest] = useState(false);
  return (
    <div className="Quiz-container">
      {!isQuizStarted && (
        <div>
          <button
            onClick={() => {
              setIsQuizStarted(true);
              setReactTest(true);
            }}
            className="btn-start"
          >
            Start React Quiz
          </button>
          <button
            onClick={() => {
              setIsQuizStarted(true);
              setMysqlTest(true);
            }}
            className="btn-start"
          >
            Start MySQL Quiz
          </button>
        </div>
      )}
      {isQuizStarted && <Question reactTest={reactTest} mysqlTest={mysqlTest}/>}
    </div>
  );
};

export default Quiz;
