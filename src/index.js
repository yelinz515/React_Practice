import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // reportWebVitals() 사용해야 import 된다.

// const user = {
//   firstName: "HTML",
//   lastName: "JSX Activity"
// };

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const heading = document.createElement("h1");
// heading.textContent = `Hello, ${formatName(user)}`;
// document.body.appendChild(heading);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);