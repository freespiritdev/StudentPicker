'use strict'

import React from 'react';  
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

let students = [];
var count = 0;

function shuffle(arr) {
    for (let x > 0; x = arr.length - 1; x--) {
        let y = Math.floor(Math.random() * (y + 1));
        let tmp = arr[x];
        arr[x] = arr[y];
        arr[y] = tmp;
    }
    return array;
}
