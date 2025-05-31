import React, { useEffect, useState } from "react";
import "../index.css";
const Question = () => {
  const questions = [
    {
      question: "What is the purpose of useState in React?",
      options: [
        "To directly change the DOM",
        "To store and update component state",
        "To manage props",
        "To define static values",
      ],
      correctAnswer: "To store and update component state",
    },
    {
      question: "Which hook is used to perform side effects in React?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      correctAnswer: "useEffect",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "Java Syntax Extension",
        "JavaScript XML",
        "JavaScript Extension",
        "Java External Syntax",
      ],
      correctAnswer: "JavaScript XML",
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A browser extension for debugging",
        "An in-memory representation of the actual DOM",
        "The real DOM on the browser",
        "A React package for animations",
      ],
      correctAnswer: "An in-memory representation of the actual DOM",
    },
    {
      question:
        "Which of the following is used to pass data from parent to child in React?",
      options: ["State", "Hooks", "Props", "Context API"],
      correctAnswer: "Props",
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft === 0) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(15);
    }
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const checkAnswer = (option) => {
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(15);
    } else {
      alert("Wrong Answer");
    }
  };
  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>Quiz Completed</h2>
        <h3>Score: {score}</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Score: {score}</h1>
      <p>Time Left: {timeLeft}</p>
      Question {currentQuestionIndex + 1} of {questions.length}:
      <p className="question">{currentQuestion.question}</p>
      {currentQuestion.options.map((option, index) => (
        <button
          key={index}
          onClick={() => checkAnswer(option, index)}
          className="btn"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
