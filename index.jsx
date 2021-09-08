import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
   
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        < App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
