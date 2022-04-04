import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const books = [
  {
    title: "javascript",
    edition: "5th Edition",
    author: "john doe",
  },
  {
    title: "java",
    edition: "7th Edition",
    author: "safras",
  },
  {
    title: "python",
    edition: "6th Edition",
    author: "safras",
  },
  {
    title: "Node JS",
    edition: "10th Edition",
    author: "john doe",
  },
  {
    title: "React JS",
    edition: "3rd Edition",
    author: "safras",
  },
  {
    title: "golang",
    edition: "5th Edition",
    author: "john doe",
  },
  {
    title: "c#",
    edition: "2nd Edition",
    author: "smith",
  },
  {
    title: "c++",
    edition: "1st Edition",
    author: "john doe",
  },
  {
    title: "php",
    edition: "5th Edition",
    author: "john doe",
  },
  {
    title: "express JS",
    edition: "5th Edition",
    author: "john doe",
  },
];

const BookList = () => {
  return (
    <div style={{ padding: "10px" }}>
      {books.map((item, index) => {
        return <Book key={index} {...item} />;
      })}
    </div>
  );
};

const Book = ({ title, author, edition }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "#000000",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>{title}</h4>
      <p>{author}</p>
      <p>{edition}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
