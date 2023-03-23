import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game.js';

function app() {
    ReactDOM.render(<body onLoad={Game}></body>, document.body);
}

app()