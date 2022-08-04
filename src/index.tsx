import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const element  =  <h1>Hi</h1>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
   {element}
  </React.StrictMode>
);
