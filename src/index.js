import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Randomize a hexcode and set background to it
function random_hex () {
  var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  var hexcode1 = "#";
  var hexcode2 = "#";
  var random_index = 0;

  for(let i = 0 ; i < 6 ; i++) {
      random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode1 += hex_numbers[random_index];
      random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode2 += hex_numbers[random_index];
  }

  document.getElementById("change").style.backgroundImage = 'linear-gradient(' + hexcode1 + ', ' + hexcode2 + ')';
  document.getElementsByClassName("header")[0].style.backgroundColor = hexcode1; 
  document.getElementsByClassName("footer")[0].style.backgroundColor = hexcode2; 
};

