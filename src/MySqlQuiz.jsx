import React from "react";

const MySqlQuiz = () => {
  const questions = [
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
      question:
        "Which keyword is used to sort the result set in ascending order?",
      options: ["SORT", "ORDER", "ORDER BY", "SORT BY"],
      correctAnswer: "ORDER BY",
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

  return <div>
    
  </div>;
};

export default MySqlQuiz;
