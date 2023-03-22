import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game.js';

function app() {
    ReactDOM.render(<canvas onLoad={Game}></canvas>, document.body);
}

app()