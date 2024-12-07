import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter}  from 'react-router-dom' 
import Context from "./Context/Context.jsx";
import ThemeProvider from './Components/ThemeProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Context>
      <ThemeProvider/>
    </Context>
    </BrowserRouter>
  </React.StrictMode>
);

