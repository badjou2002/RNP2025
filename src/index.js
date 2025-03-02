import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Import correct pour React 18
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './assets/scss/style.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
