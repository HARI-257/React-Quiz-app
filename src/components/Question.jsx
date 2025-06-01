import React, { useEffect, useState } from "react";
import "../index.css";
const Question = ({ reactTest, mysqlTest }) => {
  const mysqlQuestions = [
    {
      question: "What is MySQL?",
      options: [
        "A programming language",
        "A relational database management system",
        "An operating system",
        "A web server",
      ],
      correctAnswer: "A relational database management system",
    },
    {
      question: "Which SQL command is used to retrieve data from a database?",
      options: ["INSERT", "DELETE", "SELECT", "UPDATE"],
      correctAnswer: "SELECT",
    },
    {
      question:
        "Which SQL statement is used to remove a table from the database?",
      options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "CLEAR TABLE"],
      correctAnswer: "DROP TABLE",
    },
    {
      question: "How can you fetch unique values from a column?",
      options: ["UNIQUE", "DISTINCT", "SINGLE", "UNO"],
      correctAnswer: "DISTINCT",
    },
    {
      question: "Which SQL command is used to insert new data into a database?",
      options: ["ADD", "INSERT INTO", "UPDATE", "CREATE"],
      correctAnswer: "INSERT INTO",
    },
    {
      question: "Which clause is used to filter records in SQL?",
      options: ["WHERE", "FILTER", "HAVING", "ORDER BY"],
      correctAnswer: "WHERE",
    },
    {
      question: "Which function returns the current date and time in MySQL?",
      options: ["CURRENT_DATE()", "NOW()", "GETDATE()", "SYSDATE()"],
      correctAnswer: "NOW()",
    },
    {
      question: "Which SQL statement is used to update data in a database?",
      options: ["MODIFY", "CHANGE", "UPDATE", "SET"],
      correctAnswer: "UPDATE",
    },
    {
      question:
        "Which SQL clause is used to group rows that have the same values?",
      options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
      correctAnswer: "GROUP BY",
    },
    {
      question:
        "Which function is used to count the number of rows in a SQL query?",
      options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
      correctAnswer: "COUNT()",
    },
    {
      question: "Which SQL statement is used to delete data from a database?",
      options: ["REMOVE", "DROP", "DELETE", "CLEAR"],
      correctAnswer: "DELETE",
    },
    {
      question: "Which keyword is used to create a new table in SQL?",
      options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "ADD TABLE"],
      correctAnswer: "CREATE TABLE",
    },
    {
      question: "Which data type is used to store large text in MySQL?",
      options: ["VARCHAR", "TEXT", "STRING", "CHAR"],
      correctAnswer: "TEXT",
    },
    {
      question: "Which operator is used to test for NULL values in SQL?",
      options: ["=", "IS NULL", "==", "NULL"],
      correctAnswer: "IS NULL",
    },
    {
      question: "Which SQL clause is used to filter groups in SQL?",
      options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
      correctAnswer: "HAVING",
    },
    {
      question: "Which SQL statement is used to create a new database?",
      options: [
        "CREATE DATABASE",
        "NEW DATABASE",
        "MAKE DATABASE",
        "ADD DATABASE",
      ],
      correctAnswer: "CREATE DATABASE",
    },
    {
      question: "Which keyword is used to remove duplicate records in SQL?",
      options: ["UNIQUE", "DISTINCT", "DIFFERENT", "ONLY"],
      correctAnswer: "DISTINCT",
    },
    {
      question: "Which SQL function returns the highest value in a column?",
      options: ["MAX()", "HIGH()", "TOP()", "UPPER()"],
      correctAnswer: "MAX()",
    },
    {
      question: "Which SQL function returns the lowest value in a column?",
      options: ["MIN()", "LOW()", "BOTTOM()", "LOWER()"],
      correctAnswer: "MIN()",
    },
    {
      question:
        "Which SQL function returns the average value of a numeric column?",
      options: ["AVG()", "AVERAGE()", "MEAN()", "MID()"],
      correctAnswer: "AVG()",
    },
    {
      question: "Which SQL function returns the sum of a numeric column?",
      options: ["TOTAL()", "SUM()", "ADD()", "AGGREGATE()"],
      correctAnswer: "SUM()",
    },
    {
      question:
        "Which SQL clause is used to specify the condition for the rows to be returned?",
      options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
      correctAnswer: "WHERE",
    },
    {
      question: "Which SQL keyword is used to retrieve only different values?",
      options: ["UNIQUE", "DISTINCT", "DIFFERENT", "ONLY"],
      correctAnswer: "DISTINCT",
    },
    {
      question:
        "Which SQL statement is used to modify existing records in a table?",
      options: ["MODIFY", "CHANGE", "UPDATE", "SET"],
      correctAnswer: "UPDATE",
    },
    {
      question: "Which SQL clause is used to sort the result-set?",
      options: ["SORT BY", "ORDER", "ORDER BY", "ARRANGE BY"],
      correctAnswer: "ORDER BY",
    },
    {
      question:
        "Which SQL statement is used to delete all records from a table without deleting the table?",
      options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
      correctAnswer: "TRUNCATE",
    },
    {
      question:
        "Which SQL keyword is used to retrieve data from multiple tables?",
      options: ["JOIN", "MERGE", "UNION", "COMBINE"],
      correctAnswer: "JOIN",
    },
    {
      question:
        "Which SQL clause is used to combine rows from two or more tables?",
      options: ["JOIN", "MERGE", "UNION", "COMBINE"],
      correctAnswer: "JOIN",
    },
    {
      question:
        "Which SQL statement is used to add a new column to an existing table?",
      options: ["ADD COLUMN", "NEW COLUMN", "INSERT COLUMN", "ALTER TABLE"],
      correctAnswer: "ALTER TABLE",
    },
    {
      question: "Which SQL function is used to return the length of a string?",
      options: ["LENGTH()", "SIZE()", "STRLEN()", "COUNT()"],
      correctAnswer: "LENGTH()",
    },
    {
      question: "Which SQL function is used to convert a string to uppercase?",
      options: ["UPPER()", "TOUPPER()", "CAPS()", "UPCASE()"],
      correctAnswer: "UPPER()",
    },
    {
      question: "Which SQL function is used to convert a string to lowercase?",
      options: ["LOWER()", "TOLOWER()", "SMALL()", "DOWNCASE()"],
      correctAnswer: "LOWER()",
    },
    {
      question:
        "Which SQL clause is used to limit the number of rows returned?",
      options: ["LIMIT", "TOP", "ROWNUM", "FETCH"],
      correctAnswer: "LIMIT",
    },
    {
      question: "Which SQL statement is used to rename a table?",
      options: ["RENAME TABLE", "ALTER TABLE", "CHANGE TABLE", "MODIFY TABLE"],
      correctAnswer: "RENAME TABLE",
    },
    {
      question:
        "Which SQL function is used to round a number to the nearest integer?",
      options: ["ROUND()", "CEIL()", "FLOOR()", "TRUNCATE()"],
      correctAnswer: "ROUND()",
    },
    {
      question: "Which SQL function is used to return the current date?",
      options: ["CURRENT_DATE()", "GETDATE()", "NOW()", "SYSDATE()"],
      correctAnswer: "CURRENT_DATE()",
    },
    {
      question: "Which SQL function is used to return the current time?",
      options: ["CURRENT_TIME()", "GETTIME()", "NOW()", "SYSDATE()"],
      correctAnswer: "CURRENT_TIME()",
    },
    {
      question:
        "Which SQL function is used to return the current date and time?",
      options: ["NOW()", "CURRENT_TIMESTAMP()", "GETDATETIME()", "SYSDATE()"],
      correctAnswer: "NOW()",
    },
    {
      question:
        "Which SQL clause is used to specify the condition for the groups to be returned?",
      options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
      correctAnswer: "HAVING",
    },
    {
      question: "Which SQL statement is used to create a new user in MySQL?",
      options: ["CREATE USER", "NEW USER", "ADD USER", "REGISTER USER"],
      correctAnswer: "CREATE USER",
    },
    {
      question:
        "Which SQL statement is used to grant privileges to a user in MySQL?",
      options: ["GRANT", "ALLOW", "PERMIT", "ENABLE"],
      correctAnswer: "GRANT",
    },
    {
      question:
        "Which SQL statement is used to revoke privileges from a user in MySQL?",
      options: ["REVOKE", "REMOVE", "DENY", "DISABLE"],
      correctAnswer: "REVOKE",
    },
    {
      question:
        "Which SQL clause is used to specify the condition for the rows to be updated?",
      options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
      correctAnswer: "WHERE",
    },
    {
      question: "Which SQL function is used to concatenate two strings?",
      options: ["CONCAT()", "MERGE()", "JOIN()", "COMBINE()"],
      correctAnswer: "CONCAT()",
    },
    {
      question:
        "Which SQL function is used to find the position of a substring in a string?",
      options: ["POSITION()", "LOCATE()", "FIND()", "SEARCH()"],
      correctAnswer: "LOCATE()",
    },
    {
      question:
        "Which SQL function is used to extract a substring from a string?",
      options: ["SUBSTRING()", "EXTRACT()", "SLICE()", "CUT()"],
      correctAnswer: "SUBSTRING()",
    },
    {
      question:
        "Which SQL function is used to replace all occurrences of a substring in a string?",
      options: ["REPLACE()", "SUBSTITUTE()", "SWAP()", "CHANGE()"],
      correctAnswer: "REPLACE()",
    },
    {
      question: "Which of the following is a valid MySQL storage engine?",
      options: ["InnoDB", "MyStore", "MyEngine", "DataDB"],
      correctAnswer: "InnoDB",
    },
    {
      question: "Which command is used to see all the databases in MySQL?",
      options: [
        "SHOW DATABASES;",
        "DISPLAY DATABASES;",
        "LIST DATABASES;",
        "GET DATABASES;",
      ],
      correctAnswer: "SHOW DATABASES;",
    },
    {
      question:
        "Which MySQL command is used to change the structure of an existing table?",
      options: ["MODIFY TABLE", "ALTER TABLE", "CHANGE TABLE", "UPDATE TABLE"],
      correctAnswer: "ALTER TABLE",
    },
  ];
  const reactQuestions = [
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
    {
      question: "What is a component in React?",
      options: [
        "A type of function",
        "A reusable piece of UI",
        "A CSS style",
        "A JSON object",
      ],
      correctAnswer: "A reusable piece of UI",
    },
    {
      question: "Which method is used to render React elements to the DOM?",
      options: ["render()", "ReactDOM.render()", "React.render()", "display()"],
      correctAnswer: "ReactDOM.render()",
    },
    {
      question:
        "Which hook allows you to access lifecycle methods in functional components?",
      options: ["useEffect", "useState", "useLifecycle", "useRef"],
      correctAnswer: "useEffect",
    },
    {
      question: "What is a controlled component?",
      options: [
        "A component controlled by Redux",
        "A component with state managed by the DOM",
        "A component with state managed by React",
        "A component with no state",
      ],
      correctAnswer: "A component with state managed by React",
    },
    {
      question: "Which of these is not a hook in React?",
      options: ["useFetch", "useState", "useRef", "useContext"],
      correctAnswer: "useFetch",
    },
    {
      question: "What is the default port for create-react-app?",
      options: ["3000", "8080", "5000", "8000"],
      correctAnswer: "3000",
    },
    {
      question: "Which of the following is true about React keys?",
      options: [
        "They are used to encrypt data",
        "They help identify which items have changed",
        "They are required on all elements",
        "They must always be numbers",
      ],
      correctAnswer: "They help identify which items have changed",
    },
    {
      question: "What is prop drilling in React?",
      options: [
        "A method to pass props directly",
        "Passing data through many layers of components",
        "Using hooks to manage props",
        "A React performance optimization",
      ],
      correctAnswer: "Passing data through many layers of components",
    },
    {
      question: "What is the return type of useState?",
      options: [
        "A function",
        "An object",
        "An array with two elements",
        "A single value",
      ],
      correctAnswer: "An array with two elements",
    },
    {
      question: "Which React method is used to create a context?",
      options: [
        "createContext()",
        "useContext()",
        "makeContext()",
        "createProvider()",
      ],
      correctAnswer: "createContext()",
    },
    {
      question: "What does the useRef hook do?",
      options: [
        "Stores a reference to a DOM element or a mutable value",
        "Refreshes the component",
        "Re-renders the component",
        "Returns a stateful value",
      ],
      correctAnswer: "Stores a reference to a DOM element or a mutable value",
    },
    {
      question: "React uses a _____-based approach.",
      options: ["Component", "Module", "File", "Template"],
      correctAnswer: "Component",
    },
    {
      question: "Which file typically serves as the root component?",
      options: ["App.js", "Index.js", "Main.js", "Root.js"],
      correctAnswer: "App.js",
    },
    {
      question: "Which of the following is NOT true about JSX?",
      options: [
        "JSX is a syntax extension for JavaScript",
        "JSX must have one parent element",
        "JSX is required in all React apps",
        "JSX can include expressions in curly braces",
      ],
      correctAnswer: "JSX is required in all React apps",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      correctAnswer: "Facebook",
    },
    {
      question: "What will `setState` do in a class component?",
      options: [
        "Update the component immediately",
        "Batch and schedule a UI update",
        "Reset the component state",
        "Only log changes",
      ],
      correctAnswer: "Batch and schedule a UI update",
    },
    {
      question: "In which lifecycle method would you make an API call?",
      options: [
        "componentDidMount",
        "componentWillUnmount",
        "render",
        "constructor",
      ],
      correctAnswer: "componentDidMount",
    },
    {
      question: "Which of the following is used to handle routing in React?",
      options: ["React Router", "React Navigation", "ReactDOM", "React Path"],
      correctAnswer: "React Router",
    },
    {
      question: "What does lifting state up mean?",
      options: [
        "Passing props down the component tree",
        "Moving state to a common ancestor",
        "Using state in useEffect",
        "Using global state instead of local",
      ],
      correctAnswer: "Moving state to a common ancestor",
    },
    {
      question:
        "What is the correct way to bind a method in a class component?",
      options: [
        "this.method.bind(this)",
        "method.bind(this)",
        "this.bind(method)",
        "this.method()",
      ],
      correctAnswer: "this.method.bind(this)",
    },
    {
      question: "What happens when you update state using useState?",
      options: [
        "The component re-renders",
        "Only the updated variable changes",
        "Nothing changes",
        "It triggers a full page reload",
      ],
      correctAnswer: "The component re-renders",
    },
    {
      question: "What is the purpose of React.Fragment?",
      options: [
        "To group multiple elements without adding extra nodes",
        "To replace <div> tags",
        "To format JSX",
        "To debug React components",
      ],
      correctAnswer: "To group multiple elements without adding extra nodes",
    },
    {
      question: "How do you pass a function to a child component?",
      options: ["Via state", "Via props", "Using useEffect", "With context"],
      correctAnswer: "Via props",
    },
    {
      question:
        "Which React hook is used to optimize performance by memoizing functions?",
      options: ["useCallback", "useMemo", "useEffect", "useReducer"],
      correctAnswer: "useCallback",
    },
    {
      question: "What does useMemo return?",
      options: [
        "A memoized callback function",
        "A memoized value",
        "A reference object",
        "A new component",
      ],
      correctAnswer: "A memoized value",
    },
    {
      question: "Which keyword is used to export a component as default?",
      options: [
        "export default",
        "module.exports",
        "exports",
        "return default",
      ],
      correctAnswer: "export default",
    },
    {
      question: "How do you conditionally render in JSX?",
      options: [
        "Using if-else",
        "Using ternary or && operator",
        "With try-catch",
        "Using switch-case only",
      ],
      correctAnswer: "Using ternary or && operator",
    },
    {
      question: "Which hook should you use to manage complex state logic?",
      options: ["useReducer", "useEffect", "useMemo", "useContext"],
      correctAnswer: "useReducer",
    },
    {
      question: "What does `key` help with in a list of elements?",
      options: [
        "Styling the list",
        "Tracking changes and improving performance",
        "Assigning unique names",
        "Adding event listeners",
      ],
      correctAnswer: "Tracking changes and improving performance",
    },
    {
      question: "What is the primary role of ReactDOM?",
      options: [
        "Handling HTTP requests",
        "Rendering elements to the DOM",
        "Defining React components",
        "Providing styling utilities",
      ],
      correctAnswer: "Rendering elements to the DOM",
    },
    {
      question: "What is the use of `useMemo` in React?",
      options: [
        "To perform side effects",
        "To memoize expensive calculations",
        "To create refs",
        "To define routes",
      ],
      correctAnswer: "To memoize expensive calculations",
    },
    {
      question: "Which of these is a correct way to lift state up in React?",
      options: [
        "Move the state to the common parent component",
        "Use Redux in all components",
        "Share state using local storage",
        "Duplicate the state in both components",
      ],
      correctAnswer: "Move the state to the common parent component",
    },
    {
      question: "How do you prevent a component from re-rendering?",
      options: [
        "Using `shouldComponentUpdate` or `React.memo`",
        "Using `useEffect`",
        "Calling `preventDefault()`",
        "Removing the return statement",
      ],
      correctAnswer: "Using `shouldComponentUpdate` or `React.memo`",
    },
    {
      question:
        "Which lifecycle method is invoked immediately after a component is mounted?",
      options: [
        "componentWillMount",
        "componentDidMount",
        "shouldComponentUpdate",
        "render",
      ],
      correctAnswer: "componentDidMount",
    },
    {
      question: "What does the `key` prop do in React lists?",
      options: [
        "It styles the elements",
        "It identifies which items have changed",
        "It makes items draggable",
        "It connects to the backend",
      ],
      correctAnswer: "It identifies which items have changed",
    },
  ];

  const questions = reactTest
    ? reactQuestions
    : mysqlTest
    ? mysqlQuestions
    : [];
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
